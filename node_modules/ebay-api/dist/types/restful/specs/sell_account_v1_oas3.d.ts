export interface paths {
    "/custom_policy/": {
        get: operations["getCustomPolicies"];
        post: operations["createCustomPolicy"];
    };
    "/custom_policy/{custom_policy_id}": {
        get: operations["getCustomPolicy"];
        put: operations["updateCustomPolicy"];
    };
    "/fulfillment_policy/": {
        post: operations["createFulfillmentPolicy"];
    };
    "/fulfillment_policy/{fulfillmentPolicyId}": {
        get: operations["getFulfillmentPolicy"];
        put: operations["updateFulfillmentPolicy"];
        delete: operations["deleteFulfillmentPolicy"];
    };
    "/fulfillment_policy": {
        get: operations["getFulfillmentPolicies"];
    };
    "/fulfillment_policy/get_by_policy_name": {
        get: operations["getFulfillmentPolicyByName"];
    };
    "/payment_policy": {
        get: operations["getPaymentPolicies"];
        post: operations["createPaymentPolicy"];
    };
    "/payment_policy/{payment_policy_id}": {
        get: operations["getPaymentPolicy"];
        put: operations["updatePaymentPolicy"];
        delete: operations["deletePaymentPolicy"];
    };
    "/payment_policy/get_by_policy_name": {
        get: operations["getPaymentPolicyByName"];
    };
    "/payments_program/{marketplace_id}/{payments_program_type}": {
        get: operations["getPaymentsProgram"];
    };
    "/payments_program/{marketplace_id}/{payments_program_type}/onboarding": {
        get: operations["getPaymentsProgramOnboarding"];
    };
    "/privilege": {
        get: operations["getPrivileges"];
    };
    "/program/get_opted_in_programs": {
        get: operations["getOptedInPrograms"];
    };
    "/program/opt_in": {
        post: operations["optInToProgram"];
    };
    "/program/opt_out": {
        post: operations["optOutOfProgram"];
    };
    "/rate_table": {
        get: operations["getRateTables"];
    };
    "/return_policy": {
        get: operations["getReturnPolicies"];
        post: operations["createReturnPolicy"];
    };
    "/return_policy/{return_policy_id}": {
        get: operations["getReturnPolicy"];
        put: operations["updateReturnPolicy"];
        delete: operations["deleteReturnPolicy"];
    };
    "/return_policy/get_by_policy_name": {
        get: operations["getReturnPolicyByName"];
    };
    "/sales_tax/{countryCode}/{jurisdictionId}": {
        get: operations["getSalesTax"];
        put: operations["createOrReplaceSalesTax"];
        delete: operations["deleteSalesTax"];
    };
    "/sales_tax": {
        get: operations["getSalesTaxes"];
    };
    "/subscription": {
        get: operations["getSubscription"];
    };
    "/kyc": {
        get: operations["getKYC"];
    };
    "/advertising_eligibility": {
        get: operations["getAdvertisingEligibility"];
    };
    "/location/{merchantLocationKey}": {
        get: operations["getInventoryLocation"];
        post: operations["createInventoryLocation"];
        delete: operations["deleteInventoryLocation"];
    };
    "/location/{merchantLocationKey}/disable": {
        post: operations["disableInventoryLocation"];
    };
    "/location/{merchantLocationKey}/enable": {
        post: operations["enableInventoryLocation"];
    };
    "/location": {
        get: operations["getInventoryLocations"];
    };
    "/location/{merchantLocationKey}/update_location_details": {
        post: operations["updateInventoryLocation"];
    };
    "/country/{countryCode}/sales_tax_jurisdiction": {
        get: operations["getSalesTaxJurisdictions"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Address: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        Amount: {
            currency?: string;
            value?: string;
        };
        CategoryType: {
            default?: boolean;
            name?: string;
        };
        CompactCustomPolicyResponse: {
            customPolicyId?: string;
            label?: string;
            name?: string;
            policyType?: string;
        };
        CustomPolicy: {
            customPolicyId?: string;
            description?: string;
            label?: string;
            name?: string;
            policyType?: string;
        };
        CustomPolicyCreateRequest: {
            description?: string;
            label?: string;
            name?: string;
            policyType?: string;
        };
        CustomPolicyRequest: {
            description?: string;
            label?: string;
            name?: string;
        };
        CustomPolicyResponse: {
            customPolicies?: (components["schemas"]["CompactCustomPolicyResponse"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        Deposit: {
            amount?: components["schemas"]["Amount"];
            dueIn?: components["schemas"]["TimeDuration"];
            paymentMethods?: (components["schemas"]["PaymentMethod"])[];
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
        FulfillmentPolicy: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            description?: string;
            freightShipping?: boolean;
            fulfillmentPolicyId?: string;
            globalShipping?: boolean;
            handlingTime?: components["schemas"]["TimeDuration"];
            localPickup?: boolean;
            marketplaceId?: string;
            name?: string;
            pickupDropOff?: boolean;
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            shipToLocations?: components["schemas"]["RegionSet"];
        };
        FulfillmentPolicyRequest: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            description?: string;
            freightShipping?: boolean;
            globalShipping?: boolean;
            handlingTime?: components["schemas"]["TimeDuration"];
            localPickup?: boolean;
            marketplaceId?: string;
            name?: string;
            pickupDropOff?: boolean;
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            shipToLocations?: components["schemas"]["RegionSet"];
        };
        FulfillmentPolicyResponse: {
            fulfillmentPolicies?: (components["schemas"]["FulfillmentPolicy"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        GeoCoordinates: {
            latitude?: number;
            longitude?: number;
        };
        InternationalReturnOverrideType: {
            returnMethod?: string;
            returnPeriod?: components["schemas"]["TimeDuration"];
            returnsAccepted?: boolean;
            returnShippingCostPayer?: string;
        };
        Interval: {
            close?: string;
            open?: string;
        };
        InventoryLocation: {
            locationAdditionalInformation?: string;
            locationInstructions?: string;
            locationWebUrl?: string;
            name?: string;
            operatingHours?: (components["schemas"]["OperatingHours"])[];
            phone?: string;
            specialHours?: (components["schemas"]["SpecialHours"])[];
        };
        InventoryLocationFull: {
            location?: components["schemas"]["LocationDetails"];
            locationAdditionalInformation?: string;
            locationInstructions?: string;
            locationTypes?: (string)[];
            locationWebUrl?: string;
            merchantLocationStatus?: string;
            name?: string;
            operatingHours?: (components["schemas"]["OperatingHours"])[];
            phone?: string;
            specialHours?: (components["schemas"]["SpecialHours"])[];
        };
        InventoryLocationResponse: {
            location?: components["schemas"]["Location"];
            locationAdditionalInformation?: string;
            locationInstructions?: string;
            locationTypes?: (string)[];
            locationWebUrl?: string;
            merchantLocationKey?: string;
            merchantLocationStatus?: string;
            name?: string;
            operatingHours?: (components["schemas"]["OperatingHours"])[];
            phone?: string;
            specialHours?: (components["schemas"]["SpecialHours"])[];
        };
        KycCheck: {
            dataRequired?: string;
            dueDate?: string;
            remedyUrl?: string;
            alert?: string;
            detailMessage?: string;
        };
        KycResponse: {
            kycChecks?: (components["schemas"]["KycCheck"])[];
        };
        Location: {
            address?: components["schemas"]["Address"];
            geoCoordinates?: components["schemas"]["GeoCoordinates"];
            locationId?: string;
        };
        LocationDetails: {
            address?: components["schemas"]["Address"];
            geoCoordinates?: components["schemas"]["GeoCoordinates"];
        };
        LocationResponse: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
            locations?: (components["schemas"]["InventoryLocationResponse"])[];
        };
        OperatingHours: {
            dayOfWeekEnum?: string;
            intervals?: (components["schemas"]["Interval"])[];
        };
        PaymentMethod: {
            brands?: (string)[];
            paymentMethodType?: string;
            recipientAccountReference?: components["schemas"]["RecipientAccountReference"];
        };
        PaymentPolicy: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            deposit?: components["schemas"]["Deposit"];
            description?: string;
            fullPaymentDueIn?: components["schemas"]["TimeDuration"];
            immediatePay?: boolean;
            marketplaceId?: string;
            name?: string;
            paymentInstructions?: string;
            paymentMethods?: (components["schemas"]["PaymentMethod"])[];
            paymentPolicyId?: string;
        };
        PaymentPolicyRequest: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            deposit?: components["schemas"]["Deposit"];
            description?: string;
            fullPaymentDueIn?: components["schemas"]["TimeDuration"];
            immediatePay?: boolean;
            marketplaceId?: string;
            name?: string;
            paymentInstructions?: string;
            paymentMethods?: (components["schemas"]["PaymentMethod"])[];
        };
        PaymentPolicyResponse: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            paymentPolicies?: (components["schemas"]["PaymentPolicy"])[];
            prev?: string;
            total?: number;
        };
        PaymentsProgramOnboardingResponse: {
            onboardingStatus?: string;
            steps?: (components["schemas"]["PaymentsProgramOnboardingSteps"])[];
        };
        PaymentsProgramOnboardingSteps: {
            name?: string;
            status?: string;
            webUrl?: string;
        };
        PaymentsProgramResponse: {
            marketplaceId?: string;
            paymentsProgramType?: string;
            status?: string;
            wasPreviouslyOptedIn?: boolean;
        };
        Program: {
            programType?: string;
        };
        Programs: {
            programs?: (components["schemas"]["Program"])[];
        };
        RateTable: {
            countryCode?: string;
            locality?: string;
            name?: string;
            rateTableId?: string;
        };
        RateTableResponse: {
            rateTables?: (components["schemas"]["RateTable"])[];
        };
        RecipientAccountReference: {
            referenceId?: string;
            referenceType?: string;
        };
        Region: {
            regionName?: string;
            regionType?: string;
        };
        RegionSet: {
            regionExcluded?: (components["schemas"]["Region"])[];
            regionIncluded?: (components["schemas"]["Region"])[];
        };
        ReturnPolicy: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            description?: string;
            extendedHolidayReturnsOffered?: boolean;
            internationalOverride?: components["schemas"]["InternationalReturnOverrideType"];
            marketplaceId?: string;
            name?: string;
            refundMethod?: string;
            restockingFeePercentage?: string;
            returnInstructions?: string;
            returnMethod?: string;
            returnPeriod?: components["schemas"]["TimeDuration"];
            returnPolicyId?: string;
            returnsAccepted?: boolean;
            returnShippingCostPayer?: string;
        };
        ReturnPolicyRequest: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            description?: string;
            extendedHolidayReturnsOffered?: boolean;
            internationalOverride?: components["schemas"]["InternationalReturnOverrideType"];
            marketplaceId?: string;
            name?: string;
            refundMethod?: string;
            restockingFeePercentage?: string;
            returnInstructions?: string;
            returnMethod?: string;
            returnPeriod?: components["schemas"]["TimeDuration"];
            returnsAccepted?: boolean;
            returnShippingCostPayer?: string;
        };
        ReturnPolicyResponse: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            returnPolicies?: (components["schemas"]["ReturnPolicy"])[];
            total?: number;
        };
        SalesTax: {
            countryCode?: string;
            salesTaxJurisdictionId?: string;
            salesTaxPercentage?: string;
            shippingAndHandlingTaxed?: boolean;
        };
        SalesTaxBase: {
            salesTaxPercentage?: string;
            shippingAndHandlingTaxed?: boolean;
        };
        SalesTaxJurisdiction: {
            salesTaxJurisdictionId?: string;
        };
        SalesTaxJurisdictions: {
            salesTaxJurisdictions?: (components["schemas"]["SalesTaxJurisdiction"])[];
        };
        SalesTaxes: {
            salesTaxes?: (components["schemas"]["SalesTax"])[];
        };
        SellerEligibilityMultiProgramResponse: {
            advertisingEligibility?: (components["schemas"]["SellerEligibilityResponse"])[];
        };
        SellerEligibilityResponse: {
            programType?: string;
            reason?: string;
            status?: string;
        };
        SellingLimit: {
            amount?: components["schemas"]["Amount"];
            quantity?: number;
        };
        SellingPrivileges: {
            sellerRegistrationCompleted?: boolean;
            sellingLimit?: components["schemas"]["SellingLimit"];
        };
        SetFulfillmentPolicyResponse: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            description?: string;
            freightShipping?: boolean;
            fulfillmentPolicyId?: string;
            globalShipping?: boolean;
            handlingTime?: components["schemas"]["TimeDuration"];
            localPickup?: boolean;
            marketplaceId?: string;
            name?: string;
            pickupDropOff?: boolean;
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            shipToLocations?: components["schemas"]["RegionSet"];
            warnings?: (components["schemas"]["Error"])[];
        };
        SetPaymentPolicyResponse: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            deposit?: components["schemas"]["Deposit"];
            description?: string;
            fullPaymentDueIn?: components["schemas"]["TimeDuration"];
            immediatePay?: boolean;
            marketplaceId?: string;
            name?: string;
            paymentInstructions?: string;
            paymentMethods?: (components["schemas"]["PaymentMethod"])[];
            paymentPolicyId?: string;
            warnings?: (components["schemas"]["Error"])[];
        };
        SetReturnPolicyResponse: {
            categoryTypes?: (components["schemas"]["CategoryType"])[];
            description?: string;
            extendedHolidayReturnsOffered?: boolean;
            internationalOverride?: components["schemas"]["InternationalReturnOverrideType"];
            marketplaceId?: string;
            name?: string;
            refundMethod?: string;
            restockingFeePercentage?: string;
            returnInstructions?: string;
            returnMethod?: string;
            returnPeriod?: components["schemas"]["TimeDuration"];
            returnPolicyId?: string;
            returnsAccepted?: boolean;
            returnShippingCostPayer?: string;
            warnings?: (components["schemas"]["Error"])[];
        };
        ShippingOption: {
            costType?: string;
            insuranceFee?: components["schemas"]["Amount"];
            insuranceOffered?: boolean;
            optionType?: string;
            packageHandlingCost?: components["schemas"]["Amount"];
            rateTableId?: string;
            shippingServices?: (components["schemas"]["ShippingService"])[];
        };
        ShippingService: {
            additionalShippingCost?: components["schemas"]["Amount"];
            buyerResponsibleForPickup?: boolean;
            buyerResponsibleForShipping?: boolean;
            cashOnDeliveryFee?: components["schemas"]["Amount"];
            freeShipping?: boolean;
            shippingCarrierCode?: string;
            shippingCost?: components["schemas"]["Amount"];
            shippingServiceCode?: string;
            shipToLocations?: components["schemas"]["RegionSet"];
            sortOrder?: number;
            surcharge?: components["schemas"]["Amount"];
        };
        SpecialHours: {
            date?: string;
            intervals?: (components["schemas"]["Interval"])[];
        };
        Subscription: {
            marketplaceId?: string;
            subscriptionId?: string;
            subscriptionLevel?: string;
            subscriptionType?: string;
            term?: components["schemas"]["TimeDuration"];
        };
        SubscriptionResponse: {
            href?: string;
            limit?: number;
            next?: string;
            subscriptions?: (components["schemas"]["Subscription"])[];
            total?: number;
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
    getCustomPolicies: {
        parameters: {
            query?: {
                policy_types?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CustomPolicyResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    createCustomPolicy: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomPolicyCreateRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    Location?: string;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getCustomPolicy: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
            path: {
                custom_policy_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CustomPolicy"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateCustomPolicy: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
            path: {
                custom_policy_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CustomPolicyRequest"];
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
    createFulfillmentPolicy: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["FulfillmentPolicyRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    Location?: string;
                };
                content: {
                    "application/json": components["schemas"]["SetFulfillmentPolicyResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getFulfillmentPolicy: {
        parameters: {
            path: {
                fulfillmentPolicyId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["FulfillmentPolicy"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateFulfillmentPolicy: {
        parameters: {
            path: {
                fulfillmentPolicyId: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FulfillmentPolicyRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SetFulfillmentPolicyResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    deleteFulfillmentPolicy: {
        parameters: {
            path: {
                fulfillmentPolicyId: string;
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
    getFulfillmentPolicies: {
        parameters: {
            query: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["FulfillmentPolicyResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getFulfillmentPolicyByName: {
        parameters: {
            query: {
                marketplace_id: string;
                name: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["FulfillmentPolicy"];
                };
            };
            400: never;
            500: never;
        };
    };
    getPaymentPolicies: {
        parameters: {
            query: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PaymentPolicyResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    createPaymentPolicy: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["PaymentPolicyRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    Location?: string;
                };
                content: {
                    "application/json": components["schemas"]["SetPaymentPolicyResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getPaymentPolicy: {
        parameters: {
            path: {
                payment_policy_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PaymentPolicy"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updatePaymentPolicy: {
        parameters: {
            path: {
                payment_policy_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PaymentPolicyRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SetPaymentPolicyResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    deletePaymentPolicy: {
        parameters: {
            path: {
                payment_policy_id: string;
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
    getPaymentPolicyByName: {
        parameters: {
            query: {
                marketplace_id: string;
                name: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PaymentPolicy"];
                };
            };
            400: never;
            500: never;
        };
    };
    getPaymentsProgram: {
        parameters: {
            path: {
                marketplace_id: string;
                payments_program_type: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PaymentsProgramResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getPaymentsProgramOnboarding: {
        parameters: {
            path: {
                marketplace_id: string;
                payments_program_type: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PaymentsProgramOnboardingResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getPrivileges: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SellingPrivileges"];
                };
            };
            400: never;
            500: never;
        };
    };
    getOptedInPrograms: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Programs"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    optInToProgram: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["Program"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    optOutOfProgram: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["Program"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getRateTables: {
        parameters: {
            query?: {
                country_code?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RateTableResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getReturnPolicies: {
        parameters: {
            query: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReturnPolicyResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    createReturnPolicy: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReturnPolicyRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    Location?: string;
                };
                content: {
                    "application/json": components["schemas"]["SetReturnPolicyResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getReturnPolicy: {
        parameters: {
            path: {
                return_policy_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReturnPolicy"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateReturnPolicy: {
        parameters: {
            path: {
                return_policy_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReturnPolicyRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SetReturnPolicyResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    deleteReturnPolicy: {
        parameters: {
            path: {
                return_policy_id: string;
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
    getReturnPolicyByName: {
        parameters: {
            query: {
                marketplace_id: string;
                name: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReturnPolicy"];
                };
            };
            400: never;
            500: never;
        };
    };
    getSalesTax: {
        parameters: {
            path: {
                countryCode: string;
                jurisdictionId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SalesTax"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    createOrReplaceSalesTax: {
        parameters: {
            path: {
                countryCode: string;
                jurisdictionId: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SalesTaxBase"];
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    deleteSalesTax: {
        parameters: {
            path: {
                countryCode: string;
                jurisdictionId: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getSalesTaxes: {
        parameters: {
            query: {
                country_code: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SalesTaxes"];
                };
            };
            400: never;
            500: never;
        };
    };
    getSubscription: {
        parameters: {
            query?: {
                limit?: string;
                continuation_token?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SubscriptionResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getKYC: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["KycResponse"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    getAdvertisingEligibility: {
        parameters: {
            query?: {
                program_types?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SellerEligibilityMultiProgramResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getInventoryLocation: {
        parameters: {
            path: {
                merchantLocationKey: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["InventoryLocationResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    createInventoryLocation: {
        parameters: {
            path: {
                merchantLocationKey: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryLocationFull"];
            };
        };
        responses: {
            204: never;
            400: never;
            409: never;
            500: never;
        };
    };
    deleteInventoryLocation: {
        parameters: {
            path: {
                merchantLocationKey: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    disableInventoryLocation: {
        parameters: {
            path: {
                merchantLocationKey: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    enableInventoryLocation: {
        parameters: {
            path: {
                merchantLocationKey: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getInventoryLocations: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["LocationResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    updateInventoryLocation: {
        parameters: {
            path: {
                merchantLocationKey: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryLocation"];
            };
        };
        responses: {
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
