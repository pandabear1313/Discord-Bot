const Database = require('better-sqlite3');
const path = require('path');

class DB {
    constructor() {
        this.db = new Database(path.join(__dirname, '../sqlite.db'));
        this.init();
    }

    init() {
        // Monitors: Saved searches
        this.db.prepare(`
            CREATE TABLE IF NOT EXISTS monitors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                query TEXT NOT NULL,
                max_price REAL,
                channel_id TEXT NOT NULL,
                user_id TEXT NOT NULL,
                condition TEXT DEFAULT 'New',
                added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(query, channel_id)
            )
        `).run();

        // Seen Items: To prevent duplicate alerts for monitors
        this.db.prepare(`
            CREATE TABLE IF NOT EXISTS seen_items (
                item_id TEXT PRIMARY KEY,
                seen_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `).run();

        // Bids: Active automated bids
        this.db.prepare(`
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
        `).run();

        // Users: OAuth tokens (if we implement full auth)
        this.db.prepare(`
            CREATE TABLE IF NOT EXISTS users (
                discord_id TEXT PRIMARY KEY,
                ebay_token TEXT,
                ebay_refresh_token TEXT,
                token_expiry DATETIME
            )
        `).run();
    }

    // --- Monitor Methods ---
    addMonitor(monitor) {
        const stmt = this.db.prepare('INSERT INTO monitors (query, max_price, channel_id, user_id, condition) VALUES (?, ?, ?, ?, ?)');
        return stmt.run(monitor.query, monitor.maxPrice, monitor.channelId, monitor.userId, monitor.condition);
    }

    getMonitors() {
        return this.db.prepare('SELECT * FROM monitors').all();
    }

    removeMonitor(query, channelId) {
        return this.db.prepare('DELETE FROM monitors WHERE query = ? AND channel_id = ?').run(query, channelId);
    }

    // --- Seen Items Methods ---
    isSeen(itemId) {
        const row = this.db.prepare('SELECT item_id FROM seen_items WHERE item_id = ?').get(itemId);
        return !!row;
    }

    markSeen(itemId) {
        this.db.prepare('INSERT OR IGNORE INTO seen_items (item_id) VALUES (?)').run(itemId);
    }

    // --- Bid Methods ---
    addBid(bid) {
        const stmt = this.db.prepare('INSERT INTO bids (item_id, user_id, max_bid, notes) VALUES (?, ?, ?, ?)');
        return stmt.run(bid.itemId, bid.userId, bid.maxBid, bid.notes);
    }

    getActiveBids() {
        return this.db.prepare("SELECT * FROM bids WHERE status = 'active'").all();
    }

    updateBidStatus(id, status) {
        this.db.prepare('UPDATE bids SET status = ? WHERE id = ?').run(status, id);
    }
}

module.exports = new DB();
