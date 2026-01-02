import Restful from '../../index.js';
class Identity extends Restful {
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
export default Identity;
