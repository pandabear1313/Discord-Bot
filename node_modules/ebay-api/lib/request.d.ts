import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
export declare const defaultGlobalHeaders: {
    'Access-Control-Allow-Origin': string;
    'Access-Control-Allow-Headers': string;
    'Access-Control-Allow-Methods': string;
};
export declare const multipartHeader: {
    'Content-Type': string;
};
export declare const defaultAxiosConfig: AxiosRequestConfig;
export interface IEBayApiRequest<T = AxiosInstance, C = AxiosRequestConfig, R = AxiosResponse> {
    readonly instance: T;
    get(url: string, config?: C): Promise<R>;
    delete(url: string, config?: C): Promise<R>;
    post(url: string, data?: any, config?: C): Promise<R>;
    postForm(url: string, data?: any, config?: C): Promise<R>;
    put(url: string, data?: any, config?: C): Promise<R>;
}
export declare class AxiosRequest implements IEBayApiRequest {
    readonly instance: AxiosInstance;
    constructor(config?: AxiosRequestConfig);
    get<R = any>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<R = any>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<R>;
    delete<R = any>(url: string, config?: AxiosRequestConfig): Promise<R>;
    put<R = any>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<R>;
    postForm<R = any>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<R>;
}
