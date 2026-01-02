import Restful from '../../index.js';
import { CancellationSearchParams, ConfirmRefundRequest, CreateCancelRequest, RejectCancelRequest } from '../../../../types/index.js';
export default class Cancellation extends Restful {
    static id: string;
    get basePath(): string;
    get useIaf(): boolean;
    approveCancellationRequest(cancelId: string): Promise<any>;
    checkCancellationEligibility(legacyOrderId: string): Promise<any>;
    confirmRefundReceived(cancelId: string, payload?: ConfirmRefundRequest): Promise<any>;
    createCancellation(payload: CreateCancelRequest): Promise<any>;
    getCancellation(cancelId: string, fieldGroups?: string): Promise<any>;
    rejectCancellationRequest(cancelId: string, payload?: RejectCancelRequest): Promise<any>;
    search(params: CancellationSearchParams): Promise<any>;
}
