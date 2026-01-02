require('dotenv').config();
console.log('Token Length:', process.env.DISCORD_TOKEN ? process.env.DISCORD_TOKEN.length : 'MISSING');
try {
    require('./utils/ebay');
    console.log('utils/ebay loaded');
} catch (e) {
    console.error('utils/ebay failed:', e.message);
}
try {
    require('./utils/monitor');
    console.log('utils/monitor loaded');
} catch (e) {
    console.error('utils/monitor failed:', e.message);
}
