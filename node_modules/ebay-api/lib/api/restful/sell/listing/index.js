"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Listing extends index_js_1.default {
    get basePath() {
        return '/sell/listing/v1_beta';
    }
    createItemDraft(data) {
        return this.post(`/item_draft/`, data);
    }
}
Listing.id = 'Listing';
exports.default = Listing;
