import { createHash, sign } from 'crypto';
import { EBayError } from '../errors/index.js';
const beginPrivateKey = '-----BEGIN PRIVATE KEY-----';
const endPrivateKey = '-----END PRIVATE KEY-----';
export const getUnixTimestamp = () => Math.floor(Date.now() / 1000);
const getSignatureParams = (payload) => [
    ...payload ? ['content-digest'] : [],
    'x-ebay-signature-key',
    '@method',
    '@path',
    '@authority'
];
const getSignatureParamsValue = (payload) => getSignatureParams(payload).map(param => `"${param}"`).join(' ');
export const generateContentDigestValue = (payload, cipher = 'sha256') => {
    const payloadBuffer = Buffer.from(typeof payload === 'string' ? payload : JSON.stringify(payload));
    const hash = createHash(cipher).update(payloadBuffer).digest('base64');
    const algo = cipher === 'sha512' ? 'sha-512' : 'sha-256';
    return `${algo}=:${hash}:`;
};
export function generateBaseString(headers, signatureComponents, payload, timestamp = getUnixTimestamp()) {
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
        throw new EBayError(`Error calculating signature base: ${error.message}`);
    }
}
export const generateSignatureInput = (payload, timestamp = getUnixTimestamp()) => `sig1=(${getSignatureParamsValue(payload)});created=${timestamp}`;
export function generateSignature(headers, privateKey, signatureComponents, payload, timestamp = getUnixTimestamp()) {
    const baseString = generateBaseString(headers, signatureComponents, payload, timestamp);
    privateKey = privateKey.trim();
    if (!privateKey.startsWith(beginPrivateKey)) {
        privateKey = beginPrivateKey + '\n' + privateKey + '\n' + endPrivateKey;
    }
    const signatureBuffer = sign(undefined, Buffer.from(baseString), privateKey);
    const signature = signatureBuffer.toString('base64');
    return `sig1=:${signature}:`;
}
