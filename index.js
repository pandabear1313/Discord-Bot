require('dotenv').config();
const { Client, GatewayIntentBits, Collection, REST, Routes, ActivityType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
const DB = require('./utils/Database');
const { searchItems, getSoldItems } = require('./utils/ebay');
const MarketAnalyzer = require('./utils/MarketAnalyzer');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// Load Commands
const foldersPath = path.join(__dirname, 'commands');
let commandFiles = [];
if (fs.existsSync(foldersPath)) {
    commandFiles = fs.readdirSync(foldersPath).filter(file => file.endsWith('.js'));
}
for (const file of commandFiles) {
    const filePath = path.join(foldersPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('eBay', { type: ActivityType.Watching });

    // Notify startup
    const channel = client.channels.cache.find(c => c.type === 0 && c.permissionsFor(client.user).has('SendMessages'));
    if (channel) {
        const embed = new EmbedBuilder()
            .setTitle('🟢 Bot Online')
            .setDescription('I have restarted and am watching eBay! 🛒\nUse `/help` to see commands.')
            .setColor(0x00FF00);
        channel.send({ embeds: [embed] }).catch(console.error);
    }

    // Register commands
    (async () => {
        try {
            console.log(`Started refreshing ${client.commands.size} application (/) commands.`);
            const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
            const clientId = client.user.id;
            
            // First, delete ALL existing commands to force a full refresh
            const existingCommands = await rest.get(Routes.applicationCommands(clientId));
            console.log(`Found ${existingCommands.length} existing commands`);
            
            for (const cmd of existingCommands) {
                await rest.delete(Routes.applicationCommand(clientId, cmd.id));
            }
            console.log('Deleted all existing commands');
            
            // Now re-register fresh
            const data = await rest.put(
                Routes.applicationCommands(clientId),
                { body: client.commands.map(c => c.data.toJSON()) },
            );
            console.log(`Successfully registered ${data.length} commands`);
        } catch (error) {
            console.error(error);
        }
    })();

    // Start background task
    const { startMonitoring } = require('./utils/monitor');
    startMonitoring(client);
});

// Unified Interaction Handler
client.on('interactionCreate', async interaction => {
    console.log(`Interaction: ${interaction.type} | ID/Name: ${interaction.commandName || interaction.customId}`);

    // --- Chat Input Commands ---
    if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error('Command Error:', error);
            try {
                const reply = { content: 'There was an error while executing this command!', ephemeral: true };
                if (interaction.replied || interaction.deferred) await interaction.followUp(reply);
                else await interaction.reply(reply);
            } catch (err) {
                // Ignore errors if we can't reply (interaction likely expired)
                console.error('Could not send error response:', err.message);
            }
        }
        return;
    }

    // --- Modals ---
    if (interaction.isModalSubmit()) {
        if (interaction.customId.startsWith('bid_modal_')) {
            const itemId = interaction.customId.replace('bid_modal_', '');
            const amount = interaction.fields.getTextInputValue('bidAmount');
            const notes = interaction.fields.getTextInputValue('bidNotes');
            try {
                DB.addBid({ itemId, userId: interaction.user.id, maxBid: parseFloat(amount), notes });
                await interaction.reply({ content: `✅ **Bid Placed!**\nAuto-bid up to **$${amount}** for item \`${itemId}\`.`, ephemeral: true });
            } catch (e) {
                console.error(e);
                await interaction.reply({ content: 'Failed to place bid.', ephemeral: true });
            }
        }
    }

    // --- Buttons ---
    else if (interaction.isButton()) {
        const id = interaction.customId;
        if (id.startsWith('monitor_add_')) {
            const query = id.replace('monitor_add_', '');
            try {
                DB.addMonitor({ query, maxPrice: null, channelId: interaction.channelId, userId: interaction.user.id, condition: 'Any' });
                await interaction.reply({ content: `✅ Now monitoring **${query}**!`, ephemeral: true });
            } catch (err) {
                await interaction.reply({ content: `⚠️ Already monitoring **${query}** here!`, ephemeral: true });
            }
        }
        else if (id === 'prev_page' || id === 'next_page') {
            await interaction.reply({ content: "Please run `/watchlist` again to refresh view.", ephemeral: true });
        }
        else if (id.startsWith('trade_')) {
            const [action, type, targetId, initiatorId] = id.split('_');
            if (interaction.user.id !== targetId) {
                await interaction.reply({ content: 'This proposal is not for you!', ephemeral: true });
                return;
            }
            if (type === 'accept') {
                try {
                    const thread = await interaction.channel.threads.create({
                        name: `Trade-${interaction.user.username}`,
                        autoArchiveDuration: 60,
                        reason: 'Trade negotiation'
                    });
                    await thread.members.add(targetId);
                    await thread.members.add(initiatorId);
                    await thread.send(`Trade started between <@${targetId}> and <@${initiatorId}>.`);
                    await interaction.update({ content: `✅ Accepted! Thread: <#${thread.id}>`, components: [] });
                } catch (e) {
                    await interaction.reply('Failed to create thread.');
                }
            } else if (type === 'decline') {
                await interaction.update({ content: `❌ Declined.`, components: [] });
            }
        }
    }

    // --- Select Menus ---
    else if (interaction.isStringSelectMenu()) {
        if (interaction.customId.startsWith('monitor_filter_')) {
            const query = interaction.customId.replace('monitor_filter_', '');
            const condition = interaction.values[0];
            await interaction.deferUpdate();

            let filter = null;
            if (condition === 'new') filter = 'conditionIds:{1000}';
            if (condition === 'used') filter = 'conditionIds:{3000}';

            try {
                const [currentItems, soldItems] = await Promise.all([
                    searchItems(query, 1, filter),
                    getSoldItems(query)
                ]);

                if (currentItems.length > 0) {
                    const topItem = currentItems[0];
                    const fairPrice = MarketAnalyzer.calculateFairPrice(soldItems);
                    const deal = MarketAnalyzer.getDealMeter(parseFloat(topItem.price.value), fairPrice);

                    const embed = new EmbedBuilder(interaction.message.embeds[0].data);
                    embed.setDescription(`**Filter: ${condition.toUpperCase()}**`);
                    embed.setFields(
                        { name: 'Top Listing', value: `[${topItem.title}](${topItem.itemWebUrl})` },
                        { name: 'Price', value: `${topItem.price.value} ${topItem.price.currency}`, inline: true },
                        { name: 'Fair Market Value', value: `$${fairPrice}`, inline: true },
                        { name: 'Deal Meter', value: `${deal.bar} ${deal.score}% \n${deal.emoji} **${deal.label}**` }
                    );
                    embed.setColor(deal.color);
                    await interaction.editReply({ embeds: [embed] });
                } else {
                    await interaction.followUp({ content: 'No items found with that condition.', ephemeral: true });
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
