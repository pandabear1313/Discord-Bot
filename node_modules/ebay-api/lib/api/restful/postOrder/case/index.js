"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Case extends index_js_1.default {
    get basePath() {
        return '/post-order/v2';
    }
    get useIaf() {
        return true;
    }
    appealCaseDecision(caseId, payload) {
        const id = encodeURIComponent(caseId);
        return this.post(`/casemanagement/${id}/appeal`, payload);
    }
    closeCase(caseId, payload) {
        const id = encodeURIComponent(caseId);
        return this.post(`/casemanagement/${id}/close`, payload);
    }
    getCase(caseId) {
        const id = encodeURIComponent(caseId);
        return this.get(`/casemanagement/${id}`);
    }
    issueCaseRefund(caseId, payload) {
        const id = encodeURIComponent(caseId);
        return this.post(`/casemanagement/${id}/issue_refund`, payload);
    }
    provideReturnShipmentInfo(caseId, { shippingCarrierName, trackingNumber }) {
        const id = encodeURIComponent(caseId);
        return this.post(`/casemanagement/${id}/provide_shipment_info`, {
            shippingCarrierName,
            trackingNumber
        });
    }
    providesReturnAddress(cancelId, payload) {
        const id = encodeURIComponent(cancelId);
        return this.post(`/casemanagement/${id}/provide_return_address`, payload);
    }
    search(params) {
        return this.get(`/casemanagement/search`, {
            params
        });
    }
}
Case.id = 'Case';
exports.default = Case;
