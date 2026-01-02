export interface paths {
    "/item_sales/search": {
        get: operations["search"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AspectDistribution: {
            aspectValueDistributions?: (components["schemas"]["AspectValueDistribution"])[];
            localizedAspectName?: string;
        };
        AspectValueDistribution: {
            localizedAspectValue?: string;
            matchCount?: number;
            refinementHref?: string;
        };
        BuyingOptionDistribution: {
            buyingOption?: string;
            matchCount?: number;
            refinementHref?: string;
        };
        Category: {
            categoryId?: string;
        };
        CategoryDistribution: {
            categoryId?: string;
            categoryName?: string;
            matchCount?: number;
            refinementHref?: string;
        };
        ConditionDistribution: {
            condition?: string;
            conditionId?: string;
            matchCount?: number;
            refinementHref?: string;
        };
        ConvertedAmount: {
            convertedFromCurrency?: string;
            convertedFromValue?: string;
            currency?: string;
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
        Image: {
            height?: number;
            imageUrl?: string;
            width?: number;
        };
        ItemLocation: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        ItemSales: {
            additionalImages?: (components["schemas"]["Image"])[];
            adultOnly?: boolean;
            bidCount?: number;
            buyingOptions?: (string)[];
            categories?: (components["schemas"]["Category"])[];
            condition?: string;
            conditionId?: string;
            epid?: string;
            image?: components["schemas"]["Image"];
            itemAffiliateWebUrl?: string;
            itemGroupHref?: string;
            itemGroupType?: string;
            itemHref?: string;
            itemId?: string;
            itemLocation?: components["schemas"]["ItemLocation"];
            itemWebUrl?: string;
            lastSoldDate?: string;
            lastSoldPrice?: components["schemas"]["ConvertedAmount"];
            seller?: components["schemas"]["Seller"];
            thumbnailImages?: (components["schemas"]["Image"])[];
            title?: string;
            totalSoldQuantity?: number;
        };
        Refinement: {
            aspectDistributions?: (components["schemas"]["AspectDistribution"])[];
            buyingOptionDistributions?: (components["schemas"]["BuyingOptionDistribution"])[];
            categoryDistributions?: (components["schemas"]["CategoryDistribution"])[];
            conditionDistributions?: (components["schemas"]["ConditionDistribution"])[];
            dominantCategoryId?: string;
        };
        SalesHistoryPagedCollection: {
            href?: string;
            itemSales?: (components["schemas"]["ItemSales"])[];
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            refinement?: components["schemas"]["Refinement"];
            total?: number;
        };
        Seller: {
            feedbackPercentage?: string;
            feedbackScore?: number;
            username?: string;
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
    search: {
        parameters: {
            query?: {
                aspect_filter?: string;
                category_ids?: string;
                epid?: string;
                fieldgroups?: string;
                filter?: string;
                gtin?: string;
                limit?: string;
                offset?: string;
                q?: string;
                sort?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SalesHistoryPagedCollection"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
}
