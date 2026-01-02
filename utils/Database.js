const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

class DB {
  constructor() {
    this.db = new Database(path.join(__dirname, "../sqlite.db"));
    this.init();
  }

  init() {
    // Monitors: Saved searches
    this.db
      .prepare(
        `
            CREATE TABLE IF NOT EXISTS monitors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                query TEXT NOT NULL,
                max_price REAL,
                channel_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                condition TEXT DEFAULT 'New',
                listingType TEXT DEFAULT 'all',
                added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(query, channel_id)
            )
        `
      )
      .run();

    // Seen Items: To prevent duplicate alerts for monitors
    this.db
      .prepare(
        `
            CREATE TABLE IF NOT EXISTS seen_items (
                item_id TEXT PRIMARY KEY,
                seen_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `
      )
      .run();

    // Bids: Active automated bids
    this.db
      .prepare(
        `
            CREATE TABLE IF NOT EXISTS bids (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                max_bid REAL NOT NULL,
                current_bid REAL DEFAULT 0,
                status TEXT DEFAULT 'active', -- active, won, lost, outbid
                notes TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `
      )
      .run();

    // Users: OAuth tokens (if we implement full auth)
    this.db
      .prepare(
        `
            CREATE TABLE IF NOT EXISTS users (
                discord_id TEXT PRIMARY KEY,
                ebay_token TEXT,
                ebay_refresh_token TEXT,
                token_expiry DATETIME
            )
        `
      )
      .run();
  }

  // --- Monitor Methods ---
  addMonitor(monitor) {
    const stmt = this.db.prepare(
      "INSERT INTO monitors (query, max_price, channel_id, user_id, condition, listingType) VALUES (?, ?, ?, ?, ?, ?)"
    );
    return stmt.run(
      monitor.query,
      monitor.maxPrice,
      monitor.channelId,
      monitor.userId,
      monitor.condition,
      monitor.listingType || "all"
    );
  }

  getMonitors() {
    return this.db.prepare("SELECT * FROM monitors").all();
  }

  removeMonitor(query, channelId) {
    return this.db
      .prepare("DELETE FROM monitors WHERE query = ? AND channel_id = ?")
      .run(query, channelId);
  }

  // --- Seen Items Methods ---
  isSeen(itemId) {
    const row = this.db
      .prepare("SELECT item_id FROM seen_items WHERE item_id = ?")
      .get(itemId);
    return !!row;
  }

  markSeen(itemId) {
    this.db
      .prepare("INSERT OR IGNORE INTO seen_items (item_id) VALUES (?)")
      .run(itemId);
  }

  // --- Bid Methods ---
  addBid(bid) {
    const stmt = this.db.prepare(
      "INSERT INTO bids (item_id, user_id, max_bid, notes) VALUES (?, ?, ?, ?)"
    );
    return stmt.run(bid.itemId, bid.userId, bid.maxBid, bid.notes);
  }

  getActiveBids() {
    return this.db
      .prepare("SELECT * FROM bids WHERE status IN ('active', 'watching')")
      .all();
  }

  updateBidStatus(id, status) {
    this.db.prepare("UPDATE bids SET status = ? WHERE id = ?").run(status, id);
  }

  updateBidPrice(id, price) {
    this.db
      .prepare("UPDATE bids SET current_bid = ? WHERE id = ?")
      .run(price, id);
  }
  // --- User Methods ---
  saveUserToken(userId, tokenData) {
    // tokenData: { access_token, refresh_token, ... }
    // We probably only need access/refresh and expiry
    // Expiry is in seconds from now usually, so calculate date
    const expiry = new Date(Date.now() + tokenData.expires_in * 1000);

    const stmt = this.db.prepare(`
            INSERT INTO users (discord_id, ebay_token, ebay_refresh_token, token_expiry)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(discord_id) DO UPDATE SET
            ebay_token = excluded.ebay_token,
            ebay_refresh_token = excluded.ebay_refresh_token,
            token_expiry = excluded.token_expiry
        `);
    const result = stmt.run(
      userId,
      tokenData.access_token,
      tokenData.refresh_token,
      expiry.toISOString()
    );

    // Debug cache: persist a minimal record for audit
    try {
      const cachePath = path.join(__dirname, "../login_cache.json");
      let cache = [];
      if (fs.existsSync(cachePath)) {
        try {
          cache = JSON.parse(fs.readFileSync(cachePath, "utf8")) || [];
        } catch (_) {
          cache = [];
        }
      }
      cache.push({
        discord_id: userId,
        saved_at: new Date().toISOString(),
        token_expiry: expiry.toISOString(),
      });
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
      console.log(
        `✅ Cached login for user ${userId}, expires ${expiry.toISOString()}`
      );
    } catch (e) {
      console.warn("Login cache write failed:", e.message);
    }

    return result;
  }

  getUserToken(userId) {
    return this.db
      .prepare("SELECT * FROM users WHERE discord_id = ?")
      .get(userId);
  }

  getLoggedInUsers() {
    // Return users with non-null token and future expiry
    const nowIso = new Date().toISOString();
    return this.db
      .prepare(
        "SELECT discord_id, token_expiry FROM users WHERE ebay_token IS NOT NULL AND token_expiry > ?"
      )
      .all(nowIso);
  }

  addWatch(userId, itemId) {
    // Adds a watch entry. We use the 'bids' table with status='watching' and max_bid=0.
    // We can store the current time as 'created_at'.
    // We use INSERT OR IGNORE or handle unique constraint if we had one on (user, item),
    // but the table schema allows multiple? Let's check init().
    // Schema: id PK, item_id, user_id, max_bid, ...
    // We should check if already exists to avoid duplicates.
    const existing = this.db
      .prepare(
        "SELECT id FROM bids WHERE user_id = ? AND item_id = ? AND status = 'watching'"
      )
      .get(userId, itemId);
    if (existing) return false;

    const stmt = this.db.prepare(
      "INSERT INTO bids (item_id, user_id, max_bid, status, notes) VALUES (?, ?, ?, ?, ?)"
    );
    stmt.run(itemId, userId, 0, "watching", "Watchlist item");
    return true;
  }
}

module.exports = new DB();
