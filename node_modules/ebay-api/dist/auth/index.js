import Base from '../api/base.js';
import AuthNAuth from './authNAuth.js';
import OAuth2 from './oAuth2.js';
export default class Auth extends Base {
    constructor(config, req) {
        super(config, req);
        this.authNAuth = new AuthNAuth(this.config, this.req);
        this.OAuth2 = new OAuth2(this.config, this.req);
        this.oAuth2 = this.OAuth2;
    }
    async getHeaderAuthorization(useIaf) {
        if (this.authNAuth.eBayAuthToken) {
            return {
                Authorization: 'Token ' + this.authNAuth.eBayAuthToken
            };
        }
        const accessToken = await this.OAuth2.getAccessToken();
        return {
            Authorization: (useIaf ? 'IAF ' : 'Bearer ') + accessToken
        };
    }
}
