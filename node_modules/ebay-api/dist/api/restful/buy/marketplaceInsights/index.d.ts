import { MarketingInsightsSearchParams } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/buy_marketplace_insights_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class MarketplaceInsights extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    search({ aspectFilter, categoryIds, epid, fieldgroups, filter, gtin, limit, offset, q, sort, }: MarketingInsightsSearchParams): Promise<any>;
}
