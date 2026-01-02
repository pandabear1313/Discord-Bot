import { operations } from '../../../../types/restful/specs/sell_listing_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Listing extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    createItemDraft(data?: any): Promise<any>;
}
