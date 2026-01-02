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
    ),

  async execute(interaction) {
    console.log("Monitor Command Executing...");
    await interaction.deferReply();
    console.log("Monitor: Deferred.");

    const query = interaction.options.getString("query");
    console.log(`Monitor: Querying "${query}"...`);

    // 1. Get Market Data
    try {
      const [currentItems, soldItems] = await Promise.all([
        searchItems(query, 5),
        getSoldItems(query),
      ]);
      console.log(
        `Monitor: Found ${currentItems.length} current, ${soldItems.length} sold.`
      );

      if (currentItems.length === 0) {
        await interaction.editReply(`No listings found for "**${query}**".`);
        return;
      }

      const topItem = currentItems[0]; // Best match usually

      // Validate item structure
      if (!topItem.price || !topItem.price.value) {
        console.error("Monitor: Invalid item price structure:", topItem);
        await interaction.editReply(
          `Could not parse pricing data for "**${query}**". Try a different search.`
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
            name: "Price",
            value: `${topItem.price.value} ${topItem.price.currency}`,
            inline: true,
          },
          { name: "Fair Market Value", value: `$${fairPrice}`, inline: true },
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
        .setCustomId(`monitor_add_${query.substring(0, 20)}`)
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
