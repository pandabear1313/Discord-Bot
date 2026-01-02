import { BuyFeedParams } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/buy_feed_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Feed extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getItemFeed(params: BuyFeedParams, range: string): Promise<any>;
    getItemGroupFeed(params: BuyFeedParams, range: string): Promise<any>;
    getItemSnapshotFeed(params: BuyFeedParams, snapshotDate: string, range: string): Promise<any>;
    getProductFeed(params: BuyFeedParams, snapshotDate: string, range: string): Promise<any>;
}
