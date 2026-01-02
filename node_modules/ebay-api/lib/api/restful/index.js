"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultApiHeaders = void 0;
const index_js_1 = require("../../errors/index.js");
const index_js_2 = __importDefault(require("../index.js"));
exports.defaultApiHeaders = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    ...(typeof window === 'undefined' ? {
        'Accept-Encoding': 'application/gzip'
    } : {})
};
const additionalHeaders = {
    marketplaceId: 'X-EBAY-C-MARKETPLACE-ID',
    endUserCtx: 'X-EBAY-C-ENDUSERCTX',
    acceptLanguage: 'Accept-Language',
    contentLanguage: 'Content-Language',
};
class Restful extends index_js_2.default {
    constructor(config, req, auth, apiConfig = {}) {
        super(config, req, auth);
        this.apiConfig = {
            ...this.getApiConfig(),
            ...apiConfig
        };
    }
    static buildServerUrl(schema, subdomain, sandbox, tld) {
        return `${schema}${subdomain}.${sandbox ? 'sandbox.' : ''}${tld}`;
    }
    get useIaf() {
        return false;
    }
    get schema() {
        return 'https://';
    }
    get subdomain() {
        return 'api';
    }
    get apiVersionPath() {
        return '';
    }
    getServerUrl({ schema, subdomain, apiVersion, basePath, sandbox, tld }) {
        return Restful.buildServerUrl(schema, subdomain, sandbox, tld) + apiVersion + basePath;
    }
    getApiConfig() {
        return {
            subdomain: this.subdomain,
            useIaf: this.useIaf,
            apiVersion: this.apiVersionPath,
            basePath: this.basePath,
            schema: this.schema,
            sandbox: this.config.sandbox,
            tld: 'ebay.com',
            headers: {},
            returnResponse: false,
            sign: false
        };
    }
    get baseUrl() {
        return this.getServerUrl(this.apiConfig);
    }
    api(apiConfig) {
        return new this.constructor(this.config, this.req, this.auth, apiConfig);
    }
    get apix() {
        return this.api({ subdomain: 'apix' });
    }
    get apiz() {
        return this.api({ subdomain: 'apiz' });
    }
    get sign() {
        return this.api({ sign: true });
    }
    async get(path, config = {}, apiConfig) {
        return this.doRequest({ method: 'get', path, config }, apiConfig);
    }
    async delete(path, config = {}, apiConfig) {
        return this.doRequest({ method: 'delete', path, config }, apiConfig);
    }
    async post(path, data, config = {}, apiConfig) {
        return this.doRequest({ method: 'post', path, data, config }, apiConfig);
    }
    async put(path, data, config = {}, apiConfig) {
        return this.doRequest({ method: 'put', path, data, config }, apiConfig);
    }
    get additionalHeaders() {
        return Object.keys(additionalHeaders)
            .filter(key => typeof this.config[key] !== 'undefined')
            .reduce((headers, key) => {
            headers[additionalHeaders[key]] = this.config[key];
            return headers;
        }, {});
    }
    async enrichRequestConfig(apiRequest, payload = null, apiConfig = this.apiConfig) {
        const authHeader = await this.auth.getHeaderAuthorization(apiConfig.useIaf);
        const signatureHeaders = apiConfig.sign ? this.getDigitalSignatureHeaders({
            method: apiRequest.method.toUpperCase(),
            authority: Restful.buildServerUrl('', apiConfig.subdomain, apiConfig.sandbox, apiConfig.tld),
            path: apiConfig.apiVersion + apiConfig.basePath + apiRequest.path
        }, payload) : {};
        const headers = {
            ...exports.defaultApiHeaders,
            ...this.additionalHeaders,
            ...authHeader,
            ...apiConfig.headers,
            ...signatureHeaders
        };
        return {
            ...apiRequest.config,
            headers: {
                ...(apiRequest.config.headers || {}),
                ...headers
            }
        };
    }
    async doRequest(payload, apiConfig) {
        try {
            return await this.request(payload, apiConfig);
        }
        catch (error) {
            if (this.shouldRefreshToken(error)) {
                return await this.request(payload, apiConfig, true);
            }
            throw error;
        }
    }
    shouldRefreshToken(error) {
        if (!this.config.autoRefreshToken) {
            return false;
        }
        if (error.name === index_js_1.EBayInvalidAccessToken.name) {
            return true;
        }
        else if (error?.meta?.res?.status === 403 && this.apiConfig.basePath === '/sell/inventory/v1') {
            return true;
        }
        return error?.meta?.res?.status === 401 && this.apiConfig.basePath === '/post-order/v2';
    }
    async request(apiRequest, apiConfig = this.apiConfig, refreshToken = false) {
        const { path, method, data } = apiRequest;
        const apiCfg = { ...this.apiConfig, ...apiConfig };
        const endpoint = this.getServerUrl(apiCfg) + path;
        try {
            if (refreshToken) {
                await this.auth.OAuth2.refreshToken();
            }
            const enrichedConfig = await this.enrichRequestConfig(apiRequest, data, apiCfg);
            const args = ['get', 'delete'].includes(method) ? [enrichedConfig] : [data, enrichedConfig];
            const response = await this.req[method](endpoint, ...args);
            if (this.apiConfig.returnResponse) {
                return response;
            }
            else {
                return response.data;
            }
        }
        catch (error) {
            (0, index_js_1.handleEBayError)(error);
        }
    }
}
exports.default = Restful;
