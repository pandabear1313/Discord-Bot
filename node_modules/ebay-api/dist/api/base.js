import { AxiosRequest } from '../request.js';
export default class Base {
    constructor(config, req = new AxiosRequest(config.axiosConfig)) {
        this.config = config;
        this.req = req;
    }
}
