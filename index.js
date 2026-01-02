require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  Collection,
  REST,
  Routes,
  ActivityType,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const DB = require("./utils/Database");
const { searchItems, getSoldItems, normalizeItemId } = require("./utils/ebay");
const MarketAnalyzer = require("./utils/MarketAnalyzer");

// Start ngrok automatically
let ngrokProcess = null;
const ngrokPath = path.join(
  __dirname,
  "ngrok-v3-stable-windows-amd64",
  "ngrok.exe"
);
if (fs.existsSync(ngrokPath)) {
  console.log("🌐 Starting ngrok tunnel...");

  // Configure authtoken if provided
  if (process.env.NGROK_AUTHTOKEN) {
    const { execSync } = require("child_process");
    try {
      execSync(
        `"${ngrokPath}" config add-authtoken ${process.env.NGROK_AUTHTOKEN}`,
        {
          cwd: path.dirname(ngrokPath),
          stdio: "pipe",
        }
      );
      console.log("✅ ngrok authtoken configured");
    } catch (err) {
      console.log(
        "⚠️  ngrok authtoken already configured or failed:",
        err.message
      );
    }
  }

  ngrokProcess = spawn(ngrokPath, ["http", "3000"], {
    cwd: path.dirname(ngrokPath),
    detached: false,
  });

  ngrokProcess.stdout.on("data", (data) => {
    const output = data.toString();
    console.log("ngrok:", output.trim());
    if (output.includes("started tunnel") || output.includes("url=")) {
      console.log("✅ ngrok tunnel started");
    }
  });

  ngrokProcess.stderr.on("data", (data) => {
    const output = data.toString();
    if (output.includes("url=") || output.includes("ngrok")) {
      console.log("ngrok:", output.trim());
    }
  });

  ngrokProcess.on("error", (err) => {
    console.error("⚠️  ngrok failed to start:", err.message);
  });

  // Fetch ngrok URL from API after a short delay
  setTimeout(async () => {
    try {
      const response = await fetch("http://127.0.0.1:4040/api/tunnels");
      const data = await response.json();
      if (data.tunnels && data.tunnels.length > 0) {
        const publicUrl = data.tunnels[0].public_url;
        console.log("\n🌐 ============================================");
        console.log(`🔗 ngrok URL: ${publicUrl}`);
        console.log("🌐 ============================================\n");
        console.log("💡 Update your .env file with:");
        console.log(`   EBAY_RU_NAME=${publicUrl}/auth/ebay/callback`);
        console.log(`   EBAY_REDIRECT_URI=${publicUrl}/auth/ebay/callback\n`);
      }
    } catch (err) {
      console.log(
        "⚠️  Couldn't fetch ngrok URL. Visit http://localhost:4040 to see it."
      );
    }
  }, 3000);
} else {
  console.log("⚠️  ngrok.exe not found, skipping tunnel startup");
}

// Single instance lock
const lockFile = path.join(__dirname, ".bot.lock");

// Check if another instance is running
if (fs.existsSync(lockFile)) {
  try {
    const pid = fs.readFileSync(lockFile, "utf8").trim();
    // Try to check if process still exists (Windows-compatible)
    try {
      process.kill(pid, 0); // Signal 0 checks existence without killing
      console.error(`❌ Bot is already running (PID: ${pid})`);
      console.error(
        "Stop the existing instance first or delete .bot.lock if stale."
      );
      process.exit(1);
    } catch (e) {
      // Process doesn't exist, lock file is stale
      console.log("Removing stale lock file...");
      fs.unlinkSync(lockFile);
    }
  } catch (e) {
    console.log("Removing invalid lock file...");
    fs.unlinkSync(lockFile);
  }
}

// Create lock file with current PID
fs.writeFileSync(lockFile, process.pid.toString());
console.log(`🔒 Instance lock created (PID: ${process.pid})`);

// Clean up lock file on exit
const cleanup = () => {
  try {
    if (fs.existsSync(lockFile)) {
      fs.unlinkSync(lockFile);
      console.log("🔓 Instance lock removed");
    }
    // Kill ngrok process
    if (ngrokProcess && !ngrokProcess.killed) {
      ngrokProcess.kill();
      console.log("🌐 ngrok tunnel stopped");
    }
  } catch (e) {
    // Ignore cleanup errors
  }
};

process.on("exit", cleanup);
process.on("SIGINT", () => {
  console.log("\n⏹️  Shutting down...");
  cleanup();
  process.exit(0);
});
process.on("SIGTERM", () => {
  cleanup();
  process.exit(0);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  cleanup();
  process.exit(1);
});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

