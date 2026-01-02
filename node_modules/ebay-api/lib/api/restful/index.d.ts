import Auth from '../../auth/index.js';
import { IEBayApiRequest } from '../../request.js';
import { ApiRequestConfig, AppConfig } from '../../types/index.js';
import Api from '../index.js';
export declare const defaultApiHeaders: Record<string, string>;
export type RestfulApiConfig = {
    subdomain?: string;
    useIaf?: boolean;
    sign?: boolean;
    apiVersion?: string;
    basePath?: string;
    schema?: string;
    sandbox?: boolean;
    tld?: string;
} & ApiRequestConfig;
export type ApiRequest = {
    method: keyof IEBayApiRequest;
    path: string;
    config?: any;
    data?: any;
};
export interface IRestful {
    new (config: AppConfig, req?: IEBayApiRequest, auth?: Auth, apiConfig?: RestfulApiConfig): Restful;
    id: string;
}
export type OpenApi<T> = {
    [K in keyof T]: any;
};
export default abstract class Restful extends Api {
    readonly apiConfig: Required<RestfulApiConfig>;
    constructor(config: AppConfig, req?: IEBayApiRequest, auth?: Auth, apiConfig?: RestfulApiConfig);
    static buildServerUrl(schema: string, subdomain: string, sandbox: boolean, tld: string): string;
    abstract get basePath(): string;
    get useIaf(): boolean;
    get schema(): string;
    get subdomain(): string;
    get apiVersionPath(): string;
    getServerUrl({ schema, subdomain, apiVersion, basePath, sandbox, tld }: Required<RestfulApiConfig>): string;
    getApiConfig(): Required<RestfulApiConfig>;
    get baseUrl(): string;
    api(apiConfig: RestfulApiConfig): this;
    get apix(): this;
    get apiz(): this;
    get sign(): this;
    get(path: string, config?: any, apiConfig?: RestfulApiConfig): Promise<any>;
    delete(path: string, config?: any, apiConfig?: RestfulApiConfig): Promise<any>;
    post(path: string, data?: any, config?: any, apiConfig?: RestfulApiConfig): Promise<any>;
    put(path: string, data?: any, config?: any, apiConfig?: RestfulApiConfig): Promise<any>;
    get additionalHeaders(): any;
    enrichRequestConfig(apiRequest: ApiRequest, payload?: any, apiConfig?: Required<RestfulApiConfig>): Promise<any>;
    private doRequest;
    private shouldRefreshToken;
    private request;
}
