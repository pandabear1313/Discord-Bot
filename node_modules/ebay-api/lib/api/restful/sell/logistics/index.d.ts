import { operations } from '../../../../types/restful/specs/sell_logistics_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Logistics extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    createShippingQuote(data: any): Promise<any>;
    getShippingQuote(shippingQuoteId: string): Promise<any>;
    createFromShippingQuote(data: any): Promise<any>;
    getShipment(shipmentId: any): Promise<any>;
    downloadLabelFile(shipmentId: any): Promise<any>;
    cancelShipment(shipmentId: any): Promise<any>;
}
