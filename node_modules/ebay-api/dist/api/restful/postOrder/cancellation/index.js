import Restful from '../../index.js';
class Cancellation extends Restful {
    get basePath() {
        return '/post-order/v2';
    }
    get useIaf() {
        return true;
    }
    approveCancellationRequest(cancelId) {
        cancelId = encodeURIComponent(cancelId);
        return this.post(`/cancellation/${cancelId}/approve`);
    }
    checkCancellationEligibility(legacyOrderId) {
        return this.post(`/cancellation/check_eligibility`, {
            legacyOrderId
        });
    }
    confirmRefundReceived(cancelId, payload) {
        cancelId = encodeURIComponent(cancelId);
        return this.post(`/cancellation/${cancelId}/confirm`, payload);
    }
    createCancellation(payload) {
        return this.post(`/cancellation`, payload);
    }
    getCancellation(cancelId, fieldGroups) {
        cancelId = encodeURIComponent(cancelId);
        return this.get(`/cancellation/${cancelId}`, {
            params: {
                fieldgroups: fieldGroups
            }
        });
    }
    rejectCancellationRequest(cancelId, payload) {
        cancelId = encodeURIComponent(cancelId);
        return this.post(`/cancellation/${cancelId}/reject`, payload);
    }
    search(params) {
        return this.get(`/cancellation/search`, {
            params
        });
    }
}
Cancellation.id = 'Cancellation';
export default Cancellation;
