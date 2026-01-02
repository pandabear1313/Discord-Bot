import Restful from '../../index.js';
class Return extends Restful {
    get basePath() {
        return '/post-order/v2';
    }
    get useIaf() {
        return true;
    }
    addShippingLabelInfo(returnId, payload) {
        const id = encodeURIComponent(returnId);
        return this.post(`/return/${id}/add_shipping_label`, payload);
    }
    cancelReturnRequest(returnId, payload) {
        const id = encodeURIComponent(returnId);
        if (payload && payload.buyerCloseReason) {
            payload.buyerCloseReason = payload.buyerCloseReason.trim();
        }
        return this.post(`/return/${id}/cancel`, payload);
    }
    checkReturnEligibility(payload) {
        return this.post(`/return/check_eligibility`, payload);
    }
    checkShippingLabelEligibility(returnId) {
        const id = encodeURIComponent(returnId);
        return this.get(`/return/${id}/check_label_print_eligibility`);
    }
    createReturnDraft(payload) {
        return this.post(`/return/draft`, payload);
    }
    createReturnRequest(payload, fieldGroups) {
        return this.post(`/return`, payload, {
            params: {
                fieldgroups: fieldGroups
            }
        });
    }
    createReturnShippingLabel(returnId) {
        const id = encodeURIComponent(returnId);
        return this.post(`/return/${id}/initiate_shipping_label`);
    }
    deleteReturnDraftFile(draftId, fileId) {
        draftId = encodeURIComponent(draftId);
        fileId = encodeURIComponent(fileId);
        return this.delete(`/return/draft/${draftId}/file/${fileId}`);
    }
    escalateReturn(returnId, payload) {
        const id = encodeURIComponent(returnId);
        return this.post(`/return/${id}/escalate`, payload);
    }
    getReturn(returnId, fieldGroups) {
        returnId = encodeURIComponent(returnId);
        return this.get(`/return/${returnId}`, {
            params: {
                fieldgroups: fieldGroups
            }
        });
    }
    getReturnDraft(returnId) {
        const id = encodeURIComponent(returnId);
        return this.get(`/return/draft/${id}`);
    }
    getReturnDraftFiles(returnId) {
        const id = encodeURIComponent(returnId);
        return this.get(`/return/draft/${id}/files`);
    }
    getReturnEstimate(payload) {
        return this.post(`/return/estimate`, payload);
    }
    getReturnFiles(returnId) {
        const id = encodeURIComponent(returnId);
        return this.get(`/return/${id}/files`);
    }
    getReturnPreferences() {
        return this.get(`/return/preference`);
    }
    getReturnShippingLabel(returnId) {
        returnId = encodeURIComponent(returnId);
        return this.get(`/return/${returnId}/get_shipping_label`);
    }
    getShipmentTrackingInfo(returnId, carrierUsed, trackingNumber) {
        returnId = encodeURIComponent(returnId);
        return this.get(`/return/${returnId}/tracking`, {
            params: {
                carrier_used: carrierUsed,
                tracking_number: trackingNumber
            }
        });
    }
    issueReturnRefund(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/issue_refund`, payload);
    }
    markReturnReceived(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/mark_as_received`, payload);
    }
    markReturnRefundReceived(returnId) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/mark_refund_received`);
    }
    markReturnRefundSent(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/mark_refund_sent`, payload);
    }
    markReturnShipped(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/mark_as_shipped`, payload);
    }
    processReturnRequest(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/decide`, payload);
    }
    search(params) {
        return this.get(`/return/search`, {
            params
        });
    }
    sendReturnMessage(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/send_message`, payload);
    }
    sendReturnShippingLabel(returnId, toEmailAddress) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/send_shipping_label`, {}, {
            params: {
                to_email_address: toEmailAddress
            }
        });
    }
    setReturnPreferences(rmaRequired) {
        return this.post(`/return/preference`, {
            rmaRequired
        });
    }
    submitReturnFile(returnId, filePurpose) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/file/submit`, {
            filePurpose
        });
    }
    updateReturnDraft(draftId, returnRequest) {
        draftId = encodeURIComponent(draftId);
        return this.put(`/return/draft/${draftId}`, {
            returnRequest
        });
    }
    updateShipmentTrackingInfo(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.put(`/return/${returnId}/update_tracking`, payload);
    }
    uploadReturnDraftFile(draftId, payload) {
        draftId = encodeURIComponent(draftId);
        return this.post(`/return/draft/${draftId}/file/upload`, payload);
    }
    uploadReturnFile(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/file/upload`, payload);
    }
    voidShippingLabel(returnId, payload) {
        returnId = encodeURIComponent(returnId);
        return this.post(`/return/${returnId}/void_shipping_label`, payload);
    }
}
Return.id = 'Return';
export default Return;
