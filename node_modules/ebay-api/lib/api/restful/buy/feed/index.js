"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Feed extends index_js_1.default {
    get basePath() {
        return '/buy/feed/v1_beta';
    }
    getItemFeed(params, range) {
        return this.get(`/item`, {
            params,
            headers: {
                'Range': range
            }
        });
    }
    getItemGroupFeed(params, range) {
        return this.get(`/item_group`, {
            params,
            headers: {
                'Range': range
            }
        });
    }
    getItemSnapshotFeed(params, snapshotDate, range) {
        return this.get(`/item_snapshot`, {
            params: {
                ...params,
                snapshot_date: snapshotDate
            },
            headers: {
                'Range': range
            }
        });
    }
    getProductFeed(params, snapshotDate, range) {
        return this.get(`/product`, {
            params: {
                ...params,
                snapshot_date: snapshotDate
            },
            headers: {
                'Range': range
            }
        });
    }
}
Feed.id = 'Feed';
exports.default = Feed;
