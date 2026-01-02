"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Offer extends index_js_1.default {
    get basePath() {
        return '/buy/offer/v1_beta';
    }
    getBidding(itemId) {
        const id = encodeURIComponent(itemId);
        return this.get(`/bidding/${id}`);
    }
    placeProxyBid(itemId, body) {
        const id = encodeURIComponent(itemId);
        return this.post(`/bidding/${id}/place_proxy_bid`, body);
    }
}
Offer.id = 'Offer';
exports.default = Offer;
