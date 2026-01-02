export interface paths {
    "/order/{orderId}": {
        get: operations["getOrder"];
    };
    "/order": {
        get: operations["getOrders"];
    };
    "/order/{order_id}/issue_refund": {
        post: operations["issueRefund"];
    };
    "/order/{orderId}/shipping_fulfillment": {
        get: operations["getShippingFulfillments"];
        post: operations["createShippingFulfillment"];
    };
    "/order/{orderId}/shipping_fulfillment/{fulfillmentId}": {
        get: operations["getShippingFulfillment"];
    };
    "/payment_dispute/{payment_dispute_id}": {
        get: operations["getPaymentDispute"];
    };
    "/payment_dispute/{payment_dispute_id}/fetch_evidence_content": {
        get: operations["fetchEvidenceContent"];
    };
    "/payment_dispute/{payment_dispute_id}/activity": {
        get: operations["getActivities"];
    };
    "/payment_dispute_summary": {
        get: operations["getPaymentDisputeSummaries"];
    };
    "/payment_dispute/{payment_dispute_id}/contest": {
        post: operations["contestPaymentDispute"];
    };
    "/payment_dispute/{payment_dispute_id}/accept": {
        post: operations["acceptPaymentDispute"];
    };
    "/payment_dispute/{payment_dispute_id}/upload_evidence_file": {
        post: operations["uploadEvidenceFile"];
    };
    "/payment_dispute/{payment_dispute_id}/add_evidence": {
        post: operations["addEvidence"];
    };
    "/payment_dispute/{payment_dispute_id}/update_evidence": {
        post: operations["updateEvidence"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AcceptPaymentDisputeRequest: {
            returnAddress?: components["schemas"]["ReturnAddress"];
            revision?: number;
        };
        AddEvidencePaymentDisputeRequest: {
            evidenceType?: string;
            files?: (components["schemas"]["FileEvidence"])[];
            lineItems?: (components["schemas"]["OrderLineItems"])[];
        };
        AddEvidencePaymentDisputeResponse: {
            evidenceId?: string;
        };
        Address: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            countryCode?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        Amount: {
            convertedFromCurrency?: string;
            convertedFromValue?: string;
            currency?: string;
            value?: string;
        };
        AppliedPromotion: {
            description?: string;
            discountAmount?: components["schemas"]["Amount"];
            promotionId?: string;
        };
        AppointmentDetails: {
            appointmentEndTime?: string;
            appointmentStartTime?: string;
            appointmentStatus?: string;
            appointmentType?: string;
            appointmentWindow?: string;
            serviceProviderAppointmentDate?: string;
        };
        Buyer: {
            buyerRegistrationAddress?: components["schemas"]["ExtendedContact"];
            taxAddress?: components["schemas"]["TaxAddress"];
            taxIdentifier?: components["schemas"]["TaxIdentifier"];
            username?: string;
        };
        CancelRequest: {
            cancelCompletedDate?: string;
            cancelInitiator?: string;
            cancelReason?: string;
            cancelRequestedDate?: string;
            cancelRequestId?: string;
            cancelRequestState?: string;
        };
        CancelStatus: {
            cancelledDate?: string;
            cancelRequests?: (components["schemas"]["CancelRequest"])[];
            cancelState?: string;
        };
        Charge: {
            amount?: components["schemas"]["Amount"];
            chargeType?: string;
        };
        ContestPaymentDisputeRequest: {
            note?: string;
            returnAddress?: components["schemas"]["ReturnAddress"];
            revision?: number;
        };
        DeliveryCost: {
            discountAmount?: components["schemas"]["Amount"];
            handlingCost?: components["schemas"]["Amount"];
            importCharges?: components["schemas"]["Amount"];
            shippingCost?: components["schemas"]["Amount"];
            shippingIntermediationFee?: components["schemas"]["Amount"];
        };
        DisputeAmount: {
            convertedFromCurrency?: string;
            convertedFromValue?: string;
            currency?: string;
            exchangeRate?: string;
            value?: string;
        };
        DisputeEvidence: {
            evidenceId?: string;
            evidenceType?: string;
            files?: (components["schemas"]["FileInfo"])[];
            lineItems?: (components["schemas"]["OrderLineItems"])[];
            providedDate?: string;
            requestDate?: string;
            respondByDate?: string;
            shipmentTracking?: (components["schemas"]["TrackingInfo"])[];
        };
        DisputeSummaryResponse: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            paymentDisputeSummaries?: (components["schemas"]["PaymentDisputeSummary"])[];
            prev?: string;
            total?: number;
        };
        EbayCollectAndRemitTax: {
            amount?: components["schemas"]["Amount"];
            ebayReference?: components["schemas"]["EbayTaxReference"];
            taxType?: string;
            collectionMethod?: string;
        };
        EbayCollectedCharges: {
            ebayShipping?: components["schemas"]["Amount"];
            charges?: (components["schemas"]["Charge"])[];
        };
        EbayFulfillmentProgram: {
            fulfilledBy?: string;
        };
        EbayInternationalShipping: {
            returnsManagedBy?: string;
        };
        EbayShipping: {
            shippingLabelProvidedBy?: string;
        };
        EbayTaxReference: {
            name?: string;
            value?: string;
        };
        EbayVaultProgram: {
            fulfillmentType?: string;
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
        EvidenceRequest: {
            evidenceId?: string;
            evidenceType?: string;
            lineItems?: (components["schemas"]["OrderLineItems"])[];
            requestDate?: string;
            respondByDate?: string;
        };
        ExtendedContact: {
            companyName?: string;
            contactAddress?: components["schemas"]["Address"];
            email?: string;
            fullName?: string;
            primaryPhone?: components["schemas"]["PhoneNumber"];
        };
        FileEvidence: {
            fileId?: string;
        };
        FileInfo: {
            fileId?: string;
            fileType?: string;
            name?: string;
            uploadedDate?: string;
        };
        FulfillmentStartInstruction: {
            appointment?: components["schemas"]["AppointmentDetails"];
            ebaySupportedFulfillment?: boolean;
            finalDestinationAddress?: components["schemas"]["Address"];
            fulfillmentInstructionsType?: string;
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            pickupStep?: components["schemas"]["PickupStep"];
            shippingStep?: components["schemas"]["ShippingStep"];
        };
        GiftDetails: {
            message?: string;
            recipientEmail?: string;
            senderName?: string;
        };
        InfoFromBuyer: {
            contentOnHold?: boolean;
            note?: string;
            returnShipmentTracking?: (components["schemas"]["TrackingInfo"])[];
        };
        IssueRefundRequest: {
            reasonForRefund?: string;
            comment?: string;
            refundItems?: (components["schemas"]["RefundItem"])[];
            orderLevelRefundAmount?: components["schemas"]["SimpleAmount"];
        };
        ItemLocation: {
            countryCode?: string;
            location?: string;
            postalCode?: string;
        };
        LegacyReference: {
            legacyItemId?: string;
            legacyTransactionId?: string;
        };
        LineItem: {
            appliedPromotions?: (components["schemas"]["AppliedPromotion"])[];
            compatibilityProperties?: (components["schemas"]["Property"])[];
            deliveryCost?: components["schemas"]["DeliveryCost"];
            discountedLineItemCost?: components["schemas"]["Amount"];
            ebayCollectAndRemitTaxes?: (components["schemas"]["EbayCollectAndRemitTax"])[];
            ebayCollectedCharges?: components["schemas"]["EbayCollectedCharges"];
            giftDetails?: components["schemas"]["GiftDetails"];
            itemLocation?: components["schemas"]["ItemLocation"];
            legacyItemId?: string;
            legacyVariationId?: string;
            lineItemCost?: components["schemas"]["Amount"];
            lineItemFulfillmentInstructions?: components["schemas"]["LineItemFulfillmentInstructions"];
            lineItemFulfillmentStatus?: string;
            lineItemId?: string;
            linkedOrderLineItems?: (components["schemas"]["LinkedOrderLineItem"])[];
            listingMarketplaceId?: string;
            properties?: components["schemas"]["LineItemProperties"];
            purchaseMarketplaceId?: string;
            quantity?: number;
            refunds?: (components["schemas"]["LineItemRefund"])[];
            sku?: string;
            soldFormat?: string;
            taxes?: (components["schemas"]["Tax"])[];
            title?: string;
            total?: components["schemas"]["Amount"];
            variationAspects?: (components["schemas"]["NameValuePair"])[];
        };
        LineItemFulfillmentInstructions: {
            guaranteedDelivery?: boolean;
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            shipByDate?: string;
        };
        LineItemProperties: {
            buyerProtection?: boolean;
            fromBestOffer?: boolean;
            soldViaAdCampaign?: boolean;
        };
        LineItemReference: {
            lineItemId?: string;
            quantity?: number;
        };
        LineItemRefund: {
            amount?: components["schemas"]["Amount"];
            refundDate?: string;
            refundId?: string;
            refundReferenceId?: string;
        };
        LinkedOrderLineItem: {
            lineItemAspects?: (components["schemas"]["NameValuePair"])[];
            lineItemId?: string;
            maxEstimatedDeliveryDate?: string;
            minEstimatedDeliveryDate?: string;
            orderId?: string;
            sellerId?: string;
            shipments?: (components["schemas"]["TrackingInfo"])[];
            title?: string;
        };
        MonetaryTransaction: {
            date?: string;
            type?: string;
            reason?: string;
            amount?: components["schemas"]["DisputeAmount"];
        };
        NameValuePair: {
            name?: string;
            value?: string;
        };
        Order: {
            buyer?: components["schemas"]["Buyer"];
            buyerCheckoutNotes?: string;
            cancelStatus?: components["schemas"]["CancelStatus"];
            creationDate?: string;
            ebayCollectAndRemitTax?: boolean;
            fulfillmentHrefs?: (string)[];
            fulfillmentStartInstructions?: (components["schemas"]["FulfillmentStartInstruction"])[];
            lastModifiedDate?: string;
            lineItems?: (components["schemas"]["LineItem"])[];
            orderFulfillmentStatus?: string;
            orderId?: string;
            orderPaymentStatus?: string;
            paymentSummary?: components["schemas"]["PaymentSummary"];
            pricingSummary?: components["schemas"]["PricingSummary"];
            program?: components["schemas"]["Program"];
            salesRecordReference?: string;
            sellerId?: string;
            totalFeeBasisAmount?: components["schemas"]["Amount"];
            totalMarketplaceFee?: components["schemas"]["Amount"];
        };
        OrderLineItems: {
            itemId?: string;
            lineItemId?: string;
        };
        OrderRefund: {
            amount?: components["schemas"]["Amount"];
            refundDate?: string;
            refundId?: string;
            refundReferenceId?: string;
            refundStatus?: string;
        };
        OrderSearchPagedCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            orders?: (components["schemas"]["Order"])[];
            prev?: string;
            total?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        Payment: {
            amount?: components["schemas"]["Amount"];
            paymentDate?: string;
            paymentHolds?: (components["schemas"]["PaymentHold"])[];
            paymentMethod?: string;
            paymentReferenceId?: string;
            paymentStatus?: string;
        };
        PaymentDispute: {
            amount?: components["schemas"]["SimpleAmount"];
            availableChoices?: (string)[];
            buyerProvided?: components["schemas"]["InfoFromBuyer"];
            buyerUsername?: string;
            closedDate?: string;
            evidence?: (components["schemas"]["DisputeEvidence"])[];
            evidenceRequests?: (components["schemas"]["EvidenceRequest"])[];
            lineItems?: (components["schemas"]["OrderLineItems"])[];
            monetaryTransactions?: (components["schemas"]["MonetaryTransaction"])[];
            note?: string;
            openDate?: string;
            orderId?: string;
            paymentDisputeId?: string;
            paymentDisputeStatus?: string;
            reason?: string;
            resolution?: components["schemas"]["PaymentDisputeOutcomeDetail"];
            respondByDate?: string;
            returnAddress?: components["schemas"]["ReturnAddress"];
            revision?: number;
            sellerResponse?: string;
        };
        PaymentDisputeActivity: {
            activityDate?: string;
            activityType?: string;
            actor?: string;
        };
        PaymentDisputeActivityHistory: {
            activity?: (components["schemas"]["PaymentDisputeActivity"])[];
        };
        PaymentDisputeOutcomeDetail: {
            fees?: components["schemas"]["SimpleAmount"];
            protectedAmount?: components["schemas"]["SimpleAmount"];
            protectionStatus?: string;
            reasonForClosure?: string;
            recoupAmount?: components["schemas"]["SimpleAmount"];
            totalFeeCredit?: components["schemas"]["SimpleAmount"];
        };
        PaymentDisputeSummary: {
            amount?: components["schemas"]["SimpleAmount"];
            buyerUsername?: string;
            closedDate?: string;
            openDate?: string;
            orderId?: string;
            paymentDisputeId?: string;
            paymentDisputeStatus?: string;
            reason?: string;
            respondByDate?: string;
        };
        PaymentHold: {
            expectedReleaseDate?: string;
            holdAmount?: components["schemas"]["Amount"];
            holdReason?: string;
            holdState?: string;
            releaseDate?: string;
            sellerActionsToRelease?: (components["schemas"]["SellerActionsToRelease"])[];
        };
        PaymentSummary: {
            payments?: (components["schemas"]["Payment"])[];
            refunds?: (components["schemas"]["OrderRefund"])[];
            totalDueSeller?: components["schemas"]["Amount"];
        };
        Phone: {
            countryCode?: string;
            number?: string;
        };
        PhoneNumber: {
            phoneNumber?: string;
        };
        PickupStep: {
            merchantLocationKey?: string;
        };
        PostSaleAuthenticationProgram: {
            outcomeReason?: string;
            status?: string;
        };
        PricingSummary: {
            adjustment?: components["schemas"]["Amount"];
            deliveryCost?: components["schemas"]["Amount"];
            deliveryDiscount?: components["schemas"]["Amount"];
            fee?: components["schemas"]["Amount"];
            priceDiscount?: components["schemas"]["Amount"];
            priceSubtotal?: components["schemas"]["Amount"];
            tax?: components["schemas"]["Amount"];
            total?: components["schemas"]["Amount"];
        };
        Program: {
            authenticityVerification?: components["schemas"]["PostSaleAuthenticationProgram"];
            ebayShipping?: components["schemas"]["EbayShipping"];
            ebayVault?: components["schemas"]["EbayVaultProgram"];
            ebayInternationalShipping?: components["schemas"]["EbayInternationalShipping"];
            fulfillmentProgram?: components["schemas"]["EbayFulfillmentProgram"];
        };
        Property: {
            propertyDisplayName?: string;
            propertyName?: string;
            propertyValue?: string;
        };
        Refund: {
            refundId?: string;
            refundStatus?: string;
        };
        RefundItem: {
            refundAmount?: components["schemas"]["SimpleAmount"];
            lineItemId?: string;
            legacyReference?: components["schemas"]["LegacyReference"];
        };
        ReturnAddress: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            fullName?: string;
            postalCode?: string;
            primaryPhone?: components["schemas"]["Phone"];
            stateOrProvince?: string;
        };
        SellerActionsToRelease: {
            sellerActionToRelease?: string;
        };
        ShippingFulfillment: {
            fulfillmentId?: string;
            lineItems?: (components["schemas"]["LineItemReference"])[];
            shipmentTrackingNumber?: string;
            shippedDate?: string;
            shippingCarrierCode?: string;
        };
        ShippingFulfillmentDetails: {
            lineItems?: (components["schemas"]["LineItemReference"])[];
            shippedDate?: string;
            shippingCarrierCode?: string;
            trackingNumber?: string;
        };
        ShippingFulfillmentPagedCollection: {
            fulfillments?: (components["schemas"]["ShippingFulfillment"])[];
            total?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        ShippingStep: {
            shippingCarrierCode?: string;
            shippingServiceCode?: string;
            shipTo?: components["schemas"]["ExtendedContact"];
            shipToReferenceId?: string;
        };
        SimpleAmount: {
            currency?: string;
            value?: string;
        };
        Tax: {
            amount?: components["schemas"]["Amount"];
            taxType?: string;
        };
        TaxAddress: {
            city?: string;
            countryCode?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        TaxIdentifier: {
            taxpayerId?: string;
            taxIdentifierType?: string;
            issuingCountry?: string;
        };
        TrackingInfo: {
            shipmentTrackingNumber?: string;
            shippingCarrierCode?: string;
        };
        UpdateEvidencePaymentDisputeRequest: {
            evidenceId?: string;
            evidenceType?: string;
            files?: (components["schemas"]["FileEvidence"])[];
            lineItems?: (components["schemas"]["OrderLineItems"])[];
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
    getOrder: {
        parameters: {
            query?: {
                fieldGroups?: string;
            };
            path: {
                orderId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Order"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getOrders: {
        parameters: {
            query?: {
                fieldGroups?: string;
                filter?: string;
                limit?: string;
                offset?: string;
                orderIds?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["OrderSearchPagedCollection"];
                };
            };
            400: never;
            500: never;
        };
    };
    issueRefund: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                order_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["IssueRefundRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Refund"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getShippingFulfillments: {
        parameters: {
            path: {
                orderId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ShippingFulfillmentPagedCollection"];
                };
            };
            400: never;
            500: never;
        };
    };
    createShippingFulfillment: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                orderId: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ShippingFulfillmentDetails"];
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
    getShippingFulfillment: {
        parameters: {
            path: {
                fulfillmentId: string;
                orderId: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ShippingFulfillment"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getPaymentDispute: {
        parameters: {
            path: {
                payment_dispute_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PaymentDispute"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    fetchEvidenceContent: {
        parameters: {
            query: {
                evidence_id: string;
                file_id: string;
            };
            path: {
                payment_dispute_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/octet-stream": (string)[];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getActivities: {
        parameters: {
            path: {
                payment_dispute_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PaymentDisputeActivityHistory"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getPaymentDisputeSummaries: {
        parameters: {
            query?: {
                order_id?: string;
                buyer_username?: string;
                open_date_from?: string;
                open_date_to?: string;
                payment_dispute_status?: string;
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["DisputeSummaryResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    contestPaymentDispute: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                payment_dispute_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContestPaymentDisputeRequest"];
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
    acceptPaymentDispute: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                payment_dispute_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AcceptPaymentDisputeRequest"];
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
    uploadEvidenceFile: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                payment_dispute_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["FileEvidence"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    addEvidence: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                payment_dispute_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AddEvidencePaymentDisputeRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["AddEvidencePaymentDisputeResponse"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateEvidence: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                payment_dispute_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateEvidencePaymentDisputeRequest"];
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
}
