const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trade')
        .setDescription('Propose a trade or sale to another user.')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The user you want to trade with')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('item')
                .setDescription('What you are selling/trading')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('price')
                .setDescription('Price or trade terms')
                .setRequired(true)),

    async execute(interaction) {
        const targetUser = interaction.options.getUser('target');
        const item = interaction.options.getString('item');
        const price = interaction.options.getString('price');
        const author = interaction.user;

        if (targetUser.id === author.id) {
            await interaction.reply({ content: "You can't trade with yourself!", ephemeral: true });
            return;
        }

        if (targetUser.bot) {
            await interaction.reply({ content: "You can't trade with bots!", ephemeral: true });
            return;
        }

        const embed = new EmbedBuilder()
            .setTitle('🤝 Trade Proposal')
            .setDescription(`<@${author.id}> wants to trade with <@${targetUser.id}>`)
            .addFields(
                { name: 'Item/Service', value: item, inline: true },
                { name: 'Price/Terms', value: price, inline: true }
            )
            .setColor(0x0099FF)
            .setTimestamp();

        // Custom IDs include IDs to verify who clicked what
        const acceptId = `trade_accept_${targetUser.id}_${author.id}`;
        const declineId = `trade_decline_${targetUser.id}_${author.id}`;

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(acceptId)
                    .setLabel('Accept to Discuss')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId(declineId)
                    .setLabel('Decline')
                    .setStyle(ButtonStyle.Danger)
            );

        await interaction.reply({
            content: `Hey <@${targetUser.id}>! You have a new trade proposal.`,
            embeds: [embed],
            components: [row]
        });
    },
};
