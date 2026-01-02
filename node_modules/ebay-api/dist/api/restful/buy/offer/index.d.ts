import { PlaceProxyBidRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/buy_offer_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Offer extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getBidding(itemId: string): Promise<any>;
    placeProxyBid(itemId: string, body?: PlaceProxyBidRequest): Promise<any>;
}
