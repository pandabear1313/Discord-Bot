export interface paths {
    "/item": {
        get: operations["getItemFeed"];
    };
    "/item_group": {
        get: operations["getItemGroupFeed"];
    };
    "/item_snapshot": {
        get: operations["getItemSnapshotFeed"];
    };
    "/product": {
        get: operations["getProductFeed"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
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
        Item: {
            itemId?: string;
            title?: string;
            imageUrl?: string;
            category?: string;
            categoryId?: string;
            buyingOptions?: string;
            sellerUsername?: string;
            sellerFeedbackPercentage?: string;
            sellerFeedbackScore?: string;
            gtin?: string;
            brand?: string;
            mpn?: string;
            epid?: string;
            conditionId?: string;
            condition?: string;
            priceValue?: string;
            priceCurrency?: string;
            primaryItemGroupId?: string;
            primaryItemGroupType?: string;
            itemEndDate?: string;
            sellerItemRevision?: string;
            itemLocationCountry?: string;
            localizedAspects?: string;
            sellerTrustLevel?: string;
            availability?: string;
            imageAlteringProhibited?: boolean;
            estimatedAvailableQuantity?: number;
            availabilityThresholdType?: string;
            availabilityThreshold?: number;
            returnsAccepted?: boolean;
            returnPeriodValue?: number;
            returnPeriodUnit?: string;
            refundMethod?: string;
            returnMethod?: string;
            returnShippingCostPayer?: string;
            acceptedPaymentMethods?: string;
            deliveryOptions?: string;
            shipToIncludedRegions?: string;
            shipToExcludedRegions?: string;
            inferredEpid?: string;
            inferredGtin?: string;
            inferredBrand?: string;
            inferredMpn?: string;
            inferredLocalizedAspects?: string;
            additionalImageUrls?: string;
            originalPriceValue?: string;
            originalPriceCurrency?: string;
            discountAmount?: string;
            discountPercentage?: string;
            energyEfficiencyClass?: string;
            qualifiedPrograms?: string;
            lotSize?: number;
            lengthUnitOfMeasure?: string;
            packageWidth?: string;
            packageHeight?: string;
            packageLength?: string;
            weightUnitOfMeasure?: string;
            packageWeight?: string;
        };
        ItemGroup: {
            itemGroupId?: string;
            itemGroupType?: string;
            title?: string;
            variesByLocalizedAspects?: string;
            imageUrl?: string;
            additionalImageUrls?: string;
            imageAlteringProhibited?: boolean;
        };
        ItemGroupResponse: {
            itemGroups?: (components["schemas"]["ItemGroup"])[];
        };
        ItemResponse: {
            items?: (components["schemas"]["Item"])[];
        };
        ItemSnapshot: {
            itemId?: string;
            availability?: string;
            title?: string;
            imageUrl?: string;
            category?: string;
            categoryId?: string;
            buyingOptions?: string;
            sellerUsername?: string;
            sellerFeedbackPercentage?: string;
            sellerFeedbackScore?: string;
            gtin?: string;
            brand?: string;
            mpn?: string;
            epid?: string;
            conditionId?: string;
            condition?: string;
            priceValue?: string;
            priceCurrency?: string;
            primaryItemGroupId?: string;
            primaryItemGroupType?: string;
            itemEndDate?: string;
            sellerItemRevision?: string;
            itemLocationCountry?: string;
            localizedAspects?: string;
            sellerTrustLevel?: string;
            imageAlteringProhibited?: boolean;
            estimatedAvailableQuantity?: number;
            availabilityThresholdType?: string;
            availabilityThreshold?: number;
            itemSnapshotDate?: string;
            originalPriceValue?: string;
            originalPriceCurrency?: string;
            discountAmount?: string;
            discountPercentage?: string;
            returnsAccepted?: boolean;
            returnPeriodValue?: number;
            returnPeriodUnit?: string;
            refundMethod?: string;
            returnMethod?: string;
            returnShippingCostPayer?: string;
            energyEfficiencyClass?: string;
            additionalImageUrls?: string;
            deliveryOptions?: string;
            shipToIncludedRegions?: string;
            shipToExcludedRegions?: string;
            acceptedPaymentMethods?: string;
            qualifiedPrograms?: string;
            lotSize?: number;
        };
        ItemSnapshotResponse: {
            items?: (components["schemas"]["ItemSnapshot"])[];
        };
        Product: {
            epid?: string;
            title?: string;
            description?: string;
            imageUrl?: string;
            additionalImageUrls?: string;
            localizedProductAspects?: string;
        };
        ProductResponse: {
            products?: (components["schemas"]["Product"])[];
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
    getItemFeed: {
        parameters: {
            query: {
                feed_scope: string;
                category_id: string;
                date?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                Range: string;
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ItemResponse"];
                };
            };
            204: never;
            206: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ItemResponse"];
                };
            };
            400: never;
            404: never;
            416: never;
            500: never;
        };
    };
    getItemGroupFeed: {
        parameters: {
            query: {
                feed_scope: string;
                category_id: string;
                date?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                Range?: string;
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ItemGroupResponse"];
                };
            };
            204: never;
            206: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ItemGroupResponse"];
                };
            };
            400: never;
            404: never;
            416: never;
            500: never;
        };
    };
    getItemSnapshotFeed: {
        parameters: {
            query: {
                category_id: string;
                snapshot_date: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                Range: string;
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ItemSnapshotResponse"];
                };
            };
            204: never;
            206: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ItemSnapshotResponse"];
                };
            };
            400: never;
            404: never;
            416: never;
            500: never;
        };
    };
    getProductFeed: {
        parameters: {
            query: {
                feed_scope: string;
                category_id: string;
                date?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                Range: string;
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ProductResponse"];
                };
            };
            204: never;
            206: {
                headers: {
                    "Content-range"?: string;
                    "Last-Modified"?: string;
                };
                content: {
                    "text/tab-separated-values": components["schemas"]["ProductResponse"];
                };
            };
            400: never;
            404: never;
            416: never;
            500: never;
        };
    };
}
