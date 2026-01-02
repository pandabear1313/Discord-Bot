import { operations } from '../../../../types/restful/specs/sell_negotiation_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Negotiation extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    findEligibleItems({ limit, offset }?: {
        limit?: string;
        offset?: string;
    }): Promise<any>;
    sendOfferToInterestedBuyers(data: any): Promise<any>;
}
