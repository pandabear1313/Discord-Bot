console.log("Loading utils/ebay.js...");
const eBayApi = require("ebay-api");
const axios = require("axios");
console.log("ebay-api loaded.");
console.log(
  "App ID Type:",
  typeof process.env.EBAY_APP_ID,
  "Length:",
  process.env.EBAY_APP_ID ? process.env.EBAY_APP_ID.length : 0
);

function getRuName() {
  const rawRuName = (process.env.EBAY_RU_NAME || "").trim();
  const fallbackUri = (process.env.EBAY_REDIRECT_URI || "").trim();

  // Treat common placeholder as missing
  if (
    !rawRuName ||
    rawRuName.toLowerCase() === "your_redirect_uri_here" ||
    rawRuName.toLowerCase() === "placeholder"
  ) {
    // Some setups mistakenly put a full URL here; the eBay API expects the
    // Redirect URL NAME (RuName) configured in the eBay Dev Portal.
    // We return fallback only for logging/visibility; generateAuthUrl will still
    // require a valid RuName to work.
    return fallbackUri || "";
  }
  return rawRuName;
}

const ebay = new eBayApi({
  appId: process.env.EBAY_APP_ID ? process.env.EBAY_APP_ID.trim() : "",
  certId: process.env.EBAY_CLIENT_SECRET
    ? process.env.EBAY_CLIENT_SECRET.trim()
    : "",
  ruName: getRuName(),
  sandbox: false,
});

// Normalize user-provided item identifier (URL, legacy ID, or RESTful ID)
function normalizeItemId(input) {
  if (!input) return input;
  const str = String(input).trim();

  // Already a RESTful ID like v1|123456789012|0
  if (/^v\d\|.+\|\d+$/.test(str)) return str;

  // If it's a URL, try to extract legacy numeric ID
  try {
    if (str.includes("http")) {
      const m1 = str.match(/\/itm\/(\d{9,})/);
      if (m1 && m1[1]) return `v1|${m1[1]}|0`;
      const m2 = str.match(/[?&](?:item|itemId|item_id)=(\d{9,})/i);
      if (m2 && m2[1]) return `v1|${m2[1]}|0`;
    }
  } catch (_) {
    // ignore URL parsing issues
  }

  // Plain legacy numeric ID
  if (/^\d{9,}$/.test(str)) return `v1|${str}|0`;

  // Fallback: return original
  return str;
}

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
    console.error("eBay GetItem Error:", error.message, "for id:", itemId);
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

// --- User Auth & Bidding ---

async function getLoginUrl(state) {
  if (!process.env.EBAY_APP_ID || !process.env.EBAY_CLIENT_SECRET) {
    throw new Error("Missing EBAY_APP_ID or EBAY_CLIENT_SECRET env variables");
  }
  const ruName = getRuName();
  if (!ruName) {
    throw new Error(
      "eBay login not configured: set EBAY_RU_NAME to your redirect URL (e.g., https://your-domain.com/auth/ebay/callback)"
    );
  }

  // Include Trading API scope for bidding
  const scopes = [
    "https://api.ebay.com/oauth/api_scope",
    "https://api.ebay.com/oauth/api_scope/commerce.identity.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.inventory",
  ];

  // Build URL manually to avoid wrapper quirks
  const params = new URLSearchParams({
    client_id: (process.env.EBAY_APP_ID || "").trim(),
    redirect_uri: ruName,
    response_type: "code",
    state: state || "",
    scope: scopes.join(" "),
  });
  const url = `https://auth.ebay.com/oauth2/authorize?${params.toString()}`;
  console.log("[DEBUG] Generated OAuth URL with scopes:", scopes.join(" "));
  return url;
}

async function exchangeUserToken(code) {
  try {
    const token = await ebay.auth.OAuth2.getToken(code);
    return token;
  } catch (error) {
    const errMsg =
      error?.response?.data?.error_description ||
      error?.response?.data?.error ||
      error.message ||
      "Unknown OAuth error";
    console.error(
      "Error exchanging code for token:",
      errMsg,
      error?.response?.data
    );
    throw new Error(errMsg);
  }
}

async function getUserProfile(userToken) {
  try {
    const userEbay = new eBayApi({
      appId: process.env.EBAY_APP_ID,
      certId: process.env.EBAY_CLIENT_SECRET,
      sandbox: false,
      authToken: userToken,
    });

    // Get user account information
    const account = await userEbay.sell.account.getAccount();
    return {
      username: account.username || account.userId || "unknown",
      email: account.email || "unknown",
    };
  } catch (e) {
    console.error("Get User Profile Error:", e.message);
    throw e;
  }
}

async function placeBid(itemId, amount, userToken) {
  try {
    // Extract legacy ID from RESTful format (v1|123456789012|0 -> 123456789012)
    let legacyId = itemId;
    if (itemId.startsWith("v1|")) {
      const parts = itemId.split("|");
      if (parts.length >= 2) {
        legacyId = parts[1];
      }
    }

    // eBay Trading API XML request for PlaceOffer (bidding on auctions)
    // Note: PlaceOffer is for Buy API offers. For auctions, we use Trading API's PlaceBid
    // EndUserIP is required - using a placeholder IP (in production, you'd capture the actual user IP)
    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<PlaceOfferRequest xmlns="urn:ebay:apis:eBLBaseComponents">
  <RequesterCredentials>
    <eBayAuthToken>${userToken}</eBayAuthToken>
  </RequesterCredentials>
  <EndUserIP>127.0.0.1</EndUserIP>
  <ItemID>${legacyId}</ItemID>
  <Offer>
    <Action>Bid</Action>
    <MaxBid currencyID="USD">${amount}</MaxBid>
    <Quantity>1</Quantity>
  </Offer>
</PlaceOfferRequest>`;

    console.log(`[BID] Placing bid on item ${legacyId} for $${amount}`);

    const response = await axios.post(
      "https://api.ebay.com/ws/api.dll",
      xmlBody,
      {
        headers: {
          "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
          "X-EBAY-API-APP-NAME": process.env.EBAY_APP_ID,
          "X-EBAY-API-CERT-NAME": process.env.EBAY_CLIENT_SECRET,
          "X-EBAY-API-CALL-NAME": "PlaceOffer",
          "X-EBAY-API-SITEID": "0",
          "Content-Type": "text/xml",
        },
      }
    );

    const responseText = response.data;
    console.log(`[BID] Response:`, responseText);

    // Parse XML response for errors
    if (
      responseText.includes("<Ack>Failure</Ack>") ||
      responseText.includes("<Ack>Warning</Ack>")
    ) {
      const errorMatch = responseText.match(
        /<LongMessage>(.+?)<\/LongMessage>/
      );
      const errorMsg = errorMatch ? errorMatch[1] : "Unknown error";
      throw new Error(`eBay API Error: ${errorMsg}`);
    }

    // Check if bid was successful
    if (responseText.includes("<Ack>Success</Ack>")) {
      console.log(`[BID] Successfully placed bid on ${legacyId}`);
      return { success: true, itemId: legacyId, amount };
    }

    throw new Error("Bid response did not confirm success");
  } catch (e) {
    console.error("Place Bid Error:", e.message);
    if (e.response) {
      console.error("Response status:", e.response.status);
      console.error("Response data:", e.response.data);
    }
    throw new Error(`Failed to place bid: ${e.message}`);
  }
}

module.exports = {
  ebay,
  searchItems,
  getItem,
  getSoldItems,
  getLoginUrl,
  exchangeUserToken,
  getUserProfile,
  placeBid,
  normalizeItemId,
};
