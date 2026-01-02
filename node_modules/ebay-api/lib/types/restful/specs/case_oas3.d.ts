export interface paths {
    "/casemanagement/{caseId}/appeal": {
        post: operations["appealCaseDecision"];
    };
    "/casemanagement/{caseId}/close": {
        post: operations["closeCase"];
    };
    "/casemanagement/{caseId}": {
        get: operations["getCase"];
    };
    "/casemanagement/{caseId}/issue_refund": {
        post: operations["issueCaseRefund"];
    };
    "/casemanagement/{caseId}/provide_shipment_info": {
        post: operations["provideReturnShipmentInfo"];
    };
    "/casemanagement/{caseId}/provide_return_address": {
        post: operations["providesReturnAddress"];
    };
    "/casemanagement/search": {
        get: operations["search"];
    };
}
export type webhooks = Record<string, never>;
export type components = Record<string, never>;
export type external = Record<string, never>;
export interface operations {
    appealCaseDecision: {
        parameters: {
            path: {
                caseId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    closeCase: {
        parameters: {
            path: {
                caseId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getCase: {
        parameters: {
            path: {
                caseId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    issueCaseRefund: {
        parameters: {
            path: {
                caseId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    provideReturnShipmentInfo: {
        parameters: {
            path: {
                caseId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    providesReturnAddress: {
        parameters: {
            path: {
                caseId: string;
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
