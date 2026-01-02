import Restful from '../../index.js';
class Charity extends Restful {
    get basePath() {
        return '/commerce/charity/v1';
    }
    getCharityOrg(charityOrgId) {
        charityOrgId = encodeURIComponent(charityOrgId);
        return this.get(`/charity_org/${charityOrgId}`);
    }
    getCharityOrgs({ limit, offset, q, registrationIds }) {
        return this.get(`/charity_org`, {
            params: {
                limit,
                offset,
                q,
                registration_ids: registrationIds
            }
        });
    }
    getCharityOrgByLegacyId(legacyCharityOrgId) {
        return this.get(`/charity_org/get_charity_org_by_legacy_id`, {
            params: {
                legacy_charity_org_id: legacyCharityOrgId
            }
        });
    }
}
Charity.id = 'Charity';
export default Charity;
