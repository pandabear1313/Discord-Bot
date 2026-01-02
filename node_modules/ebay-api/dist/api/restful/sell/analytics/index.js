import Restful from '../../index.js';
class Analytics extends Restful {
    get basePath() {
        return '/sell/analytics/v1';
    }
    findSellerStandardsProfiles() {
        return this.get(`/seller_standards_profile`);
    }
    getSellerStandardsProfile(program, cycle) {
        program = encodeURIComponent(program);
        cycle = encodeURIComponent(cycle);
        return this.get(`/seller_standards_profile/${program}/${cycle}`);
    }
    getTrafficReport({ dimension, filter, metric, sort } = {}) {
        return this.get(`/traffic_report`, {
            params: {
                dimension,
                filter,
                metric,
                sort
            }
        });
    }
    getCustomerServiceMetric(customerServiceMetricType, evaluationType) {
        return this.get(`/customer_service_metric/${customerServiceMetricType}/${evaluationType}`);
    }
}
Analytics.id = 'Analytics';
export default Analytics;
