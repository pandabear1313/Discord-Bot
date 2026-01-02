export interface paths {
    "/item_draft/": {
        post: operations["createItemDraft"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Amount: {
            currency?: string;
            value?: string;
        };
        Aspect: {
            name?: string;
            values?: (string)[];
        };
        Charity: {
            donationPercentage?: string;
            charityId?: string;
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
        ItemDraft: {
            categoryId?: string;
            condition?: string;
            format?: string;
            pricingSummary?: components["schemas"]["PricingSummary"];
            product?: components["schemas"]["Product"];
            charity?: components["schemas"]["Charity"];
        };
        ItemDraftResponse: {
            itemDraftId?: string;
            sellFlowNativeUri?: string;
            sellFlowUrl?: string;
        };
        PricingSummary: {
            auctionReservePrice?: components["schemas"]["Amount"];
            auctionStartPrice?: components["schemas"]["Amount"];
            price?: components["schemas"]["Amount"];
        };
        Product: {
            aspects?: (components["schemas"]["Aspect"])[];
            brand?: string;
            description?: string;
            epid?: string;
            imageUrls?: (string)[];
            title?: string;
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
    createItemDraft: {
        parameters: {
            header: {
                "Content-Language"?: string;
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ItemDraft"];
            };
        };
        responses: {
            201: {
                content: {
                    "application/json": components["schemas"]["ItemDraftResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
}
