const { SlashCommandBuilder } = require('discord.js');
const DB = require('../utils/Database');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove_watchlist')
        .setDescription('Remove a monitor from your watchlist.')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('The search query of the monitor to remove.')
                .setRequired(true)),
    async execute(interaction) {
        const query = interaction.options.getString('query');
        const channelId = interaction.channelId;

        try {
            const result = DB.removeMonitor(query, channelId);

            if (result.changes > 0) {
                await interaction.reply({ content: `✅ Removed monitor for "**${query}**" from this channel.`, ephemeral: true });
            } else {
                await interaction.reply({ content: `⚠️ Could not find a monitor for "**${query}**" in this channel. connect`, ephemeral: true });
            }
        } catch (error) {
            console.error('Error removing monitor:', error);
            await interaction.reply({ content: '❌ An error occurred while trying to remove the monitor.', ephemeral: true });
        }
    },
};
