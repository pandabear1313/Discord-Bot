"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Analytics extends index_js_1.default {
    get basePath() {
        return '/developer/analytics/v1_beta';
    }
    getRateLimits(apiContext, apiName) {
        return this.get(`/rate_limit/`, {
            params: {
                api_context: apiContext,
                api_name: apiName
            }
        });
    }
    getUserRateLimits(apiContext, apiName) {
        return this.get(`/user_rate_limit/`, {
            params: {
                api_context: apiContext,
                api_name: apiName
            }
        });
    }
}
Analytics.id = 'Analytics';
exports.default = Analytics;
