import Restful from '../../index.js';
class Catalog extends Restful {
    get basePath() {
        return '/commerce/catalog/v1_beta';
    }
    getChangeRequest(changeRequestId) {
        return this.get(`/change_request/${changeRequestId}`);
    }
    getChangeRequests({ filter, limit, offset } = {}) {
        return this.get(`/change_request`, {
            params: {
                filter,
                limit,
                offset
            }
        });
    }
    getProduct(epid) {
        const e = encodeURIComponent(epid);
        return this.get(`/product/${e}`);
    }
    search(params) {
        return this.get(`/product_summary/search`, {
            params
        });
    }
    getProductMetadata(epid, { otherApplicableCategoryIds, primaryCategoryId } = {}) {
        return this.get(`/get_product_metadata`, {
            params: {
                epid,
                other_applicable_category_ids: otherApplicableCategoryIds,
                primary_category_id: primaryCategoryId
            }
        });
    }
    getProductMetadataForCategories(primaryCategoryId, otherApplicableCategoryIds) {
        return this.get(`/get_product_metadata_for_categories`, {
            params: {
                primary_category_id: primaryCategoryId,
                other_applicable_category_ids: otherApplicableCategoryIds
            }
        });
    }
}
Catalog.id = 'Catalog';
export default Catalog;
