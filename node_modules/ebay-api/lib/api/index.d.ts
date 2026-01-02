import Auth from '../auth/index.js';
import { IEBayApiRequest } from '../request.js';
import { AppConfig } from '../types/index.js';
import Base from './base.js';
import { SignatureComponents } from './digitalSignature.js';
export default abstract class Api extends Base {
    readonly auth: Auth;
    constructor(config: AppConfig, req?: IEBayApiRequest, auth?: Auth);
    getDigitalSignatureHeaders(signatureComponents: SignatureComponents, payload: any): {};
}
