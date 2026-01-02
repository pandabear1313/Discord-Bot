"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEBayTraditionalResponse = exports.handleEBayError = exports.extractEBayError = exports.EBayInvalidScope = exports.EBayTokenRequired = exports.EBayIAFTokenInvalid = exports.EBayAuthTokenIsHardExpired = exports.EBayAuthTokenIsInvalid = exports.EBayIAFTokenExpired = exports.EBayInvalidAccessToken = exports.EBayNotFound = exports.EBayInvalidGrant = exports.EBayAccessDenied = exports.EBayApiError = exports.EbayApiError = exports.ApiEnvError = exports.EBayNoCallError = exports.EBayError = exports.rawError = void 0;
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('ebay:error');
exports.rawError = Symbol('raw-error');
class EBayError extends Error {
    constructor(message, description = '', meta = {}) {
        super(message);
        this.name = this.constructor.name;
        this.description = description;
        this.meta = meta;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.EBayError = EBayError;
class EBayNoCallError extends EBayError {
    constructor(msg = 'No eBay API call defined, please invoke one.') {
        super(msg);
    }
}
exports.EBayNoCallError = EBayNoCallError;
class ApiEnvError extends EBayError {
    constructor(key) {
        super(`Could not find ${key} in process.env.`);
    }
}
exports.ApiEnvError = ApiEnvError;
class EbayApiError extends EBayError {
    constructor(message, description, meta, errorCode, firstError) {
        super(message, description, meta);
        this.errorCode = errorCode;
        this.firstError = firstError;
    }
}
exports.EbayApiError = EbayApiError;
class EBayApiError extends EbayApiError {
}
exports.EBayApiError = EBayApiError;
class EBayAccessDenied extends EBayApiError {
}
exports.EBayAccessDenied = EBayAccessDenied;
class EBayInvalidGrant extends EBayApiError {
}
exports.EBayInvalidGrant = EBayInvalidGrant;
class EBayNotFound extends EBayApiError {
}
exports.EBayNotFound = EBayNotFound;
EBayNotFound.code = 11001;
class EBayInvalidAccessToken extends EBayApiError {
}
exports.EBayInvalidAccessToken = EBayInvalidAccessToken;
class EBayIAFTokenExpired extends EBayApiError {
}
exports.EBayIAFTokenExpired = EBayIAFTokenExpired;
EBayIAFTokenExpired.code = 21917053;
class EBayAuthTokenIsInvalid extends EBayApiError {
}
exports.EBayAuthTokenIsInvalid = EBayAuthTokenIsInvalid;
EBayAuthTokenIsInvalid.code = 931;
class EBayAuthTokenIsHardExpired extends EBayApiError {
}
exports.EBayAuthTokenIsHardExpired = EBayAuthTokenIsHardExpired;
EBayAuthTokenIsHardExpired.code = 932;
class EBayIAFTokenInvalid extends EBayApiError {
}
exports.EBayIAFTokenInvalid = EBayIAFTokenInvalid;
EBayIAFTokenInvalid.code = 21916984;
class EBayTokenRequired extends EBayApiError {
}
exports.EBayTokenRequired = EBayTokenRequired;
EBayTokenRequired.code = 930;
class EBayInvalidScope extends EBayApiError {
}
exports.EBayInvalidScope = EBayInvalidScope;
function getEBayError(data) {
    if (!data) {
        return {
            message: `eBay API Error`,
            description: 'No data is set in response result.'
        };
    }
    if (typeof data === 'string') {
        return {
            message: data
        };
    }
    if ('Errors' in data) {
        return data;
    }
    if ('error' in data && typeof data.error === 'string') {
        return {
            message: data.error,
            description: data.error_description || ''
        };
    }
    if ('errors' in data && Array.isArray(data.errors)) {
        return data.errors[0];
    }
    if ('errorMessage' in data) {
        return Array.isArray(data.errorMessage?.error) ? data.errorMessage.error[0] : data.errorMessage.error;
    }
    return {
        message: `Unknown eBay API Error`,
        description: 'This error response is not known. You should investigate the "meta.res.data" for more information.'
    };
}
const getErrorMessage = (eBayError) => {
    if ('message' in eBayError) {
        return eBayError.message;
    }
    else if ('Errors' in eBayError) {
        return Array.isArray(eBayError.Errors) ? eBayError.Errors[0].ShortMessage : eBayError.Errors.ShortMessage;
    }
    return 'eBay API request error';
};
const getErrorDescription = (eBayError, response) => {
    if ('description' in eBayError) {
        return eBayError.description;
    }
    else if ('Errors' in eBayError) {
        return Array.isArray(eBayError.Errors) ? eBayError.Errors[0].LongMessage : eBayError.Errors.LongMessage;
    }
    else if ('longMessage' in eBayError) {
        return eBayError.longMessage;
    }
    return (response?.status !== 200 ? response?.statusText : '') || '';
};
const getErrorCode = (eBayError) => {
    if ('errorId' in eBayError) {
        return eBayError.errorId;
    }
    else if ('Errors' in eBayError) {
        return Array.isArray(eBayError.Errors) ? eBayError.Errors[0].ErrorCode : eBayError.Errors.ErrorCode;
    }
    return undefined;
};
const extractEBayError = (result, data) => {
    const eBayError = getEBayError(data || result.response?.data);
    const meta = {
        ...eBayError,
        [exports.rawError]: result
    };
    const firstError = 'Errors' in eBayError
        ? Array.isArray(eBayError.Errors) ? eBayError.Errors[0]
            : eBayError.Errors : eBayError;
    if (result?.response) {
        meta.res = {
            status: result.response.status,
            statusText: result.response.statusText,
            headers: result.response.headers,
            data: result.response.data ?? {}
        };
    }
    if (result?.config) {
        meta.req = {
            url: result.config.url,
            method: result.config.method,
            headers: result.config.headers,
            params: result.config.params
        };
    }
    return {
        message: getErrorMessage(eBayError),
        description: getErrorDescription(eBayError, result?.response),
        errorCode: getErrorCode(eBayError),
        meta,
        firstError
    };
};
exports.extractEBayError = extractEBayError;
const handleEBayError = (error) => {
    log('handleEBayError', error);
    if (error instanceof EBayError || !error.response) {
        throw error;
    }
    else if (typeof error !== 'object') {
        throw new EBayError(error);
    }
    const { message, meta, description, errorCode, firstError } = (0, exports.extractEBayError)(error);
    if ('domain' in meta && meta.domain === 'ACCESS') {
        throw new EBayAccessDenied(message, description, meta, errorCode, firstError);
    }
    else if ('message' in meta && meta.message === 'invalid_grant') {
        throw new EBayInvalidGrant(message, description, meta, errorCode, firstError);
    }
    else if ('message' in meta && meta.message === 'invalid_scope') {
        throw new EBayInvalidScope(message, description, meta, errorCode, firstError);
    }
    else if ('message' in meta && meta.message === 'Invalid access token') {
        throw new EBayInvalidAccessToken(message, description, meta, errorCode, firstError);
    }
    else if (errorCode === EBayNotFound.code) {
        throw new EBayNotFound(message, description, meta, errorCode, firstError);
    }
    throw new EBayApiError(message, description, meta, errorCode, firstError);
};
exports.handleEBayError = handleEBayError;
const checkEBayTraditionalResponse = (apiResponse, data) => {
    if (!data) {
        log('checkEBayTraditionalResponse: No data found in response.');
        return;
    }
    if (!('Errors' in data) && !('errorMessage' in data)) {
        return;
    }
    if ('Errors' in data && data.Ack !== 'Failure') {
        log(`checkEBayTraditionalResponse: eBay API returned ${data.Ack}`);
        return;
    }
    const { message, meta, description, errorCode, firstError } = (0, exports.extractEBayError)(apiResponse, data);
    if (typeof errorCode === 'undefined') {
        throw new EBayApiError(message, description, meta, errorCode, firstError);
    }
    switch (errorCode) {
        case EBayIAFTokenExpired.code:
            throw new EBayIAFTokenExpired(message, description, meta, errorCode, firstError);
        case EBayIAFTokenInvalid.code:
        case 1.32:
            throw new EBayIAFTokenInvalid(message, description, meta, errorCode, firstError);
        case EBayTokenRequired.code:
            throw new EBayTokenRequired(message, description, meta, errorCode, firstError);
        case EBayAuthTokenIsHardExpired.code:
            throw new EBayAuthTokenIsHardExpired(message, description, meta, errorCode, firstError);
        case EBayAuthTokenIsInvalid.code:
            throw new EBayAuthTokenIsInvalid(message, description, meta, errorCode, firstError);
    }
    throw new EBayApiError(message, description, meta, errorCode, firstError);
};
exports.checkEBayTraditionalResponse = checkEBayTraditionalResponse;
