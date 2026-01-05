const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ram_news")
    .setDescription("Get the latest news about RAM prices and market trends"),
  async execute(interaction) {
    await interaction.deferReply();

    try {
      // Search terms for RAM price news
      const searchTerms = [
        "RAM prices",
        "memory prices",
        "DRAM market",
        "DDR5 prices",
        "computer memory news",
      ];

      // Try NewsAPI if available
      if (process.env.NEWS_API_KEY) {
        try {
          const response = await axios.get(
            "https://newsapi.org/v2/everything",
            {
              params: {
                q: "RAM prices OR memory prices OR DRAM",
                language: "en",
                sortBy: "publishedAt",
                pageSize: 5,
                apiKey: process.env.NEWS_API_KEY,
              },
            }
          );

          if (response.data.articles && response.data.articles.length > 0) {
            const embed = new EmbedBuilder()
              .setTitle("💾 Latest RAM Price News")
              .setColor(0x00ff00)
              .setTimestamp();

            response.data.articles.slice(0, 5).forEach((article, index) => {
              const date = new Date(article.publishedAt).toLocaleDateString();
              embed.addFields({
                name: `${index + 1}. ${article.title}`,
                value: `${
                  article.description || "No description available"
                }\n📅 ${date} | 🔗 [Read More](${article.url})`,
                inline: false,
              });
            });

            embed.setFooter({
              text: "Powered by NewsAPI | Data may be delayed",
            });

            return await interaction.editReply({ embeds: [embed] });
          }
        } catch (apiError) {
          console.error("NewsAPI error:", apiError.message);
        }
      }

      // Fallback: Provide general RAM market information
      const embed = new EmbedBuilder()
        .setTitle("💾 RAM Price News")
        .setDescription(
          "To get live news updates, add a NEWS_API_KEY to your .env file.\nGet a free API key at: https://newsapi.org"
        )
        .setColor(0xffaa00)
        .addFields(
          {
            name: "📊 Current Market Trends",
            value:
              "Monitor RAM prices on major retailers:\n• [Amazon - DDR5](https://www.amazon.com/s?k=ddr5+ram)\n• [Newegg - Memory](https://www.newegg.com/Memory/SubCategory/ID-147)\n• [PCPartPicker - RAM](https://pcpartpicker.com/products/memory/)",
            inline: false,
          },
          {
            name: "📰 News Sources",
            value:
              "Check these sites for RAM market news:\n• [Tom's Hardware](https://www.tomshardware.com)\n• [AnandTech](https://www.anandtech.com)\n• [TechPowerUp](https://www.techpowerup.com)",
            inline: false,
          },
          {
            name: "💡 Price Tracking Tips",
            value:
              "• DDR5 prices are generally trending downward\n• DDR4 remains stable and cost-effective\n• Monitor for seasonal sales (Black Friday, Prime Day)\n• Compare $/GB across different capacities",
            inline: false,
          }
        )
        .setFooter({
          text: "Configure NEWS_API_KEY for live updates",
        })
        .setTimestamp();

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error("Error in ram_news command:", error);
      await interaction.editReply({
        content: "❌ An error occurred while fetching RAM news.",
        ephemeral: true,
      });
    }
  },
};
