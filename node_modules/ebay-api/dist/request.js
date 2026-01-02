import axios from 'axios';
import debug from 'debug';
import { stringify } from 'qs';
const log = debug('ebay:request');
export const defaultGlobalHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With, Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
};
export const multipartHeader = {
    'Content-Type': 'multipart/form-data'
};
export const defaultAxiosConfig = {
    paramsSerializer: {
        indexes: null
    }
};
export class AxiosRequest {
    constructor(config = {}) {
        this.instance = axios.create({
            headers: {
                ...defaultGlobalHeaders
            },
            ...defaultAxiosConfig,
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
        const body = stringify(payload);
        return this.instance.post(url, body, config);
    }
}
