export interface paths {
    "/marketplace/{marketplace_id}/get_automotive_parts_compatibility_policies": {
        get: operations["getAutomotivePartsCompatibilityPolicies"];
    };
    "/marketplace/{marketplace_id}/get_extended_producer_responsibility_policies": {
        get: operations["getExtendedProducerResponsibilityPolicies"];
    };
    "/marketplace/{marketplace_id}/get_hazardous_materials_labels": {
        get: operations["getHazardousMaterialsLabels"];
    };
    "/marketplace/{marketplace_id}/get_item_condition_policies": {
        get: operations["getItemConditionPolicies"];
    };
    "/marketplace/{marketplace_id}/get_listing_structure_policies": {
        get: operations["getListingStructurePolicies"];
    };
    "/marketplace/{marketplace_id}/get_negotiated_price_policies": {
        get: operations["getNegotiatedPricePolicies"];
    };
    "/marketplace/{marketplace_id}/get_return_policies": {
        get: operations["getReturnPolicies"];
    };
    "/country/{countryCode}/sales_tax_jurisdiction": {
        get: operations["getSalesTaxJurisdictions"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AutomotivePartsCompatibilityPolicy: {
            categoryId?: string;
            categoryTreeId?: string;
            compatibilityBasedOn?: string;
            compatibleVehicleTypes?: (string)[];
            maxNumberOfCompatibleVehicles?: number;
        };
        AutomotivePartsCompatibilityPolicyResponse: {
            automotivePartsCompatibilityPolicies?: (components["schemas"]["AutomotivePartsCompatibilityPolicy"])[];
            warnings?: (components["schemas"]["Error"])[];
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
        ExtendedProducerResponsibility: {
            enabledForVariations?: boolean;
            name?: string;
            usage?: string;
        };
        ExtendedProducerResponsibilityPolicy: {
            categoryId?: string;
            categoryTreeId?: string;
            supportedAttributes?: (components["schemas"]["ExtendedProducerResponsibility"])[];
        };
        ExtendedProducerResponsibilityPolicyResponse: {
            extendedProducerResponsibilities?: (components["schemas"]["ExtendedProducerResponsibilityPolicy"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        HazardStatement: {
            statementId?: string;
            statementDescription?: string;
        };
        HazardousMaterialDetailsResponse: {
            signalWords?: (components["schemas"]["SignalWord"])[];
            statements?: (components["schemas"]["HazardStatement"])[];
            pictograms?: (components["schemas"]["Pictogram"])[];
        };
        ItemCondition: {
            conditionDescription?: string;
            conditionDescriptors?: (components["schemas"]["ItemConditionDescriptor"])[];
            conditionHelpText?: string;
            conditionId?: string;
            usage?: string;
        };
        ItemConditionDescriptor: {
            conditionDescriptorConstraint?: components["schemas"]["ItemConditionDescriptorConstraint"];
            conditionDescriptorHelpText?: string;
            conditionDescriptorId?: string;
            conditionDescriptorName?: string;
            conditionDescriptorValues?: (components["schemas"]["ItemConditionDescriptorValue"])[];
        };
        ItemConditionDescriptorConstraint: {
            applicableToConditionDescriptorIds?: (string)[];
            cardinality?: string;
            defaultConditionDescriptorValueId?: string;
            maxLength?: number;
            mode?: string;
            usage?: string;
        };
        ItemConditionDescriptorValue: {
            conditionDescriptorValueAdditionalHelpText?: (string)[];
            conditionDescriptorValueConstraints?: (components["schemas"]["ItemConditionDescriptorValueConstraint"])[];
            conditionDescriptorValueHelpText?: string;
            conditionDescriptorValueId?: string;
            conditionDescriptorValueName?: string;
        };
        ItemConditionDescriptorValueConstraint: {
            applicableToConditionDescriptorId?: string;
            applicableToConditionDescriptorValueIds?: (string)[];
        };
        ItemConditionPolicy: {
            categoryId?: string;
            categoryTreeId?: string;
            itemConditionRequired?: boolean;
            itemConditions?: (components["schemas"]["ItemCondition"])[];
        };
        ItemConditionPolicyResponse: {
            itemConditionPolicies?: (components["schemas"]["ItemConditionPolicy"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        ListingStructurePolicy: {
            categoryId?: string;
            categoryTreeId?: string;
            variationsSupported?: boolean;
        };
        ListingStructurePolicyResponse: {
            listingStructurePolicies?: (components["schemas"]["ListingStructurePolicy"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        NegotiatedPricePolicy: {
            bestOfferAutoAcceptEnabled?: boolean;
            bestOfferAutoDeclineEnabled?: boolean;
            bestOfferCounterEnabled?: boolean;
            categoryId?: string;
            categoryTreeId?: string;
        };
        NegotiatedPricePolicyResponse: {
            negotiatedPricePolicies?: (components["schemas"]["NegotiatedPricePolicy"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        Pictogram: {
            pictogramId?: string;
            pictogramDescription?: string;
            pictogramUrl?: string;
        };
        ReturnPolicy: {
            categoryId?: string;
            categoryTreeId?: string;
            domestic?: components["schemas"]["ReturnPolicyDetails"];
            international?: components["schemas"]["ReturnPolicyDetails"];
            required?: boolean;
        };
        ReturnPolicyDetails: {
            policyDescriptionEnabled?: boolean;
            refundMethods?: (string)[];
            returnMethods?: (string)[];
            returnPeriods?: (components["schemas"]["TimeDuration"])[];
            returnsAcceptanceEnabled?: boolean;
            returnShippingCostPayers?: (string)[];
        };
        ReturnPolicyResponse: {
            returnPolicies?: (components["schemas"]["ReturnPolicy"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        SalesTaxJurisdiction: {
            salesTaxJurisdictionId?: string;
        };
        SalesTaxJurisdictions: {
            salesTaxJurisdictions?: (components["schemas"]["SalesTaxJurisdiction"])[];
        };
        SignalWord: {
            signalWordId?: string;
            signalWordDescription?: string;
        };
        TimeDuration: {
            unit?: string;
            value?: number;
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
    getAutomotivePartsCompatibilityPolicies: {
        parameters: {
            query?: {
                filter?: string;
            };
            header?: {
                "Accept-Encoding"?: string;
            };
            path: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["AutomotivePartsCompatibilityPolicyResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getExtendedProducerResponsibilityPolicies: {
        parameters: {
            query?: {
                filter?: string;
            };
            header?: {
                "Accept-Encoding"?: string;
            };
            path: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ExtendedProducerResponsibilityPolicyResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getHazardousMaterialsLabels: {
        parameters: {
            path: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["HazardousMaterialDetailsResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getItemConditionPolicies: {
        parameters: {
            query?: {
                filter?: string;
            };
            header?: {
                "Accept-Encoding"?: string;
            };
            path: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ItemConditionPolicyResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getListingStructurePolicies: {
        parameters: {
            query?: {
                filter?: string;
            };
            header?: {
                "Accept-Encoding"?: string;
            };
            path: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ListingStructurePolicyResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getNegotiatedPricePolicies: {
        parameters: {
            query?: {
                filter?: string;
            };
            header?: {
                "Accept-Encoding"?: string;
            };
            path: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["NegotiatedPricePolicyResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getReturnPolicies: {
        parameters: {
            query?: {
                filter?: string;
            };
            header?: {
                "Accept-Encoding"?: string;
            };
            path: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReturnPolicyResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getSalesTaxJurisdictions: {
        parameters: {
            path: {
                countryCode: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SalesTaxJurisdictions"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
}
