import { Cipher, Headers } from '../types/index.js';
export declare const getUnixTimestamp: () => number;
export declare const generateContentDigestValue: (payload: unknown, cipher?: Cipher) => string;
export type SignatureComponents = {
    method: string;
    authority: string;
    path: string;
};
export declare function generateBaseString(headers: Headers, signatureComponents: SignatureComponents, payload: any, timestamp?: number): string;
export declare const generateSignatureInput: (payload: any, timestamp?: number) => string;
export declare function generateSignature(headers: any, privateKey: string, signatureComponents: SignatureComponents, payload: any, timestamp?: number): string;
