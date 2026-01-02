try {
    console.log('Requiring ebay-api...');
    const eBayApi = require('ebay-api');
    console.log('Success:', typeof eBayApi);
} catch (e) {
    console.error('FAIL:', e);
}
