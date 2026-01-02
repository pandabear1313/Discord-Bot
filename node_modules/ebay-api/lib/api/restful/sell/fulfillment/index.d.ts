import { AddEvidencePaymentDisputeRequest, ContestPaymentDisputeRequest, IssueRefundRequest, PaymentParams, ShippingFulfillmentDetails, UpdateEvidencePaymentDisputeRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/sell_fulfillment_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Fulfillment extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getOrder(orderId: string, { fieldGroups }?: {
        fieldGroups?: string[];
    }): Promise<any>;
    getOrders({ filter, limit, offset, orderIds, fieldGroups, }?: {
        filter?: string;
        limit?: number;
        offset?: number;
        orderIds?: string | string[];
        fieldGroups?: string;
    }): Promise<any>;
    issueRefund(orderId: string, body?: IssueRefundRequest): Promise<any>;
    getShippingFulfillments(orderId: string): Promise<any>;
    createShippingFulfillment(orderId: string, body: ShippingFulfillmentDetails): Promise<any>;
    getShippingFulfillment(orderId: string, fulfillmentId: string): Promise<any>;
    getPaymentDispute(paymentDisputeId: string): Promise<any>;
    fetchEvidenceContent(paymentDisputeId: string): Promise<any>;
    getActivities(paymentDisputeId: string): Promise<any>;
    getPaymentDisputeSummaries({ orderId: order_id, buyerUsername: buyer_username, openDateFrom: open_date_from, openDateTo: open_date_to, paymentDisputeStatus: payment_dispute_status, limit, offset }: PaymentParams): Promise<any>;
    contestPaymentDispute(paymentDisputeId: string, body: ContestPaymentDisputeRequest): Promise<any>;
    acceptPaymentDispute(paymentDisputeId: string): Promise<any>;
    uploadEvidenceFile(paymentDisputeId: string, data: any): Promise<any>;
    addEvidence(paymentDisputeId: string, body: AddEvidencePaymentDisputeRequest): Promise<any>;
    updateEvidence(paymentDisputeId: string, body: UpdateEvidencePaymentDisputeRequest): Promise<any>;
}
