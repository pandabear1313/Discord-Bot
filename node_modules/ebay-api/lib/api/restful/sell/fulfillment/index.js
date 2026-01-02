"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_js_1 = require("../../../../request.js");
const index_js_1 = __importDefault(require("../../index.js"));
class Fulfillment extends index_js_1.default {
    get basePath() {
        return '/sell/fulfillment/v1';
    }
    getOrder(orderId, { fieldGroups } = {}) {
        return this.get(`/order/${orderId}`, {
            params: {
                fieldGroups
            }
        });
    }
    getOrders({ filter, limit, offset, orderIds, fieldGroups, } = {}) {
        return this.get(`/order`, {
            params: {
                filter,
                limit,
                offset,
                orderIds: Array.isArray(orderIds) ? orderIds.join() : orderIds,
                fieldGroups
            },
        });
    }
    issueRefund(orderId, body) {
        orderId = encodeURIComponent(orderId);
        return this.post(`/order/${orderId}/issue_refund`, body);
    }
    getShippingFulfillments(orderId) {
        orderId = encodeURIComponent(orderId);
        return this.get(`/order/${orderId}/shipping_fulfillment`);
    }
    createShippingFulfillment(orderId, body) {
        orderId = encodeURIComponent(orderId);
        return this.post(`/order/${orderId}/shipping_fulfillment`, body);
    }
    getShippingFulfillment(orderId, fulfillmentId) {
        orderId = encodeURIComponent(orderId);
        fulfillmentId = encodeURIComponent(fulfillmentId);
        return this.get(`/order/${orderId}/shipping_fulfillment/${fulfillmentId}`);
    }
    getPaymentDispute(paymentDisputeId) {
        return this.get(`/payment_dispute/${paymentDisputeId}`);
    }
    fetchEvidenceContent(paymentDisputeId) {
        return this.get(`/payment_dispute/${paymentDisputeId}/fetch_evidence_content`);
    }
    getActivities(paymentDisputeId) {
        return this.get(`/payment_dispute/${paymentDisputeId}/activity`);
    }
    getPaymentDisputeSummaries({ orderId: order_id, buyerUsername: buyer_username, openDateFrom: open_date_from, openDateTo: open_date_to, paymentDisputeStatus: payment_dispute_status, limit, offset }) {
        return this.get(`/payment_dispute_summary`, {
            params: {
                order_id,
                buyer_username,
                open_date_from,
                open_date_to,
                payment_dispute_status,
                limit,
                offset
            }
        });
    }
    contestPaymentDispute(paymentDisputeId, body) {
        return this.post(`/payment_dispute/${paymentDisputeId}/contest`, body);
    }
    acceptPaymentDispute(paymentDisputeId) {
        return this.post(`/payment_dispute/${paymentDisputeId}/accept`);
    }
    uploadEvidenceFile(paymentDisputeId, data) {
        return this.post(`/payment_dispute/${paymentDisputeId}/upload_evidence_file`, data, {
            headers: {
                ...request_js_1.multipartHeader
            }
        });
    }
    addEvidence(paymentDisputeId, body) {
        return this.post(`/payment_dispute/${paymentDisputeId}/add_evidence`, body);
    }
    updateEvidence(paymentDisputeId, body) {
        return this.post(`/payment_dispute/${paymentDisputeId}/update_evidence`, body);
    }
}
Fulfillment.id = 'Fulfillment';
exports.default = Fulfillment;
