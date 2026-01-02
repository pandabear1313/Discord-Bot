import { ClientAlerts, Finding, Merchandising, Shopping, Trading } from '../types/index.js';
import Api from './index.js';
import { Buy } from './restful/buy/index.js';
import { Commerce } from './restful/commerce/index.js';
import { Developer } from './restful/developer/index.js';
import { PostOrder } from './restful/postOrder/index.js';
import { Sell } from './restful/sell/index.js';
import Traditional from './traditional/index.js';
export default class ApiFactory extends Api {
    private _traditional?;
    private _restful;
    createBuyApi(): Buy;
    createCommerceApi(): Commerce;
    createDeveloperApi(): Developer;
    createPostOrderApi(): PostOrder;
    createSellApi(): Sell;
    get traditional(): Traditional;
    createTradingApi(): Trading;
    createShoppingApi(): Shopping;
    createFindingApi(): Finding;
    createClientAlertsApi(): ClientAlerts;
    createMerchandisingApi(): Merchandising;
    private createRestfulApi;
}
