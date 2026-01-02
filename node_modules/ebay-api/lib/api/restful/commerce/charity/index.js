"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Charity extends index_js_1.default {
    get basePath() {
        return '/commerce/charity/v1';
    }
    getCharityOrg(charityOrgId) {
        charityOrgId = encodeURIComponent(charityOrgId);
        return this.get(`/charity_org/${charityOrgId}`);
    }
    getCharityOrgs({ limit, offset, q, registrationIds }) {
        return this.get(`/charity_org`, {
            params: {
                limit,
                offset,
                q,
                registration_ids: registrationIds
            }
        });
    }
    getCharityOrgByLegacyId(legacyCharityOrgId) {
        return this.get(`/charity_org/get_charity_org_by_legacy_id`, {
            params: {
                legacy_charity_org_id: legacyCharityOrgId
            }
        });
    }
}
Charity.id = 'Charity';
exports.default = Charity;
