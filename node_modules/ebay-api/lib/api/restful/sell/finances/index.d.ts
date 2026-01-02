import { operations } from '../../../../types/restful/specs/sell_finances_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Finances extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    get subdomain(): string;
    getPayout(payoutId: string): Promise<any>;
    getPayouts({ filter, limit, offset, sort, }?: {
        filter?: string;
        limit?: number;
        offset?: number;
        sort?: 'payoutDate' | '-payoutDate';
    }): Promise<any>;
    getPayoutSummary({ filter, }?: {
        filter?: string;
    }): Promise<any>;
    getTransactions({ filter, limit, offset, sort }?: {
        filter?: string;
        limit?: number;
        offset?: number;
        sort?: 'transactionDate' | '-transactionDate';
    }): Promise<any>;
    getTransactionSummary({ filter, }?: {
        filter?: string;
    }): Promise<any>;
    getTransfer(transferId: string): Promise<any>;
    getSellerFundsSummary(): Promise<any>;
}
