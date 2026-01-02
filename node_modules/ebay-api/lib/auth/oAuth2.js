"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const base_js_1 = __importDefault(require("../api/base.js"));
const nanoevents_js_1 = require("../nanoevents.js");
const log = (0, debug_1.default)('ebay:oauth2');
class OAuth2 extends base_js_1.default {
    constructor(config, req) {
        super(config, req);
        this.emitter = (0, nanoevents_js_1.createNanoEvents)();
        this.scope = this.config.scope || OAuth2.defaultScopes;
    }
    on(event, callback) {
        return this.emitter.on(event, callback);
    }
    get identityEndpoint() {
        return this.config.sandbox ? OAuth2.IDENTITY_ENDPOINT.sandbox : OAuth2.IDENTITY_ENDPOINT.production;
    }
    static generateAuthUrl(sandbox, appId, ruName, scope, state = '') {
        return [
            sandbox ? OAuth2.AUTHORIZE_ENDPOINT.sandbox : OAuth2.AUTHORIZE_ENDPOINT.production,
            '?client_id=', encodeURIComponent(appId),
            '&redirect_uri=', encodeURIComponent(ruName),
            '&response_type=code',
            '&state=', encodeURIComponent(state),
            '&scope=', encodeURIComponent(scope.join(' '))
        ].join('');
    }
    generateAuthUrl(ruName, scope = this.scope, state = '') {
        ruName = ruName || this.config.ruName;
        if (!ruName) {
            throw new Error('RuName is required.');
        }
        return OAuth2.generateAuthUrl(this.config.sandbox, this.config.appId, ruName, scope, state);
    }
    async getAccessToken() {
        return this.getUserAccessToken() || this.getApplicationAccessToken();
    }
    getUserAccessToken() {
        return this._authToken?.access_token ?? null;
    }
    async getApplicationAccessToken() {
        if (this._clientToken) {
            log('Return existing application access token: ', this._clientToken);
            return this._clientToken.access_token;
        }
        try {
            const token = await this.obtainApplicationAccessToken();
            return token.access_token;
        }
        catch (error) {
            throw error;
        }
    }
    getScope() {
        return [...this.scope];
    }
    setClientToken(clientToken) {
        this._clientToken = clientToken;
    }
    setScope(scope) {
        this.scope = scope;
    }
    async mintApplicationAccessToken() {
        if (!this.config.appId) {
            throw new Error('Missing App ID (Client Id)');
        }
        if (!this.config.certId) {
            throw new Error('Missing Cert Id (Client Secret)');
        }
        try {
            const response = await this.req.postForm(this.identityEndpoint, {
                scope: this.scope.join(' '),
                grant_type: 'client_credentials',
            }, {
                auth: {
                    username: this.config.appId,
                    password: this.config.certId
                }
            });
            return response.data;
        }
        catch (error) {
            log('Failed to mint application token', error);
            throw error;
        }
    }
    async obtainApplicationAccessToken() {
        log('Obtain a new application access token with scope: ', this.scope.join(','));
        try {
            const token = await this.mintApplicationAccessToken();
            log('Obtained a new application access token:', token);
            this.setClientToken(token);
            this.emitter.emit('refreshClientToken', token);
            return token;
        }
        catch (error) {
            log('Failed to obtain application token', error);
            throw error;
        }
    }
    async mintUserAccessToken(code, ruName = this.config.ruName) {
        if (!this.config.appId) {
            throw new Error('Missing App ID (Client Id)');
        }
        if (!this.config.certId) {
            throw new Error('Missing Cert Id (Client Secret)');
        }
        try {
            const response = await this.req.postForm(this.identityEndpoint, {
                grant_type: 'authorization_code',
                code,
                redirect_uri: ruName
            }, {
                auth: {
                    username: this.config.appId,
                    password: this.config.certId
                }
            });
            const token = response.data;
            log('User Access Token', token);
            return token;
        }
        catch (error) {
            log('Failed to get the token', error);
            throw error;
        }
    }
    async getToken(code, ruName = this.config.ruName) {
        return await this.mintUserAccessToken(code, ruName);
    }
    async refreshUserAccessToken() {
        if (!this._authToken || !this._authToken.refresh_token) {
            log('Tried to refresh user access token before it was set.');
            throw new Error('Failed to refresh the user access token. Token or refresh_token is not set.');
        }
        try {
            const response = await this.req.postForm(this.identityEndpoint, {
                grant_type: 'refresh_token',
                refresh_token: this._authToken.refresh_token,
                scope: this.scope.join(' ')
            }, {
                auth: {
                    username: this.config.appId,
                    password: this.config.certId
                }
            });
            const token = response.data;
            log('Successfully refreshed token', token);
            const refreshedToken = {
                ...this._authToken,
                ...token
            };
            this.setCredentials(refreshedToken);
            this.emitter.emit('refreshAuthToken', refreshedToken);
            return refreshedToken;
        }
        catch (error) {
            log('Failed to refresh the token', error);
            throw error;
        }
    }
    async obtainToken(code) {
        const token = await this.getToken(code);
        log('Obtain user access token', token);
        this.setCredentials(token);
        return token;
    }
    getCredentials() {
        if (this._authToken) {
            return {
                ...this._authToken
            };
        }
        else if (this._clientToken) {
            return {
                ...this._clientToken
            };
        }
        return null;
    }
    setCredentials(authToken) {
        if (typeof authToken === 'string') {
            this._authToken = {
                refresh_token: '',
                expires_in: 7200,
                refresh_token_expires_in: 47304000,
                token_type: 'User Access Token',
                access_token: authToken
            };
        }
        else {
            this._authToken = authToken;
        }
    }
    async refreshToken() {
        if (this._authToken) {
            return await this.refreshUserAccessToken();
        }
        else if (this._clientToken) {
            return await this.obtainApplicationAccessToken();
        }
        throw new Error('Missing credentials. To refresh a token an application access token or user access token must be already set.');
    }
}
OAuth2.IDENTITY_ENDPOINT = {
    production: 'https://api.ebay.com/identity/v1/oauth2/token',
    sandbox: 'https://api.sandbox.ebay.com/identity/v1/oauth2/token'
};
OAuth2.AUTHORIZE_ENDPOINT = {
    production: 'https://auth.ebay.com/oauth2/authorize',
    sandbox: 'https://auth.sandbox.ebay.com/oauth2/authorize'
};
OAuth2.defaultScopes = ['https://api.ebay.com/oauth/api_scope'];
exports.default = OAuth2;
