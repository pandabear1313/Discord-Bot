import Base from '../api/base.js';
import { IEBayApiRequest } from '../request.js';
import { AppConfig } from '../types/index.js';
import AuthNAuth from './authNAuth.js';
import OAuth2 from './oAuth2.js';
export default class Auth extends Base {
    readonly authNAuth: AuthNAuth;
    readonly oAuth2: OAuth2;
    readonly OAuth2: OAuth2;
    constructor(config: AppConfig, req: IEBayApiRequest);
    getHeaderAuthorization(useIaf: boolean): Promise<{
        Authorization: string;
    }>;
}
