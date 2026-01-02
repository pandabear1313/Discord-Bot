export interface paths {
    "/cancellation/{cancelId}/approve": {
        post: operations["approveCancellationRequest"];
    };
    "/cancellation/check_eligibility": {
        post: operations["checkCancellationEligibility"];
    };
    "/cancellation/{cancelId}/confirm": {
        post: operations["confirmRefundReceived"];
    };
    "/cancellation": {
        post: operations["createCancellation"];
    };
    "/cancellation/{cancelId}": {
        get: operations["getCancellation"];
    };
    "/cancellation/{cancelId}/reject": {
        post: operations["rejectCancellationRequest"];
    };
    "/cancellation/search": {
        get: operations["search"];
    };
}
export type webhooks = Record<string, never>;
export type components = Record<string, never>;
export type external = Record<string, never>;
export interface operations {
    approveCancellationRequest: {
        parameters: {
            path: {
                cancelId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    checkCancellationEligibility: {
        responses: {
            200: never;
        };
    };
    confirmRefundReceived: {
        parameters: {
            path: {
                cancelId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    createCancellation: {
        responses: {
            200: never;
        };
    };
    getCancellation: {
        parameters: {
            path: {
                cancelId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    rejectCancellationRequest: {
        parameters: {
            path: {
                cancelId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    search: {
        responses: {
            200: never;
        };
    };
}
