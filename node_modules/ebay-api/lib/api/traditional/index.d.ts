import { ClientAlerts, Finding, Merchandising, Shopping, Trading } from '../../types/index.js';
import Api from '../index.js';
export default class Traditional extends Api {
    createTradingApi(): Trading;
    createShoppingApi(): Shopping;
    createFindingApi(): Finding;
    createClientAlertsApi(): ClientAlerts;
    createMerchandisingApi(): Merchandising;
    createBusinessPolicyManagementApi(): void;
    private createXMLRequest;
    private shouldRefreshToken;
    private request;
    private getConfig;
    private createTraditionalXMLApi;
}
