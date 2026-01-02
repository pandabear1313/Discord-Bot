import { operations } from '../../../../types/restful/specs/buy_deal_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Deal extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getDealItems({ categoryIds, commissionable, deliveryCountry, limit, offset }: {
        categoryIds?: string;
        commissionable?: string;
        deliveryCountry?: string;
        limit?: string;
        offset?: string;
    }): Promise<any>;
    getEvent(eventId: string): Promise<any>;
    getEvents({ limit, offset }: {
        limit?: string;
        offset?: string;
    }): Promise<any>;
    getEventItems(eventIds: string, { categoryIds, deliveryCountry, limit, offset }?: {
        categoryIds?: string;
        deliveryCountry?: string;
        limit?: string;
        offset?: string;
    }): Promise<any>;
}
