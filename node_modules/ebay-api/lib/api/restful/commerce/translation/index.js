"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Translation extends index_js_1.default {
    get basePath() {
        return '/commerce/translation/v1_beta';
    }
    translate(body) {
        return this.post(`/translate`, body);
    }
}
Translation.id = 'Translation';
exports.default = Translation;
