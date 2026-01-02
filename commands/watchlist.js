const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const DB = require('../utils/Database');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('watchlist')
        .setDescription('View your active monitors and bids.'),

    async execute(interaction) {
        const monitors = DB.getMonitors();
        // Filter for this user/channel?
        // Let's filter by channel for public bot context
        const pageItems = monitors.filter(m => m.channel_id === interaction.channelId);

        if (pageItems.length === 0) {
            await interaction.reply({ content: 'No active monitors in this channel use `/monitor [query]` to add one.', ephemeral: true });
            return;
        }

        const pageSize = 5;
        const totalPages = Math.ceil(pageItems.length / pageSize);
        const currentPage = 0; // Start at 0

        const generateEmbed = (page) => {
            const start = page * pageSize;
            const current = pageItems.slice(start, start + pageSize);

            return new EmbedBuilder()
                .setTitle(`📺 Watchlist (Page ${page + 1}/${totalPages})`)
                .setDescription(current.map((m, i) => `**${start + i + 1}. ${m.query}** (Cond: ${m.condition})`).join('\n'))
                .setColor(0x0099FF);
        };

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('prev_page')
                    .setLabel('Previous')
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true), // First page
                new ButtonBuilder()
                    .setCustomId('next_page')
                    .setLabel('Next')
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(totalPages <= 1)
            );

        const response = await interaction.reply({
            embeds: [generateEmbed(0)],
            components: [row],
            fetchReply: true
        });

        // Store pagination state or handle in event handler (cleaner)
        // For simplicity in a single-file command prototype, using collector here is common,
        // BUT for a "Master Bot", we should use a stateless approach via CustomID encoding
        // E.g., customId: `watchlist_page_1`
        // However, I will leave the Button IDs generic and let the InteractionHandler manage it?
        // Actually, the requirements asked for "architecture", so moving events to `events/` is key.
        // I will write the basic collector here for simplicity or updated index.js. 
        // Given constraints, I'll update index.js to handle these generic interactions properly.
    },
};
