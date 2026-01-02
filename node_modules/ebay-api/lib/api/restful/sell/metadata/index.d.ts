import { operations } from '../../../../types/restful/specs/sell_metadata_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Metadata extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getSalesTaxJurisdictions(countryCode: string): Promise<any>;
    getAutomotivePartsCompatibilityPolicies(marketplaceId: string, filter?: string): Promise<any>;
    getExtendedProducerResponsibilityPolicies(marketplaceId: string, filter?: string): Promise<any>;
    getItemConditionPolicies(marketplaceId: string, filter?: string): Promise<any>;
    getListingStructurePolicies(marketplaceId: string, filter?: string): Promise<any>;
    getNegotiatedPricePolicies(marketplaceId: string, filter?: string): Promise<any>;
    getProductAdoptionPolicies(marketplaceId: string, filter?: string): Promise<any>;
    getReturnPolicies(marketplaceId: string, filter?: string): Promise<any>;
    getHazardousMaterialsLabels(marketplaceId: string): Promise<any>;
}
