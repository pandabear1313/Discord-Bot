export interface paths {
    "/shipping_quote": {
        post: operations["createShippingQuote"];
    };
    "/shipping_quote/{shippingQuoteId}": {
        get: operations["getShippingQuote"];
    };
    "/shipment/create_from_shipping_quote": {
        post: operations["createFromShippingQuote"];
    };
    "/shipment/{shipmentId}": {
        get: operations["getShipment"];
    };
    "/shipment/{shipmentId}/download_label_file": {
        get: operations["downloadLabelFile"];
    };
    "/shipment/{shipmentId}/cancel": {
        post: operations["cancelShipment"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AdditionalOption: {
            additionalCost?: components["schemas"]["Amount"];
            optionType?: string;
        };
        Amount: {
            currency?: string;
            value?: string;
        };
        Contact: {
            companyName?: string;
            contactAddress?: components["schemas"]["ContactAddress"];
            fullName?: string;
            primaryPhone?: components["schemas"]["PhoneNumber"];
        };
        ContactAddress: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            countryCode?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        CreateShipmentFromQuoteRequest: {
            additionalOptions?: (components["schemas"]["AdditionalOption"])[];
            labelCustomMessage?: string;
            labelSize?: string;
            rateId?: string;
            returnTo?: components["schemas"]["Contact"];
            shippingQuoteId?: string;
        };
        Dimensions: {
            height?: string;
            length?: string;
            unit?: string;
            width?: string;
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
        Order: {
            channel?: string;
            orderId?: string;
        };
        PackageSpecification: {
            dimensions?: components["schemas"]["Dimensions"];
            weight?: components["schemas"]["Weight"];
        };
        PhoneNumber: {
            phoneNumber?: string;
        };
        PickupSlot: {
            pickupSlotEndTime?: string;
            pickupSlotId?: string;
            pickupSlotStartTime?: string;
            pickupSlotTimeZone?: string;
        };
        PurchasedRate: {
            additionalOptions?: (components["schemas"]["AdditionalOption"])[];
            baseShippingCost?: components["schemas"]["Amount"];
            destinationTimeZone?: string;
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            pickupNetworks?: (string)[];
            pickupSlotId?: string;
            pickupType?: string;
            rateId?: string;
            shippingCarrierCode?: string;
            shippingCarrierName?: string;
            shippingQuoteId?: string;
            shippingServiceCode?: string;
            shippingServiceName?: string;
            totalShippingCost?: components["schemas"]["Amount"];
        };
        Rate: {
            additionalOptions?: (components["schemas"]["AdditionalOption"])[];
            baseShippingCost?: components["schemas"]["Amount"];
            destinationTimeZone?: string;
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            pickupNetworks?: (string)[];
            pickupSlots?: (components["schemas"]["PickupSlot"])[];
            pickupType?: string;
            rateId?: string;
            rateRecommendation?: (string)[];
            shippingCarrierCode?: string;
            shippingCarrierName?: string;
            shippingServiceCode?: string;
            shippingServiceName?: string;
        };
        Shipment: {
            cancellation?: components["schemas"]["ShipmentCancellation"];
            creationDate?: string;
            labelCustomMessage?: string;
            labelDownloadUrl?: string;
            labelSize?: string;
            orders?: (components["schemas"]["Order"])[];
            packageSpecification?: components["schemas"]["PackageSpecification"];
            rate?: components["schemas"]["PurchasedRate"];
            returnTo?: components["schemas"]["Contact"];
            shipFrom?: components["schemas"]["Contact"];
            shipmentId?: string;
            shipmentTrackingNumber?: string;
            shipTo?: components["schemas"]["Contact"];
        };
        ShipmentCancellation: {
            cancellationRequestedDate?: string;
            cancellationStatus?: string;
        };
        ShippingQuote: {
            creationDate?: string;
            expirationDate?: string;
            orders?: (components["schemas"]["Order"])[];
            packageSpecification?: components["schemas"]["PackageSpecification"];
            rates?: (components["schemas"]["Rate"])[];
            shipFrom?: components["schemas"]["Contact"];
            shippingQuoteId?: string;
            shipTo?: components["schemas"]["Contact"];
            warnings?: (components["schemas"]["Error"])[];
        };
        ShippingQuoteRequest: {
            orders?: (components["schemas"]["Order"])[];
            packageSpecification?: components["schemas"]["PackageSpecification"];
            shipFrom?: components["schemas"]["Contact"];
            shipTo?: components["schemas"]["Contact"];
        };
        Weight: {
            unit?: string;
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
    createShippingQuote: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["ShippingQuoteRequest"];
            };
        };
        responses: {
            201: {
                content: {
                    "application/json": components["schemas"]["ShippingQuote"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getShippingQuote: {
        parameters: {
            path: {
                shippingQuoteId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ShippingQuote"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    createFromShippingQuote: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateShipmentFromQuoteRequest"];
            };
        };
        responses: {
            201: {
                content: {
                    "application/json": components["schemas"]["Shipment"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getShipment: {
        parameters: {
            path: {
                shipmentId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Shipment"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    downloadLabelFile: {
        parameters: {
            path: {
                shipmentId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/pdf": (string)[];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    cancelShipment: {
        parameters: {
            path: {
                shipmentId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Shipment"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
}
