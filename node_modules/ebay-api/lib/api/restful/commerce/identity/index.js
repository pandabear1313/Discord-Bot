"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Identity extends index_js_1.default {
    get basePath() {
        return '/commerce/identity/v1';
    }
    get subdomain() {
        return 'apiz';
    }
    getUser() {
        return this.get(`/user/`);
    }
}
Identity.id = 'Identity';
exports.default = Identity;
