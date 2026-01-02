import Restful from '../../index.js';
class MarketplaceInsights extends Restful {
    get basePath() {
        return '/buy/marketplace_insights/v1_beta';
    }
    search({ aspectFilter, categoryIds, epid, fieldgroups, filter, gtin, limit, offset, q, sort, }) {
        return this.get(`/item_sales/search`, {
            params: {
                aspect_filter: aspectFilter,
                category_ids: categoryIds,
                epid,
                fieldgroups,
                filter,
                gtin,
                limit,
                offset,
                q,
                sort,
            }
        });
    }
}
MarketplaceInsights.id = 'MarketplaceInsights';
export default MarketplaceInsights;
