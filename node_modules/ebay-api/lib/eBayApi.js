"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.errors = exports.enums = exports.Locale = exports.ContentLanguage = exports.MarketplaceId = exports.SiteId = exports.eBayApi = void 0;
const apiFactory_js_1 = __importDefault(require("./api/apiFactory.js"));
const index_js_1 = __importDefault(require("./api/index.js"));
const enums = __importStar(require("./enums/index.js"));
exports.enums = enums;
const index_js_2 = require("./enums/index.js");
Object.defineProperty(exports, "ContentLanguage", { enumerable: true, get: function () { return index_js_2.ContentLanguage; } });
Object.defineProperty(exports, "Locale", { enumerable: true, get: function () { return index_js_2.Locale; } });
Object.defineProperty(exports, "MarketplaceId", { enumerable: true, get: function () { return index_js_2.MarketplaceId; } });
Object.defineProperty(exports, "SiteId", { enumerable: true, get: function () { return index_js_2.SiteId; } });
const errors = __importStar(require("./errors/index.js"));
exports.errors = errors;
const index_js_3 = require("./errors/index.js");
const types = __importStar(require("./types/index.js"));
exports.types = types;
const defaultConfig = {
    sandbox: false,
    autoRefreshToken: true,
    siteId: index_js_2.SiteId.EBAY_US,
    marketplaceId: index_js_2.MarketplaceId.EBAY_US,
    acceptLanguage: index_js_2.Locale.en_US,
    contentLanguage: index_js_2.ContentLanguage.en_US
};
class eBayApi extends index_js_1.default {
    static fromEnv(req) {
        if (!process.env.EBAY_APP_ID) {
            throw new index_js_3.ApiEnvError('EBAY_APP_ID');
        }
        if (!process.env.EBAY_CERT_ID) {
            throw new index_js_3.ApiEnvError('EBAY_CERT_ID');
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
            siteId: process.env.EBAY_SITE_ID ? parseInt(process.env.EBAY_SITE_ID, 10) : index_js_2.SiteId.EBAY_US,
            marketplaceId: process.env.EBAY_MARKETPLACE_ID && process.env.EBAY_MARKETPLACE_ID in index_js_2.MarketplaceId ?
                index_js_2.MarketplaceId[process.env.EBAY_MARKETPLACE_ID] :
                index_js_2.MarketplaceId.EBAY_US,
            ruName: process.env.EBAY_RU_NAME,
            sandbox: (process.env.EBAY_SANDBOX === 'true'),
            signature
        }, req);
    }
    constructor(config, req) {
        super({ ...defaultConfig, ...config }, req);
        this.factory = new apiFactory_js_1.default(this.config, this.req, this.auth);
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
exports.eBayApi = eBayApi;
eBayApi.SiteId = index_js_2.SiteId;
eBayApi.MarketplaceId = index_js_2.MarketplaceId;
eBayApi.ContentLanguage = index_js_2.ContentLanguage;
eBayApi.Locale = index_js_2.Locale;
exports.default = eBayApi;
