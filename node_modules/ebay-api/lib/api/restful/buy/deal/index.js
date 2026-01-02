"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Deal extends index_js_1.default {
    get basePath() {
        return '/buy/deal/v1';
    }
    getDealItems({ categoryIds, commissionable, deliveryCountry, limit, offset }) {
        return this.get(`/deal_item`, {
            params: {
                category_ids: categoryIds,
                commissionable,
                delivery_country: deliveryCountry,
                limit,
                offset
            }
        });
    }
    getEvent(eventId) {
        eventId = encodeURIComponent(eventId);
        return this.get(`/event/${eventId}`);
    }
    getEvents({ limit, offset }) {
        return this.get(`/event`, {
            params: {
                limit,
                offset
            }
        });
    }
    getEventItems(eventIds, { categoryIds, deliveryCountry, limit, offset } = {}) {
        return this.get(`/event_item`, {
            params: {
                event_ids: eventIds,
                limit,
                offset,
                category_ids: categoryIds,
                delivery_country: deliveryCountry
            }
        });
    }
}
Deal.id = 'Deal';
exports.default = Deal;
