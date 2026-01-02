import { operations } from '../../../../types/restful/specs/developer_key_management_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class KeyManagement extends Restful implements OpenApi<operations> {
    static id: string;
    get subdomain(): string;
    get basePath(): string;
    getSigningKeys(): Promise<any>;
    createSigningKey(signingKeyCipher: 'ED25519' | 'RSA'): Promise<any>;
    getSigningKey(signingKeyId: string): Promise<any>;
}
