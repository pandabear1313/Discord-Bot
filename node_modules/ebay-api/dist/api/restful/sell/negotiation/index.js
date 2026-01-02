import Restful from '../../index.js';
class Negotiation extends Restful {
    get basePath() {
        return '/sell/negotiation/v1';
    }
    findEligibleItems({ limit, offset } = {}) {
        return this.get(`/find_eligible_items`, {
            params: {
                limit,
                offset
            }
        });
    }
    sendOfferToInterestedBuyers(data) {
        return this.post(`/send_offer_to_interested_buyers`, data);
    }
}
Negotiation.id = 'Negotiation';
export default Negotiation;
