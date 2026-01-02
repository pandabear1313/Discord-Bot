export interface paths {
    "/find": {
        post: operations["findListingRecommendations"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Ad: {
            bidPercentages?: (components["schemas"]["BidPercentages"])[];
            promoteWithAd?: string;
        };
        BidPercentages: {
            basis?: string;
            value?: string;
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
        FindListingRecommendationRequest: {
            listingIds?: (string)[];
        };
        ListingRecommendation: {
            listingId?: string;
            marketing?: components["schemas"]["MarketingRecommendation"];
        };
        MarketingRecommendation: {
            ad?: components["schemas"]["Ad"];
            message?: string;
        };
        PagedListingRecommendationCollection: {
            href?: string;
            limit?: number;
            listingRecommendations?: (components["schemas"]["ListingRecommendation"])[];
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
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
    findListingRecommendations: {
        parameters: {
            query?: {
                filter?: string;
                limit?: string;
                offset?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["FindListingRecommendationRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json;charset=UTF-8": components["schemas"]["PagedListingRecommendationCollection"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
}
