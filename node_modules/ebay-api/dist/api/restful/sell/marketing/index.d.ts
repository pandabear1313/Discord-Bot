import { BulkCreateAdRequest, BulkCreateAdsByInventoryReferenceRequest, BulkCreateKeywordRequest, BulkCreateNegativeKeywordRequest, BulkDeleteAdRequest, BulkDeleteAdsByInventoryReferenceRequest, BulkUpdateAdStatusByListingIdRequest, BulkUpdateAdStatusRequest, BulkUpdateKeywordRequest, BulkUpdateNegativeKeywordRequest, CloneCampaignRequest, CreateAdGroupRequest, CreateAdRequest, CreateAdsByInventoryReferenceRequest, CreateCampaignRequest, CreateEmailCampaignRequest, CreateKeywordRequest, CreateNegativeKeywordRequest, CreateReportTask, ItemPriceMarkdown, ItemPromotion, QuickSetupRequest, TargetedBidRequest, TargetedKeywordRequest, UpdateAdGroupRequest, UpdateAdrateStrategyRequest, UpdateBidPercentageRequest, UpdateCampaignBudgetRequest, UpdateCampaignIdentificationRequest, UpdateCampaignRequest, UpdateKeywordRequest, UpdateNegativeKeywordRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/sell_marketing_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Marketing extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    bulkCreateAdsByInventoryReference(campaignId: string, body: BulkCreateAdsByInventoryReferenceRequest): Promise<any>;
    bulkCreateAdsByListingId(campaignId: string, body: BulkCreateAdRequest): Promise<any>;
    bulkDeleteAdsByInventoryReference(campaignId: string, body: BulkDeleteAdsByInventoryReferenceRequest): Promise<any>;
    bulkDeleteAdsByListingId(campaignId: string, body: BulkDeleteAdRequest): Promise<any>;
    bulkUpdateAdsBidByInventoryReference(campaignId: string, body: BulkCreateAdsByInventoryReferenceRequest): Promise<any>;
    bulkUpdateAdsBidByListingId(campaignId: string, body: BulkCreateAdRequest): Promise<any>;
    bulkUpdateAdsStatus(campaignId: string, body: BulkUpdateAdStatusRequest): Promise<any>;
    bulkUpdateAdsStatusByListingId(campaignId: string, body: BulkUpdateAdStatusByListingIdRequest): Promise<any>;
    launchCampaign(campaignId: string): Promise<any>;
    setupQuickCampaign(body: QuickSetupRequest): Promise<any>;
    getAds(campaignId: string, { limit, listingIds, offset }?: {
        limit?: number;
        listingIds?: number;
        offset?: number;
    }): Promise<any>;
    createAdByListingId(campaignId: string, body: CreateAdRequest): Promise<any>;
    createAdsByInventoryReference(campaignId: string, body: CreateAdsByInventoryReferenceRequest): Promise<any>;
    getAd(campaignId: string, adId: string): Promise<any>;
    deleteAd(campaignId: string, adId: string): Promise<any>;
    deleteAdsByInventoryReference(campaignId: string): Promise<any>;
    getAdsByInventoryReference(campaignId: string, inventoryReferenceId: string, inventoryReferenceType: string): Promise<any>;
    updateBid(campaignId: string, adId: string, body: UpdateBidPercentageRequest): Promise<any>;
    getAdGroups(campaignId: string, { adGroupStatus, limit, offset }?: {
        adGroupStatus?: string;
        limit?: number;
        offset?: number;
    }): Promise<any>;
    createAdGroup(campaignId: string, body: CreateAdGroupRequest): Promise<any>;
    getAdGroup(campaignId: string, adGroupId: string): Promise<any>;
    updateAdGroup(campaignId: string, adGroupId: string, body: UpdateAdGroupRequest): Promise<any>;
    suggestBids(campaignId: string, adGroupId: string, body: TargetedBidRequest): Promise<any>;
    suggestKeywords(campaignId: string, adGroupId: string, body: TargetedKeywordRequest): Promise<any>;
    cloneCampaign(campaignId: string, body: CloneCampaignRequest): Promise<any>;
    getCampaigns({ campaignName, campaignStatus, endDateRange, limit, offset, startDateRange }?: {
        campaignName?: string;
        campaignStatus?: string;
        endDateRange?: string;
        limit?: number;
        offset?: number;
        startDateRange?: string;
    }): Promise<any>;
    getCampaign(campaignId: string): Promise<any>;
    createCampaign(body: CreateCampaignRequest): Promise<any>;
    deleteCampaign(campaignId: string): Promise<any>;
    endCampaign(campaignId: string): Promise<any>;
    findCampaignByAdReference({ inventoryReferenceId, inventoryReferenceType, listingId }?: {
        inventoryReferenceId?: string;
        inventoryReferenceType?: string;
        listingId?: string;
    }): Promise<any>;
    getCampaignByName(campaignName: string): Promise<any>;
    pauseCampaign(campaignId: string): Promise<any>;
    resumeCampaign(campaignId: string): Promise<any>;
    suggestItems(campaignId: string, { categoryIds, limit, offset }?: {
        categoryIds?: string;
        limit?: number;
        offset?: number;
    }): Promise<any>;
    updateAdRateStrategy(campaignId: string, body: UpdateAdrateStrategyRequest): Promise<any>;
    updateCampaignBudget(campaignId: string, body: UpdateCampaignBudgetRequest): Promise<any>;
    updateCampaignIdentification(campaignId: string, body: UpdateCampaignIdentificationRequest): Promise<any>;
    bulkCreateKeyword(campaignId: string, body: BulkCreateKeywordRequest): Promise<any>;
    bulkUpdateKeyword(campaignId: string, body: BulkUpdateKeywordRequest): Promise<any>;
    getKeywords(campaignId: string, { adGroupIds, keywordStatus, limit, offset }?: {
        adGroupIds?: string;
        keywordStatus?: string;
        limit?: number;
        offset?: number;
    }): Promise<any>;
    createKeyword(campaignId: string, body: CreateKeywordRequest): Promise<any>;
    getKeyword(campaignId: string, keywordId: string): Promise<any>;
    updateKeyword(campaignId: string, keywordId: string, body: UpdateKeywordRequest): Promise<any>;
    bulkCreateNegativeKeyword(body: BulkCreateNegativeKeywordRequest): Promise<any>;
    bulkUpdateNegativeKeyword(body: BulkUpdateNegativeKeywordRequest): Promise<any>;
    getNegativeKeywords({ adGroupIds, campaignIds, limit, negativeKeywordStatus, offset }?: {
        adGroupIds?: string;
        campaignIds?: string;
        limit?: number;
        negativeKeywordStatus?: string;
        offset?: number;
    }): Promise<any>;
    createNegativeKeyword(body: CreateNegativeKeywordRequest): Promise<any>;
    getNegativeKeyword(negativeKeywordId: string): Promise<any>;
    updateNegativeKeyword(negativeKeywordId: string, body: UpdateNegativeKeywordRequest): Promise<any>;
    getReport(reportId: string): Promise<any>;
    getReportMetadata(): Promise<any>;
    getReportMetadataForReportType(reportType: string): Promise<any>;
    getReportTasks({ limit, offset, reportTaskStatuses }?: {
        limit?: number;
        offset?: number;
        reportTaskStatuses?: string;
    }): Promise<any>;
    getReportTask(reportTaskId: string): Promise<any>;
    createReportTask(body: CreateReportTask): Promise<any>;
    deleteReportTask(reportTaskId: string): Promise<any>;
    createItemPriceMarkdownPromotion(body: ItemPriceMarkdown): Promise<any>;
    updateItemPriceMarkdownPromotion(promotionId: string, body: ItemPriceMarkdown): Promise<any>;
    deleteItemPriceMarkdownPromotion(promotionId: string): Promise<any>;
    getItemPriceMarkdownPromotion(promotionId: string): Promise<any>;
    createItemPromotion(body: ItemPromotion): Promise<any>;
    updateItemPromotion(promotionId: string, body: ItemPromotion): Promise<any>;
    deleteItemPromotion(promotionId: string): Promise<any>;
    getItemPromotion(promotionId: string): Promise<any>;
    getListingSet(promotionId: string, { limit, offset, q, sort, status }?: {
        limit?: number;
        offset?: number;
        q?: string;
        sort?: string;
        status?: string;
    }): Promise<any>;
    getPromotions(marketplaceId: string, { limit, offset, promotionStatus, promotionType, q, sort }?: {
        limit?: number;
        offset?: number;
        promotionStatus?: string;
        promotionType?: string;
        q?: string;
        sort?: string;
    }): Promise<any>;
    pausePromotion(promotionId: string): Promise<any>;
    resumePromotion(promotionId: string): Promise<any>;
    getPromotionReports(marketplaceId: string, { limit, offset, promotionStatus, promotionType, q }?: {
        limit?: number;
        offset?: number;
        promotionStatus?: string;
        promotionType?: string;
        q?: string;
    }): Promise<any>;
    getPromotionSummaryReport(marketplaceId: string): Promise<any>;
    getEmailCampaign(emailCampaignId: string): Promise<any>;
    getEmailCampaigns({ limit, q, offset, sort }?: {
        limit?: number;
        q?: string;
        offset?: number;
        sort?: string;
    }): Promise<any>;
    createEmailCampaign(body: CreateEmailCampaignRequest): Promise<any>;
    updateEmailCampaign(emailCampaignId: string, body: UpdateCampaignRequest): Promise<any>;
    deleteEmailCampaign(emailCampaignId: string): Promise<any>;
    getEmailPreview(emailCampaignId: string): Promise<any>;
    getAudiences(): Promise<any>;
    getEmailReport(startDate: string, endDate: string): Promise<any>;
}
