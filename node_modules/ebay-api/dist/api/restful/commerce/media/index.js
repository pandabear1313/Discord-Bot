import Restful from '../../index.js';
class Media extends Restful {
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
export default Media;
