import { BuyMarketingGetAlsoBoughtByProductParams, BuyMarketingGetAlsoViewedByProductParams, BuyMarketingGetMerchandisedProductsParams } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/buy_marketing_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Marketing extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getAlsoBoughtByProduct(params: BuyMarketingGetAlsoBoughtByProductParams): Promise<any>;
    getAlsoViewedByProduct(params: BuyMarketingGetAlsoViewedByProductParams): Promise<any>;
    getMerchandisedProducts(params: BuyMarketingGetMerchandisedProductsParams): Promise<any>;
}
