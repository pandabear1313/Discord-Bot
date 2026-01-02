import { RateTableUpdate, UpdatePayoutPercentageRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/sell_account_v2_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class AccountV2 extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getRateTable(rateTableId: string): Promise<any>;
    updateShippingCost(rateTableId: string, body: RateTableUpdate): Promise<any>;
    getPayoutSettings(): Promise<any>;
    updatePayoutPercentage(body: UpdatePayoutPercentageRequest): Promise<any>;
}
