"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Order extends index_js_1.default {
    get basePath() {
        return '/buy/order/v1';
    }
    applyCoupon(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/apply_coupon`, body);
    }
    getCheckoutSession(checkoutSessionId) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.get(`/checkout_session/${checkoutSessionId}`);
    }
    initiateCheckoutSession(body) {
        return this.post(`/checkout_session/initiate`, body);
    }
    placeOrder(checkoutSessionId) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/place_order`);
    }
    removeCoupon(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/remove_coupon`, body);
    }
    updatePaymentInfo(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/update_payment_info`, body);
    }
    updateQuantity(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/update_quantity`, body);
    }
    checkoutSessionId(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/update_quantity`, body);
    }
    updateShippingAddress(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/update_shipping_address`, body);
    }
    updateShippingOption(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/checkout_session/${checkoutSessionId}/update_shipping_option`, body);
    }
    applyGuestCoupon(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/apply_coupon`, body);
    }
    getGuestCheckoutSession(checkoutSessionId) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.get(`/guest_checkout_session/${checkoutSessionId}`);
    }
    initiateGuestCheckoutSession(body) {
        return this.post(`/guest_checkout_session/initiate`, body);
    }
    initiateGuestPayment(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/initiate_payment`, body);
    }
    placeGuestOrder(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/place_order`, body);
    }
    removeGuestCoupon(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/remove_coupon`, body);
    }
    updateGuestPaymentInfo(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/update_payment_info`, body);
    }
    updateGuestQuantity(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/update_quantity`, body);
    }
    updateGuestShippingAddress(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/update_shipping_address`, body);
    }
    updateGuestShippingOption(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/guest_checkout_session/${checkoutSessionId}/update_shipping_option`, body);
    }
    applyProxyGuestCoupon(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/proxy_guest_checkout_session/${checkoutSessionId}/apply_coupon`, body);
    }
    getProxyGuestCheckoutSession(checkoutSessionId) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.get(`/proxy_guest_checkout_session/${checkoutSessionId}`);
    }
    initiateProxyGuestCheckoutSession(body) {
        return this.post(`/proxy_guest_checkout_session/initiate`, body);
    }
    placeProxyGuestOrder(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/proxy_guest_checkout_session/${checkoutSessionId}/place_order`, body);
    }
    removeProxyGuestCoupon(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/proxy_guest_checkout_session/${checkoutSessionId}/remove_coupon`, body);
    }
    updateProxyGuestPaymentInfo(checkoutSessionId, authorization, date, requestNonce, signature, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/proxy_guest_checkout_session/${checkoutSessionId}/update_payment_info`, body, {
            headers: {
                'Authorization': authorization,
                'X-EBAY-C-DATE': date,
                'X-EBAY-C-REQUEST-NONCE': requestNonce,
                'X-EBAY-C-SIGNATURE': signature
            }
        });
    }
    updateProxyGuestQuantity(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/proxy_guest_checkout_session/${checkoutSessionId}/update_quantity`, body);
    }
    updateProxyGuestShippingAddress(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/proxy_guest_checkout_session/${checkoutSessionId}/update_shipping_address`, body);
    }
    updateProxyGuestShippingOption(checkoutSessionId, body) {
        checkoutSessionId = encodeURIComponent(checkoutSessionId);
        return this.post(`/proxy_guest_checkout_session/${checkoutSessionId}/update_shipping_option`, body);
    }
    getGuestPurchaseOrder(purchaseOrderId) {
        purchaseOrderId = encodeURIComponent(purchaseOrderId);
        return this.get(`/guest_purchase_order/${purchaseOrderId}`);
    }
    getPurchaseOrder(purchaseOrderId) {
        purchaseOrderId = encodeURIComponent(purchaseOrderId);
        return this.get(`/purchase_order/${purchaseOrderId}`);
    }
}
Order.id = 'Order';
exports.default = Order;
