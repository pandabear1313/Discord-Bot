require('dotenv').config();
console.log('Dotenv Loaded');
console.log('App ID:', process.env.EBAY_APP_ID);
console.log('Secret:', process.env.EBAY_CLIENT_SECRET ? 'HIDDEN' : 'MISSING');
