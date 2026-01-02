"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignature = exports.generateSignatureInput = exports.generateBaseString = exports.generateContentDigestValue = exports.getUnixTimestamp = void 0;
const crypto_1 = require("crypto");
const index_js_1 = require("../errors/index.js");
const beginPrivateKey = '-----BEGIN PRIVATE KEY-----';
const endPrivateKey = '-----END PRIVATE KEY-----';
const getUnixTimestamp = () => Math.floor(Date.now() / 1000);
exports.getUnixTimestamp = getUnixTimestamp;
const getSignatureParams = (payload) => [
    ...payload ? ['content-digest'] : [],
    'x-ebay-signature-key',
    '@method',
    '@path',
    '@authority'
];
const getSignatureParamsValue = (payload) => getSignatureParams(payload).map(param => `"${param}"`).join(' ');
const generateContentDigestValue = (payload, cipher = 'sha256') => {
    const payloadBuffer = Buffer.from(typeof payload === 'string' ? payload : JSON.stringify(payload));
    const hash = (0, crypto_1.createHash)(cipher).update(payloadBuffer).digest('base64');
    const algo = cipher === 'sha512' ? 'sha-512' : 'sha-256';
    return `${algo}=:${hash}:`;
};
exports.generateContentDigestValue = generateContentDigestValue;
function generateBaseString(headers, signatureComponents, payload, timestamp = (0, exports.getUnixTimestamp)()) {
    try {
        let baseString = '';
        const signatureParams = getSignatureParams(payload);
        signatureParams.forEach(param => {
            baseString += `"${param.toLowerCase()}": `;
            if (param.startsWith('@')) {
                switch (param.toLowerCase()) {
                    case '@method':
                        baseString += signatureComponents.method;
                        break;
                    case '@authority':
                        baseString += signatureComponents.authority;
                        break;
                    case '@path':
                        baseString += signatureComponents.path;
                        break;
                    default:
                        throw new Error('Unknown pseudo header ' + param);
                }
            }
            else {
                if (!headers[param]) {
                    throw new Error('Header ' + param + ' not included in message');
                }
                baseString += headers[param];
            }
            baseString += '\n';
        });
        baseString += `"@signature-params": (${getSignatureParamsValue(payload)});created=${timestamp}`;
        return baseString;
    }
    catch (error) {
        throw new index_js_1.EBayError(`Error calculating signature base: ${error.message}`);
    }
}
exports.generateBaseString = generateBaseString;
const generateSignatureInput = (payload, timestamp = (0, exports.getUnixTimestamp)()) => `sig1=(${getSignatureParamsValue(payload)});created=${timestamp}`;
exports.generateSignatureInput = generateSignatureInput;
function generateSignature(headers, privateKey, signatureComponents, payload, timestamp = (0, exports.getUnixTimestamp)()) {
    const baseString = generateBaseString(headers, signatureComponents, payload, timestamp);
    privateKey = privateKey.trim();
    if (!privateKey.startsWith(beginPrivateKey)) {
        privateKey = beginPrivateKey + '\n' + privateKey + '\n' + endPrivateKey;
    }
    const signatureBuffer = (0, crypto_1.sign)(undefined, Buffer.from(baseString), privateKey);
    const signature = signatureBuffer.toString('base64');
    return `sig1=:${signature}:`;
}
exports.generateSignature = generateSignature;
