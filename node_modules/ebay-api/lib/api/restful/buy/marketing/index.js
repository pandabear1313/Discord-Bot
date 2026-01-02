"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Marketing extends index_js_1.default {
    get basePath() {
        return '/buy/marketing/v1_beta';
    }
    getAlsoBoughtByProduct(params) {
        return this.get(`/merchandised_product/get_also_bought_products`, {
            params
        });
    }
    getAlsoViewedByProduct(params) {
        return this.get(`/merchandised_product/get_also_viewed_products`, {
            params
        });
    }
    getMerchandisedProducts(params) {
        return this.get(`/merchandised_product`, {
            params
        });
    }
}
Marketing.id = 'Marketing';
exports.default = Marketing;
