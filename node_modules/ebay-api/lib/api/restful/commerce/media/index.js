"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Media extends index_js_1.default {
    get basePath() {
        return '/commerce/media/v1_beta';
    }
    get subdomain() {
        return 'apim';
    }
    async createVideo(body) {
        return this.post('/video', body);
    }
    async getVideo(videoId) {
        videoId = encodeURIComponent(videoId);
        return this.get(`/video/${videoId}`);
    }
    ;
    async uploadVideo(videoId, body) {
        videoId = encodeURIComponent(videoId);
        return this.post(`/video/${videoId}/upload`, body);
    }
}
Media.id = 'Media';
exports.default = Media;
