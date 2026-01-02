export interface paths {
    "/payout/{payout_Id}": {
        get: operations["getPayout"];
    };
    "/payout": {
        get: operations["getPayouts"];
    };
    "/payout_summary": {
        get: operations["getPayoutSummary"];
    };
    "/transaction": {
        get: operations["getTransactions"];
    };
    "/transaction_summary": {
        get: operations["getTransactionSummary"];
    };
    "/transfer/{transfer_Id}": {
        get: operations["getTransfer"];
    };
    "/seller_funds_summary": {
        get: operations["getSellerFundsSummary"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Amount: {
            currency?: string;
            convertedFromCurrency?: string;
            convertedFromValue?: string;
            exchangeRate?: string;
            value?: string;
        };
        BalanceAdjustment: {
            adjustmentAmount?: components["schemas"]["Amount"];
            adjustmentType?: string;
        };
        Buyer: {
            username?: string;
        };
        Charge: {
            cancellationId?: string;
            caseId?: string;
            chargeNetAmount?: components["schemas"]["Amount"];
            inquiryId?: string;
            orderId?: string;
            paymentDisputeId?: string;
            refundId?: string;
            returnId?: string;
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
        Fee: {
            amount?: components["schemas"]["Amount"];
            feeMemo?: string;
            feeType?: string;
        };
        FundingSource: {
            brand?: string;
            memo?: string;
            type?: string;
        };
        OrderLineItem: {
            feeBasisAmount?: components["schemas"]["Amount"];
            lineItemId?: string;
            marketplaceFees?: (components["schemas"]["Fee"])[];
        };
        Payout: {
            amount?: components["schemas"]["Amount"];
            bankReference?: string;
            lastAttemptedPayoutDate?: string;
            payoutDate?: string;
            payoutId?: string;
            payoutMemo?: string;
            payoutInstrument?: components["schemas"]["PayoutInstrument"];
            payoutStatus?: string;
            payoutStatusDescription?: string;
            transactionCount?: number;
        };
        PayoutInstrument: {
            accountLastFourDigits?: string;
            instrumentType?: string;
            nickname?: string;
        };
        PayoutSummaryResponse: {
            amount?: components["schemas"]["Amount"];
            payoutCount?: number;
            transactionCount?: number;
        };
        Payouts: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            payouts?: (components["schemas"]["Payout"])[];
            prev?: string;
            total?: number;
        };
        Reference: {
            referenceId?: string;
            referenceType?: string;
        };
        SellerFundsSummaryResponse: {
            availableFunds?: components["schemas"]["Amount"];
            fundsOnHold?: components["schemas"]["Amount"];
            processingFunds?: components["schemas"]["Amount"];
            totalFunds?: components["schemas"]["Amount"];
        };
        Transaction: {
            amount?: components["schemas"]["Amount"];
            bookingEntry?: string;
            buyer?: components["schemas"]["Buyer"];
            feeType?: string;
            orderId?: string;
            orderLineItems?: (components["schemas"]["OrderLineItem"])[];
            paymentsEntity?: string;
            payoutId?: string;
            references?: (components["schemas"]["Reference"])[];
            salesRecordReference?: string;
            totalFeeBasisAmount?: components["schemas"]["Amount"];
            totalFeeAmount?: components["schemas"]["Amount"];
            transactionDate?: string;
            transactionId?: string;
            transactionMemo?: string;
            transactionStatus?: string;
            transactionType?: string;
        };
        TransactionSummaryResponse: {
            adjustmentAmount?: components["schemas"]["Amount"];
            adjustmentBookingEntry?: string;
            adjustmentCount?: number;
            balanceTransferAmount?: components["schemas"]["Amount"];
            balanceTransferBookingEntry?: string;
            balanceTransferCount?: number;
            creditAmount?: components["schemas"]["Amount"];
            creditBookingEntry?: string;
            creditCount?: number;
            disputeAmount?: components["schemas"]["Amount"];
            disputeBookingEntry?: string;
            disputeCount?: number;
            nonSaleChargeAmount?: components["schemas"]["Amount"];
            nonSaleChargeBookingEntry?: string;
            nonSaleChargeCount?: number;
            onHoldAmount?: components["schemas"]["Amount"];
            onHoldBookingEntry?: string;
            onHoldCount?: number;
            refundAmount?: components["schemas"]["Amount"];
            refundBookingEntry?: string;
            refundCount?: number;
            shippingLabelAmount?: components["schemas"]["Amount"];
            shippingLabelBookingEntry?: string;
            shippingLabelCount?: number;
            transferAmount?: components["schemas"]["Amount"];
            transferBookingEntry?: string;
            transferCount?: number;
        };
        Transactions: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
            transactions?: (components["schemas"]["Transaction"])[];
        };
        Transfer: {
            fundingSource?: components["schemas"]["FundingSource"];
            transactionDate?: string;
            transferAmount?: components["schemas"]["Amount"];
            transferDetail?: components["schemas"]["TransferDetail"];
            transferId?: string;
        };
        TransferDetail: {
            balanceAdjustment?: components["schemas"]["BalanceAdjustment"];
            charges?: (components["schemas"]["Charge"])[];
            totalChargeNetAmount?: components["schemas"]["Amount"];
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
    getPayout: {
        parameters: {
            path: {
                payout_Id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Payout"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getPayouts: {
        parameters: {
            query?: {
                filter?: string;
                sort?: string;
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Payouts"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    getPayoutSummary: {
        parameters: {
            query?: {
                filter?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PayoutSummaryResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getTransactions: {
        parameters: {
            query?: {
                filter?: string;
                sort?: string;
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Transactions"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    getTransactionSummary: {
        parameters: {
            query?: {
                filter?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["TransactionSummaryResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getTransfer: {
        parameters: {
            path: {
                transfer_Id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Transfer"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getSellerFundsSummary: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SellerFundsSummaryResponse"];
                };
            };
            204: never;
            500: never;
        };
    };
}
