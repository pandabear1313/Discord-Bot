"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class KeyManagement extends index_js_1.default {
    get subdomain() {
        return 'apiz';
    }
    get basePath() {
        return '/developer/key_management/v1';
    }
    getSigningKeys() {
        return this.get(`/signing_key`);
    }
    createSigningKey(signingKeyCipher) {
        return this.post(`/signing_key`, {
            signingKeyCipher
        });
    }
    getSigningKey(signingKeyId) {
        return this.get(`/signing_key/${signingKeyId}`);
    }
}
KeyManagement.id = 'KeyManagement';
exports.default = KeyManagement;
