import { operations } from '../../../../types/restful/specs/commerce_identity_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Identity extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    get subdomain(): string;
    getUser(): Promise<any>;
}
