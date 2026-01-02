export interface paths {
    "/item_summary/search": {
        get: operations["search"];
    };
    "/item_summary/search_by_image": {
        post: operations["searchByImage"];
    };
    "/item/{item_id}": {
        get: operations["getItem"];
    };
    "/item/get_item_by_legacy_id": {
        get: operations["getItemByLegacyId"];
    };
    "/item/": {
        get: operations["getItems"];
    };
    "/item/get_items_by_item_group": {
        get: operations["getItemsByItemGroup"];
    };
    "/item/{item_id}/check_compatibility": {
        post: operations["checkCompatibility"];
    };
    "/shopping_cart/add_item": {
        post: operations["addItem"];
    };
    "/shopping_cart/": {
        get: operations["getShoppingCart"];
    };
    "/shopping_cart/remove_item": {
        post: operations["removeItem"];
    };
    "/shopping_cart/update_quantity": {
        post: operations["updateQuantity"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AddCartItemInput: {
            itemId?: string;
            quantity?: number;
        };
        AdditionalProductIdentity: {
            productIdentity?: (components["schemas"]["ProductIdentity"])[];
        };
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
        Aspect: {
            localizedName?: string;
            localizedValues?: (string)[];
        };
        AspectDistribution: {
            aspectValueDistributions?: (components["schemas"]["AspectValueDistribution"])[];
            localizedAspectName?: string;
        };
        AspectGroup: {
            aspects?: (components["schemas"]["Aspect"])[];
            localizedGroupName?: string;
        };
        AspectValueDistribution: {
            localizedAspectValue?: string;
            matchCount?: number;
            refinementHref?: string;
        };
        AttributeNameValue: {
            name?: string;
            value?: string;
        };
        AuthenticityGuaranteeProgram: {
            description?: string;
            termsWebUrl?: string;
        };
        AuthenticityVerificationProgram: {
            description?: string;
            termsWebUrl?: string;
        };
        AutoCorrections: {
            q?: string;
        };
        AvailableCoupon: {
            constraint?: components["schemas"]["CouponConstraint"];
            discountAmount?: components["schemas"]["Amount"];
            discountType?: string;
            message?: string;
            redemptionCode?: string;
            termsWebUrl?: string;
        };
        BuyingOptionDistribution: {
            buyingOption?: string;
            matchCount?: number;
            refinementHref?: string;
        };
        CartItem: {
            cartItemId?: string;
            cartItemSubtotal?: components["schemas"]["Amount"];
            image?: components["schemas"]["Image"];
            itemId?: string;
            itemWebUrl?: string;
            price?: components["schemas"]["Price"];
            quantity?: number;
            title?: string;
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
        CommonDescriptions: {
            description?: string;
            itemIds?: (string)[];
        };
        CompatibilityPayload: {
            compatibilityProperties?: (components["schemas"]["AttributeNameValue"])[];
        };
        CompatibilityProperty: {
            localizedName?: string;
            name?: string;
            value?: string;
        };
        CompatibilityResponse: {
            compatibilityStatus?: string;
            warnings?: (components["schemas"]["Error"])[];
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
        CoreItem: {
            additionalImages?: (components["schemas"]["Image"])[];
            adultOnly?: boolean;
            ageGroup?: string;
            authenticityGuarantee?: components["schemas"]["AuthenticityGuaranteeProgram"];
            authenticityVerification?: components["schemas"]["AuthenticityVerificationProgram"];
            availableCoupons?: (components["schemas"]["AvailableCoupon"])[];
            bidCount?: number;
            brand?: string;
            buyingOptions?: (string)[];
            categoryId?: string;
            categoryPath?: string;
            color?: string;
            condition?: string;
            conditionDescription?: string;
            conditionId?: string;
            currentBidPrice?: components["schemas"]["ConvertedAmount"];
            description?: string;
            eligibleForInlineCheckout?: boolean;
            enabledForGuestCheckout?: boolean;
            energyEfficiencyClass?: string;
            epid?: string;
            estimatedAvailabilities?: (components["schemas"]["EstimatedAvailability"])[];
            gender?: string;
            gtin?: string;
            image?: components["schemas"]["Image"];
            inferredEpid?: string;
            itemAffiliateWebUrl?: string;
            itemEndDate?: string;
            itemId?: string;
            itemLocation?: components["schemas"]["Address"];
            itemWebUrl?: string;
            legacyItemId?: string;
            localizedAspects?: (components["schemas"]["TypedNameValue"])[];
            lotSize?: number;
            marketingPrice?: components["schemas"]["MarketingPrice"];
            material?: string;
            minimumPriceToBid?: components["schemas"]["ConvertedAmount"];
            mpn?: string;
            pattern?: string;
            paymentMethods?: (components["schemas"]["PaymentMethod"])[];
            price?: components["schemas"]["ConvertedAmount"];
            priceDisplayCondition?: string;
            primaryItemGroup?: components["schemas"]["ItemGroupSummary"];
            primaryProductReviewRating?: components["schemas"]["ReviewRating"];
            priorityListing?: boolean;
            product?: components["schemas"]["Product"];
            productFicheWebUrl?: string;
            qualifiedPrograms?: (string)[];
            quantityLimitPerBuyer?: number;
            reservePriceMet?: boolean;
            returnTerms?: components["schemas"]["ItemReturnTerms"];
            seller?: components["schemas"]["SellerDetail"];
            sellerItemRevision?: string;
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            shipToLocations?: components["schemas"]["ShipToLocations"];
            shortDescription?: string;
            size?: string;
            sizeSystem?: string;
            sizeType?: string;
            subtitle?: string;
            taxes?: (components["schemas"]["Taxes"])[];
            title?: string;
            topRatedBuyingExperience?: boolean;
            tyreLabelImageUrl?: string;
            uniqueBidderCount?: number;
            unitPrice?: components["schemas"]["ConvertedAmount"];
            unitPricingMeasure?: string;
        };
        CouponConstraint: {
            expirationDate?: string;
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
        EstimatedAvailability: {
            availabilityThreshold?: number;
            availabilityThresholdType?: string;
            deliveryOptions?: (string)[];
            estimatedAvailabilityStatus?: string;
            estimatedAvailableQuantity?: number;
            estimatedSoldQuantity?: number;
        };
        Image: {
            height?: number;
            imageUrl?: string;
            width?: number;
        };
        Item: {
            additionalImages?: (components["schemas"]["Image"])[];
            adultOnly?: boolean;
            ageGroup?: string;
            authenticityGuarantee?: components["schemas"]["AuthenticityGuaranteeProgram"];
            authenticityVerification?: components["schemas"]["AuthenticityVerificationProgram"];
            availableCoupons?: (components["schemas"]["AvailableCoupon"])[];
            bidCount?: number;
            brand?: string;
            buyingOptions?: (string)[];
            categoryId?: string;
            categoryPath?: string;
            color?: string;
            condition?: string;
            conditionDescription?: string;
            conditionId?: string;
            currentBidPrice?: components["schemas"]["ConvertedAmount"];
            description?: string;
            eligibleForInlineCheckout?: boolean;
            enabledForGuestCheckout?: boolean;
            energyEfficiencyClass?: string;
            epid?: string;
            estimatedAvailabilities?: (components["schemas"]["EstimatedAvailability"])[];
            gender?: string;
            gtin?: string;
            image?: components["schemas"]["Image"];
            inferredEpid?: string;
            itemAffiliateWebUrl?: string;
            itemEndDate?: string;
            itemId?: string;
            itemLocation?: components["schemas"]["Address"];
            itemWebUrl?: string;
            legacyItemId?: string;
            localizedAspects?: (components["schemas"]["TypedNameValue"])[];
            lotSize?: number;
            marketingPrice?: components["schemas"]["MarketingPrice"];
            material?: string;
            minimumPriceToBid?: components["schemas"]["ConvertedAmount"];
            mpn?: string;
            pattern?: string;
            paymentMethods?: (components["schemas"]["PaymentMethod"])[];
            price?: components["schemas"]["ConvertedAmount"];
            priceDisplayCondition?: string;
            primaryItemGroup?: components["schemas"]["ItemGroupSummary"];
            primaryProductReviewRating?: components["schemas"]["ReviewRating"];
            priorityListing?: boolean;
            product?: components["schemas"]["Product"];
            productFicheWebUrl?: string;
            qualifiedPrograms?: (string)[];
            quantityLimitPerBuyer?: number;
            reservePriceMet?: boolean;
            returnTerms?: components["schemas"]["ItemReturnTerms"];
            seller?: components["schemas"]["SellerDetail"];
            sellerItemRevision?: string;
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            shipToLocations?: components["schemas"]["ShipToLocations"];
            shortDescription?: string;
            size?: string;
            sizeSystem?: string;
            sizeType?: string;
            subtitle?: string;
            taxes?: (components["schemas"]["Taxes"])[];
            title?: string;
            topRatedBuyingExperience?: boolean;
            tyreLabelImageUrl?: string;
            uniqueBidderCount?: number;
            unitPrice?: components["schemas"]["ConvertedAmount"];
            unitPricingMeasure?: string;
            warnings?: (components["schemas"]["Error"])[];
            watchCount?: number;
        };
        ItemGroup: {
            commonDescriptions?: (components["schemas"]["CommonDescriptions"])[];
            items?: (components["schemas"]["Item"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        ItemGroupSummary: {
            itemGroupAdditionalImages?: (components["schemas"]["Image"])[];
            itemGroupHref?: string;
            itemGroupId?: string;
            itemGroupImage?: components["schemas"]["Image"];
            itemGroupTitle?: string;
            itemGroupType?: string;
        };
        ItemLocationImpl: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        ItemReturnTerms: {
            extendedHolidayReturnsOffered?: boolean;
            refundMethod?: string;
            restockingFeePercentage?: string;
            returnInstructions?: string;
            returnMethod?: string;
            returnPeriod?: components["schemas"]["TimeDuration"];
            returnsAccepted?: boolean;
            returnShippingCostPayer?: string;
        };
        ItemSummary: {
            additionalImages?: (components["schemas"]["Image"])[];
            adultOnly?: boolean;
            availableCoupons?: boolean;
            bidCount?: number;
            buyingOptions?: (string)[];
            categories?: (components["schemas"]["Category"])[];
            compatibilityMatch?: string;
            compatibilityProperties?: (components["schemas"]["CompatibilityProperty"])[];
            condition?: string;
            conditionId?: string;
            currentBidPrice?: components["schemas"]["ConvertedAmount"];
            distanceFromPickupLocation?: components["schemas"]["TargetLocation"];
            energyEfficiencyClass?: string;
            epid?: string;
            image?: components["schemas"]["Image"];
            itemAffiliateWebUrl?: string;
            itemEndDate?: string;
            itemGroupHref?: string;
            itemGroupType?: string;
            itemHref?: string;
            itemId?: string;
            itemLocation?: components["schemas"]["ItemLocationImpl"];
            itemWebUrl?: string;
            legacyItemId?: string;
            marketingPrice?: components["schemas"]["MarketingPrice"];
            pickupOptions?: (components["schemas"]["PickupOptionSummary"])[];
            price?: components["schemas"]["ConvertedAmount"];
            priceDisplayCondition?: string;
            priorityListing?: boolean;
            qualifiedPrograms?: (string)[];
            seller?: components["schemas"]["Seller"];
            shippingOptions?: (components["schemas"]["ShippingOptionSummary"])[];
            shortDescription?: string;
            thumbnailImages?: (components["schemas"]["Image"])[];
            title?: string;
            topRatedBuyingExperience?: boolean;
            tyreLabelImageUrl?: string;
            unitPrice?: components["schemas"]["ConvertedAmount"];
            unitPricingMeasure?: string;
            watchCount?: number;
        };
        Items: {
            items?: (components["schemas"]["CoreItem"])[];
            total?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        LegalAddress: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            countryName?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        MarketingPrice: {
            discountAmount?: components["schemas"]["ConvertedAmount"];
            discountPercentage?: string;
            originalPrice?: components["schemas"]["ConvertedAmount"];
            priceTreatment?: string;
        };
        PaymentMethod: {
            paymentMethodType?: string;
            paymentMethodBrands?: (components["schemas"]["PaymentMethodBrand"])[];
            paymentInstructions?: (string)[];
            sellerInstructions?: (string)[];
        };
        PaymentMethodBrand: {
            paymentMethodBrandType?: string;
            logoImage?: components["schemas"]["Image"];
        };
        PickupOptionSummary: {
            pickupLocationType?: string;
        };
        Price: {
            convertedFromCurrency?: string;
            convertedFromValue?: string;
            currency?: string;
            value?: string;
        };
        Product: {
            additionalImages?: (components["schemas"]["Image"])[];
            additionalProductIdentities?: (components["schemas"]["AdditionalProductIdentity"])[];
            aspectGroups?: (components["schemas"]["AspectGroup"])[];
            brand?: string;
            description?: string;
            gtins?: (string)[];
            image?: components["schemas"]["Image"];
            mpns?: (string)[];
            title?: string;
        };
        ProductIdentity: {
            identifierType?: string;
            identifierValue?: string;
        };
        RatingHistogram: {
            count?: number;
            rating?: string;
        };
        Refinement: {
            aspectDistributions?: (components["schemas"]["AspectDistribution"])[];
            buyingOptionDistributions?: (components["schemas"]["BuyingOptionDistribution"])[];
            categoryDistributions?: (components["schemas"]["CategoryDistribution"])[];
            conditionDistributions?: (components["schemas"]["ConditionDistribution"])[];
            dominantCategoryId?: string;
        };
        Region: {
            regionName?: string;
            regionType?: string;
        };
        RemoteShopcartResponse: {
            cartItems?: (components["schemas"]["CartItem"])[];
            cartSubtotal?: components["schemas"]["Amount"];
            cartWebUrl?: string;
            unavailableCartItems?: (components["schemas"]["CartItem"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        RemoveCartItemInput: {
            cartItemId?: string;
        };
        ReviewRating: {
            averageRating?: string;
            ratingHistograms?: (components["schemas"]["RatingHistogram"])[];
            reviewCount?: number;
        };
        SearchByImageRequest: {
            image?: string;
        };
        SearchPagedCollection: {
            autoCorrections?: components["schemas"]["AutoCorrections"];
            href?: string;
            itemSummaries?: (components["schemas"]["ItemSummary"])[];
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            refinement?: components["schemas"]["Refinement"];
            total?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        Seller: {
            feedbackPercentage?: string;
            feedbackScore?: number;
            sellerAccountType?: string;
            username?: string;
        };
        SellerDetail: {
            feedbackPercentage?: string;
            feedbackScore?: number;
            sellerAccountType?: string;
            sellerLegalInfo?: components["schemas"]["SellerLegalInfo"];
            username?: string;
        };
        SellerLegalInfo: {
            email?: string;
            fax?: string;
            imprint?: string;
            legalContactFirstName?: string;
            legalContactLastName?: string;
            name?: string;
            phone?: string;
            registrationNumber?: string;
            sellerProvidedLegalAddress?: components["schemas"]["LegalAddress"];
            termsOfService?: string;
            vatDetails?: (components["schemas"]["VatDetail"])[];
        };
        ShipToLocation: {
            country?: string;
            postalCode?: string;
        };
        ShipToLocations: {
            regionExcluded?: (components["schemas"]["ShipToRegion"])[];
            regionIncluded?: (components["schemas"]["ShipToRegion"])[];
        };
        ShipToRegion: {
            regionId?: string;
            regionName?: string;
            regionType?: string;
        };
        ShippingOption: {
            additionalShippingCostPerUnit?: components["schemas"]["ConvertedAmount"];
            cutOffDateUsedForEstimate?: string;
            fulfilledThrough?: string;
            guaranteedDelivery?: boolean;
            importCharges?: components["schemas"]["ConvertedAmount"];
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            quantityUsedForEstimate?: number;
            shippingCarrierCode?: string;
            shippingCost?: components["schemas"]["ConvertedAmount"];
            shippingCostType?: string;
            shippingServiceCode?: string;
            shipToLocationUsedForEstimate?: components["schemas"]["ShipToLocation"];
            trademarkSymbol?: string;
            type?: string;
        };
        ShippingOptionSummary: {
            guaranteedDelivery?: boolean;
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            shippingCost?: components["schemas"]["ConvertedAmount"];
            shippingCostType?: string;
        };
        TargetLocation: {
            unitOfMeasure?: string;
            value?: string;
        };
        TaxJurisdiction: {
            region?: components["schemas"]["Region"];
            taxJurisdictionId?: string;
        };
        Taxes: {
            ebayCollectAndRemitTax?: boolean;
            includedInPrice?: boolean;
            shippingAndHandlingTaxed?: boolean;
            taxJurisdiction?: components["schemas"]["TaxJurisdiction"];
            taxPercentage?: string;
            taxType?: string;
        };
        TimeDuration: {
            unit?: string;
            value?: number;
        };
        TypedNameValue: {
            name?: string;
            type?: string;
            value?: string;
        };
        UpdateCartItemInput: {
            cartItemId?: string;
            quantity?: number;
        };
        VatDetail: {
            issuingCountry?: string;
            vatId?: string;
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
                auto_correct?: string;
                category_ids?: string;
                charity_ids?: string;
                compatibility_filter?: string;
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
                    "application/json": components["schemas"]["SearchPagedCollection"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    searchByImage: {
        parameters: {
            query?: {
                aspect_filter?: string;
                category_ids?: string;
                charity_ids?: string;
                fieldgroups?: string;
                filter?: string;
                limit?: string;
                offset?: string;
                sort?: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SearchByImageRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SearchPagedCollection"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getItem: {
        parameters: {
            query?: {
                fieldgroups?: string;
            };
            path: {
                item_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Item"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getItemByLegacyId: {
        parameters: {
            query: {
                fieldgroups?: string;
                legacy_item_id: string;
                legacy_variation_id?: string;
                legacy_variation_sku?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Item"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getItems: {
        parameters: {
            query?: {
                item_ids?: string;
                item_group_ids?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Items"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getItemsByItemGroup: {
        parameters: {
            query: {
                item_group_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ItemGroup"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    checkCompatibility: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
            path: {
                item_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CompatibilityPayload"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CompatibilityResponse"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    addItem: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AddCartItemInput"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RemoteShopcartResponse"];
                };
            };
            204: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    getShoppingCart: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RemoteShopcartResponse"];
                };
            };
            204: never;
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    removeItem: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RemoveCartItemInput"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RemoteShopcartResponse"];
                };
            };
            204: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    updateQuantity: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateCartItemInput"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["RemoteShopcartResponse"];
                };
            };
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
}
