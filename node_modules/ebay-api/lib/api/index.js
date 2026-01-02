"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../auth/index.js"));
const base_js_1 = __importDefault(require("./base.js"));
const digitalSignature_js_1 = require("./digitalSignature.js");
class Api extends base_js_1.default {
    constructor(config, req, auth) {
        super(config, req);
        this.auth = auth || new index_js_1.default(this.config, this.req);
    }
    getDigitalSignatureHeaders(signatureComponents, payload) {
        if (!this.config.signature) {
            return {};
        }
        const timestamp = (0, digitalSignature_js_1.getUnixTimestamp)();
        const digitalSignatureHeaders = {
            'x-ebay-enforce-signature': true,
            'x-ebay-signature-key': this.config.signature.jwe,
            ...payload ? {
                'content-digest': (0, digitalSignature_js_1.generateContentDigestValue)(payload, this.config.signature.cipher ?? 'sha256')
            } : {},
            'signature-input': (0, digitalSignature_js_1.generateSignatureInput)(payload, timestamp)
        };
        return {
            ...digitalSignatureHeaders,
            'signature': (0, digitalSignature_js_1.generateSignature)(digitalSignatureHeaders, this.config.signature.privateKey, signatureComponents, payload, timestamp)
        };
    }
}
exports.default = Api;
