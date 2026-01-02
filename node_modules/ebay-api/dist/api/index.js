import Auth from '../auth/index.js';
import Base from './base.js';
import { generateContentDigestValue, generateSignature, generateSignatureInput, getUnixTimestamp } from './digitalSignature.js';
export default class Api extends Base {
    constructor(config, req, auth) {
        super(config, req);
        this.auth = auth || new Auth(this.config, this.req);
    }
    getDigitalSignatureHeaders(signatureComponents, payload) {
        if (!this.config.signature) {
            return {};
        }
        const timestamp = getUnixTimestamp();
        const digitalSignatureHeaders = {
            'x-ebay-enforce-signature': true,
            'x-ebay-signature-key': this.config.signature.jwe,
            ...payload ? {
                'content-digest': generateContentDigestValue(payload, this.config.signature.cipher ?? 'sha256')
            } : {},
            'signature-input': generateSignatureInput(payload, timestamp)
        };
        return {
            ...digitalSignatureHeaders,
            'signature': generateSignature(digitalSignatureHeaders, this.config.signature.privateKey, signatureComponents, payload, timestamp)
        };
    }
}
