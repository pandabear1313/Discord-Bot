export interface paths {
    "/deal_item": {
        get: operations["getDealItems"];
    };
    "/event/{event_id}": {
        get: operations["getEvent"];
    };
    "/event": {
        get: operations["getEvents"];
    };
    "/event_item": {
        get: operations["getEventItems"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Amount: {
            currency?: string;
            value?: string;
        };
        Coupon: {
            redemptionCode?: string;
            terms?: components["schemas"]["Terms"];
        };
        DealItem: {
            additionalImages?: (components["schemas"]["Image"])[];
            categoryAncestorIds?: (string)[];
            categoryId?: string;
            commissionable?: boolean;
            dealAffiliateWebUrl?: string;
            dealEndDate?: string;
            dealStartDate?: string;
            dealWebUrl?: string;
            energyEfficiencyClass?: string;
            image?: components["schemas"]["Image"];
            itemAffiliateWebUrl?: string;
            itemGroupId?: string;
            itemGroupType?: string;
            itemId?: string;
            itemWebUrl?: string;
            legacyItemId?: string;
            marketingPrice?: components["schemas"]["MarketingPrice"];
            price?: components["schemas"]["Amount"];
            qualifiedPrograms?: (string)[];
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            title?: string;
            unitPrice?: components["schemas"]["Amount"];
            unitPricingMeasure?: string;
        };
        DealItemSearchResponse: {
            dealItems?: (components["schemas"]["DealItem"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
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
        Event: {
            applicableCoupons?: (components["schemas"]["Coupon"])[];
            description?: string;
            endDate?: string;
            eventAffiliateWebUrl?: string;
            eventId?: string;
            eventWebUrl?: string;
            images?: (components["schemas"]["Image"])[];
            startDate?: string;
            terms?: components["schemas"]["Terms"];
            title?: string;
        };
        EventItem: {
            additionalImages?: (components["schemas"]["Image"])[];
            categoryAncestorIds?: (string)[];
            categoryId?: string;
            energyEfficiencyClass?: string;
            eventId?: string;
            image?: components["schemas"]["Image"];
            itemAffiliateWebUrl?: string;
            itemGroupId?: string;
            itemGroupType?: string;
            itemId?: string;
            itemWebUrl?: string;
            legacyItemId?: string;
            marketingPrice?: components["schemas"]["MarketingPrice"];
            price?: components["schemas"]["Amount"];
            qualifiedPrograms?: (string)[];
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            title?: string;
            unitPrice?: components["schemas"]["Amount"];
            unitPricingMeasure?: string;
        };
        EventItemSearchResponse: {
            eventItems?: (components["schemas"]["EventItem"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        EventSearchResponse: {
            events?: (components["schemas"]["Event"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        Image: {
            height?: string;
            imageUrl?: string;
            text?: string;
            width?: string;
        };
        MarketingPrice: {
            discountAmount?: components["schemas"]["Amount"];
            discountPercentage?: string;
            originalPrice?: components["schemas"]["Amount"];
            priceTreatment?: string;
        };
        ShippingOption: {
            shippingCost?: components["schemas"]["Amount"];
            shippingCostType?: string;
        };
        Terms: {
            fullText?: string;
            summary?: string;
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
    getDealItems: {
        parameters: {
            query?: {
                category_ids?: string;
                commissionable?: string;
                delivery_country?: string;
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
                    "application/json": components["schemas"]["DealItemSearchResponse"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
    getEvent: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
            path: {
                event_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Event"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getEvents: {
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
                    "application/json": components["schemas"]["EventSearchResponse"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
    getEventItems: {
        parameters: {
            query: {
                category_ids?: string;
                delivery_country?: string;
                event_ids: string;
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
                    "application/json": components["schemas"]["EventItemSearchResponse"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
}
