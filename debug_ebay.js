require('dotenv').config();
const { searchItems } = require('./utils/ebay');

process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});
process.on('unhandledRejection', (reason, p) => {
    console.error('UNHANDLED REJECTION:', reason);
});

(async () => {
    console.log('Testing eBay API...');
    try {
        console.log('App ID:', process.env.EBAY_APP_ID ? 'Set' : 'Missing');
        console.log('Cert ID:', process.env.EBAY_CLIENT_SECRET ? 'Set' : 'Missing');

        const results = await searchItems('laptop', 1);
        console.log('Search Success!');
        console.log('Found:', results.length, 'items');
        if (results.length > 0) {
            console.log('First Item:', results[0].title);
        }
    } catch (e) {
        console.error('Test Failed:', e);
    }
})();
