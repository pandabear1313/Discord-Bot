const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
const { searchItems, getSoldItems } = require("../utils/ebay");
const MarketAnalyzer = require("../utils/MarketAnalyzer");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("monitor")
    .setDescription("Analyze market for a item and start tracking.")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription('Item to search for (e.g., "RTX 3080")')
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("Filter by listing type")
        .setRequired(false)
        .addChoices(
          { name: "All (Auction + Buy It Now)", value: "all" },
          { name: "Auction Only", value: "auction" },
          { name: "Buy It Now Only", value: "buy_it_now" }
        )
    ),

  async execute(interaction) {
    console.log("Monitor Command Executing...");
    await interaction.deferReply();
    console.log("Monitor: Deferred.");

    const query = interaction.options.getString("query");
    const typeFilter = interaction.options.getString("type") || "all";
    console.log(
      `Monitor: Querying "${query}" with type filter: ${typeFilter}...`
    );

    // 1. Get Market Data
    try {
      // Build filter based on type selection
      let filter = "";
      if (typeFilter === "auction") {
        filter = "buyingOptions:{AUCTION}";
      } else if (typeFilter === "buy_it_now") {
        filter = "buyingOptions:{FIXED_PRICE}";
      } else {
        // Default: show both
        filter = "buyingOptions:{AUCTION,FIXED_PRICE}";
      }

      const [currentItems, soldItems] = await Promise.all([
        searchItems(query, 20, filter),
        getSoldItems(query),
      ]);
      console.log(
        `Monitor: Found ${currentItems.length} current, ${soldItems.length} sold.`
      );
      console.log(`Monitor: Using filter: "${filter}"`);

      // Debug: log first few items and their buying options
      if (currentItems.length > 0) {
        console.log("First 3 items:");
        currentItems.slice(0, 3).forEach((item, i) => {
          console.log(`  ${i + 1}. ${item.title?.substring(0, 50)}...`);
          console.log(
            `     buyingOptions: ${item.buyingOptions?.join(", ") || "N/A"}`
          );
          console.log(`     itemEndDate: ${item.itemEndDate || "N/A"}`);
          console.log(`     price: ${item.price?.value || "N/A"}`);
        });
      }

      if (currentItems.length === 0) {
        await interaction.editReply(`No listings found for "**${query}**".`);
        return;
      }

      // Find first item with valid price
      let topItem = null;
      for (const item of currentItems) {
        if (item.price && item.price.value) {
          topItem = item;
          break;
        }
      }

      // Validate item structure
      if (!topItem || !topItem.price || !topItem.price.value) {
        console.error("Monitor: No items with valid pricing found");
        console.error("Sample item:", JSON.stringify(currentItems[0], null, 2));
        await interaction.editReply(
          `Could not find items with valid pricing for "**${query}**". Try a different search term.`
        );
        return;
      }

      const currentPrice = parseFloat(topItem.price.value);
      const fairPrice = MarketAnalyzer.calculateFairPrice(
        soldItems.length > 0 ? soldItems : currentItems
      );

      const deal = MarketAnalyzer.getDealMeter(currentPrice, fairPrice);

      // Validate fair price was calculated
      if (!fairPrice) {
        console.error("Monitor: Could not calculate fair price");
        await interaction.editReply(
          `Could not analyze market data for "**${query}**". Try again later.`
        );
        return;
      }

      // Format item type and end time for top item
      let itemType = "Buy It Now";
      let endTimeInfo = "";

      if (topItem.itemEndDate) {
        itemType = "Auction";
        const endDate = new Date(topItem.itemEndDate);
        const now = new Date();
        const timeLeft = endDate - now;

        if (timeLeft > 0) {
          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const days = Math.floor(hours / 24);
          if (days > 0) {
            endTimeInfo = `Ends in ${days}d ${hours % 24}h`;
          } else {
            endTimeInfo = `Ends in ${hours}h`;
          }
        } else {
          endTimeInfo = "Ended";
        }
      }

      // 2. Build Embed
      const embed = new EmbedBuilder()
        .setTitle(`🔎 Market Analysis: ${query}`)
        .setThumbnail(topItem.image ? topItem.image.imageUrl : null)
        .addFields(
          {
            name: "Top Listing",
            value: `[${topItem.title}](${topItem.itemWebUrl})`,
          },
          {
            name: "Type",
            value: itemType,
            inline: true,
          },
          {
            name: "Price",
            value: `${topItem.price.value} ${topItem.price.currency}`,
            inline: true,
          },
          {
            name: endTimeInfo ? "Auction Ends" : "‎",
            value: endTimeInfo || "‎",
            inline: true,
          },
          { name: "Fair Market Value", value: `$${fairPrice}`, inline: false },
          {
            name: "Deal Meter",
            value: `${deal.bar} ${deal.score}% \n${deal.emoji} **${deal.label}**`,
          }
        )
        .setColor(deal.color)
        .setFooter({ text: "Select condition to refine analysis" });

      // 3. Components
      const select = new StringSelectMenuBuilder()
        .setCustomId(`monitor_filter_${query.substring(0, 20)}`) // Encode query in ID for statelessness
        .setPlaceholder("Filter by Condition")
        .addOptions(
          new StringSelectMenuOptionBuilder().setLabel("Any").setValue("any"),
          new StringSelectMenuOptionBuilder().setLabel("New").setValue("new"),
          new StringSelectMenuOptionBuilder().setLabel("Used").setValue("used")
        );

      const btn = new ButtonBuilder()
        .setCustomId(`monitor_add_${query.substring(0, 15)}_${typeFilter}`)
        .setLabel("Add to Watchlist")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("📺");

      const row1 = new ActionRowBuilder().addComponents(select);
      const row2 = new ActionRowBuilder().addComponents(btn);

      await interaction.editReply({
        embeds: [embed],
        components: [row1, row2],
      });
    } catch (e) {
      console.error("Monitor Logic Error:", e);
      throw e;
    }
  },
};
