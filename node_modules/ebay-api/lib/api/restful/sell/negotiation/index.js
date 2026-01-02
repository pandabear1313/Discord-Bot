"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Negotiation extends index_js_1.default {
    get basePath() {
        return '/sell/negotiation/v1';
    }
    findEligibleItems({ limit, offset } = {}) {
        return this.get(`/find_eligible_items`, {
            params: {
                limit,
                offset
            }
        });
    }
    sendOfferToInterestedBuyers(data) {
        return this.post(`/send_offer_to_interested_buyers`, data);
    }
}
Negotiation.id = 'Negotiation';
exports.default = Negotiation;
