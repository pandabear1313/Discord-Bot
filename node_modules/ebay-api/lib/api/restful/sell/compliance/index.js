"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Compliance extends index_js_1.default {
    get basePath() {
        return '/sell/compliance/v1';
    }
    getListingViolationsSummary(complianceType) {
        return this.get(`/listing_violation_summary`, {
            params: {
                compliance_type: complianceType
            }
        });
    }
    getListingViolations({ complianceType, offset, listingId, limit } = {}) {
        return this.get(`/listing_violation`, {
            params: {
                compliance_type: complianceType,
                offset,
                listing_id: listingId,
                limit
            }
        });
    }
    suppressViolation(body) {
        return this.post(`/suppress_listing_violation`, body);
    }
}
Compliance.id = 'Compliance';
exports.default = Compliance;
