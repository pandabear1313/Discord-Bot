import { SuppressViolationRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/sell_compliance_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Compliance extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getListingViolationsSummary(complianceType?: string): Promise<any>;
    getListingViolations({ complianceType, offset, listingId, limit }?: {
        complianceType?: string;
        offset?: number;
        listingId?: string;
        limit?: number;
    }): Promise<any>;
    suppressViolation(body: SuppressViolationRequest): Promise<any>;
}
