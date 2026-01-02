export interface paths {
    "/bidding/{item_id}": {
        get: operations["getBidding"];
    };
    "/bidding/{item_id}/place_proxy_bid": {
        post: operations["placeProxyBid"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Amount: {
            currency?: string;
            value?: string;
        };
        Bidding: {
            auctionEndDate?: string;
            auctionStatus?: string;
            bidCount?: number;
            currentPrice?: components["schemas"]["Amount"];
            currentProxyBid?: components["schemas"]["ProxyBid"];
            highBidder?: boolean;
            itemId?: string;
            reservePriceMet?: boolean;
            suggestedBidAmounts?: (components["schemas"]["Amount"])[];
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
        PlaceProxyBidRequest: {
            maxAmount?: components["schemas"]["Amount"];
            userConsent?: components["schemas"]["UserConsent"];
        };
        PlaceProxyBidResponse: {
            proxyBidId?: string;
        };
        ProxyBid: {
            maxAmount?: components["schemas"]["Amount"];
            proxyBidId?: string;
        };
        UserConsent: {
            adultOnlyItem?: boolean;
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
    getBidding: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
            path: {
                item_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Bidding"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    placeProxyBid: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
            path: {
                item_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PlaceProxyBidRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PlaceProxyBidResponse"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
}
