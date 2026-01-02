"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Inventory extends index_js_1.default {
    get basePath() {
        return '/sell/inventory/v1';
    }
    getInventoryLocation(merchantLocationKey) {
        const key = encodeURIComponent(merchantLocationKey);
        return this.get(`/location/${key}`);
    }
    disableInventoryLocation(merchantLocationKey) {
        const key = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${key}/disable`);
    }
    enableInventoryLocation(merchantLocationKey) {
        const key = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${key}/enable`);
    }
    getInventoryLocations({ limit, offset, } = {}) {
        return this.get(`/location`, {
            params: {
                limit,
                offset,
            },
        });
    }
    createInventoryLocation(merchantLocationKey, body) {
        const key = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${key}`, body);
    }
    deleteInventoryLocation(merchantLocationKey) {
        const key = encodeURIComponent(merchantLocationKey);
        return this.delete(`/location/${key}`);
    }
    updateInventoryLocation(merchantLocationKey, body) {
        const key = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${key}/update_location_details`, body);
    }
    getInventoryItem(sku) {
        sku = encodeURIComponent(sku);
        return this.get(`/inventory_item/${sku}`);
    }
    createOrReplaceInventoryItem(sku, body) {
        sku = encodeURIComponent(sku);
        return this.put(`/inventory_item/${sku}`, body);
    }
    deleteInventoryItem(sku) {
        sku = encodeURIComponent(sku);
        return this.delete(`/inventory_item/${sku}`);
    }
    getInventoryItems({ limit, offset, } = {}) {
        return this.get(`/inventory_item`, {
            params: {
                limit,
                offset,
            },
        });
    }
    bulkUpdatePriceQuantity(body) {
        return this.post(`/bulk_update_price_quantity`, body);
    }
    bulkCreateOrReplaceInventoryItem(body) {
        return this.post(`/bulk_create_or_replace_inventory_item`, body);
    }
    bulkGetInventoryItem(body) {
        return this.post(`/bulk_get_inventory_item`, body);
    }
    getProductCompatibility(sku) {
        sku = encodeURIComponent(sku);
        return this.get(`/inventory_item/${sku}/product_compatibility`);
    }
    createOrReplaceProductCompatibility(sku, body) {
        sku = encodeURIComponent(sku);
        return this.put(`/inventory_item/${sku}/product_compatibility`, body);
    }
    deleteProductCompatibility(sku) {
        sku = encodeURIComponent(sku);
        return this.delete(`/inventory_item/${sku}/product_compatibility`);
    }
    getOffers({ sku, marketplaceId, format, limit, offset, } = {}) {
        return this.get(`/offer`, {
            params: {
                sku,
                marketplace_id: marketplaceId,
                format,
                limit,
                offset,
            },
        });
    }
    getOffer(offerId) {
        offerId = encodeURIComponent(offerId);
        return this.get(`/offer/${offerId}`);
    }
    createOffer(body) {
        return this.post(`/offer`, body);
    }
    updateOffer(offerId, body) {
        offerId = encodeURIComponent(offerId);
        return this.put(`/offer/${offerId}`, body);
    }
    deleteOffer(offerId) {
        return this.delete(`/offer/${offerId}`);
    }
    publishOffer(offerId) {
        const id = encodeURIComponent(offerId);
        return this.post(`/offer/${id}/publish`);
    }
    publishOfferByInventoryItemGroup(body) {
        return this.post(`/offer/publish_by_inventory_item_group`, body);
    }
    withdrawOfferByInventoryItemGroup(body) {
        return this.post(`/offer/withdraw_by_inventory_item_group`, body);
    }
    getListingFees(body) {
        return this.post(`/offer/get_listing_fees`, body);
    }
    bulkCreateOffer(body) {
        return this.post(`/bulk_create_offer`, body);
    }
    bulkPublishOffer(body) {
        return this.post(`/bulk_publish_offer`, body);
    }
    withdrawOffer(offerId) {
        const id = encodeURIComponent(offerId);
        return this.post(`/offer/${id}/withdraw`);
    }
    getInventoryItemGroup(inventoryItemGroupKey) {
        inventoryItemGroupKey = encodeURIComponent(inventoryItemGroupKey);
        return this.get(`/inventory_item_group/${inventoryItemGroupKey}`);
    }
    createOrReplaceInventoryItemGroup(inventoryItemGroupKey, body) {
        inventoryItemGroupKey = encodeURIComponent(inventoryItemGroupKey);
        return this.put(`/inventory_item_group/${inventoryItemGroupKey}`, body);
    }
    deleteInventoryItemGroup(inventoryItemGroupKey) {
        return this.delete(`/inventory_item_group/${inventoryItemGroupKey}`);
    }
    bulkMigrateListing(body) {
        return this.post(`/bulk_migrate_listing`, body);
    }
    getSkuLocationMapping(listingId, sku) {
        sku = encodeURIComponent(sku);
        listingId = encodeURIComponent(listingId);
        return this.get(`/listing/${listingId}/sku/${sku}/locations`);
    }
    createOrReplaceSkuLocationMapping(listingId, sku, body) {
        sku = encodeURIComponent(sku);
        listingId = encodeURIComponent(listingId);
        return this.put(`/listing/${listingId}/sku/${sku}/locations`, body);
    }
    deleteSkuLocationMapping(listingId, sku) {
        sku = encodeURIComponent(sku);
        listingId = encodeURIComponent(listingId);
        return this.delete(`/listing/${listingId}/sku/${sku}/locations`);
    }
}
Inventory.id = 'Inventory';
exports.default = Inventory;
