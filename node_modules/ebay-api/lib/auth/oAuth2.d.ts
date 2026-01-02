import Base from '../api/base.js';
import { EventCallback } from '../nanoevents.js';
import { IEBayApiRequest } from '../request.js';
import { AppConfig, Scope } from '../types/index.js';
export type Token = {
    access_token: string;
    expires_in?: number;
    token_type?: string;
};
export type ClientToken = Token;
export type AuthToken = Token & {
    refresh_token: string;
    refresh_token_expires_in?: number;
};
export default class OAuth2 extends Base {
    static readonly IDENTITY_ENDPOINT: Record<string, string>;
    static readonly AUTHORIZE_ENDPOINT: Record<string, string>;
    static readonly defaultScopes: Scope;
    private readonly emitter;
    private scope;
    private _clientToken?;
    private _authToken?;
    constructor(config: AppConfig, req: IEBayApiRequest);
    on(event: string, callback: EventCallback): () => void;
    get identityEndpoint(): string;
    static generateAuthUrl(sandbox: boolean, appId: string, ruName: string, scope: string[], state?: string): string;
    generateAuthUrl(ruName?: string, scope?: string[], state?: string): string;
    getAccessToken(): Promise<string>;
    getUserAccessToken(): string | null;
    getApplicationAccessToken(): Promise<string>;
    getScope(): string[];
    setClientToken(clientToken?: Token): void;
    setScope(scope: Scope): void;
    mintApplicationAccessToken(): Promise<ClientToken>;
    obtainApplicationAccessToken(): Promise<ClientToken>;
    mintUserAccessToken(code: string, ruName?: string | undefined): Promise<AuthToken>;
    getToken(code: string, ruName?: string | undefined): Promise<AuthToken>;
    refreshUserAccessToken(): Promise<AuthToken>;
    obtainToken(code: string): Promise<AuthToken>;
    getCredentials(): AuthToken | ClientToken | null;
    setCredentials(authToken: AuthToken | string): void;
    refreshToken(): Promise<Token>;
}
