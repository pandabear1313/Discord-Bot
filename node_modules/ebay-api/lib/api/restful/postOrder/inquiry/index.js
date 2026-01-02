"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Inquiry extends index_js_1.default {
    get basePath() {
        return '/post-order/v2';
    }
    get useIaf() {
        return true;
    }
    checkInquiryEligibility(payload) {
        return this.post(`/inquiry/check_eligibility`, payload);
    }
    closeInquiry(inquiryId, payload) {
        inquiryId = encodeURIComponent(inquiryId);
        if (typeof payload?.closeReason === 'string') {
            payload.closeReason = payload.closeReason.trim();
        }
        return this.post(`/inquiry/${inquiryId}/close`, payload);
    }
    confirmInquiryRefund(inquiryId) {
        inquiryId = encodeURIComponent(inquiryId);
        return this.post(`/inquiry/${inquiryId}/confirm_refund`);
    }
    createInquiry(payload) {
        if (typeof payload.desiredOutcome === 'string') {
            payload.desiredOutcome = payload.desiredOutcome.trim();
        }
        return this.post(`/inquiry`, payload);
    }
    escalateInquiry(inquiryId, payload) {
        inquiryId = encodeURIComponent(inquiryId);
        payload.escalateInquiryReason = payload.escalateInquiryReason.trim();
        return this.post(`/inquiry/${inquiryId}/escalate`, payload);
    }
    getInquiry(inquiryId) {
        inquiryId = encodeURIComponent(inquiryId);
        return this.get(`/inquiry/${inquiryId}`);
    }
    issueInquiryRefund(inquiryId, payload) {
        inquiryId = encodeURIComponent(inquiryId);
        return this.post(`/inquiry/${inquiryId}/issue_refund`, payload);
    }
    provideInquiryRefundInfo(inquiryId, payload) {
        inquiryId = encodeURIComponent(inquiryId);
        return this.post(`/inquiry/${inquiryId}/provide_refund_info`, payload);
    }
    provideInquiryShipmentInfo(inquiryId, payload) {
        inquiryId = encodeURIComponent(inquiryId);
        return this.post(`/inquiry/${inquiryId}/provide_shipment_info`, payload);
    }
    search(params) {
        return this.get(`/inquiry/search`, {
            params
        });
    }
    sendInquiryMessage(inquiryId, payload) {
        inquiryId = encodeURIComponent(inquiryId);
        return this.post(`/inquiry/${inquiryId}/send_message`, payload);
    }
}
Inquiry.id = 'Inquiry';
exports.default = Inquiry;
