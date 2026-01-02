import { BulkEbayOfferDetailsWithKeys, BulkInventoryItem, BulkMigrateListing, BulkOffer, BulkPriceQuantity, Compatibility, EbayOfferDetailsWithId, EbayOfferDetailsWithKeys, InventoryItem, InventoryItemGroup, InventoryLocation, InventoryLocationFull, LocationMapping, OfferKeysWithId, PublishByInventoryItemGroupRequest, WithdrawByInventoryItemGroupRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/sell_inventory_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Inventory extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getInventoryLocation(merchantLocationKey: string): Promise<any>;
    disableInventoryLocation(merchantLocationKey: string): Promise<any>;
    enableInventoryLocation(merchantLocationKey: string): Promise<any>;
    getInventoryLocations({ limit, offset, }?: {
        limit?: number;
        offset?: number;
    }): Promise<any>;
    createInventoryLocation(merchantLocationKey: string, body: InventoryLocationFull): Promise<any>;
    deleteInventoryLocation(merchantLocationKey: string): Promise<any>;
    updateInventoryLocation(merchantLocationKey: string, body?: InventoryLocation): Promise<any>;
    getInventoryItem(sku: string): Promise<any>;
    createOrReplaceInventoryItem(sku: string, body: InventoryItem): Promise<any>;
    deleteInventoryItem(sku: string): Promise<any>;
    getInventoryItems({ limit, offset, }?: {
        limit?: number;
        offset?: number;
    }): Promise<any>;
    bulkUpdatePriceQuantity(body: BulkPriceQuantity): Promise<any>;
    bulkCreateOrReplaceInventoryItem(body: BulkInventoryItem): Promise<any>;
    bulkGetInventoryItem(body: BulkInventoryItem): Promise<any>;
    getProductCompatibility(sku: string): Promise<any>;
    createOrReplaceProductCompatibility(sku: string, body: Compatibility): Promise<any>;
    deleteProductCompatibility(sku: string): Promise<any>;
    getOffers({ sku, marketplaceId, format, limit, offset, }?: {
        sku?: string;
        marketplaceId?: string;
        format?: string;
        limit?: number;
        offset?: number;
    }): Promise<any>;
    getOffer(offerId: string): Promise<any>;
    createOffer(body: EbayOfferDetailsWithKeys): Promise<any>;
    updateOffer(offerId: string, body: EbayOfferDetailsWithId): Promise<any>;
    deleteOffer(offerId: string): Promise<any>;
    publishOffer(offerId: string): Promise<any>;
    publishOfferByInventoryItemGroup(body: PublishByInventoryItemGroupRequest): Promise<any>;
    withdrawOfferByInventoryItemGroup(body: WithdrawByInventoryItemGroupRequest): Promise<any>;
    getListingFees(body: OfferKeysWithId): Promise<any>;
    bulkCreateOffer(body: BulkEbayOfferDetailsWithKeys): Promise<any>;
    bulkPublishOffer(body: BulkOffer): Promise<any>;
    withdrawOffer(offerId: string): Promise<any>;
    getInventoryItemGroup(inventoryItemGroupKey: string): Promise<any>;
    createOrReplaceInventoryItemGroup(inventoryItemGroupKey: string, body: InventoryItemGroup): Promise<any>;
    deleteInventoryItemGroup(inventoryItemGroupKey: string): Promise<any>;
    bulkMigrateListing(body: BulkMigrateListing): Promise<any>;
    getSkuLocationMapping(listingId: string, sku: string): Promise<any>;
    createOrReplaceSkuLocationMapping(listingId: string, sku: string, body: LocationMapping): Promise<any>;
    deleteSkuLocationMapping(listingId: string, sku: string): Promise<any>;
}
