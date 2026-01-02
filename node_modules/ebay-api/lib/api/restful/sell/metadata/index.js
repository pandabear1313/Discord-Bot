"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Metadata extends index_js_1.default {
    get basePath() {
        return '/sell/metadata/v1';
    }
    getSalesTaxJurisdictions(countryCode) {
        countryCode = encodeURIComponent(countryCode);
        return this.get(`/country/${countryCode}/sales_tax_jurisdiction`);
    }
    getAutomotivePartsCompatibilityPolicies(marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_automotive_parts_compatibility_policies`, {
            params: {
                filter
            }
        });
    }
    getExtendedProducerResponsibilityPolicies(marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_extended_producer_responsibility_policies`, {
            params: {
                filter
            }
        });
    }
    getItemConditionPolicies(marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_item_condition_policies`, {
            params: {
                filter
            }
        });
    }
    getListingStructurePolicies(marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_listing_structure_policies`, {
            params: {
                filter
            }
        });
    }
    getNegotiatedPricePolicies(marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_negotiated_price_policies`, {
            params: {
                filter
            }
        });
    }
    getProductAdoptionPolicies(marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_product_adoption_policies`, {
            params: {
                filter
            }
        });
    }
    getReturnPolicies(marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_return_policies`, {
            params: {
                filter
            }
        });
    }
    getHazardousMaterialsLabels(marketplaceId) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get(`/marketplace/${marketplaceId}/get_hazardous_materials_labels`);
    }
}
Metadata.id = 'Metadata';
exports.default = Metadata;
