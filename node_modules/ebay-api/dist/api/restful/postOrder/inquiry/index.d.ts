import Restful from '../../index.js';
import { BuyerCloseInquiryRequest, CheckInquiryEligibilityRequest, CreateInquiryRequest, EscalateInquiryRequest, InquirySearchParams, InquiryVoluntaryRefundRequest, SellerProvideRefundInfoRequest, SendMessageRequest, ShipmentInfoRequest } from '../../../../types/index.js';
export default class Inquiry extends Restful {
    static id: string;
    get basePath(): string;
    get useIaf(): boolean;
    checkInquiryEligibility(payload: CheckInquiryEligibilityRequest): Promise<any>;
    closeInquiry(inquiryId: string, payload?: BuyerCloseInquiryRequest): Promise<any>;
    confirmInquiryRefund(inquiryId: string): Promise<any>;
    createInquiry(payload: CreateInquiryRequest): Promise<any>;
    escalateInquiry(inquiryId: string, payload: EscalateInquiryRequest): Promise<any>;
    getInquiry(inquiryId: string): Promise<any>;
    issueInquiryRefund(inquiryId: string, payload?: InquiryVoluntaryRefundRequest): Promise<any>;
    provideInquiryRefundInfo(inquiryId: string, payload: SellerProvideRefundInfoRequest): Promise<any>;
    provideInquiryShipmentInfo(inquiryId: string, payload?: ShipmentInfoRequest): Promise<any>;
    search(params?: InquirySearchParams): Promise<any>;
    sendInquiryMessage(inquiryId: string, payload: SendMessageRequest): Promise<any>;
}
