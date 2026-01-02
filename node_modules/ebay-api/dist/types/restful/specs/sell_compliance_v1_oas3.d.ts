export interface paths {
    "/listing_violation_summary": {
        get: operations["getListingViolationsSummary"];
    };
    "/listing_violation": {
        get: operations["getListingViolations"];
    };
    "/suppress_listing_violation": {
        post: operations["suppressViolation"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AspectRecommendations: {
            localizedAspectName?: string;
            suggestedValues?: (string)[];
        };
        ComplianceDetail: {
            reasonCode?: string;
            message?: string;
            variation?: components["schemas"]["VariationDetails"];
            violationData?: (components["schemas"]["NameValueList"])[];
            correctiveRecommendations?: components["schemas"]["CorrectiveRecommendations"];
            complianceState?: string;
        };
        ComplianceSummary: {
            violationSummaries?: (components["schemas"]["ComplianceSummaryInfo"])[];
        };
        ComplianceSummaryInfo: {
            complianceType?: string;
            marketplaceId?: string;
            listingCount?: number;
        };
        ComplianceViolation: {
            complianceType?: string;
            listingId?: string;
            sku?: string;
            offerId?: string;
            violations?: (components["schemas"]["ComplianceDetail"])[];
        };
        CorrectiveRecommendations: {
            productRecommendation?: components["schemas"]["ProductRecommendation"];
            aspectRecommendations?: (components["schemas"]["AspectRecommendations"])[];
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
        NameValueList: {
            name?: string;
            value?: string;
        };
        PagedComplianceViolationCollection: {
            offset?: number;
            href?: string;
            total?: number;
            next?: string;
            prev?: string;
            limit?: number;
            listingViolations?: (components["schemas"]["ComplianceViolation"])[];
        };
        ProductRecommendation: {
            epid?: string;
        };
        SuppressViolationRequest: {
            complianceType?: string;
            listingId?: string;
        };
        VariationDetails: {
            sku?: string;
            variationAspects?: (components["schemas"]["NameValueList"])[];
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
    getListingViolationsSummary: {
        parameters: {
            query?: {
                compliance_type?: string;
            };
            header?: {
                "X-EBAY-C-MARKETPLACE-ID"?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["ComplianceSummary"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    getListingViolations: {
        parameters: {
            query?: {
                compliance_type?: string;
                offset?: string;
                listing_id?: string;
                limit?: string;
                filter?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["PagedComplianceViolationCollection"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    suppressViolation: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["SuppressViolationRequest"];
            };
        };
        responses: {
            204: never;
            400: never;
            409: never;
            500: never;
        };
    };
}
