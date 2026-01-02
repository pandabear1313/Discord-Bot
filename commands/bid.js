const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bid')
        .setDescription('Place an automated bid on an item.')
        .addStringOption(option =>
            option.setName('item_id')
                .setDescription('The eBay Item ID')
                .setRequired(true))
        .addNumberOption(option =>
            option.setName('max_bid')
                .setDescription('Your maximum bid amount')
                .setRequired(true)),

    async execute(interaction) {
        // Show Modal
        const link = interaction.options.getString('item_id');
        const amount = interaction.options.getNumber('max_bid');

        const modal = new ModalBuilder()
            .setCustomId(`bid_modal_${link}`)
            .setTitle('Confirm Automated Bid');

        const amountInput = new TextInputBuilder()
            .setCustomId('bidAmount')
            .setLabel("Confirm Max Bid Amount")
            .setValue(amount.toString()) // Pre-filled
            .setStyle(TextInputStyle.Short);

        const notesInput = new TextInputBuilder()
            .setCustomId('bidNotes')
            .setLabel("Notes (Optional)")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(false);

        const firstActionRow = new ActionRowBuilder().addComponents(amountInput);
        const secondActionRow = new ActionRowBuilder().addComponents(notesInput);

        modal.addComponents(firstActionRow, secondActionRow);

        await interaction.showModal(modal);
    },
};
