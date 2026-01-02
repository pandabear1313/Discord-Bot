import Restful from '../../index.js';
class Listing extends Restful {
    get basePath() {
        return '/sell/listing/v1_beta';
    }
    createItemDraft(data) {
        return this.post(`/item_draft/`, data);
    }
}
Listing.id = 'Listing';
export default Listing;
