const { SlashCommandBuilder } = require("discord.js");
const DB = require("../utils/Database");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("logins")
    .setDescription("Show users with active eBay logins (debug)."),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    try {
      const users = DB.getLoggedInUsers();
      if (!users || users.length === 0) {
        await interaction.editReply("🔐 No logged-in users detected.");
        return;
      }
      const lines = users
        .slice(0, 10)
        .map((u) => `- <@${u.discord_id}> (expires ${u.token_expiry})`);
      const extra =
        users.length > 10 ? `\n...and ${users.length - 10} more` : "";
      await interaction.editReply(
        `🔐 Logged-in users: ${users.length}\n${lines.join("\n")}${extra}`
      );
    } catch (e) {
      console.error("Logins command error:", e);
      await interaction.editReply("Failed to fetch login status.");
    }
  },
};
