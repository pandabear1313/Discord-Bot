"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Analytics extends index_js_1.default {
    get basePath() {
        return '/sell/analytics/v1';
    }
    findSellerStandardsProfiles() {
        return this.get(`/seller_standards_profile`);
    }
    getSellerStandardsProfile(program, cycle) {
        program = encodeURIComponent(program);
        cycle = encodeURIComponent(cycle);
        return this.get(`/seller_standards_profile/${program}/${cycle}`);
    }
    getTrafficReport({ dimension, filter, metric, sort } = {}) {
        return this.get(`/traffic_report`, {
            params: {
                dimension,
                filter,
                metric,
                sort
            }
        });
    }
    getCustomerServiceMetric(customerServiceMetricType, evaluationType) {
        return this.get(`/customer_service_metric/${customerServiceMetricType}/${evaluationType}`);
    }
}
Analytics.id = 'Analytics';
exports.default = Analytics;
