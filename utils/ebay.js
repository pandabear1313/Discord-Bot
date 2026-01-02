console.log("Loading utils/ebay.js...");
const eBayApi = require("ebay-api");
console.log("ebay-api loaded.");
console.log(
  "App ID Type:",
  typeof process.env.EBAY_APP_ID,
  "Length:",
  process.env.EBAY_APP_ID ? process.env.EBAY_APP_ID.length : 0
);

const ebay = new eBayApi({
  appId: process.env.EBAY_APP_ID ? process.env.EBAY_APP_ID.trim() : "",
  certId: process.env.EBAY_CLIENT_SECRET
    ? process.env.EBAY_CLIENT_SECRET.trim()
    : "",
  sandbox: false,
});

// Cache token
let tokenTime = 0;
let cachedToken = null;

async function ensureToken() {
  const now = Date.now();
  if (now > tokenTime) {
    try {
      // Use getAccessToken for client credentials flow
      const token = await ebay.auth.OAuth2.getAccessToken();
      cachedToken = token.access_token;
      tokenTime = now + (token.expires_in || 7200) * 1000 - 30000; // Buffer of 30 seconds
      console.log(
        "eBay token acquired, expires in:",
        token.expires_in,
        "seconds"
      );
    } catch (error) {
      console.error("eBay Auth Error:", error);
      throw new Error("eBay Authentication Failed: " + error.message);
    }
  }
}

async function searchItems(query, limit = 10, filter = null) {
  await ensureToken();
  try {
    const params = {
      q: query,
      limit: limit,
    };
    if (filter) {
      params.filter = filter;
    }

    console.log("Searching eBay with params:", JSON.stringify(params));
    const result = await ebay.buy.browse.search(params);
    console.log("eBay Search Result:", {
      total: result.total,
      itemCount: result.itemSummaries ? result.itemSummaries.length : 0,
      hasWarnings: !!result.warnings,
    });

    if (result.warnings) {
      console.log("eBay API Warnings:", result.warnings);
    }

    return result.itemSummaries || [];
  } catch (error) {
    console.error("eBay Search Error:", error.message);
    console.error("Full error:", error);
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response data:", JSON.stringify(error.response.data));
    }
    return [];
  }
}

async function getItem(itemId) {
  await ensureToken();
  try {
    return await ebay.buy.browse.getItem(itemId);
  } catch (error) {
    console.error("eBay GetItem Error:", error.message);
    return null;
  }
}

async function getSoldItems(query) {
  try {
    // Browse API doesn't directly support completed/sold items
    // Use active listings as fallback for market analysis
    const active = await searchItems(query, 10);
    return active;
  } catch (error) {
    console.error("eBay GetSoldItems Error:", error.message);
    return [];
  }
}

module.exports = { ebay, searchItems, getItem, getSoldItems };
