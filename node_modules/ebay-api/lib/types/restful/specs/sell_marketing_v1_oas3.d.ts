export interface paths {
    "/ad_campaign/{campaign_id}/bulk_create_ads_by_inventory_reference": {
        post: operations["bulkCreateAdsByInventoryReference"];
    };
    "/ad_campaign/{campaign_id}/bulk_create_ads_by_listing_id": {
        post: operations["bulkCreateAdsByListingId"];
    };
    "/ad_campaign/{campaign_id}/bulk_delete_ads_by_inventory_reference": {
        post: operations["bulkDeleteAdsByInventoryReference"];
    };
    "/ad_campaign/{campaign_id}/bulk_delete_ads_by_listing_id": {
        post: operations["bulkDeleteAdsByListingId"];
    };
    "/ad_campaign/{campaign_id}/bulk_update_ads_bid_by_inventory_reference": {
        post: operations["bulkUpdateAdsBidByInventoryReference"];
    };
    "/ad_campaign/{campaign_id}/bulk_update_ads_bid_by_listing_id": {
        post: operations["bulkUpdateAdsBidByListingId"];
    };
    "/ad_campaign/{campaign_id}/bulk_update_ads_status": {
        post: operations["bulkUpdateAdsStatus"];
    };
    "/ad_campaign/{campaign_id}/bulk_update_ads_status_by_listing_id": {
        post: operations["bulkUpdateAdsStatusByListingId"];
    };
    "/ad_campaign/{campaign_id}/ad": {
        get: operations["getAds"];
        post: operations["createAdByListingId"];
    };
    "/ad_campaign/{campaign_id}/create_ads_by_inventory_reference": {
        post: operations["createAdsByInventoryReference"];
    };
    "/ad_campaign/{campaign_id}/ad/{ad_id}": {
        get: operations["getAd"];
        delete: operations["deleteAd"];
    };
    "/ad_campaign/{campaign_id}/delete_ads_by_inventory_reference": {
        post: operations["deleteAdsByInventoryReference"];
    };
    "/ad_campaign/{campaign_id}/get_ads_by_inventory_reference": {
        get: operations["getAdsByInventoryReference"];
    };
    "/ad_campaign/{campaign_id}/ad/{ad_id}/update_bid": {
        post: operations["updateBid"];
    };
    "/ad_campaign/{campaign_id}/ad_group": {
        get: operations["getAdGroups"];
        post: operations["createAdGroup"];
    };
    "/ad_campaign/{campaign_id}/ad_group/{ad_group_id}": {
        get: operations["getAdGroup"];
        put: operations["updateAdGroup"];
    };
    "/ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_bids": {
        post: operations["suggestBids"];
    };
    "/ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_keywords": {
        post: operations["suggestKeywords"];
    };
    "/ad_campaign/{campaign_id}/clone": {
        post: operations["cloneCampaign"];
    };
    "/ad_campaign": {
        get: operations["getCampaigns"];
        post: operations["createCampaign"];
    };
    "/ad_campaign/{campaign_id}": {
        get: operations["getCampaign"];
        delete: operations["deleteCampaign"];
    };
    "/ad_campaign/{campaign_id}/end": {
        post: operations["endCampaign"];
    };
    "/ad_campaign/find_campaign_by_ad_reference": {
        get: operations["findCampaignByAdReference"];
    };
    "/ad_campaign/get_campaign_by_name": {
        get: operations["getCampaignByName"];
    };
    "/ad_campaign/{campaign_id}/launch": {
        post: operations["launchCampaign"];
    };
    "/ad_campaign/{campaign_id}/pause": {
        post: operations["pauseCampaign"];
    };
    "/ad_campaign/{campaign_id}/resume": {
        post: operations["resumeCampaign"];
    };
    "/ad_campaign/setup_quick_campaign": {
        post: operations["setupQuickCampaign"];
    };
    "/ad_campaign/{campaign_id}/suggest_items": {
        get: operations["suggestItems"];
    };
    "/ad_campaign/{campaign_id}/update_ad_rate_strategy": {
        post: operations["updateAdRateStrategy"];
    };
    "/ad_campaign/{campaign_id}/update_campaign_budget": {
        post: operations["updateCampaignBudget"];
    };
    "/ad_campaign/{campaign_id}/update_campaign_identification": {
        post: operations["updateCampaignIdentification"];
    };
    "/ad_campaign/{campaign_id}/bulk_create_keyword": {
        post: operations["bulkCreateKeyword"];
    };
    "/ad_campaign/{campaign_id}/bulk_update_keyword": {
        post: operations["bulkUpdateKeyword"];
    };
    "/ad_campaign/{campaign_id}/keyword": {
        get: operations["getKeywords"];
        post: operations["createKeyword"];
    };
    "/ad_campaign/{campaign_id}/keyword/{keyword_id}": {
        get: operations["getKeyword"];
        put: operations["updateKeyword"];
    };
    "/bulk_create_negative_keyword": {
        post: operations["bulkCreateNegativeKeyword"];
    };
    "/bulk_update_negative_keyword": {
        post: operations["bulkUpdateNegativeKeyword"];
    };
    "/negative_keyword": {
        get: operations["getNegativeKeywords"];
        post: operations["createNegativeKeyword"];
    };
    "/negative_keyword/{negative_keyword_id}": {
        get: operations["getNegativeKeyword"];
        put: operations["updateNegativeKeyword"];
    };
    "/ad_report/{report_id}": {
        get: operations["getReport"];
    };
    "/ad_report_metadata": {
        get: operations["getReportMetadata"];
    };
    "/ad_report_metadata/{report_type}": {
        get: operations["getReportMetadataForReportType"];
    };
    "/ad_report_task": {
        get: operations["getReportTasks"];
        post: operations["createReportTask"];
    };
    "/ad_report_task/{report_task_id}": {
        get: operations["getReportTask"];
        delete: operations["deleteReportTask"];
    };
    "/item_price_markdown": {
        post: operations["createItemPriceMarkdownPromotion"];
    };
    "/item_price_markdown/{promotion_id}": {
        get: operations["getItemPriceMarkdownPromotion"];
        put: operations["updateItemPriceMarkdownPromotion"];
        delete: operations["deleteItemPriceMarkdownPromotion"];
    };
    "/item_promotion": {
        post: operations["createItemPromotion"];
    };
    "/item_promotion/{promotion_id}": {
        get: operations["getItemPromotion"];
        put: operations["updateItemPromotion"];
        delete: operations["deleteItemPromotion"];
    };
    "/promotion/{promotion_id}/get_listing_set": {
        get: operations["getListingSet"];
    };
    "/promotion": {
        get: operations["getPromotions"];
    };
    "/promotion/{promotion_id}/pause": {
        post: operations["pausePromotion"];
    };
    "/promotion/{promotion_id}/resume": {
        post: operations["resumePromotion"];
    };
    "/promotion_report": {
        get: operations["getPromotionReports"];
    };
    "/promotion_summary_report": {
        get: operations["getPromotionSummaryReport"];
    };
    "/email_campaign": {
        get: operations["getEmailCampaigns"];
        post: operations["createEmailCampaign"];
    };
    "/email_campaign/{email_campaign_id}": {
        get: operations["getEmailCampaign"];
        put: operations["updateEmailCampaign"];
        delete: operations["deleteEmailCampaign"];
    };
    "/email_campaign/audience": {
        get: operations["getAudiences"];
    };
    "/email_campaign/{email_campaign_id}/email_preview": {
        get: operations["getEmailPreview"];
    };
    "/email_campaign/report": {
        get: operations["getEmailReport"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Ad: {
            adGroupId?: string;
            adId?: string;
            adStatus?: string;
            alerts?: (components["schemas"]["Alert"])[];
            bidPercentage?: string;
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
            listingId?: string;
        };
        AdGroup: {
            adGroupId?: string;
            adGroupStatus?: string;
            defaultBid?: components["schemas"]["Amount"];
            name?: string;
        };
        AdGroupPagedCollectionResponse: {
            adGroups?: (components["schemas"]["AdGroup"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        AdIds: {
            adIds?: (string)[];
        };
        AdPagedCollectionResponse: {
            ads?: (components["schemas"]["Ad"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        AdReference: {
            adId?: string;
            href?: string;
        };
        AdReferences: {
            ads?: (components["schemas"]["AdReference"])[];
        };
        AdResponse: {
            adGroupId?: string;
            adId?: string;
            errors?: (components["schemas"]["Error"])[];
            href?: string;
            listingId?: string;
            statusCode?: number;
        };
        AdUpdateResponse: {
            adId?: string;
            errors?: (components["schemas"]["Error"])[];
            href?: string;
            listingId?: string;
            statusCode?: number;
        };
        AdUpdateStatusByListingIdResponse: {
            adGroupId?: string;
            errors?: (components["schemas"]["Error"])[];
            href?: string;
            listingId?: string;
            statusCode?: number;
        };
        AdUpdateStatusResponse: {
            adId?: string;
            errors?: (components["schemas"]["Error"])[];
            href?: string;
            statusCode?: number;
        };
        AdditionalInfo: {
            infoType?: string;
            metrics?: (components["schemas"]["AdditionalInfoData"])[];
        };
        AdditionalInfoData: {
            metricKey?: string;
            value?: string;
        };
        Ads: {
            ads?: (components["schemas"]["Ad"])[];
        };
        Alert: {
            alertType?: string;
            details?: (components["schemas"]["AlertDetails"])[];
        };
        AlertDetails: {
            dimension?: components["schemas"]["AlertDimension"];
            aspect?: components["schemas"]["Aspect"];
        };
        AlertDimension: {
            key?: string;
            value?: string;
        };
        Amount: {
            currency?: string;
            value?: string;
        };
        Aspect: {
            key?: string;
            value?: string;
        };
        BaseResponse: {
            warnings?: (components["schemas"]["Error"])[];
        };
        Budget: {
            amount?: components["schemas"]["Amount"];
            budgetStatus?: string;
        };
        BudgetRequest: {
            amount?: components["schemas"]["Amount"];
        };
        BulkAdResponse: {
            responses?: (components["schemas"]["AdResponse"])[];
        };
        BulkAdUpdateResponse: {
            responses?: (components["schemas"]["AdUpdateResponse"])[];
        };
        BulkAdUpdateStatusByListingIdResponse: {
            responses?: (components["schemas"]["AdUpdateStatusByListingIdResponse"])[];
        };
        BulkAdUpdateStatusResponse: {
            responses?: (components["schemas"]["AdUpdateStatusResponse"])[];
        };
        BulkCreateAdRequest: {
            requests?: (components["schemas"]["CreateAdRequest"])[];
        };
        BulkCreateAdsByInventoryReferenceRequest: {
            requests?: (components["schemas"]["CreateAdsByInventoryReferenceRequest"])[];
        };
        BulkCreateAdsByInventoryReferenceResponse: {
            responses?: (components["schemas"]["CreateAdsByInventoryReferenceResponse"])[];
        };
        BulkCreateKeywordRequest: {
            requests?: (components["schemas"]["CreateKeywordRequest"])[];
        };
        BulkCreateKeywordResponse: {
            responses?: (components["schemas"]["KeywordResponse"])[];
        };
        BulkCreateNegativeKeywordRequest: {
            requests?: (components["schemas"]["CreateNegativeKeywordRequest"])[];
        };
        BulkCreateNegativeKeywordResponse: {
            responses?: (components["schemas"]["NegativeKeywordResponse"])[];
        };
        BulkDeleteAdRequest: {
            requests?: (components["schemas"]["DeleteAdRequest"])[];
        };
        BulkDeleteAdResponse: {
            responses?: (components["schemas"]["DeleteAdResponse"])[];
        };
        BulkDeleteAdsByInventoryReferenceRequest: {
            requests?: (components["schemas"]["DeleteAdsByInventoryReferenceRequest"])[];
        };
        BulkDeleteAdsByInventoryReferenceResponse: {
            responses?: (components["schemas"]["DeleteAdsByInventoryReferenceResponse"])[];
        };
        BulkUpdateAdStatusByListingIdRequest: {
            requests?: (components["schemas"]["UpdateAdStatusByListingIdRequest"])[];
        };
        BulkUpdateAdStatusRequest: {
            requests?: (components["schemas"]["UpdateAdStatusRequest"])[];
        };
        BulkUpdateAdsByInventoryReferenceResponse: {
            responses?: (components["schemas"]["UpdateAdsByInventoryReferenceResponse"])[];
        };
        BulkUpdateKeywordRequest: {
            requests?: (components["schemas"]["UpdateKeywordByKeywordIdRequest"])[];
        };
        BulkUpdateKeywordResponse: {
            responses?: (components["schemas"]["UpdateKeywordResponse"])[];
        };
        BulkUpdateNegativeKeywordRequest: {
            requests?: (components["schemas"]["UpdateNegativeKeywordIdRequest"])[];
        };
        BulkUpdateNegativeKeywordResponse: {
            responses?: (components["schemas"]["UpdateNegativeKeywordResponse"])[];
        };
        Campaign: {
            alerts?: (components["schemas"]["Alert"])[];
            budget?: components["schemas"]["CampaignBudget"];
            campaignCriterion?: components["schemas"]["CampaignCriterion"];
            campaignId?: string;
            campaignName?: string;
            campaignStatus?: string;
            endDate?: string;
            fundingStrategy?: components["schemas"]["FundingStrategy"];
            marketplaceId?: string;
            startDate?: string;
        };
        CampaignAudience: {
            audienceType?: string;
            code?: string;
            name?: string;
        };
        CampaignBudget: {
            daily?: components["schemas"]["Budget"];
        };
        CampaignBudgetRequest: {
            daily?: components["schemas"]["BudgetRequest"];
        };
        CampaignCriterion: {
            autoSelectFutureInventory?: boolean;
            criterionType?: string;
            selectionRules?: (components["schemas"]["SelectionRule"])[];
        };
        CampaignDTO: {
            audiences?: (components["schemas"]["CampaignAudience"])[];
            creationDate?: string;
            emailCampaignId?: string;
            emailCampaignStatus?: string;
            emailCampaignType?: string;
            marketplaceId?: string;
            modificationDate?: string;
            scheduleDate?: string;
            scheduleDateType?: string;
            sentDate?: string;
            subject?: string;
        };
        CampaignPagedCollectionResponse: {
            campaigns?: (components["schemas"]["Campaign"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        Campaigns: {
            campaigns?: (components["schemas"]["Campaign"])[];
        };
        CloneCampaignRequest: {
            campaignName?: string;
            endDate?: string;
            fundingStrategy?: components["schemas"]["FundingStrategy"];
            startDate?: string;
        };
        CouponConfiguration: {
            couponCode?: string;
            couponType?: string;
            maxCouponRedemptionPerUser?: number;
        };
        CreateAdGroupRequest: {
            defaultBid?: components["schemas"]["Amount"];
            name?: string;
        };
        CreateAdRequest: {
            adGroupId?: string;
            bidPercentage?: string;
            listingId?: string;
        };
        CreateAdsByInventoryReferenceRequest: {
            adGroupId?: string;
            bidPercentage?: string;
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
        };
        CreateAdsByInventoryReferenceResponse: {
            adGroupId?: string;
            ads?: (components["schemas"]["AdReference"])[];
            errors?: (components["schemas"]["Error"])[];
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
            statusCode?: number;
        };
        CreateCampaignRequest: {
            budget?: components["schemas"]["CampaignBudgetRequest"];
            campaignCriterion?: components["schemas"]["CampaignCriterion"];
            campaignName?: string;
            endDate?: string;
            fundingStrategy?: components["schemas"]["FundingStrategy"];
            marketplaceId?: string;
            startDate?: string;
        };
        CreateEmailCampaignRequest: {
            audienceCodes?: (string)[];
            categoryId?: string;
            categoryType?: string;
            emailCampaignType?: string;
            itemIds?: (string)[];
            itemSelectMode?: string;
            personalizedMessage?: string;
            priceRange?: components["schemas"]["PriceRange"];
            promotionId?: string;
            promotionSelectModeEnum?: string;
            scheduleDate?: string;
            sort?: string;
            subject?: string;
        };
        CreateEmailCampaignResponse: {
            emailCampaignId?: string;
            emailCampaignStatus?: string;
        };
        CreateKeywordRequest: {
            adGroupId?: string;
            bid?: components["schemas"]["Amount"];
            keywordText?: string;
            matchType?: string;
        };
        CreateNegativeKeywordRequest: {
            adGroupId?: string;
            campaignId?: string;
            negativeKeywordMatchType?: string;
            negativeKeywordText?: string;
        };
        CreateReportTask: {
            additionalRecords?: (string)[];
            campaignIds?: (string)[];
            dateFrom?: string;
            dateTo?: string;
            dimensions?: (components["schemas"]["Dimension"])[];
            fundingModels?: (string)[];
            inventoryReferences?: (components["schemas"]["InventoryReference"])[];
            listingIds?: (string)[];
            marketplaceId?: string;
            metricKeys?: (string)[];
            reportFormat?: string;
            reportType?: string;
        };
        DeleteAdRequest: {
            listingId?: string;
        };
        DeleteAdResponse: {
            adId?: string;
            errors?: (components["schemas"]["Error"])[];
            listingId?: string;
            statusCode?: number;
        };
        DeleteAdsByInventoryReferenceRequest: {
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
        };
        DeleteAdsByInventoryReferenceResponse: {
            adIds?: (string)[];
            errors?: (components["schemas"]["Error"])[];
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
            statusCode?: number;
        };
        DeleteEmailCampaignResponse: {
            emailCampaignId?: string;
        };
        Dimension: {
            annotationKeys?: (string)[];
            dimensionKey?: string;
        };
        DimensionKeyAnnotation: {
            annotationKey?: string;
            dataType?: string;
        };
        DimensionMetadata: {
            dataType?: string;
            dimensionKey?: string;
            dimensionKeyAnnotations?: (components["schemas"]["DimensionKeyAnnotation"])[];
        };
        DiscountBenefit: {
            amountOffItem?: components["schemas"]["Amount"];
            amountOffOrder?: components["schemas"]["Amount"];
            percentageOffItem?: string;
            percentageOffOrder?: string;
        };
        DiscountRule: {
            discountBenefit?: components["schemas"]["DiscountBenefit"];
            discountSpecification?: components["schemas"]["DiscountSpecification"];
            maxDiscountAmount?: components["schemas"]["Amount"];
            ruleOrder?: number;
        };
        DiscountSpecification: {
            forEachAmount?: components["schemas"]["Amount"];
            forEachQuantity?: number;
            minAmount?: components["schemas"]["Amount"];
            minQuantity?: number;
            numberOfDiscountedItems?: number;
        };
        DynamicAdRatePreference: {
            adRateAdjustmentPercent?: string;
            adRateCapPercent?: string;
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
        FundingStrategy: {
            adRateStrategy?: string;
            bidPercentage?: string;
            dynamicAdRatePreferences?: (components["schemas"]["DynamicAdRatePreference"])[];
            fundingModel?: string;
        };
        GetEmailCampaignAudiencesResponse: {
            audiences?: (components["schemas"]["CampaignAudience"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        GetEmailCampaignResponse: {
            audiences?: (components["schemas"]["CampaignAudience"])[];
            categoryId?: string;
            categoryType?: string;
            creationDate?: string;
            emailCampaignId?: string;
            emailCampaignStatus?: string;
            emailCampaignType?: string;
            itemIds?: (string)[];
            itemSelectMode?: string;
            marketplaceId?: string;
            modificationDate?: string;
            personalizedMessage?: string;
            priceRange?: components["schemas"]["PriceRange"];
            promotionId?: string;
            promotionSelectMode?: string;
            scheduleDate?: string;
            scheduleDateType?: string;
            sentDate?: string;
            sort?: string;
            subject?: string;
        };
        GetEmailCampaignsResponse: {
            campaigns?: (components["schemas"]["CampaignDTO"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        GetEmailPreviewResponse: {
            content?: string;
            renderDate?: string;
        };
        GetEmailReportResponse: {
            clickCount?: number;
            openCount?: number;
            totalSales?: components["schemas"]["Amount"];
        };
        InventoryCriterion: {
            inventoryCriterionType?: string;
            inventoryItems?: (components["schemas"]["InventoryItem"])[];
            listingIds?: (string)[];
            ruleCriteria?: components["schemas"]["RuleCriteria"];
        };
        InventoryItem: {
            inventoryReferenceId?: string;
        };
        InventoryReference: {
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
        };
        ItemBasis: {
            estimatedValue?: number;
            metric?: string;
        };
        ItemMarkdownStatus: {
            listingMarkdownStatus?: string;
            statusChangedDate?: string;
            statusMessage?: string;
        };
        ItemPriceMarkdown: {
            applyFreeShipping?: boolean;
            autoSelectFutureInventory?: boolean;
            blockPriceIncreaseInItemRevision?: boolean;
            description?: string;
            endDate?: string;
            marketplaceId?: string;
            name?: string;
            priority?: string;
            promotionImageUrl?: string;
            promotionStatus?: string;
            selectedInventoryDiscounts?: (components["schemas"]["SelectedInventoryDiscount"])[];
            startDate?: string;
        };
        ItemPromotion: {
            applyDiscountToSingleItemOnly?: boolean;
            budget?: components["schemas"]["Amount"];
            couponConfiguration?: components["schemas"]["CouponConfiguration"];
            description?: string;
            discountRules?: (components["schemas"]["DiscountRule"])[];
            endDate?: string;
            inventoryCriterion?: components["schemas"]["InventoryCriterion"];
            marketplaceId?: string;
            name?: string;
            priority?: string;
            promotionImageUrl?: string;
            promotionStatus?: string;
            promotionType?: string;
            startDate?: string;
        };
        ItemPromotionResponse: {
            applyDiscountToSingleItemOnly?: boolean;
            budget?: components["schemas"]["Amount"];
            couponConfiguration?: components["schemas"]["CouponConfiguration"];
            description?: string;
            discountRules?: (components["schemas"]["DiscountRule"])[];
            endDate?: string;
            inventoryCriterion?: components["schemas"]["InventoryCriterion"];
            marketplaceId?: string;
            name?: string;
            priority?: string;
            promotionId?: string;
            promotionImageUrl?: string;
            promotionStatus?: string;
            promotionType?: string;
            startDate?: string;
        };
        ItemsPagedCollection: {
            href?: string;
            limit?: number;
            listings?: (components["schemas"]["ListingDetail"])[];
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
            warnings?: (components["schemas"]["Error"])[];
        };
        Keyword: {
            adGroupId?: string;
            bid?: components["schemas"]["Amount"];
            keywordId?: string;
            keywordStatus?: string;
            keywordText?: string;
            matchType?: string;
        };
        KeywordPagedCollectionResponse: {
            href?: string;
            keywords?: (components["schemas"]["Keyword"])[];
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        KeywordRequest: {
            keywordText?: string;
            matchType?: string;
        };
        KeywordResponse: {
            adGroupId?: string;
            errors?: (components["schemas"]["Error"])[];
            href?: string;
            keywordId?: string;
            keywordText?: string;
            matchType?: string;
            statusCode?: number;
        };
        ListingDetail: {
            currentPrice?: components["schemas"]["Amount"];
            freeShipping?: boolean;
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
            listingCategoryId?: string;
            listingCondition?: string;
            listingConditionId?: string;
            listingId?: string;
            listingPromotionStatuses?: (components["schemas"]["ItemMarkdownStatus"])[];
            quantity?: number;
            storeCategoryId?: string;
            title?: string;
        };
        MetricMetadata: {
            dataType?: string;
            metricKey?: string;
        };
        NegativeKeyword: {
            adGroupId?: string;
            campaignId?: string;
            negativeKeywordId?: string;
            negativeKeywordMatchType?: string;
            negativeKeywordStatus?: string;
            negativeKeywordText?: string;
        };
        NegativeKeywordPagedCollectionResponse: {
            href?: string;
            limit?: number;
            negativeKeywords?: (components["schemas"]["NegativeKeyword"])[];
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        NegativeKeywordResponse: {
            adGroupId?: string;
            campaignId?: string;
            errors?: (components["schemas"]["Error"])[];
            href?: string;
            negativeKeywordId?: string;
            negativeKeywordMatchType?: string;
            negativeKeywordText?: string;
            statusCode?: number;
        };
        PriceRange: {
            currency?: string;
            gte?: number;
            lte?: number;
        };
        PromotionDetail: {
            couponCode?: string;
            description?: string;
            endDate?: string;
            marketplaceId?: string;
            name?: string;
            priority?: string;
            promotionHref?: string;
            promotionId?: string;
            promotionImageUrl?: string;
            promotionStatus?: string;
            promotionType?: string;
            startDate?: string;
        };
        PromotionReportDetail: {
            averageItemDiscount?: components["schemas"]["Amount"];
            averageItemRevenue?: components["schemas"]["Amount"];
            averageOrderDiscount?: components["schemas"]["Amount"];
            averageOrderRevenue?: components["schemas"]["Amount"];
            averageOrderSize?: string;
            baseSale?: components["schemas"]["Amount"];
            itemsSoldQuantity?: number;
            numberOfOrdersSold?: number;
            percentageSalesLift?: string;
            promotionHref?: string;
            promotionId?: string;
            promotionReportId?: string;
            promotionSale?: components["schemas"]["Amount"];
            promotionType?: string;
            totalDiscount?: components["schemas"]["Amount"];
            totalSale?: components["schemas"]["Amount"];
        };
        PromotionsPagedCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            promotions?: (components["schemas"]["PromotionDetail"])[];
            total?: number;
        };
        PromotionsReportPagedCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            promotionReports?: (components["schemas"]["PromotionReportDetail"])[];
            total?: number;
        };
        ProposedBid: {
            currency?: string;
            rangeEnd?: string;
            rangeStart?: string;
            value?: string;
        };
        QuickSetupRequest: {
            budget?: components["schemas"]["CampaignBudgetRequest"];
            campaignName?: string;
            endDate?: string;
            listingIds?: (string)[];
            marketplaceId?: string;
            startDate?: string;
        };
        ReportMetadata: {
            dimensionMetadata?: (components["schemas"]["DimensionMetadata"])[];
            maxNumberOfDimensionsToRequest?: number;
            maxNumberOfMetricsToRequest?: number;
            metricMetadata?: (components["schemas"]["MetricMetadata"])[];
            reportType?: string;
        };
        ReportMetadatas: {
            reportMetadata?: (components["schemas"]["ReportMetadata"])[];
        };
        ReportTask: {
            campaignIds?: (string)[];
            dateFrom?: string;
            dateTo?: string;
            dimensions?: (components["schemas"]["Dimension"])[];
            fundingModels?: (string)[];
            inventoryReferences?: (components["schemas"]["InventoryReference"])[];
            listingIds?: (string)[];
            marketplaceId?: string;
            metricKeys?: (string)[];
            reportExpirationDate?: string;
            reportFormat?: string;
            reportHref?: string;
            reportId?: string;
            reportName?: string;
            reportTaskCompletionDate?: string;
            reportTaskCreationDate?: string;
            reportTaskExpectedCompletionDate?: string;
            reportTaskId?: string;
            reportTaskStatus?: string;
            reportTaskStatusMessage?: string;
            reportType?: string;
        };
        ReportTaskPagedCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
            reportTasks?: (components["schemas"]["ReportTask"])[];
        };
        RuleCriteria: {
            excludeInventoryItems?: (components["schemas"]["InventoryItem"])[];
            excludeListingIds?: (string)[];
            markupInventoryItems?: (components["schemas"]["InventoryItem"])[];
            markupListingIds?: (string)[];
            selectionRules?: (components["schemas"]["SelectionRule"])[];
        };
        SelectedInventoryDiscount: {
            discountBenefit?: components["schemas"]["DiscountBenefit"];
            discountId?: string;
            inventoryCriterion?: components["schemas"]["InventoryCriterion"];
            ruleOrder?: number;
        };
        SelectionRule: {
            brands?: (string)[];
            categoryIds?: (string)[];
            categoryScope?: string;
            listingConditionIds?: (string)[];
            maxPrice?: components["schemas"]["Amount"];
            minPrice?: components["schemas"]["Amount"];
        };
        SuggestedBids: {
            keywordText?: string;
            matchType?: string;
            proposedBid?: components["schemas"]["ProposedBid"];
        };
        SuggestedKeywords: {
            additionalInfo?: (components["schemas"]["AdditionalInfo"])[];
            keywordText?: string;
            matchType?: string;
        };
        SummaryReportResponse: {
            baseSale?: components["schemas"]["Amount"];
            lastUpdated?: string;
            percentageSalesLift?: string;
            promotionSale?: components["schemas"]["Amount"];
            totalSale?: components["schemas"]["Amount"];
        };
        TargetedAdsPagedCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            suggestedItems?: (components["schemas"]["TargetingItems"])[];
            total?: number;
        };
        TargetedBidRequest: {
            keywords?: (components["schemas"]["KeywordRequest"])[];
        };
        TargetedBidsPagedCollection: {
            suggestedBids?: (components["schemas"]["SuggestedBids"])[];
        };
        TargetedKeywordRequest: {
            additionalInfo?: (string)[];
            exclusions?: (string)[];
            listingIds?: (string)[];
            matchType?: string;
        };
        TargetedKeywordsPagedCollection: {
            suggestedKeywords?: (components["schemas"]["SuggestedKeywords"])[];
        };
        TargetingItems: {
            bases?: (components["schemas"]["ItemBasis"])[];
            listingId?: string;
        };
        UpdateAdGroupRequest: {
            adGroupStatus?: string;
            defaultBid?: components["schemas"]["Amount"];
            name?: string;
        };
        UpdateAdStatusByListingIdRequest: {
            adGroupId?: string;
            adStatus?: string;
            listingId?: string;
        };
        UpdateAdStatusRequest: {
            adId?: string;
            adStatus?: string;
        };
        UpdateAdrateStrategyRequest: {
            adRateStrategy?: string;
            bidPercentage?: string;
            dynamicAdRatePreferences?: (components["schemas"]["DynamicAdRatePreference"])[];
        };
        UpdateAdsByInventoryReferenceResponse: {
            ads?: (components["schemas"]["AdReference"])[];
            errors?: (components["schemas"]["Error"])[];
            inventoryReferenceId?: string;
            inventoryReferenceType?: string;
            statusCode?: number;
        };
        UpdateBidPercentageRequest: {
            bidPercentage?: string;
        };
        UpdateCampaignBudgetRequest: {
            daily?: components["schemas"]["BudgetRequest"];
        };
        UpdateCampaignIdentificationRequest: {
            campaignName?: string;
            endDate?: string;
            startDate?: string;
        };
        UpdateCampaignRequest: {
            audienceCodes?: (string)[];
            categoryId?: string;
            categoryType?: string;
            itemIds?: (string)[];
            itemSelectMode?: string;
            personalizedMessage?: string;
            priceRange?: components["schemas"]["PriceRange"];
            promotionId?: string;
            promotionSelectModeEnum?: string;
            scheduleDate?: string;
            sort?: string;
            subject?: string;
        };
        UpdateEmailCampaignResponse: {
            emailCampaignId?: string;
            emailCampaignStatus?: string;
        };
        UpdateKeywordByKeywordIdRequest: {
            bid?: components["schemas"]["Amount"];
            keywordId?: string;
            keywordStatus?: string;
        };
        UpdateKeywordRequest: {
            bid?: components["schemas"]["Amount"];
            keywordStatus?: string;
        };
        UpdateKeywordResponse: {
            errors?: (components["schemas"]["Error"])[];
            keywordId?: string;
            statusCode?: number;
        };
        UpdateNegativeKeywordIdRequest: {
            negativeKeywordId?: string;
            negativeKeywordStatus?: string;
        };
        UpdateNegativeKeywordRequest: {
            negativeKeywordStatus?: string;
        };
        UpdateNegativeKeywordResponse: {
            errors?: (components["schemas"]["Error"])[];
            negativeKeywordId?: string;
            statusCode?: number;
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
    bulkCreateAdsByInventoryReference: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkCreateAdsByInventoryReferenceRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkCreateAdsByInventoryReferenceResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkCreateAdsByListingId: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkCreateAdRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkAdResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkDeleteAdsByInventoryReference: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkDeleteAdsByInventoryReferenceRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkDeleteAdsByInventoryReferenceResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkDeleteAdsByListingId: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkDeleteAdRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkDeleteAdResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkUpdateAdsBidByInventoryReference: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkCreateAdsByInventoryReferenceRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkUpdateAdsByInventoryReferenceResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkUpdateAdsBidByListingId: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkCreateAdRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkAdUpdateResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkUpdateAdsStatus: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkUpdateAdStatusRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkAdUpdateStatusResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkUpdateAdsStatusByListingId: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkUpdateAdStatusByListingIdRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkAdUpdateStatusByListingIdResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getAds: {
        parameters: {
            query?: {
                ad_group_ids?: string;
                ad_status?: string;
                limit?: string;
                listing_ids?: string;
                offset?: string;
            };
            path: {
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["AdPagedCollectionResponse"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    createAdByListingId: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAdRequest"];
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
            404: never;
            409: never;
            500: never;
        };
    };
    createAdsByInventoryReference: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAdsByInventoryReferenceRequest"];
            };
        };
        responses: {
            201: {
                content: {
                    "application/json": components["schemas"]["AdReferences"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getAd: {
        parameters: {
            path: {
                ad_id: string;
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Ad"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    deleteAd: {
        parameters: {
            path: {
                ad_id: string;
                campaign_id: string;
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
    deleteAdsByInventoryReference: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteAdsByInventoryReferenceRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["AdIds"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getAdsByInventoryReference: {
        parameters: {
            query: {
                inventory_reference_id: string;
                inventory_reference_type: string;
            };
            path: {
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Ads"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateBid: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                ad_id: string;
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateBidPercentageRequest"];
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
    getAdGroups: {
        parameters: {
            query?: {
                ad_group_status?: string;
                limit?: string;
                offset?: string;
            };
            path: {
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["AdGroupPagedCollectionResponse"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    createAdGroup: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAdGroupRequest"];
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
            404: never;
            409: never;
            500: never;
        };
    };
    getAdGroup: {
        parameters: {
            path: {
                ad_group_id: string;
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["AdGroup"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateAdGroup: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                ad_group_id: string;
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAdGroupRequest"];
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
    suggestBids: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                ad_group_id: string;
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TargetedBidRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["TargetedBidsPagedCollection"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    suggestKeywords: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                ad_group_id: string;
                campaign_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["TargetedKeywordRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["TargetedKeywordsPagedCollection"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    cloneCampaign: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CloneCampaignRequest"];
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
            404: never;
            409: never;
            500: never;
        };
    };
    getCampaigns: {
        parameters: {
            query?: {
                campaign_name?: string;
                campaign_status?: string;
                end_date_range?: string;
                funding_strategy?: string;
                limit?: string;
                offset?: string;
                start_date_range?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CampaignPagedCollectionResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    createCampaign: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCampaignRequest"];
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
    getCampaign: {
        parameters: {
            path: {
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Campaign"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    deleteCampaign: {
        parameters: {
            path: {
                campaign_id: string;
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
    endCampaign: {
        parameters: {
            path: {
                campaign_id: string;
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
    findCampaignByAdReference: {
        parameters: {
            query?: {
                inventory_reference_id?: string;
                inventory_reference_type?: string;
                listing_id?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Campaigns"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getCampaignByName: {
        parameters: {
            query: {
                campaign_name: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Campaign"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    launchCampaign: {
        parameters: {
            path: {
                campaign_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            409: never;
            500: never;
        };
    };
    pauseCampaign: {
        parameters: {
            path: {
                campaign_id: string;
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
    resumeCampaign: {
        parameters: {
            path: {
                campaign_id: string;
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
    setupQuickCampaign: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["QuickSetupRequest"];
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
    suggestItems: {
        parameters: {
            query?: {
                category_ids?: string;
                limit?: string;
                offset?: string;
            };
            path: {
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["TargetedAdsPagedCollection"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateAdRateStrategy: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAdrateStrategyRequest"];
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
    updateCampaignBudget: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateCampaignBudgetRequest"];
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
    updateCampaignIdentification: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateCampaignIdentificationRequest"];
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
    bulkCreateKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkCreateKeywordRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkCreateKeywordResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    bulkUpdateKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkUpdateKeywordRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkUpdateKeywordResponse"];
                };
            };
            207: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getKeywords: {
        parameters: {
            query?: {
                ad_group_ids?: string;
                keyword_status?: string;
                limit?: string;
                offset?: string;
            };
            path: {
                campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["KeywordPagedCollectionResponse"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    createKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateKeywordRequest"];
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
            404: never;
            409: never;
            500: never;
        };
    };
    getKeyword: {
        parameters: {
            path: {
                campaign_id: string;
                keyword_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Keyword"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                campaign_id: string;
                keyword_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateKeywordRequest"];
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
    bulkCreateNegativeKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkCreateNegativeKeywordRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkCreateNegativeKeywordResponse"];
                };
            };
            207: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    bulkUpdateNegativeKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkUpdateNegativeKeywordRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BulkUpdateNegativeKeywordResponse"];
                };
            };
            207: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    getNegativeKeywords: {
        parameters: {
            query?: {
                ad_group_ids?: string;
                campaign_ids?: string;
                limit?: string;
                negative_keyword_status?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["NegativeKeywordPagedCollectionResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    createNegativeKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateNegativeKeywordRequest"];
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
            403: never;
            409: never;
            500: never;
        };
    };
    getNegativeKeyword: {
        parameters: {
            path: {
                negative_keyword_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["NegativeKeyword"];
                };
            };
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    updateNegativeKeyword: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                negative_keyword_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateNegativeKeywordRequest"];
            };
        };
        responses: {
            204: never;
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getReport: {
        parameters: {
            path: {
                report_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "text/tab-separated-values": Record<string, never>;
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getReportMetadata: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReportMetadatas"];
                };
            };
            500: never;
        };
    };
    getReportMetadataForReportType: {
        parameters: {
            path: {
                report_type: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReportMetadata"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getReportTasks: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                report_task_statuses?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReportTaskPagedCollection"];
                };
            };
            400: never;
            500: never;
        };
    };
    createReportTask: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateReportTask"];
            };
        };
        responses: {
            202: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    getReportTask: {
        parameters: {
            path: {
                report_task_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ReportTask"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    deleteReportTask: {
        parameters: {
            path: {
                report_task_id: string;
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
    createItemPriceMarkdownPromotion: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ItemPriceMarkdown"];
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
    getItemPriceMarkdownPromotion: {
        parameters: {
            path: {
                promotion_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ItemPriceMarkdown"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateItemPriceMarkdownPromotion: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                promotion_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ItemPriceMarkdown"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            204: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    deleteItemPriceMarkdownPromotion: {
        parameters: {
            path: {
                promotion_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    createItemPromotion: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ItemPromotion"];
            };
        };
        responses: {
            201: {
                headers: {
                    Location?: string;
                };
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getItemPromotion: {
        parameters: {
            path: {
                promotion_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ItemPromotionResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateItemPromotion: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                promotion_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ItemPromotion"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BaseResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    deleteItemPromotion: {
        parameters: {
            path: {
                promotion_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getListingSet: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                q?: string;
                sort?: string;
                status?: string;
            };
            path: {
                promotion_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ItemsPagedCollection"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getPromotions: {
        parameters: {
            query: {
                limit?: string;
                marketplace_id: string;
                offset?: string;
                promotion_status?: string;
                promotion_type?: string;
                q?: string;
                sort?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PromotionsPagedCollection"];
                };
            };
            400: never;
            500: never;
        };
    };
    pausePromotion: {
        parameters: {
            path: {
                promotion_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    resumePromotion: {
        parameters: {
            path: {
                promotion_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getPromotionReports: {
        parameters: {
            query: {
                limit?: string;
                marketplace_id: string;
                offset?: string;
                promotion_status?: string;
                promotion_type?: string;
                q?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PromotionsReportPagedCollection"];
                };
            };
            400: never;
            500: never;
        };
    };
    getPromotionSummaryReport: {
        parameters: {
            query: {
                marketplace_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SummaryReportResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getEmailCampaigns: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                q?: string;
                sort?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetEmailCampaignsResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    createEmailCampaign: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                "Content-Type": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateEmailCampaignRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CreateEmailCampaignResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getEmailCampaign: {
        parameters: {
            path: {
                email_campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetEmailCampaignResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    updateEmailCampaign: {
        parameters: {
            header: {
                "Content-Type": string;
            };
            path: {
                email_campaign_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateCampaignRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["UpdateEmailCampaignResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    deleteEmailCampaign: {
        parameters: {
            path: {
                email_campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["DeleteEmailCampaignResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getAudiences: {
        parameters: {
            query: {
                emailCampaignType: string;
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetEmailCampaignAudiencesResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getEmailPreview: {
        parameters: {
            path: {
                email_campaign_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetEmailPreviewResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
    getEmailReport: {
        parameters: {
            query: {
                endDate: string;
                startDate: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetEmailReportResponse"];
                };
            };
            400: never;
            409: never;
            500: never;
        };
    };
}
