import Restful from '../../index.js';
class KeyManagement extends Restful {
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
export default KeyManagement;
