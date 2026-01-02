import { TranslateRequest } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/commerce_translation_v1_beta_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Translation extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    translate(body: TranslateRequest): Promise<any>;
}
