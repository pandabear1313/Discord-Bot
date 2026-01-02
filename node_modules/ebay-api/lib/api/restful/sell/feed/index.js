"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_js_1 = require("../../../../request.js");
const index_js_1 = __importDefault(require("../../index.js"));
class Feed extends index_js_1.default {
    get basePath() {
        return '/sell/feed/v1';
    }
    getOrderTasks({ dateRange, feedType, limit, lookBackDays, offset, scheduleId } = {}) {
        return this.get(`/order_task`, {
            params: {
                date_range: dateRange,
                feed_type: feedType,
                limit,
                look_back_days: lookBackDays,
                offset,
                schedule_id: scheduleId
            }
        });
    }
    createOrderTask(data) {
        return this.post(`/order_task`, data);
    }
    getOrderTask(taskId) {
        taskId = encodeURIComponent(taskId);
        return this.get(`/order_task/${taskId}`);
    }
    getInventoryTasks({ feedType, scheduleId, lookBackDays, dateRange, limit, offset } = {}) {
        return this.get('/inventory_task', {
            params: {
                feed_type: feedType,
                schedule_id: scheduleId,
                look_back_days: lookBackDays,
                date_range: dateRange,
                limit,
                offset
            }
        });
    }
    createInventoryTask(data) {
        return this.post('/inventory_task', data);
    }
    getInventoryTask(taskId) {
        taskId = encodeURIComponent(taskId);
        return this.get(`/inventory_task/${taskId}`);
    }
    getSchedules({ feedType, limit, offset, } = {}) {
        return this.get(`/schedule`, {
            params: {
                feed_type: feedType,
                limit,
                offset
            }
        });
    }
    createSchedule(data) {
        return this.post(`/schedule`, data);
    }
    getSchedule(scheduleId) {
        scheduleId = encodeURIComponent(scheduleId);
        return this.get(`/schedule/${scheduleId}`);
    }
    updateSchedule(scheduleId, data) {
        scheduleId = encodeURIComponent(scheduleId);
        return this.put(`/schedule/${scheduleId}`, data);
    }
    deleteSchedule(scheduleId) {
        scheduleId = encodeURIComponent(scheduleId);
        return this.delete(`/schedule/${scheduleId}`);
    }
    getLatestResultFile(scheduleId) {
        scheduleId = encodeURIComponent(scheduleId);
        return this.get(`/schedule/${scheduleId}/download_result_file`, {
            responseType: 'arraybuffer',
            responseEncoding: 'binary',
        });
    }
    getScheduleTemplate(scheduleTemplateId) {
        scheduleTemplateId = encodeURIComponent(scheduleTemplateId);
        return this.get(`/schedule_template/${scheduleTemplateId}`);
    }
    getScheduleTemplates({ feedType, limit, offset, } = {}) {
        return this.get(`/schedule_template`, {
            params: {
                feed_type: feedType,
                limit,
                offset
            }
        });
    }
    getTasks({ dateRange, feedType, limit, lookBackDays, offset, scheduleId } = {}) {
        return this.get(`/task`, {
            params: {
                date_range: dateRange,
                feed_type: feedType,
                limit,
                look_back_days: lookBackDays,
                offset,
                schedule_id: scheduleId
            }
        });
    }
    createTask(data) {
        return this.post(`/task`, data);
    }
    getInputFile(taskId) {
        taskId = encodeURIComponent(taskId);
        return this.get(`/task/${taskId}/download_input_file`);
    }
    getResultFile(taskId) {
        taskId = encodeURIComponent(taskId);
        return this.get(`/task/${taskId}/download_result_file`, {
            responseType: 'arraybuffer',
            responseEncoding: 'binary',
        });
    }
    getTask(taskId) {
        taskId = encodeURIComponent(taskId);
        return this.get(`/task/${taskId}`);
    }
    uploadFile(taskId, data) {
        taskId = encodeURIComponent(taskId);
        return this.post(`/task/${taskId}/upload_file`, data, {
            headers: request_js_1.multipartHeader,
        });
    }
    getCustomerServiceMetricTasks({ dateRange, feedType, limit, lookBackDays, offset, } = {}) {
        return this.get(`/customer_service_metric_task`, {
            params: {
                date_range: dateRange,
                feed_type: feedType,
                limit,
                look_back_days: lookBackDays,
                offset,
            }
        });
    }
    createCustomerServiceMetricTask(acceptLanguage, data) {
        return this.post(`/customer_service_metric_task`, data, {
            headers: {
                'accept-language': acceptLanguage
            }
        });
    }
    getCustomerServiceMetricTask(taskId) {
        taskId = encodeURIComponent(taskId);
        return this.get(`/customer_service_metric_task/${taskId}`);
    }
}
Feed.id = 'Feed';
exports.default = Feed;
