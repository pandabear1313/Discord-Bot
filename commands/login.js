const { SlashCommandBuilder } = require("discord.js");
const { getLoginUrl } = require("../utils/ebay");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("login")
    .setDescription("Log in to eBay to enable real bidding."),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    // Debug: log who initiated login and basic env status (no secrets)
    try {
      const ruNameSet = !!(process.env.EBAY_RU_NAME || "").trim();
      const appIdLen = (process.env.EBAY_APP_ID || "").trim().length;
      console.log(
        `[LOGIN] Request by user=${interaction.user.id} guild=${
          interaction.guildId
        } channel=${interaction.channelId} | EBAY_RU_NAME=${
          ruNameSet ? "set" : "missing"
        } EBAY_APP_ID.len=${appIdLen}`
      );
    } catch (e) {
      console.warn("[LOGIN] Preflight debug log failed:", e.message);
    }

    try {
      // Pass User ID as state to link token to user
      const url = await getLoginUrl(interaction.user.id);

      // Debug: confirm URL generated
      console.log(
        `[LOGIN] Login URL generated for user=${interaction.user.id} len=${url.length}`
      );

      await interaction.editReply({
        content: `👋 **Click below to login to eBay:**\n\n[**Link eBay Account**](${url})\n\nThis will allow the bot to place bids on your behalf. The link expires in a few minutes.`,
      });
    } catch (error) {
      console.error(error);
      await interaction.editReply("Failed to generate login URL.");
    }
  },
};
