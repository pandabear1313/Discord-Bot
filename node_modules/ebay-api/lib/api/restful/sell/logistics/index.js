"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Logistics extends index_js_1.default {
    get basePath() {
        return '/sell/logistics/v1_beta';
    }
    createShippingQuote(data) {
        return this.post(`/shipping_quote`, data);
    }
    getShippingQuote(shippingQuoteId) {
        shippingQuoteId = encodeURIComponent(shippingQuoteId);
        return this.get(`/shipping_quote/${shippingQuoteId}`);
    }
    createFromShippingQuote(data) {
        return this.post(`/shipment/create_from_shipping_quote`, data);
    }
    getShipment(shipmentId) {
        return this.get(`/shipment/${shipmentId}`);
    }
    downloadLabelFile(shipmentId) {
        return this.get(`/shipment/${shipmentId}/download_label_file`);
    }
    cancelShipment(shipmentId) {
        return this.post(`/shipment/${shipmentId}/cancel`);
    }
}
Logistics.id = 'Logistics';
exports.default = Logistics;
