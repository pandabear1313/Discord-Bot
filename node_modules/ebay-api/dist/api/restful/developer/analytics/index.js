import Restful from '../../index.js';
class Analytics extends Restful {
    get basePath() {
        return '/developer/analytics/v1_beta';
    }
    getRateLimits(apiContext, apiName) {
        return this.get(`/rate_limit/`, {
            params: {
                api_context: apiContext,
                api_name: apiName
            }
        });
    }
    getUserRateLimits(apiContext, apiName) {
        return this.get(`/user_rate_limit/`, {
            params: {
                api_context: apiContext,
                api_name: apiName
            }
        });
    }
}
Analytics.id = 'Analytics';
export default Analytics;
