import Restful from '../../index.js';
class Browse extends Restful {
    get basePath() {
        return '/buy/browse/v1';
    }
    search(params) {
        return this.get(`/item_summary/search`, {
            params
        });
    }
    searchByImage(params, body) {
        return this.post(`/item_summary/search_by_image`, body, {
            params
        });
    }
    getItems(params) {
        return this.get(`/item/`, {
            params
        });
    }
    getItem(itemId, fieldgroups) {
        const id = encodeURIComponent(itemId);
        return this.get(`/item/${id}`, {
            params: {
                fieldgroups
            }
        });
    }
    getItemByLegacyId(params) {
        return this.get(`/item/get_item_by_legacy_id`, {
            params
        });
    }
    getItemsByItemGroup(itemGroupId) {
        return this.get(`/item/get_items_by_item_group`, {
            params: {
                item_group_id: itemGroupId
            }
        });
    }
    checkCompatibility(itemId, body) {
        const id = encodeURIComponent(itemId);
        return this.post(`/item/${id}/check_compatibility`, body);
    }
    addItem(item) {
        return this.post(`/shopping_cart/add_item`, item);
    }
    getShoppingCart() {
        return this.get(`/shopping_cart/`);
    }
    removeItem(item) {
        return this.post(`/shopping_cart/remove_item`, item);
    }
    updateQuantity(item) {
        return this.post(`/shopping_cart/update_quantity`, item);
    }
}
Browse.id = 'Browse';
export default Browse;
