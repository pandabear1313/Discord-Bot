"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_js_1 = require("../request.js");
class Base {
    constructor(config, req = new request_js_1.AxiosRequest(config.axiosConfig)) {
        this.config = config;
        this.req = req;
    }
}
exports.default = Base;
