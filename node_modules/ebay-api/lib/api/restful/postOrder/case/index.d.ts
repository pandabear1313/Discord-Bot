import { AppealRequest, BuyerCloseCaseRequest, CaseSearchParams, ReturnAddressRequest, Text } from '../../../../types/index.js';
import Restful from '../../index.js';
export default class Case extends Restful {
    static id: string;
    get basePath(): string;
    get useIaf(): boolean;
    appealCaseDecision(caseId: string, payload?: AppealRequest): Promise<any>;
    closeCase(caseId: string, payload: BuyerCloseCaseRequest): Promise<any>;
    getCase(caseId: string): Promise<any>;
    issueCaseRefund(caseId: string, payload?: Text): Promise<any>;
    provideReturnShipmentInfo(caseId: string, { shippingCarrierName, trackingNumber }: {
        shippingCarrierName: string;
        trackingNumber: string;
    }): Promise<any>;
    providesReturnAddress(cancelId: string, payload?: ReturnAddressRequest): Promise<any>;
    search(params: CaseSearchParams): Promise<any>;
}
