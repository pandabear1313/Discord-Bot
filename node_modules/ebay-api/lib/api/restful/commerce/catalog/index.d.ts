import { CommerceCatalogSearchParams } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/commerce_catalog_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Catalog extends Restful implements OpenApi<Omit<operations, 'createChangeRequest'>> {
    static id: string;
    get basePath(): string;
    getChangeRequest(changeRequestId: string): Promise<any>;
    getChangeRequests({ filter, limit, offset }?: {
        filter?: string;
        limit?: number;
        offset?: number;
    }): Promise<any>;
    getProduct(epid: string): Promise<any>;
    search(params?: CommerceCatalogSearchParams): Promise<any>;
    getProductMetadata(epid: string, { otherApplicableCategoryIds, primaryCategoryId }?: {
        otherApplicableCategoryIds?: string;
        primaryCategoryId?: string;
    }): Promise<any>;
    getProductMetadataForCategories(primaryCategoryId: string, otherApplicableCategoryIds?: string): Promise<any>;
}
