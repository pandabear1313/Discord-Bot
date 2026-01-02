export interface paths {
    "/merchandised_product/get_also_bought_products": {
        get: operations["getAlsoBoughtByProduct"];
    };
    "/merchandised_product/get_also_viewed_products": {
        get: operations["getAlsoViewedByProduct"];
    };
    "/merchandised_product": {
        get: operations["getMerchandisedProducts"];
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
        Amount: {
            currency?: string;
            value?: string;
        };
        BestSellingProductResponse: {
            merchandisedProducts?: (components["schemas"]["MerchandisedProduct"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        Image: {
            height?: number;
            imageUrl?: string;
            width?: number;
        };
        MarketPriceDetail: {
            conditionGroup?: string;
            conditionIds?: (string)[];
            estimatedStartPrice?: components["schemas"]["Amount"];
        };
        MerchandisedProduct: {
            averageRating?: string;
            epid?: string;
            image?: components["schemas"]["Image"];
            marketPriceDetails?: (components["schemas"]["MarketPriceDetail"])[];
            ratingAspects?: (components["schemas"]["RatingAspect"])[];
            ratingCount?: number;
            reviewCount?: number;
            title?: string;
        };
        RatingAspect: {
            count?: number;
            description?: string;
            name?: string;
            ratingAspectDistributions?: (components["schemas"]["RatingAspectDistribution"])[];
        };
        RatingAspectDistribution: {
            count?: number;
            percentage?: string;
            value?: string;
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
    getAlsoBoughtByProduct: {
        parameters: {
            query?: {
                brand?: string;
                epid?: string;
                gtin?: string;
                mpn?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BestSellingProductResponse"];
                };
            };
            204: never;
            400: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
            409: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
            500: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
        };
    };
    getAlsoViewedByProduct: {
        parameters: {
            query?: {
                brand?: string;
                epid?: string;
                gtin?: string;
                mpn?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BestSellingProductResponse"];
                };
            };
            204: never;
            400: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
            409: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
            500: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
        };
    };
    getMerchandisedProducts: {
        parameters: {
            query: {
                aspect_filter?: string;
                category_id: string;
                limit?: string;
                metric_name: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BestSellingProductResponse"];
                };
            };
            400: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
            500: {
                content: {
                    "application/json": {
                        errors?: (components["schemas"]["Error"])[];
                    };
                };
            };
        };
    };
}
