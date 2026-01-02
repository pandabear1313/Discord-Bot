"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Recommendation extends index_js_1.default {
    get basePath() {
        return '/sell/recommendation/v1';
    }
    findListingRecommendations({ filter, limit, offset } = {}, body) {
        return this.post(`/find`, {
            data: body,
            params: {
                filter,
                limit,
                offset
            }
        });
    }
}
Recommendation.id = 'Recommendation';
exports.default = Recommendation;
