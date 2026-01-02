require("dotenv").config();
console.log("Dotenv Loaded");
console.log("App ID:", process.env.EBAY_APP_ID);
console.log("Secret:", process.env.EBAY_CLIENT_SECRET ? "HIDDEN" : "MISSING");
console.log(
  "RuName:",
  process.env.EBAY_RU_NAME || process.env.EBAY_REDIRECT_URI || "MISSING"
);
