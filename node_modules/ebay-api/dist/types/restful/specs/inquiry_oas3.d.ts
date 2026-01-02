export interface paths {
    "/inquiry/check_eligibility": {
        post: operations["checkInquiryEligibility"];
    };
    "/inquiry/{inquiryId}/close": {
        post: operations["closeInquiry"];
    };
    "/inquiry/{inquiryId}/confirm_refund": {
        post: operations["confirmInquiryRefund"];
    };
    "/inquiry": {
        post: operations["createInquiry"];
    };
    "/inquiry/{inquiryId}/escalate": {
        post: operations["escalateInquiry"];
    };
    "/inquiry/{inquiryId}": {
        get: operations["getInquiry"];
    };
    "/inquiry/{inquiryId}/issue_refund": {
        post: operations["issueInquiryRefund"];
    };
    "/inquiry/{inquiryId}/provide_refund_info": {
        post: operations["provideInquiryRefundInfo"];
    };
    "/inquiry/{inquiryId}/provide_shipment_info": {
        post: operations["provideInquiryShipmentInfo"];
    };
    "/inquiry/search": {
        get: operations["search"];
    };
    "/inquiry/{inquiryId}/send_message": {
        post: operations["sendInquiryMessage"];
    };
}
export type webhooks = Record<string, never>;
export type components = Record<string, never>;
export type external = Record<string, never>;
export interface operations {
    checkInquiryEligibility: {
        responses: {
            200: never;
        };
    };
    closeInquiry: {
        parameters: {
            path: {
                inquiryId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    confirmInquiryRefund: {
        parameters: {
            path: {
                inquiryId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    createInquiry: {
        responses: {
            200: never;
        };
    };
    escalateInquiry: {
        parameters: {
            path: {
                inquiryId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getInquiry: {
        parameters: {
            path: {
                inquiryId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    issueInquiryRefund: {
        parameters: {
            path: {
                inquiryId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    provideInquiryRefundInfo: {
        parameters: {
            path: {
                inquiryId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    provideInquiryShipmentInfo: {
        parameters: {
            path: {
                inquiryId: string;
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
    sendInquiryMessage: {
        parameters: {
            path: {
                inquiryId: string;
            };
        };
        responses: {
            200: never;
        };
    };
}
