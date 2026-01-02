"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class MarketplaceInsights extends index_js_1.default {
    get basePath() {
        return '/buy/marketplace_insights/v1_beta';
    }
    search({ aspectFilter, categoryIds, epid, fieldgroups, filter, gtin, limit, offset, q, sort, }) {
        return this.get(`/item_sales/search`, {
            params: {
                aspect_filter: aspectFilter,
                category_ids: categoryIds,
                epid,
                fieldgroups,
                filter,
                gtin,
                limit,
                offset,
                q,
                sort,
            }
        });
    }
}
MarketplaceInsights.id = 'MarketplaceInsights';
exports.default = MarketplaceInsights;
