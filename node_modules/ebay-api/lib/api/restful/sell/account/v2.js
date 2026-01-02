"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class AccountV2 extends index_js_1.default {
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
exports.default = AccountV2;
