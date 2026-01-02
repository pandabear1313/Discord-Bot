"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Return = exports.Inquiry = exports.Case = exports.Cancellation = void 0;
const index_js_1 = __importDefault(require("./cancellation/index.js"));
exports.Cancellation = index_js_1.default;
const index_js_2 = __importDefault(require("./case/index.js"));
exports.Case = index_js_2.default;
const index_js_3 = __importDefault(require("./inquiry/index.js"));
exports.Inquiry = index_js_3.default;
const index_js_4 = __importDefault(require("./return/index.js"));
exports.Return = index_js_4.default;
