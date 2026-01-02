export declare const rawError: unique symbol;
export declare class EBayError extends Error {
    readonly description: string;
    readonly meta?: EBayErrorMeta | Record<string, never>;
    constructor(message: string, description?: string, meta?: EBayErrorMeta | Record<string, never>);
}
export declare class EBayNoCallError extends EBayError {
    constructor(msg?: string);
}
export declare class ApiEnvError extends EBayError {
    constructor(key: any);
}
export declare class EbayApiError extends EBayError {
    readonly errorCode: number | undefined;
    readonly meta?: EBayErrorMeta;
    readonly firstError?: EBayFirstError;
    constructor(message: string, description?: string, meta?: EBayErrorMeta, errorCode?: number, firstError?: EBayFirstError);
}
export declare class EBayApiError extends EbayApiError {
}
export declare class EBayAccessDenied extends EBayApiError {
}
export declare class EBayInvalidGrant extends EBayApiError {
}
export declare class EBayNotFound extends EBayApiError {
    static readonly code = 11001;
}
export declare class EBayInvalidAccessToken extends EBayApiError {
}
export declare class EBayIAFTokenExpired extends EBayApiError {
    static readonly code = 21917053;
}
export declare class EBayAuthTokenIsInvalid extends EBayApiError {
    static readonly code = 931;
}
export declare class EBayAuthTokenIsHardExpired extends EBayApiError {
    static readonly code = 932;
}
export declare class EBayIAFTokenInvalid extends EBayApiError {
    static readonly code = 21916984;
}
export declare class EBayTokenRequired extends EBayApiError {
    static readonly code = 930;
}
export declare class EBayInvalidScope extends EBayApiError {
}
export type EBayTraditionalError = {
    ShortMessage: string;
    LongMessage: string;
    ErrorCode: number;
    SeverityCode: string;
    ErrorClassification: string;
};
export type EBayTraditionalErrorResponse = {
    Timestamp: string;
    Ack: string;
    Errors: EBayTraditionalError | EBayTraditionalError[];
    Version: number;
    Build: string;
};
export type EBayErrorParameter = {
    name: string;
    value: string;
};
export type EBayRestfulError = {
    message: string;
    errorId: number;
    domain: string;
    severity: string;
    category: string;
    parameter?: EBayErrorParameter[];
    longMessage: string;
    inputRefIds?: any[];
    httpStatusCode: number;
};
export type EBayRestfulErrorResponse = {
    errors: EBayRestfulError[];
};
export type EBaySimpleError = {
    message: string;
    description?: string;
};
export type EBayPostOrderErrorResponse = {
    errorMessage: {
        error: EBayRestfulError[] | EBayRestfulError;
    };
};
export type EBayOAuthErrorResponse = {
    error: string;
    error_description?: string;
};
export type EBayApiErrorResponse = string | EBayPostOrderErrorResponse | EBayRestfulErrorResponse | EBayTraditionalErrorResponse | EBayOAuthErrorResponse;
export type ApiRequestResult = {
    response: {
        data?: EBayApiErrorResponse;
        status?: number;
        statusText?: string;
        headers?: Record<string, string>;
    };
    config?: {
        url: string;
        method: string;
        headers?: Record<string, string>;
        params?: any;
    };
};
export type ErrorCommonMeta = {
    res?: {
        data: any;
        status?: number;
        statusText?: string;
        headers?: Record<string, string>;
    };
    req?: {
        url: string;
        method: string;
        headers?: Record<string, string>;
        params?: any;
    };
    [rawError]: any;
};
export type EBayFirstError = EBayTraditionalError | EBayRestfulError | EBayOAuthErrorResponse | EBaySimpleError;
export type EBayErrorResponse = EBayTraditionalErrorResponse | EBayRestfulError | EBayOAuthErrorResponse | EBaySimpleError;
export type EBayErrorMeta = EBayErrorResponse & ErrorCommonMeta;
export type EBayErrorBag = {
    message: string;
    description?: string;
    errorCode?: number;
    meta: EBayErrorMeta;
    firstError?: EBayFirstError;
};
export declare const extractEBayError: (result: ApiRequestResult, data?: EBayApiErrorResponse) => EBayErrorBag;
export declare const handleEBayError: (error: any) => never;
export declare const checkEBayTraditionalResponse: (apiResponse: any, data: any) => void;
