"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosRequest = exports.defaultAxiosConfig = exports.multipartHeader = exports.defaultGlobalHeaders = void 0;
const axios_1 = __importDefault(require("axios"));
const debug_1 = __importDefault(require("debug"));
const qs_1 = require("qs");
const log = (0, debug_1.default)('ebay:request');
exports.defaultGlobalHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With, Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
};
exports.multipartHeader = {
    'Content-Type': 'multipart/form-data'
};
exports.defaultAxiosConfig = {
    paramsSerializer: {
        indexes: null
    }
};
class AxiosRequest {
    constructor(config = {}) {
        this.instance = axios_1.default.create({
            headers: {
                ...exports.defaultGlobalHeaders
            },
            ...exports.defaultAxiosConfig,
            ...config
        });
    }
    get(url, config) {
        log('get: ' + url, config);
        return this.instance.get(url, config);
    }
    post(url, payload, config) {
        log('post: ' + url, { payload, config });
        return this.instance.post(url, payload, config);
    }
    delete(url, config) {
        log('delete: ' + url, config);
        return this.instance.delete(url, config);
    }
    put(url, payload, config) {
        log('put: ' + url, { payload, config });
        return this.instance.put(url, payload, config);
    }
    postForm(url, payload, config) {
        log('postForm: ' + url);
        const body = (0, qs_1.stringify)(payload);
        return this.instance.post(url, body, config);
    }
}
exports.AxiosRequest = AxiosRequest;
