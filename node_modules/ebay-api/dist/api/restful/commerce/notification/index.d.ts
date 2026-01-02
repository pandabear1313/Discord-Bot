import { CommerceNotificationConfig, CreateSubscriptionRequest, DestinationRequest, NotificationParams, UpdateSubscriptionRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/commerce_notification_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Notification extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getPublicKey(publicKeyId: string): Promise<any>;
    getTopic(topicId: string): Promise<any>;
    getTopics({ limit, continuationToken: continuation_token }: NotificationParams): Promise<any>;
    getSubscriptions({ limit, continuationToken: continuation_token }: NotificationParams): Promise<any>;
    createSubscription(body: CreateSubscriptionRequest): Promise<any>;
    getSubscription(subscriptionId: string): Promise<any>;
    updateSubscription(subscriptionId: string, body: UpdateSubscriptionRequest): Promise<any>;
    deleteSubscription(subscriptionId: string): Promise<any>;
    enableSubscription(subscriptionId: string): Promise<any>;
    disableSubscription(subscriptionId: string): Promise<any>;
    test(subscriptionId: string): Promise<any>;
    getDestinations({ limit, continuationToken: continuation_token }: NotificationParams): Promise<any>;
    createDestination(body: DestinationRequest): Promise<any>;
    getDestination(destinationId: string): Promise<any>;
    updateDestination(destinationId: string, body: DestinationRequest): Promise<any>;
    deleteDestination(destinationId: string): Promise<any>;
    getConfig(): Promise<any>;
    updateConfig(body: CommerceNotificationConfig): Promise<any>;
}
