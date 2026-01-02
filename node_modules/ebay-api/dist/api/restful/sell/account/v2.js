import Restful from '../../index.js';
class AccountV2 extends Restful {
    get basePath() {
        return '/sell/account/v2';
    }
    getRateTable(rateTableId) {
        rateTableId = encodeURIComponent(rateTableId);
        return this.get(`/rate_table/${rateTableId}`);
    }
    updateShippingCost(rateTableId, body) {
        rateTableId = encodeURIComponent(rateTableId);
        return this.post(`/rate_table/${rateTableId}/update_shipping_cost`, body);
    }
    getPayoutSettings() {
        return this.get('/payout_settings');
    }
    updatePayoutPercentage(body) {
        return this.post(`/payout_settings/update_percentage`, body);
    }
}
AccountV2.id = 'AccountV2';
export default AccountV2;
