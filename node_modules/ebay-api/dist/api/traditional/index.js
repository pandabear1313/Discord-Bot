import { stringify } from 'qs';
import { EBayAuthTokenIsHardExpired, EBayAuthTokenIsInvalid, EBayIAFTokenExpired, EBayIAFTokenInvalid, handleEBayError } from '../../errors/index.js';
import Api from '../index.js';
import ClientAlertsCalls from './clientAlerts/index.js';
import FindingCalls from './finding/index.js';
import MerchandisingCalls from './merchandising/index.js';
import ShoppingCalls from './shopping/index.js';
import TradingCalls from './trading/index.js';
import XMLRequest, { defaultApiConfig } from './XMLRequest.js';
export default class Traditional extends Api {
    constructor() {
        super(...arguments);
        this.createXMLRequest = (callName, api) => async (fields, opts) => {
            const apiConfig = { ...defaultApiConfig, ...opts };
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
            calls: TradingCalls,
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
            calls: ShoppingCalls,
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
            calls: FindingCalls,
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
            calls: ClientAlertsCalls
        };
        const endpoint = api.endpoint[this.config.sandbox ? 'sandbox' : 'production'];
        const paramsSerializer = (args) => {
            return stringify(args, { allowDots: true })
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
            calls: MerchandisingCalls,
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
        return error.name === EBayIAFTokenExpired.name
            || error.name === EBayIAFTokenInvalid.name
            || error.name === EBayAuthTokenIsHardExpired.name
            || error.name === EBayAuthTokenIsInvalid.name;
    }
    async request(apiConfig, api, callName, fields, refreshToken = false) {
        try {
            if (refreshToken) {
                await this.auth.OAuth2.refreshToken();
            }
            const config = await this.getConfig(api, callName, apiConfig);
            const xmlRequest = new XMLRequest(callName, fields, config, this.req);
            return await xmlRequest.request();
        }
        catch (error) {
            handleEBayError(error);
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