// Load Commands
const foldersPath = path.join(__dirname, "commands");
let commandFiles = [];
if (fs.existsSync(foldersPath)) {
  commandFiles = fs
    .readdirSync(foldersPath)
    .filter((file) => file.endsWith(".js"));
}
for (const file of commandFiles) {
  const filePath = path.join(foldersPath, file);
  const command = require(filePath);
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("Naruto", { type: ActivityType.Listening });

  // Notify startup
  const channel = client.channels.cache.find(
    (c) => c.type === 0 && c.permissionsFor(client.user).has("SendMessages")
  );
  if (channel) {
    const embed = new EmbedBuilder()
      .setTitle("🟢 Bot Online")
      .setDescription(
        "I have restarted and am watching eBay! 🛒\nUse `/help` to see commands."
      )
      .setColor(0x00ff00);
    channel.send({ embeds: [embed] }).catch(console.error);
  }

  // Register commands
  (async () => {
    try {
      console.log(
        `Started refreshing ${client.commands.size} application (/) commands.`
      );
      const rest = new REST({ version: "10" }).setToken(
        process.env.DISCORD_TOKEN
      );
      const clientId = client.user.id;
      const body = client.commands.map((c) => c.data.toJSON());

      const guildId = process.env.DEV_GUILD_ID; // set this in .env for fast dev
      if (guildId) {
        const data = await rest.put(
          Routes.applicationGuildCommands(clientId, guildId),
          { body }
        );
        console.log(`Registered ${data.length} guild commands to ${guildId}`);
      } else {
        // Global overwrite without explicit delete to avoid disappearance window
        const data = await rest.put(Routes.applicationCommands(clientId), {
          body,
        });
        console.log(`Registered ${data.length} global commands`);
      }
    } catch (error) {
      console.error(error);
    }
  })();

  // Start Auth Server (pass client so callback can DM users)
  const { startServer } = require("./utils/auth_server");
  startServer(client);

  // Migrate legacy JSON saved searches -> SQLite monitors
  (function migrateLegacyMonitors() {
    try {
      const {
        getSavedSearches,
        removeSavedSearch,
      } = require("./utils/tracker");
      const legacy = getSavedSearches();
      if (!legacy || legacy.length === 0) return;

      console.log(
        `Migrating ${legacy.length} legacy saved searches to SQLite...`
      );
      for (const s of legacy) {
        try {
          DB.addMonitor({
            query: s.query,
            maxPrice: null,
            channelId: s.channelId,
            userId: "legacy", // placeholder; avoids NULL constraint
            condition: "Any",
          });
          // Remove from JSON after successful insert to prevent re-migration
          removeSavedSearch(s.query, s.channelId);
          console.log(`Migrated: "${s.query}" -> channel ${s.channelId}`);
        } catch (e) {
          // Ignore duplicates (UNIQUE(query, channel_id))
          console.warn(
            `Skip duplicate or failed insert for "${s.query}" in ${s.channelId}:`,
            e.message
          );
        }
      }
    } catch (e) {
      console.error("Legacy migration failed:", e);
    }
  })();

  // Start background task
  const { startMonitoring } = require("./utils/monitor");
  startMonitoring(client);
});

