const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const process = require("process");
const path = require("path");
const { spawn } = require("child_process");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("restart")
    .setDescription("Restart the bot process")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),
  async execute(interaction) {
    const ownerId = process.env.BOT_OWNER_ID;
    const isOwner = ownerId && interaction.user.id === ownerId;
    const isAdmin = interaction.memberPermissions?.has(
      PermissionFlagsBits.Administrator
    );

    if (!isOwner && !isAdmin) {
      await interaction.reply({
        content: "You don't have permission to restart the bot.",
        ephemeral: true,
      });
      return;
    }

    try {
      await interaction.reply({ content: "♻️ Restarting…", ephemeral: true });
    } catch (e) {
      // ignore if already replied
    }

    // Determine restart strategy
    const isPM2 = !!process.env.pm_id || !!process.env.PM2_HOME;
    const mode = (
      process.env.RESTART_MODE || (isPM2 ? "exit" : "spawn")
    ).toLowerCase();

    if (mode === "spawn") {
      // Self-respawn: start a detached child then exit current process
      const scriptPath = path.join(__dirname, "..", "index.js");
      const cwd = path.join(__dirname, "..");
      try {
        const child = spawn(process.execPath, [scriptPath], {
          cwd,
          env: process.env,
          detached: true,
          stdio: "ignore",
        });
        child.unref();
      } catch (err) {
        // If spawn fails, fall back to exit-only
        console.error("Restart spawn failed:", err.message);
      }
    }

    // Give Discord a moment to send the acknowledgement before exiting
    setTimeout(() => {
      process.exit(0);
    }, 1000);
  },
};
