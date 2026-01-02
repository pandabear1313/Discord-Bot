import { CreateVideoRequest, InputStream } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/commerce_media_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Media extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    get subdomain(): string;
    createVideo(body?: CreateVideoRequest): Promise<any>;
    getVideo(videoId: string): Promise<any>;
    uploadVideo(videoId: string, body?: InputStream): Promise<any>;
}
