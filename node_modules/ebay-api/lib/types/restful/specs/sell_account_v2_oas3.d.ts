export interface paths {
    "/rate_table/{rate_table_id}": {
        get: operations["getRateTable"];
    };
    "/rate_table/{rate_table_id}/update_shipping_cost": {
        post: operations["updateShippingCost"];
    };
    "/payout_settings": {
        get: operations["getPayoutSettings"];
    };
    "/payout_settings/update_percentage": {
        post: operations["updatePayoutPercentage"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Amount: {
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
        PayoutInstrument: {
            accountLastFourDigits?: string;
            instrumentId?: string;
            instrumentStatus?: string;
            instrumentType?: string;
            nickname?: string;
            payoutPercentage?: string;
        };
        PayoutSettingsResponse: {
            payoutInstruments?: (components["schemas"]["PayoutInstrument"])[];
        };
        Rate: {
            additionalCost?: components["schemas"]["Amount"];
            rateId?: string;
            shippingCategory?: string;
            shippingCost?: components["schemas"]["Amount"];
            shippingRegionNames?: (string)[];
            shippingServiceCode?: string;
        };
        RateTableDetails: {
            marketplaceId?: string;
            name?: string;
            rates?: (components["schemas"]["Rate"])[];
            rateTableBasis?: string;
            rateTableId?: string;
            shippingOptionType?: string;
        };
        RateTableUpdate: {
            rates?: (components["schemas"]["RateUpdate"])[];
        };
        RateUpdate: {
            additionalCost?: components["schemas"]["Amount"];
            rateId?: string;
            shippingCost?: components["schemas"]["Amount"];
        };
        UpdatePayoutPercentage: {
            instrumentId?: string;
            payoutPercentage?: string;
        };
        UpdatePayoutPercentageRequest: {
            payoutInstruments?: (components["schemas"]["UpdatePayoutPercentage"])[];
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
    getRateTable: {
        parameters: {
            path: {
                rate_table_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RateTableDetails"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateShippingCost: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                rate_table_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RateTableUpdate"];
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getPayoutSettings: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PayoutSettingsResponse"];
                };
            };
            500: never;
        };
    };
    updatePayoutPercentage: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePayoutPercentageRequest"];
            };
        };
        responses: {
            204: never;
            400: never;
            500: never;
        };
    };
}
