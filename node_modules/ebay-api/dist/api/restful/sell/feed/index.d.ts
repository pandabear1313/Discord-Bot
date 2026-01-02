import { SellFeedParams } from '../../../../types/index.js';
import { operations } from '../../../../types/restful/specs/sell_feed_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Feed extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getOrderTasks({ dateRange, feedType, limit, lookBackDays, offset, scheduleId }?: SellFeedParams): Promise<any>;
    createOrderTask(data: any): Promise<any>;
    getOrderTask(taskId: string): Promise<any>;
    getInventoryTasks({ feedType, scheduleId, lookBackDays, dateRange, limit, offset }?: {
        feedType?: string;
        scheduleId?: string;
        lookBackDays?: number;
        dateRange?: string;
        limit?: number;
        offset?: number;
    }): Promise<any>;
    createInventoryTask(data: any): Promise<any>;
    getInventoryTask(taskId: string): Promise<any>;
    getSchedules({ feedType, limit, offset, }?: SellFeedParams): Promise<any>;
    createSchedule(data: any): Promise<any>;
    getSchedule(scheduleId: string): Promise<any>;
    updateSchedule(scheduleId: string, data?: any): Promise<any>;
    deleteSchedule(scheduleId: string): Promise<any>;
    getLatestResultFile(scheduleId: string): Promise<any>;
    getScheduleTemplate(scheduleTemplateId: string): Promise<any>;
    getScheduleTemplates({ feedType, limit, offset, }?: SellFeedParams): Promise<any>;
    getTasks({ dateRange, feedType, limit, lookBackDays, offset, scheduleId }?: SellFeedParams): Promise<any>;
    createTask(data: any): Promise<any>;
    getInputFile(taskId: string): Promise<any>;
    getResultFile(taskId: string): Promise<any>;
    getTask(taskId: string): Promise<any>;
    uploadFile(taskId: string, data?: any): Promise<any>;
    getCustomerServiceMetricTasks({ dateRange, feedType, limit, lookBackDays, offset, }?: SellFeedParams): Promise<any>;
    createCustomerServiceMetricTask(acceptLanguage: string, data: any): Promise<any>;
    getCustomerServiceMetricTask(taskId: string): Promise<any>;
}
