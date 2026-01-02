import { IEBayApiRequest } from '../request.js';
import { AppConfig } from '../types/index.js';
export default abstract class Base {
    readonly config: AppConfig;
    readonly req: IEBayApiRequest;
    protected constructor(config: AppConfig, req?: IEBayApiRequest);
}
