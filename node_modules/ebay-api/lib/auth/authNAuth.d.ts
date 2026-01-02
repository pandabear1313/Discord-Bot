import Base from '../api/base.js';
import { IEBayApiRequest } from '../request.js';
import { AppConfig } from '../types/index.js';
export type AuthToken = {
    eBayAuthToken: string;
    Timestamp?: string;
    HardExpirationTime?: string;
};
export default class AuthNAuth extends Base {
    static readonly SIGNIN_ENDPOINT: {
        sandbox: string;
        production: string;
    };
    static readonly API_ENDPOINT: {
        production: string;
        sandbox: string;
    };
    static generateAuthUrl(sandbox: boolean, ruName: string, sessionId: string, prompt?: boolean): string;
    private authToken;
    constructor(config: AppConfig, req?: IEBayApiRequest);
    get apiEndpoint(): string;
    getSessionIdAndAuthUrl(ruName?: string): Promise<{
        sessionId: any;
        url: string;
    }>;
    mintToken(sessionId: string): Promise<any>;
    obtainToken(sessionId: string): Promise<any>;
    setAuthToken(authToken: AuthToken | string | null): void;
    getAuthToken(): AuthToken | null;
    get eBayAuthToken(): string | null;
    getRequestConfig(callName: string): {
        useIaf: boolean;
        xmlns: string;
        endpoint: string;
        headers: {
            'X-EBAY-API-CALL-NAME': string;
            'X-EBAY-API-CERT-NAME': string;
            'X-EBAY-API-APP-NAME': string;
            'X-EBAY-API-DEV-NAME': string | undefined;
            'X-EBAY-API-SITEID': import("../eBayApi.js").SiteId;
            'X-EBAY-API-COMPATIBILITY-LEVEL': number;
        };
    };
}
