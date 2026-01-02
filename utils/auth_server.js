const express = require("express");
const DB = require("./Database");
const { exchangeUserToken, getUserProfile } = require("./ebay");

let discordClient = null; // Set by startServer(client)

const app = express();
const PORT = 3000;

// Middleware to handle ngrok browser warning
app.use((req, res, next) => {
  res.setHeader("ngrok-skip-browser-warning", "true");
  next();
});

// Root route - landing page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>eBay Discord Bot - Auth Server</title>
        <style>
          body { font-family: sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
          h1 { color: #0064d2; }
          .status { background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0; }
          code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>🤖 eBay Discord Bot - Auth Server</h1>
        <div class="status">
          <strong>✅ Server Status:</strong> Running
        </div>
        <p>This is the OAuth callback server for the eBay Discord Bot.</p>
        <h3>How to use:</h3>
        <ol>
          <li>Go to your Discord server</li>
          <li>Use the <code>/login</code> command</li>
          <li>Click the login link and authorize with eBay</li>
          <li>You'll be redirected back here automatically</li>
        </ol>
        <p><small>Server running on port ${PORT}</small></p>
      </body>
    </html>
  `);
});

app.get("/auth/ebay/callback", async (req, res) => {
  const { code, state } = req.query; // 'state' is the Discord User ID

  if (!code || !state) {
    return res.status(400).send("Missing code or state.");
  }

  try {
    console.log(`Received callback for user ${state}`);
    const token = await exchangeUserToken(code);

    // Save to DB
    DB.saveUserToken(state, token);

    // Fetch user's eBay profile (includes email)
    let userEmail = "unknown";
    let userProfile = null;
    try {
      userProfile = await getUserProfile(token.access_token);
      userEmail = userProfile?.email || userProfile?.username || "unknown";
      console.log(`[LOGIN-SUCCESS] User ${state} | Email: ${userEmail}`);
    } catch (profileErr) {
      console.warn(
        `Could not fetch profile for user ${state}:`,
        profileErr.message
      );
    }

    // Try to DM the user to confirm login success
    if (discordClient) {
      try {
        const user = await discordClient.users.fetch(state);
        if (user) {
          await user.send(
            `✅ Login successful! Your eBay account is linked.\nEmail: ${userEmail}\nYou can now use /bid for real bids.`
          );
        }
      } catch (dmErr) {
        console.warn("Discord DM failed:", dmErr.message);
      }
    } else {
      console.warn(
        "Discord client not available to notify user about login success."
      );
    }

    res.send(`
            <html>
                <body style="font-family: sans-serif; text-align: center; padding: 50px;">
                    <h1 style="color: green;">✅ Login Successful!</h1>
                    <p>You have successfully authenticated with eBay.</p>
                    <p><strong>Email:</strong> ${userEmail}</p>
                    <p>You can now go back to Discord and use the <code>/bid</code> command.</p>
                    <script>setTimeout(() => window.close(), 5000);</script>
                </body>
            </html>
        `);
  } catch (error) {
    console.error("Callback Error:", error);
    res.status(500).send(`
            <html>
                <body style="font-family: sans-serif; text-align: center; padding: 50px;">
                    <h1 style="color: red;">❌ Login Failed</h1>
                    <p>Error: ${error.message}</p>
                </body>
            </html>
        `);
  }
});

app.get("/auth/ebay/declined", async (req, res) => {
  const { state } = req.query; // Discord User ID

  console.log(`[LOGIN-DECLINED] User ${state || "unknown"} declined eBay auth`);

  // Try to notify user via Discord DM
  if (discordClient && state) {
    try {
      const user = await discordClient.users.fetch(state);
      if (user) {
        await user.send(
          `❌ eBay login was cancelled. You'll need to use /login again if you want to enable bidding.`
        );
      }
    } catch (dmErr) {
      console.warn("Discord DM failed:", dmErr.message);
    }
  }

  res.send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h1 style="color: orange;">🚫 Login Cancelled</h1>
        <p>You declined the eBay authorization.</p>
        <p>If you change your mind, use the <code>/login</code> command in Discord again.</p>
        <script>setTimeout(() => window.close(), 3000);</script>
      </body>
    </html>
  `);
});

function startServer(client) {
  if (client) discordClient = client;
  app.listen(PORT, () => {
    console.log(`Auth Server running on http://localhost:${PORT}`);
  });
}

module.exports = { startServer };
