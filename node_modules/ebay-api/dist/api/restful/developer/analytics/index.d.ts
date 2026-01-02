import { operations } from '../../../../types/restful/specs/developer_analytics_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Analytics extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getRateLimits(apiContext?: string, apiName?: string): Promise<any>;
    getUserRateLimits(apiContext: string, apiName: string): Promise<any>;
}