// Unified Interaction Handler
client.on("interactionCreate", async (interaction) => {
  console.log(
    `Interaction: ${interaction.type} | ID/Name: ${
      interaction.commandName || interaction.customId
    }`
  );

  // --- Chat Input Commands ---
  if (interaction.isChatInputCommand()) {
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return;
    }
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error("Command Error:", error);
      try {
        const reply = {
          content: "There was an error while executing this command!",
          ephemeral: true,
        };
        if (interaction.replied || interaction.deferred)
          await interaction.followUp(reply);
        else await interaction.reply(reply);
      } catch (err) {
        // Ignore errors if we can't reply (interaction likely expired)
        console.error("Could not send error response:", err.message);
      }
    }
    return;
  }

  // --- Modals ---
  if (interaction.isModalSubmit()) {
    if (interaction.customId.startsWith("bid_modal_")) {
      // Acknowledge the modal once to avoid double-reply errors
      try {
        await interaction.deferReply({ ephemeral: true });
      } catch (_) {
        // If already acknowledged elsewhere, continue gracefully
      }
      const itemId = interaction.customId.replace("bid_modal_", "");
      const normItemId = normalizeItemId(itemId);
      const amount = parseFloat(
        interaction.fields.getTextInputValue("bidAmount")
      );
      const notes = interaction.fields.getTextInputValue("bidNotes");

      // Internal tracker (real bidding requires eBay API certification)
      const msg = `📊 **Bid Tracker Updated**\n\n✅ Tracking your max bid of **$${amount}** for this item.\n\n💡 **How it works:**\n• You'll get alerts when you're outbid\n• Monitor auction status in real-time\n• Track multiple bids across items\n\n⚠️ **To place actual bids:** Visit the item on eBay\n\n_Real bidding requires eBay API certification. Apply at developer.ebay.com if interested._`;

      try {
        // Add to local DB for tracking/notifications
        DB.addBid({
          itemId: normItemId,
          userId: interaction.user.id,
          maxBid: amount,
          notes,
          status: "active",
        });
        // Edit the deferred reply to avoid "already acknowledged" errors
        await interaction.editReply({ content: msg });
      } catch (e) {
        console.error(e);
        try {
          await interaction.editReply({ content: "Failed to save bid." });
        } catch (_) {
          // As a fallback if not deferred/replied, attempt a follow-up
          try {
            await interaction.followUp({
              content: "Failed to save bid.",
              ephemeral: true,
            });
          } catch (err2) {
            console.error("Could not send error response:", err2.message);
          }
        }
      }
    }
  }

  // --- Buttons ---
  else if (interaction.isButton()) {
    const id = interaction.customId;
    if (id.startsWith("monitor_add_")) {
      const parts = id.replace("monitor_add_", "").split("_");
      const typeFilter = parts.pop(); // Last part is the type
      const query = parts.join("_"); // Rest is the query

      try {
        DB.addMonitor({
          query,
          maxPrice: null,
          channelId: interaction.channelId,
          userId: interaction.user.id,
          condition: "Any",
          listingType: typeFilter, // Save the type: all, auction, or buy_it_now
        });
        await interaction.reply({
          content: `✅ Now monitoring **${query}** (${
            typeFilter === "all"
              ? "All"
              : typeFilter === "auction"
              ? "Auctions"
              : "Buy It Now"
          })!`,
          ephemeral: true,
        });
      } catch (err) {
        await interaction.reply({
          content: `⚠️ Already monitoring **${query}** here!`,
          ephemeral: true,
        });
      }
    } else if (id.startsWith("watch_")) {
      const itemId = id.replace("watch_", "");
      const success = DB.addWatch(interaction.user.id, itemId);
      if (success) {
        await interaction.reply({
          content: `✅ added to your **Watchlist**! I'll DM you if the price changes.`,
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: `ℹ️ You are already watching this item!`,
          ephemeral: true,
        });
      }
    } else if (id === "prev_page" || id === "next_page") {
      await interaction.reply({
        content: "Please run `/watchlist` again to refresh view.",
        ephemeral: true,
      });
    } else if (id.startsWith("trade_")) {
      const [action, type, targetId, initiatorId] = id.split("_");
      if (interaction.user.id !== targetId) {
        await interaction.reply({
          content: "This proposal is not for you!",
          ephemeral: true,
        });
        return;
      }
      if (type === "accept") {
        try {
          const thread = await interaction.channel.threads.create({
            name: `Trade-${interaction.user.username}`,
            autoArchiveDuration: 60,
            reason: "Trade negotiation",
          });
          await thread.members.add(targetId);
          await thread.members.add(initiatorId);
          await thread.send(
            `Trade started between <@${targetId}> and <@${initiatorId}>.`
          );
          await interaction.update({
            content: `✅ Accepted! Thread: <#${thread.id}>`,
            components: [],
          });
        } catch (e) {
          await interaction.reply("Failed to create thread.");
        }
      } else if (type === "decline") {
        await interaction.update({ content: `❌ Declined.`, components: [] });
      }
    }
  }

  // --- Select Menus ---
  else if (interaction.isStringSelectMenu()) {
    if (interaction.customId.startsWith("monitor_filter_")) {
      const query = interaction.customId.replace("monitor_filter_", "");
      const condition = interaction.values[0];
      await interaction.deferUpdate();

      let filter = null;
      if (condition === "new") filter = "conditionIds:{1000}";
      if (condition === "used") filter = "conditionIds:{3000}";

      try {
        const [currentItems, soldItems] = await Promise.all([
          searchItems(query, 1, filter),
          getSoldItems(query),
        ]);

        if (currentItems.length > 0) {
          const topItem = currentItems[0];
          const fairPrice = MarketAnalyzer.calculateFairPrice(soldItems);
          const deal = MarketAnalyzer.getDealMeter(
            parseFloat(topItem.price.value),
            fairPrice
          );

          const embed = new EmbedBuilder(interaction.message.embeds[0].data);
          embed.setDescription(`**Filter: ${condition.toUpperCase()}**`);
          embed.setFields(
            {
              name: "Top Listing",
              value: `[${topItem.title}](${topItem.itemWebUrl})`,
            },
            {
              name: "Price",
              value: `${topItem.price.value} ${topItem.price.currency}`,
              inline: true,
            },
            { name: "Fair Market Value", value: `$${fairPrice}`, inline: true },
            {
              name: "Deal Meter",
              value: `${deal.bar} ${deal.score}% \n${deal.emoji} **${deal.label}**`,
            }
          );
          embed.setColor(deal.color);
          await interaction.editReply({ embeds: [embed] });
        } else {
          await interaction.followUp({
            content: "No items found with that condition.",
            ephemeral: true,
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
