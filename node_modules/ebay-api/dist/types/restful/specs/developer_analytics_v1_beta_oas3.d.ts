export interface paths {
    "/rate_limit/": {
        get: operations["getRateLimits"];
    };
    "/user_rate_limit/": {
        get: operations["getUserRateLimits"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Rate: {
            limit?: number;
            remaining?: number;
            reset?: string;
            timeWindow?: number;
        };
        RateLimit: {
            apiContext?: string;
            apiName?: string;
            apiVersion?: string;
            resources?: (components["schemas"]["Resource"])[];
        };
        RateLimitsResponse: {
            rateLimits?: (components["schemas"]["RateLimit"])[];
        };
        Resource: {
            name?: string;
            rates?: (components["schemas"]["Rate"])[];
        };
        Error: {
            category?: string;
            domain?: string;
            errorId?: number;
            inputRefIds?: (string)[];
            longMessage?: string;
            message?: string;
            outputRefIds?: (string)[];
            parameters?: (components["schemas"]["ErrorParameter"])[];
            subdomain?: string;
        };
        ErrorParameter: {
            name?: string;
            value?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type external = Record<string, never>;
export interface operations {
    getRateLimits: {
        parameters: {
            query?: {
                api_context?: string;
                api_name?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RateLimitsResponse"];
                };
            };
            204: never;
            500: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
        };
    };
    getUserRateLimits: {
        parameters: {
            query?: {
                api_context?: string;
                api_name?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RateLimitsResponse"];
                };
            };
            204: never;
            500: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
        };
    };
}
