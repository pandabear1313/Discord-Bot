import Restful from '../../index.js';
class Offer extends Restful {
    get basePath() {
        return '/buy/offer/v1_beta';
    }
    getBidding(itemId) {
        const id = encodeURIComponent(itemId);
        return this.get(`/bidding/${id}`);
    }
    placeProxyBid(itemId, body) {
        const id = encodeURIComponent(itemId);
        return this.post(`/bidding/${id}/place_proxy_bid`, body);
    }
}
Offer.id = 'Offer';
export default Offer;
