import Restful from '../../index.js';
class Marketing extends Restful {
    get basePath() {
        return '/buy/marketing/v1_beta';
    }
    getAlsoBoughtByProduct(params) {
        return this.get(`/merchandised_product/get_also_bought_products`, {
            params
        });
    }
    getAlsoViewedByProduct(params) {
        return this.get(`/merchandised_product/get_also_viewed_products`, {
            params
        });
    }
    getMerchandisedProducts(params) {
        return this.get(`/merchandised_product`, {
            params
        });
    }
}
Marketing.id = 'Marketing';
export default Marketing;
