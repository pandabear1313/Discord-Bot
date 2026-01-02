import ApiFactory from './api/apiFactory.js';
import Api from './api/index.js';
import * as enums from './enums/index.js';
import { ContentLanguage, Locale, MarketplaceId, SiteId } from './enums/index.js';
import * as errors from './errors/index.js';
import { ApiEnvError } from './errors/index.js';
import * as types from './types/index.js';
const defaultConfig = {
    sandbox: false,
    autoRefreshToken: true,
    siteId: SiteId.EBAY_US,
    marketplaceId: MarketplaceId.EBAY_US,
    acceptLanguage: Locale.en_US,
    contentLanguage: ContentLanguage.en_US
};
class eBayApi extends Api {
    static fromEnv(req) {
        if (!process.env.EBAY_APP_ID) {
            throw new ApiEnvError('EBAY_APP_ID');
        }
        if (!process.env.EBAY_CERT_ID) {
            throw new ApiEnvError('EBAY_CERT_ID');
        }
        let signature = null;
        if (process.env.EBAY_JWE && process.env.EBAY_PRIVATE_KEY) {
            signature = {
                jwe: process.env.EBAY_JWE,
                privateKey: process.env.EBAY_PRIVATE_KEY
            };
        }
        return new eBayApi({
            appId: process.env.EBAY_APP_ID,
            certId: process.env.EBAY_CERT_ID,
            devId: process.env.EBAY_DEV_ID,
            authToken: process.env.EBAY_AUTH_TOKEN,
            siteId: process.env.EBAY_SITE_ID ? parseInt(process.env.EBAY_SITE_ID, 10) : SiteId.EBAY_US,
            marketplaceId: process.env.EBAY_MARKETPLACE_ID && process.env.EBAY_MARKETPLACE_ID in MarketplaceId ?
                MarketplaceId[process.env.EBAY_MARKETPLACE_ID] :
                MarketplaceId.EBAY_US,
            ruName: process.env.EBAY_RU_NAME,
            sandbox: (process.env.EBAY_SANDBOX === 'true'),
            signature
        }, req);
    }
    constructor(config, req) {
        super({ ...defaultConfig, ...config }, req);
        this.factory = new ApiFactory(this.config, this.req, this.auth);
        this.authNAuth = this.auth.authNAuth;
        this.OAuth2 = this.auth.OAuth2;
        this.oAuth2 = this.OAuth2;
    }
    get buy() {
        return this._buy || (this._buy = this.factory.createBuyApi());
    }
    get commerce() {
        return this._commerce || (this._commerce = this.factory.createCommerceApi());
    }
    get developer() {
        return this._developer || (this._developer = this.factory.createDeveloperApi());
    }
    get postOrder() {
        return this._postOrder || (this._postOrder = this.factory.createPostOrderApi());
    }
    get sell() {
        return this._sell || (this._sell = this.factory.createSellApi());
    }
    get trading() {
        return this._trading || (this._trading = this.factory.createTradingApi());
    }
    get finding() {
        return this._finding || (this._finding = this.factory.createFindingApi());
    }
    get shopping() {
        return this._shopping || (this._shopping = this.factory.createShoppingApi());
    }
    get merchandising() {
        return this._merchandising || (this._merchandising = this.factory.createMerchandisingApi());
    }
    get clientAlerts() {
        return this._clientAlerts || (this._clientAlerts = this.factory.createClientAlertsApi());
    }
    setSignature(signature) {
        this.config.signature = signature;
    }
}
eBayApi.SiteId = SiteId;
eBayApi.MarketplaceId = MarketplaceId;
eBayApi.ContentLanguage = ContentLanguage;
eBayApi.Locale = Locale;
export default eBayApi;
export { eBayApi, SiteId, MarketplaceId, ContentLanguage, Locale, enums, errors, types };
