import Restful from '../../index.js';
class AccountV1 extends Restful {
    get basePath() {
        return '/sell/account/v1';
    }
    getCustomPolicies(policyTypes) {
        return this.get(`/custom_policy/`, {
            params: {
                policy_types: policyTypes
            }
        });
    }
    createCustomPolicy(body) {
        return this.post(`/custom_policy/`, body);
    }
    getCustomPolicy(customPolicyId) {
        customPolicyId = encodeURIComponent(customPolicyId);
        return this.get(`/custom_policy/${customPolicyId}`);
    }
    updateCustomPolicy(customPolicyId, body) {
        customPolicyId = encodeURIComponent(customPolicyId);
        return this.put(`/custom_policy/${customPolicyId}`, body);
    }
    getFulfillmentPolicies(marketplaceId) {
        return this.get(`/fulfillment_policy`, {
            params: {
                marketplace_id: marketplaceId
            }
        });
    }
    createFulfillmentPolicy(body) {
        return this.post(`/fulfillment_policy/`, body);
    }
    updateFulfillmentPolicy(fulfillmentPolicyId, body) {
        fulfillmentPolicyId = encodeURIComponent(fulfillmentPolicyId);
        return this.put(`/fulfillment_policy/${fulfillmentPolicyId}`, body);
    }
    deleteFulfillmentPolicy(fulfillmentPolicyId) {
        fulfillmentPolicyId = encodeURIComponent(fulfillmentPolicyId);
        return this.delete(`/fulfillment_policy/${fulfillmentPolicyId}`);
    }
    getFulfillmentPolicy(fulfillmentPolicyId) {
        return this.get(`/fulfillment_policy/${fulfillmentPolicyId}`);
    }
    getFulfillmentPolicyByName(marketplaceId, name) {
        return this.get(`/fulfillment_policy/get_by_policy_name`, {
            params: {
                marketplace_id: marketplaceId,
                name
            }
        });
    }
    getPaymentPolicies(marketplaceId) {
        return this.get(`/payment_policy`, {
            params: {
                marketplace_id: marketplaceId
            }
        });
    }
    getPaymentPolicy(paymentPolicyId) {
        paymentPolicyId = encodeURIComponent(paymentPolicyId);
        return this.get(`/payment_policy/${paymentPolicyId}`);
    }
    createPaymentPolicy(body) {
        return this.post(`/payment_policy`, body);
    }
    updatePaymentPolicy(paymentPolicyId, body) {
        paymentPolicyId = encodeURIComponent(paymentPolicyId);
        return this.put(`/payment_policy/${paymentPolicyId}`, body);
    }
    deletePaymentPolicy(paymentPolicyId) {
        paymentPolicyId = encodeURIComponent(paymentPolicyId);
        return this.delete(`/payment_policy/${paymentPolicyId}`);
    }
    getPaymentPolicyByName(marketplaceId, name) {
        return this.get(`/payment_policy/get_by_policy_name`, {
            params: {
                marketplace_id: marketplaceId,
                name
            }
        });
    }
    getPaymentsProgram(marketplaceId, paymentsProgramType) {
        marketplaceId = encodeURIComponent(marketplaceId);
        const type = encodeURIComponent(paymentsProgramType);
        return this.get(`/payments_program/${marketplaceId}/${type}`);
    }
    getPaymentsProgramOnboarding(marketplaceId, paymentsProgramType) {
        marketplaceId = encodeURIComponent(marketplaceId);
        const type = encodeURIComponent(paymentsProgramType);
        return this.get(`/payments_program/${marketplaceId}/${type}/onboarding`);
    }
    getPrivileges() {
        return this.get(`/privilege`);
    }
    getOptedInPrograms() {
        return this.get(`/program/get_opted_in_programs`);
    }
    optInToProgram(body) {
        return this.post(`/program/opt_in`, body);
    }
    optOutOfProgram(body) {
        return this.post(`/program/opt_out`, body);
    }
    getRateTables(countryCode) {
        return this.get(`/rate_table`, {
            params: {
                country_code: countryCode
            }
        });
    }
    getReturnPolicies(marketplaceId) {
        return this.get(`/return_policy`, {
            params: {
                marketplace_id: marketplaceId
            }
        });
    }
    getReturnPolicy(returnPolicyId) {
        returnPolicyId = encodeURIComponent(returnPolicyId);
        return this.get(`/return_policy/${returnPolicyId}`);
    }
    createReturnPolicy(body) {
        return this.post(`/return_policy`, body);
    }
    updateReturnPolicy(returnPolicyId, body) {
        returnPolicyId = encodeURIComponent(returnPolicyId);
        return this.put(`/return_policy/${returnPolicyId}`, body);
    }
    deleteReturnPolicy(returnPolicyId) {
        returnPolicyId = encodeURIComponent(returnPolicyId);
        return this.delete(`/return_policy/${returnPolicyId}`);
    }
    getReturnPolicyByName(marketplaceId, name) {
        return this.get(`/return_policy/get_by_policy_name`, {
            params: {
                marketplace_id: marketplaceId,
                name
            }
        });
    }
    getSalesTax(countryCode, jurisdictionId) {
        countryCode = encodeURIComponent(countryCode);
        jurisdictionId = encodeURIComponent(jurisdictionId);
        return this.get(`/sales_tax/${countryCode}/${jurisdictionId}`);
    }
    createOrReplaceSalesTax(countryCode, jurisdictionId, body) {
        countryCode = encodeURIComponent(countryCode);
        jurisdictionId = encodeURIComponent(jurisdictionId);
        return this.put(`/sales_tax/${countryCode}/${jurisdictionId}`, body);
    }
    deleteSalesTax(countryCode, jurisdictionId) {
        countryCode = encodeURIComponent(countryCode);
        jurisdictionId = encodeURIComponent(jurisdictionId);
        return this.delete(`/sales_tax/${countryCode}/${jurisdictionId}`);
    }
    getSalesTaxes(countryCode) {
        return this.get(`/sales_tax`, {
            params: {
                country_code: countryCode
            }
        });
    }
    getSubscription({ limit, continuationToken } = {}) {
        return this.get(`/subscription`, {
            params: {
                limit,
                continuation_token: continuationToken
            }
        });
    }
    getKYC() {
        return this.get(`/kyc`);
    }
    getAdvertisingEligibility(programTypes) {
        return this.get(`/advertising_eligibility`, {
            params: {
                program_types: programTypes
            }
        });
    }
    getInventoryLocation(merchantLocationKey) {
        merchantLocationKey = encodeURIComponent(merchantLocationKey);
        return this.get(`/location/${merchantLocationKey}`);
    }
    createInventoryLocation(merchantLocationKey, body) {
        merchantLocationKey = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${merchantLocationKey}`, body);
    }
    deleteInventoryLocation(merchantLocationKey) {
        merchantLocationKey = encodeURIComponent(merchantLocationKey);
        return this.delete(`/location/${merchantLocationKey}`);
    }
    disableInventoryLocation(merchantLocationKey) {
        merchantLocationKey = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${merchantLocationKey}/disable`);
    }
    enableInventoryLocation(merchantLocationKey) {
        merchantLocationKey = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${merchantLocationKey}/enable`);
    }
    getInventoryLocations({ limit, offset } = {}) {
        return this.get(`/location`, {
            params: {
                limit,
                offset
            }
        });
    }
    updateInventoryLocation(merchantLocationKey, body) {
        merchantLocationKey = encodeURIComponent(merchantLocationKey);
        return this.post(`/location/${merchantLocationKey}/update_location_details`, body);
    }
    getSalesTaxJurisdictions(countryCode) {
        countryCode = encodeURIComponent(countryCode);
        return this.get(`/country/${countryCode}/sales_tax_jurisdiction`);
    }
}
AccountV1.id = 'AccountV1';
export default AccountV1;
