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
const qs_1 = require("qs");
const index_js_1 = require("../../errors/index.js");
const index_js_2 = __importDefault(require("../index.js"));
const index_js_3 = __importDefault(require("./clientAlerts/index.js"));
const index_js_4 = __importDefault(require("./finding/index.js"));
const index_js_5 = __importDefault(require("./merchandising/index.js"));
const index_js_6 = __importDefault(require("./shopping/index.js"));
const index_js_7 = __importDefault(require("./trading/index.js"));
const XMLRequest_js_1 = __importStar(require("./XMLRequest.js"));
class Traditional extends index_js_2.default {
    constructor() {
        super(...arguments);
        this.createXMLRequest = (callName, api) => async (fields, opts) => {
            const apiConfig = { ...XMLRequest_js_1.defaultApiConfig, ...opts };
            try {
                return await this.request(apiConfig, api, callName, fields);
            }
            catch (error) {
                if (this.shouldRefreshToken(error)) {
                    return await this.request(apiConfig, api, callName, fields, true);
                }
                throw error;
            }
        };
    }
    createTradingApi() {
        if (typeof this.config.siteId !== 'number') {
            throw new Error('siteId is required for trading API.');
        }
        return this.createTraditionalXMLApi({
            endpoint: {
                production: 'api.ebay.com',
                sandbox: 'api.sandbox.ebay.com'
            },
            path: '/ws/api.dll',
            calls: index_js_7.default,
            xmlns: 'urn:ebay:apis:eBLBaseComponents',
            headers: (callName, accessToken) => ({
                'X-EBAY-API-CALL-NAME': callName,
                'X-EBAY-API-CERT-NAME': this.config.certId,
                'X-EBAY-API-APP-NAME': this.config.appId,
                'X-EBAY-API-DEV-NAME': this.config.devId,
                'X-EBAY-API-SITEID': this.config.siteId,
                'X-EBAY-API-COMPATIBILITY-LEVEL': 967,
                ...(accessToken && { 'X-EBAY-API-IAF-TOKEN': accessToken })
            })
        });
    }
    createShoppingApi() {
        if (typeof this.config.siteId !== 'number') {
            throw new Error('siteId is required for shopping API.');
        }
        return this.createTraditionalXMLApi({
            endpoint: {
                production: 'open.api.ebay.com',
                sandbox: 'open.api.sandbox.ebay.com'
            },
            path: '/shopping',
            xmlns: 'urn:ebay:apis:eBLBaseComponents',
            calls: index_js_6.default,
            headers: (callName, accessToken) => ({
                'X-EBAY-API-CALL-NAME': callName,
                'X-EBAY-API-SITE-ID': this.config.siteId,
                'X-EBAY-API-VERSION': 863,
                'X-EBAY-API-REQUEST-ENCODING': 'xml',
                ...(accessToken && { 'X-EBAY-API-IAF-TOKEN': accessToken })
            })
        });
    }
    createFindingApi() {
        return this.createTraditionalXMLApi({
            endpoint: {
                production: 'svcs.ebay.com',
                sandbox: 'svcs.sandbox.ebay.com'
            },
            path: '/services/search/FindingService/v1',
            xmlns: 'http://www.ebay.com/marketplace/search/v1/services',
            calls: index_js_4.default,
            headers: (callName) => ({
                'X-EBAY-SOA-SECURITY-APPNAME': this.config.appId,
                'X-EBAY-SOA-OPERATION-NAME': callName
            })
        });
    }
    createClientAlertsApi() {
        if (typeof this.config.siteId !== 'number') {
            throw new Error('siteId is required for client alerts API.');
        }
        const api = {
            endpoint: {
                production: 'clientalerts.ebay.com',
                sandbox: 'clientalerts.sandbox.ebay.com'
            },
            path: '/ws/ecasvc/ClientAlerts',
            calls: index_js_3.default
        };
        const endpoint = api.endpoint[this.config.sandbox ? 'sandbox' : 'production'];
        const paramsSerializer = (args) => {
            return (0, qs_1.stringify)(args, { allowDots: true })
                .replace(/%5B/gi, '(')
                .replace(/%5D/gi, ')');
        };
        const params = {
            appid: this.config.appId,
            siteid: this.config.siteId,
            version: 643
        };
        const service = {};
        Object.keys(api.calls).forEach((callName) => {
            service[callName] = async (fields) => {
                return this.req.get(endpoint, {
                    paramsSerializer: {
                        serialize: paramsSerializer
                    },
                    params: {
                        ...params,
                        ...fields,
                        callname: callName
                    }
                });
            };
        });
        return service;
    }
    createMerchandisingApi() {
        return this.createTraditionalXMLApi({
            endpoint: {
                production: 'svcs.ebay.com',
                sandbox: 'svcs.sandbox.ebay.com'
            },
            path: '/MerchandisingService',
            xmlns: 'http://www.ebay.com/marketplace/services',
            calls: index_js_5.default,
            headers: (callName) => ({
                'EBAY-SOA-CONSUMER-ID': this.config.appId,
                'X-EBAY-SOA-OPERATION-NAME': callName
            })
        });
    }
    createBusinessPolicyManagementApi() {
        throw new Error('Important! This API is deprecated and will be decommissioned on January 31, 2022. We recommend that you migrate to the fulfillment_policy, payment_policy, and return_policy resources of the Account API to set up and manage all of your fulfillment, payment, and return business policies.');
    }
    shouldRefreshToken(error) {
        if (!this.config.autoRefreshToken) {
            return false;
        }
        return error.name === index_js_1.EBayIAFTokenExpired.name
            || error.name === index_js_1.EBayIAFTokenInvalid.name
            || error.name === index_js_1.EBayAuthTokenIsHardExpired.name
            || error.name === index_js_1.EBayAuthTokenIsInvalid.name;
    }
    async request(apiConfig, api, callName, fields, refreshToken = false) {
        try {
            if (refreshToken) {
                await this.auth.OAuth2.refreshToken();
            }
            const config = await this.getConfig(api, callName, apiConfig);
            const xmlRequest = new XMLRequest_js_1.default(callName, fields, config, this.req);
            return await xmlRequest.request();
        }
        catch (error) {
            (0, index_js_1.handleEBayError)(error);
        }
    }
    async getConfig(api, callName, apiConfig) {
        const eBayAuthToken = this.auth.authNAuth.eBayAuthToken;
        const accessToken = !eBayAuthToken && apiConfig.useIaf ? (await this.auth.OAuth2.getAccessToken()) : null;
        const useIaf = !eBayAuthToken && accessToken;
        const host = this.config.sandbox ? api.endpoint.sandbox : api.endpoint.production;
        return {
            ...apiConfig,
            xmlns: api.xmlns,
            endpoint: `https://${host}${api.path}`,
            headers: {
                ...api.headers(callName, useIaf ? accessToken : null),
                ...apiConfig.headers
            },
            digitalSignatureHeaders: payload => {
                return apiConfig.sign ? this.getDigitalSignatureHeaders({
                    method: 'POST',
                    authority: host,
                    path: api.path
                }, payload) : {};
            },
            ...(!useIaf ? { eBayAuthToken } : {})
        };
    }
    createTraditionalXMLApi(traditionalApi) {
        const api = {};
        Object.keys(traditionalApi.calls).forEach((callName) => {
            api[callName] = this.createXMLRequest(callName, traditionalApi);
        });
        return api;
    }
}
exports.default = Traditional;
