"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Notification extends index_js_1.default {
    get basePath() {
        return '/commerce/notification/v1';
    }
    getPublicKey(publicKeyId) {
        publicKeyId = encodeURIComponent(publicKeyId);
        return this.get(`/public_key/${publicKeyId}`);
    }
    getTopic(topicId) {
        topicId = encodeURIComponent(topicId);
        return this.get(`/topic/${topicId}`);
    }
    getTopics({ limit, continuationToken: continuation_token }) {
        return this.get(`/topic`, {
            params: {
                limit,
                continuation_token
            }
        });
    }
    getSubscriptions({ limit, continuationToken: continuation_token }) {
        return this.get(`/subscription`, {
            params: {
                limit,
                continuation_token
            }
        });
    }
    createSubscription(body) {
        return this.post(`/subscription`, body);
    }
    getSubscription(subscriptionId) {
        subscriptionId = encodeURIComponent(subscriptionId);
        return this.get(`/subscription/${subscriptionId}`);
    }
    updateSubscription(subscriptionId, body) {
        subscriptionId = encodeURIComponent(subscriptionId);
        return this.put(`/subscription/${subscriptionId}`, body);
    }
    deleteSubscription(subscriptionId) {
        subscriptionId = encodeURIComponent(subscriptionId);
        return this.delete(`/subscription/${subscriptionId}`);
    }
    enableSubscription(subscriptionId) {
        subscriptionId = encodeURIComponent(subscriptionId);
        return this.post(`/subscription/${subscriptionId}/enable`);
    }
    disableSubscription(subscriptionId) {
        subscriptionId = encodeURIComponent(subscriptionId);
        return this.post(`/subscription/${subscriptionId}/disable`);
    }
    test(subscriptionId) {
        subscriptionId = encodeURIComponent(subscriptionId);
        return this.post(`/subscription/${subscriptionId}/test`);
    }
    getDestinations({ limit, continuationToken: continuation_token }) {
        return this.get(`/destination`, {
            params: {
                limit,
                continuation_token
            }
        });
    }
    createDestination(body) {
        return this.post(`/destination`, body);
    }
    getDestination(destinationId) {
        destinationId = encodeURIComponent(destinationId);
        return this.get(`/destination/${destinationId}`);
    }
    updateDestination(destinationId, body) {
        destinationId = encodeURIComponent(destinationId);
        return this.put(`/destination/${destinationId}`, body);
    }
    deleteDestination(destinationId) {
        destinationId = encodeURIComponent(destinationId);
        return this.delete(`/destination/${destinationId}`);
    }
    getConfig() {
        return this.get(`/config`);
    }
    updateConfig(body) {
        return this.put(`/config`, body);
    }
}
Notification.id = 'Notification';
exports.default = Notification;
