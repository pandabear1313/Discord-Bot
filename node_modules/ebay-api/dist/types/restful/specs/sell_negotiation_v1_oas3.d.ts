export interface paths {
    "/find_eligible_items": {
        get: operations["findEligibleItems"];
    };
    "/send_offer_to_interested_buyers": {
        post: operations["sendOfferToInterestedBuyers"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Amount: {
            currency?: string;
            value?: string;
        };
        CreateOffersRequest: {
            allowCounterOffer?: boolean;
            message?: string;
            offerDuration?: components["schemas"]["TimeDuration"];
            offeredItems?: (components["schemas"]["OfferedItem"])[];
        };
        EligibleItem: {
            listingId?: string;
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
        Offer: {
            allowCounterOffer?: boolean;
            buyer?: components["schemas"]["User"];
            creationDate?: string;
            initiatedBy?: string;
            lastModifiedDate?: string;
            message?: string;
            offerDuration?: components["schemas"]["TimeDuration"];
            offeredItems?: (components["schemas"]["OfferedItem"])[];
            offerId?: string;
            offerStatus?: string;
            offerType?: string;
            revision?: string;
        };
        OfferedItem: {
            discountPercentage?: string;
            listingId?: string;
            price?: components["schemas"]["Amount"];
            quantity?: number;
        };
        PagedEligibleItemCollection: {
            eligibleItems?: (components["schemas"]["EligibleItem"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        SendOfferToInterestedBuyersCollectionResponse: {
            offers?: (components["schemas"]["Offer"])[];
        };
        TimeDuration: {
            unit?: string;
            value?: number;
        };
        User: {
            maskedUsername?: string;
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
    findEligibleItems: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PagedEligibleItemCollection"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    sendOfferToInterestedBuyers: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateOffersRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SendOfferToInterestedBuyersCollectionResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
}
