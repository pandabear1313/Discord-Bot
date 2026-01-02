const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const { searchDDR5RAM } = require('../utils/ebay');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('search_ram')
        .setDescription('Search for DDR5 RAM on eBay and track deals.')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Specific search query (optional)')
                .setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply();

        const query = interaction.options.getString('query') || 'DDR5 RAM';
        const items = await searchDDR5RAM(query);

        if (items.length === 0) {
            await interaction.editReply('No items found for "' + query + '".');
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle(`eBay Search Results: ${query}`)
            .setColor(0x00AE86)
            .setDescription('Select an item from the dropdown below to track it.');

        const options = items.map(item => {
            const price = item.price ? `${item.price.value} ${item.price.currency}` : 'N/A';
            const label = item.title.substring(0, 99); // Limit length
            const description = `Price: ${price} | Ends: ${item.itemEndDate ? new Date(item.itemEndDate).toLocaleDateString() : 'N/A'}`;

            // Add to embed fields (limit to first 5 to avoid clutter)
            if (undefined) {
                // We are just using the select menu for details really, or we can list them.
            }

            return new StringSelectMenuOptionBuilder()
                .setLabel(label)
                .setDescription(description.substring(0, 99))
                .setValue(item.itemId); // We need a unique ID. itemId should be unique.
        });

        // Add fields to embed for visibility
        items.slice(0, 5).forEach((item, index) => {
            const price = item.price ? `${item.price.value} ${item.price.currency}` : 'N/A';
            embed.addFields({ name: `${index + 1}. ${item.title.substring(0, 50)}...`, value: `Price: ${price} \n [Link](${item.itemWebUrl})` });
        });

        const select = new StringSelectMenuBuilder()
            .setCustomId('select_track_item')
            .setPlaceholder('Choose an item to track')
            .addOptions(options.slice(0, 25)); // Max 25 options

        const row = new ActionRowBuilder()
            .addComponents(select);

        await interaction.editReply({ embeds: [embed], components: [row] });

        // Store items temporarily in client or module scope if needed to retrieve details on selection?
        // Or we can just re-fetch or encode details in the value (might be too long).
        // For simplicity, we can fetch details again or cache them.
        // Let's create a temporary cache map on the client for this session/interaction.
        if (!interaction.client.itemCache) interaction.client.itemCache = new Map();
        items.forEach(item => interaction.client.itemCache.set(item.itemId, item));
    },
};
