const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows all available commands."),
  async execute(interaction) {
    console.log("Help Command Executing...");
    const commands = interaction.client.commands;
    console.log("Total commands found:", commands.size);

    const embed = new EmbedBuilder()
      .setTitle("🤖 Bot Commands")
      .setDescription("Here is a list of commands you can use:")
      .setColor(0x0099ff);

    // Sort commands alphabetically and filter out invalid ones
    const sortedCommands = [...commands.values()]
      .filter((cmd) => cmd.data && cmd.data.name)
      .sort((a, b) => a.data.name.localeCompare(b.data.name));

    console.log("Filtered commands:", sortedCommands.length);

    sortedCommands.forEach((cmd) => {
      embed.addFields({
        name: `/${cmd.data.name}`,
        value: cmd.data.description || "No description provided.",
        inline: false,
      });
    });

    await interaction.reply({ embeds: [embed] });
  },
};
