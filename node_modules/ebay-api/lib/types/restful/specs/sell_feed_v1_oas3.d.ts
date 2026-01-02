export interface paths {
    "/order_task": {
        get: operations["getOrderTasks"];
        post: operations["createOrderTask"];
    };
    "/order_task/{task_id}": {
        get: operations["getOrderTask"];
    };
    "/inventory_task": {
        get: operations["getInventoryTasks"];
        post: operations["createInventoryTask"];
    };
    "/inventory_task/{task_id}": {
        get: operations["getInventoryTask"];
    };
    "/schedule": {
        get: operations["getSchedules"];
        post: operations["createSchedule"];
    };
    "/schedule/{schedule_id}": {
        get: operations["getSchedule"];
        put: operations["updateSchedule"];
        delete: operations["deleteSchedule"];
    };
    "/schedule/{schedule_id}/download_result_file": {
        get: operations["getLatestResultFile"];
    };
    "/schedule_template/{schedule_template_id}": {
        get: operations["getScheduleTemplate"];
    };
    "/schedule_template": {
        get: operations["getScheduleTemplates"];
    };
    "/task": {
        get: operations["getTasks"];
        post: operations["createTask"];
    };
    "/task/{task_id}/download_input_file": {
        get: operations["getInputFile"];
    };
    "/task/{task_id}/download_result_file": {
        get: operations["getResultFile"];
    };
    "/task/{task_id}": {
        get: operations["getTask"];
    };
    "/task/{task_id}/upload_file": {
        post: operations["uploadFile"];
    };
    "/customer_service_metric_task": {
        get: operations["getCustomerServiceMetricTasks"];
        post: operations["createCustomerServiceMetricTask"];
    };
    "/customer_service_metric_task/{task_id}": {
        get: operations["getCustomerServiceMetricTask"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CreateInventoryTaskRequest: {
            schemaVersion?: string;
            feedType?: string;
            filterCriteria?: components["schemas"]["InventoryFilterCriteria"];
        };
        CreateOrderTaskRequest: {
            feedType?: string;
            filterCriteria?: components["schemas"]["OrderFilterCriteria"];
            schemaVersion?: string;
        };
        CreateServiceMetricsTaskRequest: {
            feedType?: string;
            filterCriteria?: components["schemas"]["CustomerServiceMetricsFilterCriteria"];
            schemaVersion?: string;
        };
        CreateTaskRequest: {
            feedType?: string;
            schemaVersion?: string;
        };
        CreateUserScheduleRequest: {
            feedType?: string;
            preferredTriggerDayOfMonth?: number;
            preferredTriggerDayOfWeek?: string;
            preferredTriggerHour?: string;
            scheduleEndDate?: string;
            scheduleName?: string;
            scheduleStartDate?: string;
            scheduleTemplateId?: string;
            schemaVersion?: string;
        };
        CustomerServiceMetricTaskCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            tasks?: (components["schemas"]["ServiceMetricsTask"])[];
            total?: number;
        };
        CustomerServiceMetricsFilterCriteria: {
            customerServiceMetricType?: string;
            evaluationMarketplaceId?: string;
            listingCategories?: (string)[];
            shippingRegions?: (string)[];
        };
        DateRange: {
            from?: string;
            to?: string;
        };
        Error: {
            category?: string;
            domain?: string;
            errorId?: number;
            inputRefIds?: (string)[];
            longMessage?: string;
            message?: string;
            outputRefIds?: (string)[];
            parameters?: (components["schemas"]["ErrorParameter"])[];
            subdomain?: string;
        };
        ErrorParameter: {
            name?: string;
            value?: string;
        };
        FormDataContentDisposition: {
            creationDate?: string;
            fileName?: string;
            modificationDate?: string;
            name?: string;
            parameters?: {
                [key: string]: string | undefined;
            };
            readDate?: string;
            size?: number;
            type?: string;
        };
        InventoryFilterCriteria: {
            listingFormat?: string;
        };
        InventoryTask: {
            taskId?: string;
            status?: string;
            feedType?: string;
            creationDate?: string;
            completionDate?: string;
            schemaVersion?: string;
            detailHref?: string;
            uploadSummary?: components["schemas"]["UploadSummary"];
            filterCriteria?: components["schemas"]["InventoryFilterCriteria"];
        };
        InventoryTaskCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            tasks?: (components["schemas"]["InventoryTask"])[];
            total?: number;
        };
        OrderFilterCriteria: {
            creationDateRange?: components["schemas"]["DateRange"];
            modifiedDateRange?: components["schemas"]["DateRange"];
            orderStatus?: string;
        };
        OrderTask: {
            completionDate?: string;
            creationDate?: string;
            detailHref?: string;
            feedType?: string;
            filterCriteria?: components["schemas"]["OrderFilterCriteria"];
            schemaVersion?: string;
            status?: string;
            taskId?: string;
            uploadSummary?: components["schemas"]["UploadSummary"];
        };
        OrderTaskCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            tasks?: (components["schemas"]["OrderTask"])[];
            total?: number;
        };
        ScheduleTemplateCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            scheduleTemplates?: (components["schemas"]["ScheduleTemplateResponse"])[];
            total?: number;
        };
        ScheduleTemplateResponse: {
            feedType?: string;
            frequency?: string;
            name?: string;
            scheduleTemplateId?: string;
            status?: string;
            supportedConfigurations?: (components["schemas"]["SupportedConfiguration"])[];
        };
        ServiceMetricsTask: {
            completionDate?: string;
            creationDate?: string;
            detailHref?: string;
            feedType?: string;
            filterCriteria?: components["schemas"]["CustomerServiceMetricsFilterCriteria"];
            schemaVersion?: string;
            status?: string;
            taskId?: string;
        };
        StreamingOutput: Record<string, never>;
        SupportedConfiguration: {
            defaultValue?: string;
            property?: string;
            usage?: string;
        };
        Task: {
            completionDate?: string;
            creationDate?: string;
            detailHref?: string;
            feedType?: string;
            schemaVersion?: string;
            status?: string;
            taskId?: string;
            uploadSummary?: components["schemas"]["UploadSummary"];
        };
        TaskCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            tasks?: (components["schemas"]["Task"])[];
            total?: number;
        };
        UpdateUserScheduleRequest: {
            preferredTriggerDayOfMonth?: number;
            preferredTriggerDayOfWeek?: string;
            preferredTriggerHour?: string;
            scheduleEndDate?: string;
            scheduleName?: string;
            scheduleStartDate?: string;
            schemaVersion?: string;
        };
        UploadSummary: {
            failureCount?: number;
            successCount?: number;
        };
        UserScheduleCollection: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            schedules?: (components["schemas"]["UserScheduleResponse"])[];
            total?: number;
        };
        UserScheduleResponse: {
            scheduleId?: string;
            creationDate?: string;
            feedType?: string;
            lastModifiedDate?: string;
            preferredTriggerDayOfMonth?: number;
            preferredTriggerDayOfWeek?: string;
            preferredTriggerHour?: string;
            scheduleEndDate?: string;
            scheduleName?: string;
            scheduleStartDate?: string;
            scheduleTemplateId?: string;
            schemaVersion?: string;
            status?: string;
            statusReason?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type external = Record<string, never>;
export interface operations {
    getOrderTasks: {
        parameters: {
            query?: {
                date_range?: string;
                feed_type?: string;
                limit?: string;
                look_back_days?: string;
                offset?: string;
                schedule_id?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["OrderTaskCollection"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
    createOrderTask: {
        parameters: {
            header?: {
                "X-EBAY-C-MARKETPLACE-ID"?: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOrderTaskRequest"];
            };
        };
        responses: {
            202: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    getOrderTask: {
        parameters: {
            path: {
                task_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["OrderTask"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getInventoryTasks: {
        parameters: {
            query?: {
                feed_type?: string;
                schedule_id?: string;
                look_back_days?: string;
                date_range?: string;
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["InventoryTaskCollection"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
    createInventoryTask: {
        parameters: {
            header?: {
                "X-EBAY-C-MARKETPLACE-ID"?: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateInventoryTaskRequest"];
            };
        };
        responses: {
            202: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    getInventoryTask: {
        parameters: {
            path: {
                task_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["InventoryTask"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getSchedules: {
        parameters: {
            query: {
                feed_type: string;
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["UserScheduleCollection"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
    createSchedule: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUserScheduleRequest"];
            };
        };
        responses: {
            201: {
                headers: {
                    Location?: string;
                };
                content: {
                    "application/json": Record<string, never>;
                };
            };
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    getSchedule: {
        parameters: {
            path: {
                schedule_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["UserScheduleResponse"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    updateSchedule: {
        parameters: {
            path: {
                schedule_id: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateUserScheduleRequest"];
            };
        };
        responses: {
            204: never;
            400: never;
            403: never;
            404: never;
            409: never;
            500: never;
        };
    };
    deleteSchedule: {
        parameters: {
            path: {
                schedule_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getLatestResultFile: {
        parameters: {
            path: {
                schedule_id: string;
            };
        };
        responses: {
            200: {
                headers: {
                    "content-disposition"?: string;
                };
                content: {
                    "application/octet-stream": components["schemas"]["StreamingOutput"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getScheduleTemplate: {
        parameters: {
            path: {
                schedule_template_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ScheduleTemplateResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getScheduleTemplates: {
        parameters: {
            query: {
                feed_type: string;
                limit?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ScheduleTemplateCollection"];
                };
            };
            400: never;
            500: never;
        };
    };
    getTasks: {
        parameters: {
            query?: {
                date_range?: string;
                feed_type?: string;
                limit?: string;
                look_back_days?: string;
                offset?: string;
                schedule_id?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["TaskCollection"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
    createTask: {
        parameters: {
            header?: {
                "X-EBAY-C-MARKETPLACE-ID"?: string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTaskRequest"];
            };
        };
        responses: {
            202: never;
            400: never;
            403: never;
            409: never;
            500: never;
        };
    };
    getInputFile: {
        parameters: {
            path: {
                task_id: string;
            };
        };
        responses: {
            200: {
                headers: {
                    "content-disposition"?: string;
                };
                content: {
                    "application/octet-stream": components["schemas"]["StreamingOutput"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getResultFile: {
        parameters: {
            path: {
                task_id: string;
            };
        };
        responses: {
            200: {
                headers: {
                    "content-disposition"?: string;
                };
                content: {
                    "application/octet-stream": components["schemas"]["StreamingOutput"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getTask: {
        parameters: {
            path: {
                task_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Task"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    uploadFile: {
        parameters: {
            path: {
                task_id: string;
            };
        };
        requestBody?: {
            content: {
                "multipart/form-data": components["schemas"]["FormDataContentDisposition"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getCustomerServiceMetricTasks: {
        parameters: {
            query?: {
                date_range?: string;
                feed_type?: string;
                limit?: string;
                look_back_days?: string;
                offset?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CustomerServiceMetricTaskCollection"];
                };
            };
            400: never;
            403: never;
            500: never;
        };
    };
    createCustomerServiceMetricTask: {
        parameters: {
            header: {
                "accept-language": string;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateServiceMetricsTaskRequest"];
            };
        };
        responses: {
            202: never;
            400: never;
            403: never;
            500: never;
        };
    };
    getCustomerServiceMetricTask: {
        parameters: {
            path: {
                task_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ServiceMetricsTask"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
}
