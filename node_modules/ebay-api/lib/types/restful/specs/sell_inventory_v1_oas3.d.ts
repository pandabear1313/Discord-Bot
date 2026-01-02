export interface paths {
    "/bulk_create_or_replace_inventory_item": {
        post: operations["bulkCreateOrReplaceInventoryItem"];
    };
    "/bulk_get_inventory_item": {
        post: operations["bulkGetInventoryItem"];
    };
    "/bulk_update_price_quantity": {
        post: operations["bulkUpdatePriceQuantity"];
    };
    "/inventory_item/{sku}": {
        get: operations["getInventoryItem"];
        put: operations["createOrReplaceInventoryItem"];
        delete: operations["deleteInventoryItem"];
    };
    "/inventory_item": {
        get: operations["getInventoryItems"];
    };
    "/inventory_item/{sku}/product_compatibility": {
        get: operations["getProductCompatibility"];
        put: operations["createOrReplaceProductCompatibility"];
        delete: operations["deleteProductCompatibility"];
    };
    "/inventory_item_group/{inventoryItemGroupKey}": {
        get: operations["getInventoryItemGroup"];
        put: operations["createOrReplaceInventoryItemGroup"];
        delete: operations["deleteInventoryItemGroup"];
    };
    "/bulk_migrate_listing": {
        post: operations["bulkMigrateListing"];
    };
    "/listing/{listingId}/sku/{sku}/locations": {
        get: operations["getSkuLocationMapping"];
        put: operations["createOrReplaceSkuLocationMapping"];
        delete: operations["deleteSkuLocationMapping"];
    };
    "/bulk_create_offer": {
        post: operations["bulkCreateOffer"];
    };
    "/bulk_publish_offer": {
        post: operations["bulkPublishOffer"];
    };
    "/offer": {
        get: operations["getOffers"];
        post: operations["createOffer"];
    };
    "/offer/{offerId}": {
        get: operations["getOffer"];
        put: operations["updateOffer"];
        delete: operations["deleteOffer"];
    };
    "/offer/get_listing_fees": {
        post: operations["getListingFees"];
    };
    "/offer/{offerId}/publish": {
        post: operations["publishOffer"];
    };
    "/offer/publish_by_inventory_item_group": {
        post: operations["publishOfferByInventoryItemGroup"];
    };
    "/offer/{offerId}/withdraw": {
        post: operations["withdrawOffer"];
    };
    "/offer/withdraw_by_inventory_item_group": {
        post: operations["withdrawOfferByInventoryItemGroup"];
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
        Availability: {
            pickupAtLocationAvailability?: (components["schemas"]["PickupAtLocationAvailability"])[];
            shipToLocationAvailability?: components["schemas"]["ShipToLocationAvailability"];
        };
        AvailabilityDistribution: {
            fulfillmentTime?: components["schemas"]["TimeDuration"];
            merchantLocationKey?: string;
            quantity?: number;
        };
        AvailabilityWithAll: {
            pickupAtLocationAvailability?: (components["schemas"]["PickupAtLocationAvailability"])[];
            shipToLocationAvailability?: components["schemas"]["ShipToLocationAvailabilityWithAll"];
        };
        BaseResponse: {
            warnings?: (components["schemas"]["Error"])[];
        };
        BestOffer: {
            autoAcceptPrice?: components["schemas"]["Amount"];
            autoDeclinePrice?: components["schemas"]["Amount"];
            bestOfferEnabled?: boolean;
        };
        BulkEbayOfferDetailsWithKeys: {
            requests?: (components["schemas"]["EbayOfferDetailsWithKeys"])[];
        };
        BulkGetInventoryItem: {
            requests?: (components["schemas"]["GetInventoryItem"])[];
        };
        BulkGetInventoryItemResponse: {
            responses?: (components["schemas"]["GetInventoryItemResponse"])[];
        };
        BulkInventoryItem: {
            requests?: (components["schemas"]["InventoryItemWithSkuLocale"])[];
        };
        BulkInventoryItemResponse: {
            responses?: (components["schemas"]["InventoryItemResponse"])[];
        };
        BulkMigrateListing: {
            requests?: (components["schemas"]["MigrateListing"])[];
        };
        BulkMigrateListingResponse: {
            responses?: (components["schemas"]["MigrateListingResponse"])[];
        };
        BulkOffer: {
            requests?: (components["schemas"]["OfferKeyWithId"])[];
        };
        BulkOfferResponse: {
            responses?: (components["schemas"]["OfferSkuResponse"])[];
        };
        BulkPriceQuantity: {
            requests?: (components["schemas"]["PriceQuantity"])[];
        };
        BulkPriceQuantityResponse: {
            responses?: (components["schemas"]["PriceQuantityResponse"])[];
        };
        BulkPublishResponse: {
            responses?: (components["schemas"]["OfferResponseWithListingId"])[];
        };
        Charity: {
            charityId?: string;
            donationPercentage?: string;
        };
        Compatibility: {
            compatibleProducts?: (components["schemas"]["CompatibleProduct"])[];
            sku?: string;
        };
        CompatibleProduct: {
            compatibilityProperties?: (components["schemas"]["NameValueList"])[];
            notes?: string;
            productFamilyProperties?: components["schemas"]["ProductFamilyProperties"];
            productIdentifier?: components["schemas"]["ProductIdentifier"];
        };
        ConditionDescriptor: {
            additionalInfo?: string;
            name?: string;
            values?: (string)[];
        };
        CountryPolicy: {
            country?: string;
            policyIds?: (string)[];
        };
        Dimension: {
            height?: number;
            length?: number;
            unit?: string;
            width?: number;
        };
        Document: {
            documentId?: string;
        };
        EbayOfferDetailsWithAll: {
            availableQuantity?: number;
            categoryId?: string;
            charity?: components["schemas"]["Charity"];
            extendedProducerResponsibility?: components["schemas"]["ExtendedProducerResponsibility"];
            format?: string;
            hideBuyerDetails?: boolean;
            includeCatalogProductDetails?: boolean;
            listing?: components["schemas"]["ListingDetails"];
            listingDescription?: string;
            listingDuration?: string;
            listingPolicies?: components["schemas"]["ListingPolicies"];
            listingStartDate?: string;
            lotSize?: number;
            marketplaceId?: string;
            merchantLocationKey?: string;
            offerId?: string;
            pricingSummary?: components["schemas"]["PricingSummary"];
            quantityLimitPerBuyer?: number;
            regulatory?: components["schemas"]["Regulatory"];
            secondaryCategoryId?: string;
            sku?: string;
            status?: string;
            storeCategoryNames?: (string)[];
            tax?: components["schemas"]["Tax"];
        };
        EbayOfferDetailsWithId: {
            availableQuantity?: number;
            categoryId?: string;
            charity?: components["schemas"]["Charity"];
            extendedProducerResponsibility?: components["schemas"]["ExtendedProducerResponsibility"];
            hideBuyerDetails?: boolean;
            includeCatalogProductDetails?: boolean;
            listingDescription?: string;
            listingDuration?: string;
            listingPolicies?: components["schemas"]["ListingPolicies"];
            listingStartDate?: string;
            lotSize?: number;
            merchantLocationKey?: string;
            pricingSummary?: components["schemas"]["PricingSummary"];
            quantityLimitPerBuyer?: number;
            regulatory?: components["schemas"]["Regulatory"];
            secondaryCategoryId?: string;
            storeCategoryNames?: (string)[];
            tax?: components["schemas"]["Tax"];
        };
        EbayOfferDetailsWithKeys: {
            availableQuantity?: number;
            categoryId?: string;
            charity?: components["schemas"]["Charity"];
            extendedProducerResponsibility?: components["schemas"]["ExtendedProducerResponsibility"];
            format?: string;
            hideBuyerDetails?: boolean;
            includeCatalogProductDetails?: boolean;
            listingDescription?: string;
            listingDuration?: string;
            listingPolicies?: components["schemas"]["ListingPolicies"];
            listingStartDate?: string;
            lotSize?: number;
            marketplaceId?: string;
            merchantLocationKey?: string;
            pricingSummary?: components["schemas"]["PricingSummary"];
            quantityLimitPerBuyer?: number;
            regulatory?: components["schemas"]["Regulatory"];
            secondaryCategoryId?: string;
            sku?: string;
            storeCategoryNames?: (string)[];
            tax?: components["schemas"]["Tax"];
        };
        EnergyEfficiencyLabel: {
            imageDescription?: string;
            imageURL?: string;
            productInformationSheet?: string;
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
            ecoParticipationFee?: components["schemas"]["Amount"];
            producerProductId?: string;
            productDocumentationId?: string;
            productPackageId?: string;
            shipmentPackageId?: string;
        };
        Fee: {
            amount?: components["schemas"]["Amount"];
            feeType?: string;
            promotionalDiscount?: components["schemas"]["Amount"];
        };
        FeeSummary: {
            fees?: (components["schemas"]["Fee"])[];
            marketplaceId?: string;
            warnings?: (components["schemas"]["Error"])[];
        };
        FeesSummaryResponse: {
            feeSummaries?: (components["schemas"]["FeeSummary"])[];
        };
        FormatAllocation: {
            auction?: number;
            fixedPrice?: number;
        };
        FulfillmentCenterSpecifications: {
            sameDayShippingCutOffTimes?: components["schemas"]["SameDayShippingCutOffTimes"];
        };
        GeoCoordinates: {
            latitude?: number;
            longitude?: number;
        };
        GetInventoryItem: {
            sku?: string;
        };
        GetInventoryItemResponse: {
            errors?: (components["schemas"]["Error"])[];
            inventoryItem?: components["schemas"]["InventoryItemWithSkuLocaleGroupKeys"];
            sku?: string;
            statusCode?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        Hazmat: {
            component?: string;
            pictograms?: (string)[];
            signalWord?: string;
            statements?: (string)[];
        };
        Interval: {
            close?: string;
            open?: string;
        };
        InventoryItem: {
            availability?: components["schemas"]["Availability"];
            condition?: string;
            conditionDescription?: string;
            conditionDescriptors?: (components["schemas"]["ConditionDescriptor"])[];
            packageWeightAndSize?: components["schemas"]["PackageWeightAndSize"];
            product?: components["schemas"]["Product"];
        };
        InventoryItemGroup: {
            aspects?: string;
            description?: string;
            imageUrls?: (string)[];
            inventoryItemGroupKey?: string;
            subtitle?: string;
            title?: string;
            variantSKUs?: (string)[];
            variesBy?: components["schemas"]["VariesBy"];
            videoIds?: (string)[];
        };
        InventoryItemListing: {
            offerId?: string;
            sku?: string;
        };
        InventoryItemResponse: {
            errors?: (components["schemas"]["Error"])[];
            locale?: string;
            sku?: string;
            statusCode?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        InventoryItemWithSkuLocale: {
            availability?: components["schemas"]["Availability"];
            condition?: string;
            conditionDescription?: string;
            conditionDescriptors?: (components["schemas"]["ConditionDescriptor"])[];
            locale?: string;
            packageWeightAndSize?: components["schemas"]["PackageWeightAndSize"];
            product?: components["schemas"]["Product"];
            sku?: string;
        };
        InventoryItemWithSkuLocaleGroupKeys: {
            availability?: components["schemas"]["AvailabilityWithAll"];
            condition?: string;
            conditionDescription?: string;
            conditionDescriptors?: (components["schemas"]["ConditionDescriptor"])[];
            inventoryItemGroupKeys?: (string)[];
            locale?: string;
            packageWeightAndSize?: components["schemas"]["PackageWeightAndSize"];
            product?: components["schemas"]["Product"];
            sku?: string;
        };
        InventoryItemWithSkuLocaleGroupid: {
            availability?: components["schemas"]["AvailabilityWithAll"];
            condition?: string;
            conditionDescription?: string;
            conditionDescriptors?: (components["schemas"]["ConditionDescriptor"])[];
            groupIds?: (string)[];
            inventoryItemGroupKeys?: (string)[];
            locale?: string;
            packageWeightAndSize?: components["schemas"]["PackageWeightAndSize"];
            product?: components["schemas"]["Product"];
            sku?: string;
        };
        InventoryItems: {
            href?: string;
            inventoryItems?: (components["schemas"]["InventoryItemWithSkuLocaleGroupid"])[];
            limit?: number;
            next?: string;
            prev?: string;
            size?: number;
            total?: number;
        };
        InventoryLocation: {
            location?: components["schemas"]["LocationDetails"];
            locationAdditionalInformation?: string;
            locationInstructions?: string;
            locationTypes?: (string)[];
            locationWebUrl?: string;
            name?: string;
            operatingHours?: (components["schemas"]["OperatingHours"])[];
            phone?: string;
            specialHours?: (components["schemas"]["SpecialHours"])[];
            timeZoneId?: string;
            fulfillmentCenterSpecifications?: components["schemas"]["FulfillmentCenterSpecifications"];
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
            timeZoneId?: string;
            fulfillmentCenterSpecifications?: components["schemas"]["FulfillmentCenterSpecifications"];
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
            timeZoneId?: string;
            fulfillmentCenterSpecifications?: components["schemas"]["FulfillmentCenterSpecifications"];
        };
        ListingDetails: {
            listingId?: string;
            listingOnHold?: boolean;
            listingStatus?: string;
            soldQuantity?: number;
        };
        ListingPolicies: {
            bestOfferTerms?: components["schemas"]["BestOffer"];
            eBayPlusIfEligible?: boolean;
            fulfillmentPolicyId?: string;
            paymentPolicyId?: string;
            productCompliancePolicyIds?: (string)[];
            regionalProductCompliancePolicies?: components["schemas"]["RegionalProductCompliancePolicies"];
            regionalTakeBackPolicies?: components["schemas"]["RegionalTakeBackPolicies"];
            returnPolicyId?: string;
            shippingCostOverrides?: (components["schemas"]["ShippingCostOverride"])[];
            takeBackPolicyId?: string;
        };
        Location: {
            address?: components["schemas"]["Address"];
            geoCoordinates?: components["schemas"]["GeoCoordinates"];
            locationId?: string;
        };
        LocationAvailabilityDetails: {
            merchantLocationKey?: string;
        };
        LocationDetails: {
            address?: components["schemas"]["Address"];
            geoCoordinates?: components["schemas"]["GeoCoordinates"];
        };
        LocationMapping: {
            locations?: (components["schemas"]["LocationAvailabilityDetails"])[];
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
        Manufacturer: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            companyName?: string;
            country?: string;
            email?: string;
            phone?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        MigrateListing: {
            listingId?: string;
        };
        MigrateListingResponse: {
            errors?: (components["schemas"]["Error"])[];
            inventoryItemGroupKey?: string;
            inventoryItems?: (components["schemas"]["InventoryItemListing"])[];
            listingId?: string;
            marketplaceId?: string;
            statusCode?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        NameValueList: {
            name?: string;
            value?: string;
        };
        OfferKeyWithId: {
            offerId?: string;
        };
        OfferKeysWithId: {
            offers?: (components["schemas"]["OfferKeyWithId"])[];
        };
        OfferPriceQuantity: {
            availableQuantity?: number;
            offerId?: string;
            price?: components["schemas"]["Amount"];
        };
        OfferResponse: {
            offerId?: string;
            warnings?: (components["schemas"]["Error"])[];
        };
        OfferResponseWithListingId: {
            errors?: (components["schemas"]["Error"])[];
            listingId?: string;
            offerId?: string;
            statusCode?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        OfferSkuResponse: {
            errors?: (components["schemas"]["Error"])[];
            format?: string;
            marketplaceId?: string;
            offerId?: string;
            sku?: string;
            statusCode?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        Offers: {
            href?: string;
            limit?: number;
            next?: string;
            offers?: (components["schemas"]["EbayOfferDetailsWithAll"])[];
            prev?: string;
            size?: number;
            total?: number;
        };
        OperatingHours: {
            dayOfWeekEnum?: string;
            intervals?: (components["schemas"]["Interval"])[];
        };
        Overrides: {
            cutOffTime?: string;
            endDate?: string;
            startDate?: string;
        };
        PackageWeightAndSize: {
            dimensions?: components["schemas"]["Dimension"];
            packageType?: string;
            shippingIrregular?: boolean;
            weight?: components["schemas"]["Weight"];
        };
        PickupAtLocationAvailability: {
            availabilityType?: string;
            fulfillmentTime?: components["schemas"]["TimeDuration"];
            merchantLocationKey?: string;
            quantity?: number;
        };
        PriceQuantity: {
            offers?: (components["schemas"]["OfferPriceQuantity"])[];
            shipToLocationAvailability?: components["schemas"]["ShipToLocationAvailability"];
            sku?: string;
        };
        PriceQuantityResponse: {
            errors?: (components["schemas"]["Error"])[];
            offerId?: string;
            sku?: string;
            statusCode?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        PricingSummary: {
            auctionReservePrice?: components["schemas"]["Amount"];
            auctionStartPrice?: components["schemas"]["Amount"];
            minimumAdvertisedPrice?: components["schemas"]["Amount"];
            originallySoldForRetailPriceOn?: string;
            originalRetailPrice?: components["schemas"]["Amount"];
            price?: components["schemas"]["Amount"];
            pricingVisibility?: string;
        };
        Product: {
            aspects?: string;
            brand?: string;
            description?: string;
            ean?: (string)[];
            epid?: string;
            imageUrls?: (string)[];
            isbn?: (string)[];
            mpn?: string;
            subtitle?: string;
            title?: string;
            upc?: (string)[];
            videoIds?: (string)[];
        };
        ProductFamilyProperties: {
            engine?: string;
            make?: string;
            model?: string;
            trim?: string;
            year?: string;
        };
        ProductIdentifier: {
            epid?: string;
            gtin?: string;
            ktype?: string;
        };
        ProductSafety: {
            component?: string;
            pictograms?: (string)[];
            statements?: (string)[];
        };
        PublishByInventoryItemGroupRequest: {
            inventoryItemGroupKey?: string;
            marketplaceId?: string;
        };
        PublishResponse: {
            listingId?: string;
            warnings?: (components["schemas"]["Error"])[];
        };
        RegionalProductCompliancePolicies: {
            countryPolicies?: (components["schemas"]["CountryPolicy"])[];
        };
        RegionalTakeBackPolicies: {
            countryPolicies?: (components["schemas"]["CountryPolicy"])[];
        };
        Regulatory: {
            documents?: (components["schemas"]["Document"])[];
            energyEfficiencyLabel?: components["schemas"]["EnergyEfficiencyLabel"];
            hazmat?: components["schemas"]["Hazmat"];
            manufacturer?: components["schemas"]["Manufacturer"];
            productSafety?: components["schemas"]["ProductSafety"];
            repairScore?: number;
            responsiblePersons?: (components["schemas"]["ResponsiblePerson"])[];
        };
        ResponsiblePerson: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            companyName?: string;
            country?: string;
            email?: string;
            phone?: string;
            postalCode?: string;
            stateOrProvince?: string;
            types?: (string)[];
        };
        SameDayShippingCutOffTimes: {
            overrides?: (components["schemas"]["Overrides"])[];
            weeklySchedule?: (components["schemas"]["WeeklySchedule"])[];
        };
        ShipToLocationAvailability: {
            availabilityDistributions?: (components["schemas"]["AvailabilityDistribution"])[];
            quantity?: number;
        };
        ShipToLocationAvailabilityWithAll: {
            allocationByFormat?: components["schemas"]["FormatAllocation"];
            availabilityDistributions?: (components["schemas"]["AvailabilityDistribution"])[];
            quantity?: number;
        };
        ShippingCostOverride: {
            additionalShippingCost?: components["schemas"]["Amount"];
            priority?: number;
            shippingCost?: components["schemas"]["Amount"];
            shippingServiceType?: string;
            surcharge?: components["schemas"]["Amount"];
        };
        SpecialHours: {
            date?: string;
            intervals?: (components["schemas"]["Interval"])[];
        };
        Specification: {
            name?: string;
            values?: (string)[];
        };
        Tax: {
            applyTax?: boolean;
            thirdPartyTaxCategory?: string;
            vatPercentage?: number;
        };
        TimeDuration: {
            unit?: string;
            value?: number;
        };
        VariesBy: {
            aspectsImageVariesBy?: (string)[];
            specifications?: (components["schemas"]["Specification"])[];
        };
        Version: {
            instance?: components["schemas"]["Version"];
            version?: string;
        };
        WeeklySchedule: {
            cutOffTime?: string;
            dayOfWeekEnum?: (string)[];
        };
        Weight: {
            unit?: string;
            value?: number;
        };
        WithdrawByInventoryItemGroupRequest: {
            inventoryItemGroupKey?: string;
            marketplaceId?: string;
        };
        WithdrawResponse: {
            listingId?: string;
            warnings?: (components["schemas"]["Error"])[];
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
    bulkCreateOrReplaceInventoryItem: {
        parameters: {
            header: {
                "Content-Type": string;
                "Content-Language": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkInventoryItem"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkInventoryItemResponse"];
                };
            };
            207: never;
            400: never;
            500: never;
        };
    };
    bulkGetInventoryItem: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkGetInventoryItem"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkGetInventoryItemResponse"];
                };
            };
            207: never;
            400: never;
            500: never;
        };
    };
    bulkUpdatePriceQuantity: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkPriceQuantity"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkPriceQuantityResponse"];
                };
            };
            207: never;
            400: never;
            500: never;
        };
    };
    getInventoryItem: {
        parameters: {
            path: {
                sku: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["InventoryItemWithSkuLocaleGroupid"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    createOrReplaceInventoryItem: {
        parameters: {
            header: {
                "Content-Language": string;
                "Content-Type": string;
            };
            path: {
                sku: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryItem"];
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            201: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    deleteInventoryItem: {
        parameters: {
            path: {
                sku: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getInventoryItems: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["InventoryItems"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getProductCompatibility: {
        parameters: {
            path: {
                sku: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Compatibility"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    createOrReplaceProductCompatibility: {
        parameters: {
            header: {
                "Content-Language": string;
                "Content-Type": string;
            };
            path: {
                sku: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Compatibility"];
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            201: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    deleteProductCompatibility: {
        parameters: {
            path: {
                sku: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getInventoryItemGroup: {
        parameters: {
            path: {
                inventoryItemGroupKey: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["InventoryItemGroup"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    createOrReplaceInventoryItemGroup: {
        parameters: {
            header: {
                "Content-Language": string;
                "Content-Type": string;
            };
            path: {
                inventoryItemGroupKey: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryItemGroup"];
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            201: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    deleteInventoryItemGroup: {
        parameters: {
            path: {
                inventoryItemGroupKey: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    bulkMigrateListing: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkMigrateListing"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkMigrateListingResponse"];
                };
            };
            207: never;
            400: never;
            500: never;
        };
    };
    getSkuLocationMapping: {
        parameters: {
            path: {
                listingId: string;
                sku: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["LocationMapping"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    createOrReplaceSkuLocationMapping: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                listingId: string;
                sku: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LocationMapping"];
            };
        };
        responses: {
            204: never;
            400: never;
            500: never;
        };
    };
    deleteSkuLocationMapping: {
        parameters: {
            path: {
                listingId: string;
                sku: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    bulkCreateOffer: {
        parameters: {
            header: {
                "Content-Language": string;
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkEbayOfferDetailsWithKeys"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkOfferResponse"];
                };
            };
            207: never;
            400: never;
            500: never;
        };
    };
    bulkPublishOffer: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkOffer"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkPublishResponse"];
                };
            };
            207: never;
            400: never;
            500: never;
        };
    };
    getOffers: {
        parameters: {
            query?: {
                format?: string;
                limit?: string;
                marketplace_id?: string;
                offset?: string;
                sku?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Offers"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    createOffer: {
        parameters: {
            header: {
                "Content-Language": string;
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EbayOfferDetailsWithKeys"];
            };
        };
        responses: {
            201: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["OfferResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getOffer: {
        parameters: {
            path: {
                offerId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["EbayOfferDetailsWithAll"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateOffer: {
        parameters: {
            header: {
                "Content-Language": string;
                "Content-Type": string;
            };
            path: {
                offerId: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EbayOfferDetailsWithId"];
            };
        };
        responses: {
            200: {
                headers: {
                    "Content-Language"?: string;
                };
                content: {
                    "application/json": components["schemas"]["OfferResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    deleteOffer: {
        parameters: {
            path: {
                offerId: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getListingFees: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["OfferKeysWithId"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["FeesSummaryResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    publishOffer: {
        parameters: {
            path: {
                offerId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PublishResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    publishOfferByInventoryItemGroup: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PublishByInventoryItemGroupRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PublishResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    withdrawOffer: {
        parameters: {
            path: {
                offerId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["WithdrawResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    withdrawOfferByInventoryItemGroup: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WithdrawByInventoryItemGroupRequest"];
            };
        };
        responses: {
            204: never;
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
            header: {
                "Content-Type": string;
            };
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
            header: {
                "Content-Type": string;
            };
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
}
