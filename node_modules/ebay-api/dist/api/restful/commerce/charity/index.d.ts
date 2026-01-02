import { operations } from '../../../../types/restful/specs/commerce_charity_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Charity extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getCharityOrg(charityOrgId: string): Promise<any>;
    getCharityOrgs({ limit, offset, q, registrationIds }: {
        limit?: string;
        offset?: string;
        q?: string;
        registrationIds?: string;
    }): Promise<any>;
    getCharityOrgByLegacyId(legacyCharityOrgId: string): Promise<any>;
}
