import Restful from '../../index.js';
class Compliance extends Restful {
    get basePath() {
        return '/sell/compliance/v1';
    }
    getListingViolationsSummary(complianceType) {
        return this.get(`/listing_violation_summary`, {
            params: {
                compliance_type: complianceType
            }
        });
    }
    getListingViolations({ complianceType, offset, listingId, limit } = {}) {
        return this.get(`/listing_violation`, {
            params: {
                compliance_type: complianceType,
                offset,
                listing_id: listingId,
                limit
            }
        });
    }
    suppressViolation(body) {
        return this.post(`/suppress_listing_violation`, body);
    }
}
Compliance.id = 'Compliance';
export default Compliance;
