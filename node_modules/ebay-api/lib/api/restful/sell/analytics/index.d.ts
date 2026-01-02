import { Metric } from '../../../../enums/index.js';
import { operations } from '../../../../types/restful/specs/sell_analytics_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Analytics extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    findSellerStandardsProfiles(): Promise<any>;
    getSellerStandardsProfile(program: string, cycle: string): Promise<any>;
    getTrafficReport({ dimension, filter, metric, sort }?: {
        dimension?: string;
        filter?: string;
        metric?: string | Metric | `${Metric}`;
        sort?: string;
    }): Promise<any>;
    getCustomerServiceMetric(customerServiceMetricType: string, evaluationType: string): Promise<any>;
}
