export interface paths {
    "/return/{returnId}/add_shipping_label": {
        post: operations["addShippingLabelInfo"];
    };
    "/return/{returnId}/cancel": {
        post: operations["cancelReturnRequest"];
    };
    "/return/check_eligibility": {
        post: operations["checkReturnEligibility"];
    };
    "/return/{returnId}/check_label_print_eligibility": {
        get: operations["checkShippingLabelEligibility"];
    };
    "/return/draft": {
        post: operations["createReturnDraft"];
    };
    "/return": {
        post: operations["createReturnRequest"];
    };
    "/return/{returnId}/initiate_shipping_label": {
        post: operations["createReturnShippingLabel"];
    };
    "/return/draft/{draftId}/file/{fileId}": {
        delete: operations["deleteReturnDraftFile"];
    };
    "/return/{returnId}/escalate": {
        post: operations["escalateReturn"];
    };
    "/return/{returnId}": {
        get: operations["getReturn"];
    };
    "/return/draft/{draftId}": {
        get: operations["getReturnDraft"];
        put: operations["updateReturnDraft"];
    };
    "/return/draft/{draftId}/files": {
        get: operations["getReturnDraftFiles"];
    };
    "/return/estimate": {
        post: operations["getReturnEstimate"];
    };
    "/return/{returnId}/files": {
        get: operations["getReturnFiles"];
    };
    "/return/preference": {
        get: operations["getReturnPreferences"];
        post: operations["setReturnPreferences"];
    };
    "/return/{returnId}/get_shipping_label": {
        get: operations["getReturnShippingLabel"];
    };
    "/return/{returnId}/tracking": {
        get: operations["getShipmentTrackingInfo"];
    };
    "/return/{returnId}/issue_refund": {
        post: operations["issueReturnRefund"];
    };
    "/return/{returnId}/mark_as_received": {
        post: operations["markReturnReceived"];
    };
    "/return/{returnId}/mark_refund_received": {
        post: operations["markReturnRefundReceived"];
    };
    "/return/{returnId}/mark_refund_sent": {
        post: operations["markReturnRefundSent"];
    };
    "/return/{returnId}/mark_as_shipped": {
        post: operations["markReturnShipped"];
    };
    "/return/{returnId}/decide": {
        post: operations["processReturnRequest"];
    };
    "/return/search": {
        get: operations["search"];
    };
    "/return/{returnId}/send_message": {
        post: operations["sendReturnMessage"];
    };
    "/return/{returnId}/send_shipping_label": {
        post: operations["sendReturnShippingLabel"];
    };
    "/return/{returnId}/file/submit": {
        post: operations["submitReturnFile"];
    };
    "/return/{returnId}/update_tracking": {
        put: operations["updateShipmentTrackingInfo"];
    };
    "/return/draft/{draftId}/file/upload": {
        post: operations["uploadReturnDraftFile"];
    };
    "/return/{returnId}/file/upload": {
        post: operations["uploadReturnFile"];
    };
    "/return/{returnId}/void_shipping_label": {
        post: operations["voidShippingLabel"];
    };
}
export type webhooks = Record<string, never>;
export type components = Record<string, never>;
export type external = Record<string, never>;
export interface operations {
    addShippingLabelInfo: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    cancelReturnRequest: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    checkReturnEligibility: {
        responses: {
            200: never;
        };
    };
    checkShippingLabelEligibility: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    createReturnDraft: {
        responses: {
            200: never;
        };
    };
    createReturnRequest: {
        responses: {
            200: never;
        };
    };
    createReturnShippingLabel: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    deleteReturnDraftFile: {
        parameters: {
            path: {
                draftId: string;
                fileId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    escalateReturn: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getReturn: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getReturnDraft: {
        parameters: {
            path: {
                draftId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    updateReturnDraft: {
        parameters: {
            path: {
                draftId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getReturnDraftFiles: {
        parameters: {
            path: {
                draftId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getReturnEstimate: {
        responses: {
            200: never;
        };
    };
    getReturnFiles: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getReturnPreferences: {
        responses: {
            200: never;
        };
    };
    setReturnPreferences: {
        responses: {
            200: never;
        };
    };
    getReturnShippingLabel: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    getShipmentTrackingInfo: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    issueReturnRefund: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    markReturnReceived: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    markReturnRefundReceived: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    markReturnRefundSent: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    markReturnShipped: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    processReturnRequest: {
        parameters: {
            path: {
                returnId: string;
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
    sendReturnMessage: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    sendReturnShippingLabel: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    submitReturnFile: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    updateShipmentTrackingInfo: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    uploadReturnDraftFile: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    uploadReturnFile: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
    voidShippingLabel: {
        parameters: {
            path: {
                returnId: string;
            };
        };
        responses: {
            200: never;
        };
    };
}
