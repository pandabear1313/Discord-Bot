import { FindListingRecommendationRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/sell_recommendation_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Recommendation extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    findListingRecommendations({ filter, limit, offset }?: {
        filter?: string;
        limit?: number;
        offset?: number;
    }, body?: FindListingRecommendationRequest): Promise<any>;
}
