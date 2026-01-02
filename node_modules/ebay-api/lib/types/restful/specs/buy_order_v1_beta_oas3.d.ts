export interface paths {
    "/checkout_session/{checkoutSessionId}/apply_coupon": {
        post: operations["applyCoupon"];
    };
    "/checkout_session/{checkoutSessionId}": {
        get: operations["getCheckoutSession"];
    };
    "/checkout_session/initiate": {
        post: operations["initiateCheckoutSession"];
    };
    "/checkout_session/{checkoutSessionId}/place_order": {
        post: operations["placeOrder"];
    };
    "/checkout_session/{checkoutSessionId}/remove_coupon": {
        post: operations["removeCoupon"];
    };
    "/checkout_session/{checkoutSessionId}/update_payment_info": {
        post: operations["updatePaymentInfo"];
    };
    "/checkout_session/{checkoutSessionId}/update_quantity": {
        post: operations["updateQuantity"];
    };
    "/checkout_session/{checkoutSessionId}/update_shipping_address": {
        post: operations["updateShippingAddress"];
    };
    "/checkout_session/{checkoutSessionId}/update_shipping_option": {
        post: operations["updateShippingOption"];
    };
    "/guest_checkout_session/{checkoutSessionId}/apply_coupon": {
        post: operations["applyGuestCoupon"];
    };
    "/guest_checkout_session/{checkoutSessionId}": {
        get: operations["getGuestCheckoutSession"];
    };
    "/guest_checkout_session/initiate": {
        post: operations["initiateGuestCheckoutSession"];
    };
    "/guest_checkout_session/{checkoutSessionId}/initiate_payment": {
        post: operations["initiateGuestPayment"];
    };
    "/guest_checkout_session/{checkoutSessionId}/place_order": {
        post: operations["placeGuestOrder"];
    };
    "/guest_checkout_session/{checkoutSessionId}/remove_coupon": {
        post: operations["removeGuestCoupon"];
    };
    "/guest_checkout_session/{checkoutSessionId}/update_payment_info": {
        post: operations["updateGuestPaymentInfo"];
    };
    "/guest_checkout_session/{checkoutSessionId}/update_quantity": {
        post: operations["updateGuestQuantity"];
    };
    "/guest_checkout_session/{checkoutSessionId}/update_shipping_address": {
        post: operations["updateGuestShippingAddress"];
    };
    "/guest_checkout_session/{checkoutSessionId}/update_shipping_option": {
        post: operations["updateGuestShippingOption"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}/apply_coupon": {
        post: operations["applyProxyGuestCoupon"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}": {
        get: operations["getProxyGuestCheckoutSession"];
    };
    "/proxy_guest_checkout_session/initiate": {
        post: operations["initiateProxyGuestCheckoutSession"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}/place_order": {
        post: operations["placeProxyGuestOrder"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}/remove_coupon": {
        post: operations["removeProxyGuestCoupon"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}/update_payment_info": {
        post: operations["updateProxyGuestPaymentInfo"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}/update_quantity": {
        post: operations["updateProxyGuestQuantity"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}/update_shipping_address": {
        post: operations["updateProxyGuestShippingAddress"];
    };
    "/proxy_guest_checkout_session/{checkoutSessionId}/update_shipping_option": {
        post: operations["updateProxyGuestShippingOption"];
    };
    "/guest_purchase_order/{purchaseOrderId}": {
        get: operations["getGuestPurchaseOrder"];
    };
    "/purchase_order/{purchaseOrderId}": {
        get: operations["getPurchaseOrder"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Adjustment: {
            amount?: components["schemas"]["Amount"];
            label?: string;
        };
        Amount: {
            currency?: string;
            value?: string;
        };
        BillingAddress: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            firstName?: string;
            lastName?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        CheckoutSessionRequestWithoutPayment: {
            contactEmail?: string;
            contactFirstName?: string;
            contactLastName?: string;
            lineItemInputs?: (components["schemas"]["LineItemInput"])[];
            shippingAddress?: components["schemas"]["ShippingAddress"];
        };
        CheckoutSessionResponse: {
            acceptedPaymentMethods?: (components["schemas"]["PaymentMethod"])[];
            appliedCoupons?: (components["schemas"]["Coupon"])[];
            checkoutSessionId?: string;
            expirationDate?: string;
            lineItems?: (components["schemas"]["LineItem"])[];
            pricingSummary?: components["schemas"]["PricingSummary"];
            providedPaymentInstrument?: components["schemas"]["ProvidedPaymentInstrument"];
            shippingAddress?: components["schemas"]["ShippingAddress"];
            warnings?: (components["schemas"]["Error"])[];
        };
        Coupon: {
            redemptionCode?: string;
        };
        CouponRequest: {
            redemptionCode?: string;
        };
        CreateGuestCheckoutSessionRequest: {
            contactEmail?: string;
            contactFirstName?: string;
            contactLastName?: string;
            creditCard?: components["schemas"]["CreditCard"];
            lineItemInputs?: (components["schemas"]["LineItemInput"])[];
            shippingAddress?: components["schemas"]["ShippingAddress"];
        };
        CreateSignInCheckoutSessionRequest: {
            creditCard?: components["schemas"]["CreditCard"];
            lineItemInputs?: (components["schemas"]["LineItemInput"])[];
            shippingAddress?: components["schemas"]["ShippingAddress"];
        };
        CreditCard: {
            accountHolderName?: string;
            billingAddress?: components["schemas"]["BillingAddress"];
            brand?: string;
            cardNumber?: string;
            cvvNumber?: string;
            expireMonth?: number;
            expireYear?: number;
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
        EventLocation: {
            city?: string;
            country?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        GuestCheckoutSessionResponse: {
            acceptedPaymentMethods?: (components["schemas"]["PaymentMethod"])[];
            appliedCoupons?: (components["schemas"]["Coupon"])[];
            checkoutSessionId?: string;
            expirationDate?: string;
            lineItems?: (components["schemas"]["LineItem"])[];
            marketingMessages?: (components["schemas"]["MarketingMessage"])[];
            pricingSummary?: components["schemas"]["PricingSummary"];
            providedPaymentInstrument?: components["schemas"]["ProvidedPaymentInstrument"];
            shippingAddress?: components["schemas"]["ShippingAddress"];
            warnings?: (components["schemas"]["Error"])[];
        };
        GuestPlaceOrderRequest: {
            marketingTerms?: (components["schemas"]["MarketingTerms"])[];
        };
        GuestPurchaseOrder: {
            appliedCoupons?: (components["schemas"]["Coupon"])[];
            lineItems?: (components["schemas"]["OrderLineItem"])[];
            pricingSummary?: components["schemas"]["PricingSummary"];
            purchaseOrderCreationDate?: string;
            purchaseOrderId?: string;
            purchaseOrderPaymentStatus?: string;
            purchaseOrderStatus?: string;
            refundedAmount?: components["schemas"]["Amount"];
            warnings?: (components["schemas"]["Error"])[];
        };
        Image: {
            height?: number;
            imageUrl?: string;
            width?: number;
        };
        InitiatePaymentRequest: {
            paymentMethodBrandType?: string;
            paymentMethodType?: string;
        };
        LegacyReference: {
            legacyItemId?: string;
            legacyOrderId?: string;
            legacyTransactionId?: string;
        };
        LineItem: {
            baseUnitPrice?: components["schemas"]["Amount"];
            image?: components["schemas"]["Image"];
            itemId?: string;
            lineItemId?: string;
            netPrice?: components["schemas"]["Amount"];
            promotions?: (components["schemas"]["Promotion"])[];
            quantity?: number;
            seller?: components["schemas"]["Seller"];
            shippingOptions?: (components["schemas"]["ShippingOption"])[];
            shortDescription?: string;
            title?: string;
        };
        LineItemInput: {
            itemId?: string;
            quantity?: number;
        };
        LineItemReference: {
            lineItemId?: string;
            quantity?: number;
        };
        MarketingMessage: {
            legalMessage?: string;
            marketingChannels?: (string)[];
            marketingTypes?: (string)[];
        };
        MarketingTerms: {
            marketingChannels?: (string)[];
            marketingTermsAccepted?: boolean;
            marketingTypes?: (string)[];
        };
        OrderLineItem: {
            baseUnitPrice?: components["schemas"]["Amount"];
            image?: components["schemas"]["Image"];
            itemId?: string;
            legacyReference?: components["schemas"]["LegacyReference"];
            lineItemId?: string;
            lineItemPaymentStatus?: string;
            lineItemStatus?: string;
            netPrice?: components["schemas"]["Amount"];
            orderId?: string;
            promotions?: (components["schemas"]["Promotion"])[];
            quantity?: number;
            seller?: components["schemas"]["Seller"];
            shippingDetail?: components["schemas"]["ShippingDetail"];
            title?: string;
        };
        PaymentInstrument: {
            brand?: components["schemas"]["PaymentMethodBrand"];
            paymentMethodType?: string;
        };
        PaymentInstrumentReference: {
            externalReferenceId?: string;
            lastFourDigitForCreditCard?: string;
        };
        PaymentMethod: {
            label?: string;
            logoImage?: components["schemas"]["Image"];
            paymentMethodBrands?: (components["schemas"]["PaymentMethodBrand"])[];
            paymentMethodMessages?: (components["schemas"]["PaymentMethodMessage"])[];
            paymentMethodType?: string;
        };
        PaymentMethodBrand: {
            logoImage?: components["schemas"]["Image"];
            paymentMethodBrandType?: string;
        };
        PaymentMethodMessage: {
            legalMessage?: string;
            privacyPolicyWebUrl?: string;
            requiredForUserConfirmation?: boolean;
            userAgreementWebUrl?: string;
        };
        PricingSummary: {
            additionalSavings?: components["schemas"]["Amount"];
            adjustment?: components["schemas"]["Adjustment"];
            deliveryCost?: components["schemas"]["Amount"];
            deliveryDiscount?: components["schemas"]["Amount"];
            fee?: components["schemas"]["Amount"];
            importCharges?: components["schemas"]["Amount"];
            priceDiscount?: components["schemas"]["Amount"];
            priceSubtotal?: components["schemas"]["Amount"];
            tax?: components["schemas"]["Amount"];
            total?: components["schemas"]["Amount"];
        };
        Promotion: {
            discount?: components["schemas"]["Amount"];
            discountPercentage?: string;
            message?: string;
            promotionCode?: string;
            promotionType?: string;
        };
        ProvidedPaymentInstrument: {
            paymentInstrumentReference?: components["schemas"]["PaymentInstrumentReference"];
            paymentMethodBrand?: components["schemas"]["PaymentMethodBrand"];
            paymentMethodType?: string;
        };
        PurchaseOrder: {
            appliedCoupons?: (components["schemas"]["Coupon"])[];
            lineItems?: (components["schemas"]["OrderLineItem"])[];
            paymentInstrument?: components["schemas"]["PaymentInstrument"];
            pricingSummary?: components["schemas"]["PricingSummary"];
            purchaseOrderCreationDate?: string;
            purchaseOrderId?: string;
            purchaseOrderPaymentStatus?: string;
            purchaseOrderStatus?: string;
            refundedAmount?: components["schemas"]["Amount"];
            shippingAddress?: components["schemas"]["ShippingAddress"];
            shippingFulfillments?: (components["schemas"]["ShippingFulfillment"])[];
            warnings?: (components["schemas"]["Error"])[];
        };
        PurchaseOrderSummary: {
            purchaseOrderHref?: string;
            purchaseOrderId?: string;
            purchaseOrderPaymentStatus?: string;
            warnings?: (components["schemas"]["Error"])[];
        };
        Seller: {
            feedbackPercentage?: string;
            feedbackScore?: number;
            sellerAccountType?: string;
            username?: string;
        };
        ShipmentTrackingEvents: {
            description?: string;
            eventDate?: string;
            eventType?: string;
            location?: components["schemas"]["EventLocation"];
        };
        ShippingAddress: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            phoneNumber?: string;
            postalCode?: string;
            recipient?: string;
            stateOrProvince?: string;
        };
        ShippingAddressImpl: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            phoneNumber?: string;
            postalCode?: string;
            recipient?: string;
            stateOrProvince?: string;
        };
        ShippingDetail: {
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            shippingCarrierCode?: string;
            shippingServiceCode?: string;
        };
        ShippingFulfillment: {
            actualDeliveryDate?: string;
            lineItemReferences?: (components["schemas"]["LineItemReference"])[];
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            shipmentTrackingEvents?: (components["schemas"]["ShipmentTrackingEvents"])[];
            shipmentTrackingNumber?: string;
            shipmentTrackingUrl?: string;
            shippedDate?: string;
            shippingCarrierCode?: string;
            shippingServiceCode?: string;
        };
        ShippingOption: {
            baseDeliveryCost?: components["schemas"]["Amount"];
            deliveryDiscount?: components["schemas"]["Amount"];
            importCharges?: components["schemas"]["Amount"];
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            selected?: boolean;
            shippingCarrierCode?: string;
            shippingOptionId?: string;
            shippingServiceCode?: string;
        };
        UpdatePaymentInformation: {
            creditCard?: components["schemas"]["CreditCard"];
            wallet?: components["schemas"]["Wallet"];
        };
        UpdateQuantity: {
            lineItemId?: string;
            quantity?: number;
        };
        UpdateShippingOption: {
            lineItemId?: string;
            shippingOptionId?: string;
        };
        Wallet: {
            paymentToken?: string;
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
    applyCoupon: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CouponRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getCheckoutSession: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    initiateCheckoutSession: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateSignInCheckoutSessionRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    placeOrder: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PurchaseOrderSummary"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    removeCoupon: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CouponRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updatePaymentInfo: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePaymentInformation"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateQuantity: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateQuantity"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateShippingAddress: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ShippingAddressImpl"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateShippingOption: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateShippingOption"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    applyGuestCoupon: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CouponRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getGuestCheckoutSession: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    initiateGuestCheckoutSession: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateGuestCheckoutSessionRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    initiateGuestPayment: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["InitiatePaymentRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    placeGuestOrder: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GuestPlaceOrderRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PurchaseOrderSummary"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    removeGuestCoupon: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CouponRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateGuestPaymentInfo: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePaymentInformation"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateGuestQuantity: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateQuantity"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateGuestShippingAddress: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ShippingAddressImpl"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateGuestShippingOption: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateShippingOption"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    applyProxyGuestCoupon: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CouponRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getProxyGuestCheckoutSession: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    initiateProxyGuestCheckoutSession: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CheckoutSessionRequestWithoutPayment"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    placeProxyGuestOrder: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GuestPlaceOrderRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PurchaseOrderSummary"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    removeProxyGuestCoupon: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CouponRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateProxyGuestPaymentInfo: {
        parameters: {
            header: {
                Authorization: string;
                "X-EBAY-C-DATE": string;
                "X-EBAY-C-MARKETPLACE-ID": string;
                "X-EBAY-C-REQUEST-NONCE": string;
                "X-EBAY-C-SIGNATURE": string;
            };
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePaymentInformation"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateProxyGuestQuantity: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateQuantity"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateProxyGuestShippingAddress: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ShippingAddressImpl"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateProxyGuestShippingOption: {
        parameters: {
            path: {
                checkoutSessionId: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateShippingOption"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestCheckoutSessionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getGuestPurchaseOrder: {
        parameters: {
            path: {
                purchaseOrderId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GuestPurchaseOrder"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getPurchaseOrder: {
        parameters: {
            path: {
                purchaseOrderId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PurchaseOrder"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
}
