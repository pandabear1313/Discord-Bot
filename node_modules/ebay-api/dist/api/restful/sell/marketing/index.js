import Restful from '../../index.js';
class Marketing extends Restful {
    get basePath() {
        return '/sell/marketing/v1';
    }
    bulkCreateAdsByInventoryReference(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_create_ads_by_inventory_reference`, body);
    }
    bulkCreateAdsByListingId(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_create_ads_by_listing_id`, body);
    }
    bulkDeleteAdsByInventoryReference(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_delete_ads_by_inventory_reference`, body);
    }
    bulkDeleteAdsByListingId(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_delete_ads_by_listing_id`, body);
    }
    bulkUpdateAdsBidByInventoryReference(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_update_ads_bid_by_inventory_reference`, body);
    }
    bulkUpdateAdsBidByListingId(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_update_ads_bid_by_listing_id`, body);
    }
    bulkUpdateAdsStatus(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_update_ads_status`, body);
    }
    bulkUpdateAdsStatusByListingId(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_update_ads_status_by_listing_id`, body);
    }
    launchCampaign(campaignId) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/launch`);
    }
    setupQuickCampaign(body) {
        return this.post(`/ad_campaign/setup_quick_campaign`, body);
    }
    getAds(campaignId, { limit, listingIds, offset } = {}) {
        campaignId = encodeURIComponent(campaignId);
        return this.get(`/ad_campaign/${campaignId}/ad`, {
            params: {
                limit,
                listing_ids: listingIds,
                offset
            }
        });
    }
    createAdByListingId(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/ad`, body);
    }
    createAdsByInventoryReference(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/create_ads_by_inventory_reference`, body);
    }
    getAd(campaignId, adId) {
        campaignId = encodeURIComponent(campaignId);
        adId = encodeURIComponent(adId);
        return this.get(`/ad_campaign/${campaignId}/ad/${adId}`);
    }
    deleteAd(campaignId, adId) {
        campaignId = encodeURIComponent(campaignId);
        adId = encodeURIComponent(adId);
        return this.delete(`/ad_campaign/${campaignId}/ad/${adId}`);
    }
    deleteAdsByInventoryReference(campaignId) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/delete_ads_by_inventory_reference`);
    }
    getAdsByInventoryReference(campaignId, inventoryReferenceId, inventoryReferenceType) {
        campaignId = encodeURIComponent(campaignId);
        return this.get(`/ad_campaign/${campaignId}/get_ads_by_inventory_reference`, {
            params: {
                inventory_reference_id: inventoryReferenceId,
                inventory_reference_type: inventoryReferenceType
            }
        });
    }
    updateBid(campaignId, adId, body) {
        campaignId = encodeURIComponent(campaignId);
        adId = encodeURIComponent(adId);
        return this.post(`/ad_campaign/${campaignId}/ad/${adId}/update_bid`, body);
    }
    getAdGroups(campaignId, { adGroupStatus, limit, offset } = {}) {
        campaignId = encodeURIComponent(campaignId);
        return this.get(`/ad_campaign/${campaignId}/ad_group`, {
            params: {
                ad_group_status: adGroupStatus,
                limit,
                offset
            }
        });
    }
    createAdGroup(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/ad_group`, body);
    }
    getAdGroup(campaignId, adGroupId) {
        adGroupId = encodeURIComponent(adGroupId);
        campaignId = encodeURIComponent(campaignId);
        return this.get(`/ad_campaign/${campaignId}/ad_group/${adGroupId}`);
    }
    updateAdGroup(campaignId, adGroupId, body) {
        adGroupId = encodeURIComponent(adGroupId);
        campaignId = encodeURIComponent(campaignId);
        return this.put(`/ad_campaign/${campaignId}/ad_group/${adGroupId}`, body);
    }
    suggestBids(campaignId, adGroupId, body) {
        adGroupId = encodeURIComponent(adGroupId);
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/ad_group/${adGroupId}/suggest_bids`, body);
    }
    suggestKeywords(campaignId, adGroupId, body) {
        adGroupId = encodeURIComponent(adGroupId);
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/ad_group/${adGroupId}/suggest_keywords`, body);
    }
    cloneCampaign(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/clone`, body);
    }
    getCampaigns({ campaignName, campaignStatus, endDateRange, limit, offset, startDateRange } = {}) {
        return this.get(`/ad_campaign`, {
            params: {
                campaign_name: campaignName,
                campaign_status: campaignStatus,
                end_date_range: endDateRange,
                limit,
                offset,
                start_date_range: startDateRange
            }
        });
    }
    getCampaign(campaignId) {
        campaignId = encodeURIComponent(campaignId);
        return this.get(`/ad_campaign/${campaignId}`);
    }
    createCampaign(body) {
        return this.post(`/ad_campaign`, body);
    }
    deleteCampaign(campaignId) {
        campaignId = encodeURIComponent(campaignId);
        return this.delete(`/ad_campaign/${campaignId}`);
    }
    endCampaign(campaignId) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/end`);
    }
    findCampaignByAdReference({ inventoryReferenceId, inventoryReferenceType, listingId } = {}) {
        return this.get(`/ad_campaign/find_campaign_by_ad_reference`, {
            params: {
                inventory_reference_id: inventoryReferenceId,
                inventory_reference_type: inventoryReferenceType,
                listing_id: listingId
            }
        });
    }
    getCampaignByName(campaignName) {
        return this.get(`/ad_campaign/get_campaign_by_name`, {
            params: {
                campaign_name: campaignName
            }
        });
    }
    pauseCampaign(campaignId) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/pause`);
    }
    resumeCampaign(campaignId) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/resume`);
    }
    suggestItems(campaignId, { categoryIds, limit, offset } = {}) {
        campaignId = encodeURIComponent(campaignId);
        return this.get(`/ad_campaign/${campaignId}/suggest_items`, {
            params: {
                category_ids: categoryIds,
                limit,
                offset
            }
        });
    }
    updateAdRateStrategy(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/update_ad_rate_strategy`, body);
    }
    updateCampaignBudget(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/update_campaign_budget`, body);
    }
    updateCampaignIdentification(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/update_campaign_identification`, body);
    }
    bulkCreateKeyword(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_create_keyword`, body);
    }
    bulkUpdateKeyword(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/bulk_update_keyword`, body);
    }
    getKeywords(campaignId, { adGroupIds, keywordStatus, limit, offset } = {}) {
        campaignId = encodeURIComponent(campaignId);
        return this.get(`/ad_campaign/${campaignId}/keyword`, {
            params: {
                ad_group_ids: adGroupIds,
                keyword_status: keywordStatus,
                limit,
                offset
            }
        });
    }
    createKeyword(campaignId, body) {
        campaignId = encodeURIComponent(campaignId);
        return this.post(`/ad_campaign/${campaignId}/keyword`, body);
    }
    getKeyword(campaignId, keywordId) {
        campaignId = encodeURIComponent(campaignId);
        keywordId = encodeURIComponent(keywordId);
        return this.get(`/ad_campaign/${campaignId}/keyword/${keywordId}`);
    }
    updateKeyword(campaignId, keywordId, body) {
        campaignId = encodeURIComponent(campaignId);
        keywordId = encodeURIComponent(keywordId);
        return this.put(`/ad_campaign/${campaignId}/keyword/${keywordId}`, body);
    }
    bulkCreateNegativeKeyword(body) {
        return this.post(`/bulk_create_negative_keyword`, body);
    }
    bulkUpdateNegativeKeyword(body) {
        return this.post(`/bulk_update_negative_keyword`, body);
    }
    getNegativeKeywords({ adGroupIds, campaignIds, limit, negativeKeywordStatus, offset } = {}) {
        return this.get(`/negative_keyword`, {
            params: {
                ad_group_ids: adGroupIds,
                campaign_ids: campaignIds, limit,
                negative_keyword_status: negativeKeywordStatus, offset
            }
        });
    }
    createNegativeKeyword(body) {
        return this.post(`/negative_keyword`, body);
    }
    getNegativeKeyword(negativeKeywordId) {
        negativeKeywordId = encodeURIComponent(negativeKeywordId);
        return this.get(`/negative_keyword/${negativeKeywordId}`);
    }
    updateNegativeKeyword(negativeKeywordId, body) {
        negativeKeywordId = encodeURIComponent(negativeKeywordId);
        return this.put(`/negative_keyword/${negativeKeywordId}`, body);
    }
    getReport(reportId) {
        reportId = encodeURIComponent(reportId);
        return this.get(`/ad_report/${reportId}`);
    }
    getReportMetadata() {
        return this.get(`/ad_report_metadata`);
    }
    getReportMetadataForReportType(reportType) {
        reportType = encodeURIComponent(reportType);
        return this.get(`/ad_report_metadata/${reportType}`);
    }
    getReportTasks({ limit, offset, reportTaskStatuses } = {}) {
        return this.get(`/ad_report_task`, {
            params: {
                limit,
                offset,
                report_task_statuses: reportTaskStatuses
            }
        });
    }
    getReportTask(reportTaskId) {
        reportTaskId = encodeURIComponent(reportTaskId);
        return this.get(`/ad_report_task/${reportTaskId}`);
    }
    createReportTask(body) {
        return this.post(`/ad_report_task`, body);
    }
    deleteReportTask(reportTaskId) {
        reportTaskId = encodeURIComponent(reportTaskId);
        return this.delete(`/ad_report_task/${reportTaskId}`);
    }
    createItemPriceMarkdownPromotion(body) {
        return this.post(`/item_price_markdown`, body);
    }
    updateItemPriceMarkdownPromotion(promotionId, body) {
        promotionId = encodeURIComponent(promotionId);
        return this.put(`/item_price_markdown/${promotionId}`, body);
    }
    deleteItemPriceMarkdownPromotion(promotionId) {
        promotionId = encodeURIComponent(promotionId);
        return this.delete(`/item_price_markdown/${promotionId}`);
    }
    getItemPriceMarkdownPromotion(promotionId) {
        promotionId = encodeURIComponent(promotionId);
        return this.get(`/item_price_markdown/${promotionId}`);
    }
    createItemPromotion(body) {
        return this.post(`/item_promotion`, body);
    }
    updateItemPromotion(promotionId, body) {
        promotionId = encodeURIComponent(promotionId);
        return this.put(`/item_promotion/${promotionId}`, body);
    }
    deleteItemPromotion(promotionId) {
        promotionId = encodeURIComponent(promotionId);
        return this.delete(`/item_promotion/${promotionId}`);
    }
    getItemPromotion(promotionId) {
        promotionId = encodeURIComponent(promotionId);
        return this.get(`/item_promotion/${promotionId}`);
    }
    getListingSet(promotionId, { limit, offset, q, sort, status } = {}) {
        promotionId = encodeURIComponent(promotionId);
        return this.get(`/promotion/${promotionId}/get_listing_set`, {
            params: {
                limit,
                offset,
                q,
                sort,
                status
            }
        });
    }
    getPromotions(marketplaceId, { limit, offset, promotionStatus, promotionType, q, sort } = {}) {
        return this.get(`/promotion`, {
            params: {
                marketplace_id: marketplaceId,
                limit,
                offset,
                promotion_status: promotionStatus,
                promotion_type: promotionType,
                q,
                sort
            }
        });
    }
    pausePromotion(promotionId) {
        const id = encodeURIComponent(promotionId);
        return this.post(`/promotion/${id}/pause`);
    }
    resumePromotion(promotionId) {
        const id = encodeURIComponent(promotionId);
        return this.post(`/promotion/${id}/resume`);
    }
    getPromotionReports(marketplaceId, { limit, offset, promotionStatus, promotionType, q } = {}) {
        return this.get(`/promotion_report`, {
            params: {
                marketplace_id: marketplaceId,
                limit,
                offset,
                promotion_status: promotionStatus,
                promotion_type: promotionType,
                q
            }
        });
    }
    getPromotionSummaryReport(marketplaceId) {
        return this.get(`/promotion_summary_report`, {
            params: {
                marketplace_id: marketplaceId
            }
        });
    }
    getEmailCampaign(emailCampaignId) {
        emailCampaignId = encodeURIComponent(emailCampaignId);
        return this.get(`/email_campaign/${emailCampaignId}`);
    }
    getEmailCampaigns({ limit, q, offset, sort } = {}) {
        return this.get(`/email_campaign`, {
            params: {
                limit,
                offset,
                q,
                sort
            }
        });
    }
    createEmailCampaign(body) {
        return this.post(`/email_campaign`, body);
    }
    updateEmailCampaign(emailCampaignId, body) {
        emailCampaignId = encodeURIComponent(emailCampaignId);
        return this.put(`/email_campaign/${emailCampaignId}`, body);
    }
    deleteEmailCampaign(emailCampaignId) {
        emailCampaignId = encodeURIComponent(emailCampaignId);
        return this.delete(`/email_campaign/${emailCampaignId}`);
    }
    getEmailPreview(emailCampaignId) {
        emailCampaignId = encodeURIComponent(emailCampaignId);
        return this.get(`/email_campaign/${emailCampaignId}/email_preview`);
    }
    getAudiences() {
        return this.get(`/email_campaign/audience`);
    }
    ;
    getEmailReport(startDate, endDate) {
        return this.get(`/email_campaign/report`, {
            params: {
                startDate,
                endDate
            }
        });
    }
}
Marketing.id = 'Marketing';
export default Marketing;
