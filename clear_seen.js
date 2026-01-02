// Clear all seen items from the database
const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "sqlite.db"));
const result = db.prepare("DELETE FROM seen_items").run();
console.log(`✅ Cleared ${result.changes} seen items`);
db.close();
