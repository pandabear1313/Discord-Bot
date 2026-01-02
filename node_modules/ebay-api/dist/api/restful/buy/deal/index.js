import Restful from '../../index.js';
class Deal extends Restful {
    get basePath() {
        return '/buy/deal/v1';
    }
    getDealItems({ categoryIds, commissionable, deliveryCountry, limit, offset }) {
        return this.get(`/deal_item`, {
            params: {
                category_ids: categoryIds,
                commissionable,
                delivery_country: deliveryCountry,
                limit,
                offset
            }
        });
    }
    getEvent(eventId) {
        eventId = encodeURIComponent(eventId);
        return this.get(`/event/${eventId}`);
    }
    getEvents({ limit, offset }) {
        return this.get(`/event`, {
            params: {
                limit,
                offset
            }
        });
    }
    getEventItems(eventIds, { categoryIds, deliveryCountry, limit, offset } = {}) {
        return this.get(`/event_item`, {
            params: {
                event_ids: eventIds,
                limit,
                offset,
                category_ids: categoryIds,
                delivery_country: deliveryCountry
            }
        });
    }
}
Deal.id = 'Deal';
export default Deal;
