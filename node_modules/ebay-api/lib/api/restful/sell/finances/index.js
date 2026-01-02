"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Finances extends index_js_1.default {
    get basePath() {
        return '/sell/finances/v1';
    }
    get subdomain() {
        return 'apiz';
    }
    getPayout(payoutId) {
        payoutId = encodeURIComponent(payoutId);
        return this.get(`/payout/${payoutId}`);
    }
    getPayouts({ filter, limit, offset, sort, } = {}) {
        return this.get(`/payout`, {
            params: {
                filter,
                limit,
                offset,
                sort,
            },
        });
    }
    getPayoutSummary({ filter, } = {}) {
        return this.get(`/payout_summary`, { params: { filter } });
    }
    getTransactions({ filter, limit, offset, sort } = {}) {
        return this.get(`/transaction`, {
            params: {
                filter,
                limit,
                offset,
                sort,
            },
        });
    }
    getTransactionSummary({ filter, } = {}) {
        return this.get(`/transaction_summary`, {
            params: {
                filter,
            },
        });
    }
    getTransfer(transferId) {
        transferId = encodeURIComponent(transferId);
        return this.get(`/transfer/${transferId}`);
    }
    getSellerFundsSummary() {
        return this.get(`/seller_funds_summary`);
    }
}
Finances.id = 'Finances';
exports.default = Finances;
