const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../database.json');

// Initialize DB if not exists
if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ trackedItems: [], savedSearches: [] }, null, 2));
}

function getTrackedItems() {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        const json = JSON.parse(data);
        return json.trackedItems || [];
    } catch (err) {
        console.error('Error reading database:', err);
        return [];
    }
}

function addTrackedItem(item) {
    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    if (!data.trackedItems) data.trackedItems = [];

    // Check if already tracked
    if (data.trackedItems.some(i => i.itemId === item.itemId)) {
        return false; // Already tracked
    }
    data.trackedItems.push(item);
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    return true;
}

function removeTrackedItem(itemId) {
    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    if (!data.trackedItems) return false;

    const initialLength = data.trackedItems.length;
    data.trackedItems = data.trackedItems.filter(i => i.itemId !== itemId);
    if (data.trackedItems.length !== initialLength) {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
        return true;
    }
    return false;
}

// Saved Searches for Auto-Monitoring
function getSavedSearches() {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        const json = JSON.parse(data);
        return json.savedSearches || [];
    } catch (err) {
        console.error('Error reading database (searches):', err);
        return [];
    }
}

function addSavedSearch(search) {
    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    if (!data.savedSearches) data.savedSearches = [];

    // Unique Constraint: Query + Channel
    if (data.savedSearches.some(s => s.query === search.query && s.channelId === search.channelId)) {
        return false;
    }

    // Ensure lastSeenIds is initialized
    search.lastSeenIds = search.lastSeenIds || [];
    data.savedSearches.push(search);
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    return true;
}

function removeSavedSearch(query, channelId) {
    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    if (!data.savedSearches) return false;

    const initialLength = data.savedSearches.length;
    data.savedSearches = data.savedSearches.filter(s => !(s.query === query && s.channelId === channelId));

    if (data.savedSearches.length !== initialLength) {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
        return true;
    }
    return false;
}

function updateSavedSearch(updatedSearch) {
    const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    if (!data.savedSearches) return false;

    const index = data.savedSearches.findIndex(s => s.query === updatedSearch.query && s.channelId === updatedSearch.channelId);
    if (index !== -1) {
        data.savedSearches[index] = updatedSearch;
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
        return true;
    }
    return false;
}

module.exports = {
    getTrackedItems, addTrackedItem, removeTrackedItem,
    getSavedSearches, addSavedSearch, removeSavedSearch, updateSavedSearch
};
