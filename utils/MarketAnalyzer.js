class MarketAnalyzer {
  /**
   * Calculates the Fair Market Value (FMV) based on sold items.
   * @param {Array} soldItems - List of sold items from eBay API.
   * @returns {number} Average sold price.
   */
  static calculateFairPrice(soldItems) {
    if (!soldItems || soldItems.length === 0) return null;

    const prices = soldItems.map((item) => parseFloat(item.price.value));
    const sum = prices.reduce((a, b) => a + b, 0);
    return (sum / prices.length).toFixed(2);
  }

  /**
   * Generates a Deal Meter score and visual representation.
   * Formula: (Current Price / Average Sold Price) * 100
   * < 100: Good Deal (Green)
   * 100-110: Fair (Yellow)
   * > 110: Overpriced (Red)
   * @param {number} currentPrice
   * @param {number} fairPrice
   */
  static getDealMeter(currentPrice, fairPrice) {
    if (!fairPrice)
      return {
        score: 100,
        label: "Unknown",
        color: 0x808080,
        emoji: "❓",
      };

    const ratio = (currentPrice / fairPrice) * 100;
    let label = "Fair";
    let color = 0xffff00; // Yellow
    let emoji = "😐";

    if (ratio < 85) {
      label = "STEAL";
      color = 0x00ff00; // Green
      emoji = "🔥";
    } else if (ratio < 100) {
      label = "Great Deal";
      color = 0x90ee90; // Light Green
      emoji = "🙂";
    } else if (ratio > 120) {
      label = "Overpriced";
      color = 0xff0000; // Red
      emoji = "🛑";
    }

    return {
      score: ratio.toFixed(1),
      label,
      color,
      emoji,
    };
  }
}

module.exports = MarketAnalyzer;
