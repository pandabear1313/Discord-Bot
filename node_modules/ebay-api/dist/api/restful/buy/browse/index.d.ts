import { AddCartItemInput, BuyBrowseGetItemsParams, BuyBrowseItemByLegacyIdParams, BuyBrowseSearchByImageParams, BuyBrowseSearchParams, CompatibilityPayload, RemoveCartItemInput, SearchByImageRequest, UpdateCartItemInput } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/buy_browse_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Browse extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    search(params: BuyBrowseSearchParams): Promise<any>;
    searchByImage(params: BuyBrowseSearchByImageParams, body?: SearchByImageRequest): Promise<any>;
    getItems(params: BuyBrowseGetItemsParams): Promise<any>;
    getItem(itemId: string, fieldgroups?: string): Promise<any>;
    getItemByLegacyId(params: BuyBrowseItemByLegacyIdParams): Promise<any>;
    getItemsByItemGroup(itemGroupId: string): Promise<any>;
    checkCompatibility(itemId: string, body?: CompatibilityPayload): Promise<any>;
    addItem(item: AddCartItemInput): Promise<any>;
    getShoppingCart(): Promise<any>;
    removeItem(item: RemoveCartItemInput): Promise<any>;
    updateQuantity(item: UpdateCartItemInput): Promise<any>;
}
