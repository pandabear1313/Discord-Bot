export interface paths {
    "/customer_service_metric/{customer_service_metric_type}/{evaluation_type}": {
        get: operations["getCustomerServiceMetric"];
    };
    "/seller_standards_profile": {
        get: operations["findSellerStandardsProfiles"];
    };
    "/seller_standards_profile/{program}/{cycle}": {
        get: operations["getSellerStandardsProfile"];
    };
    "/traffic_report": {
        get: operations["getTrafficReport"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        BenchmarkMetadata: {
            average?: string;
        };
        Cycle: {
            cycleType?: string;
            evaluationDate?: string;
            evaluationMonth?: string;
        };
        Definition: {
            dataType?: string;
            key?: string;
            localizedName?: string;
        };
        Dimension: {
            dimensionKey?: string;
            name?: string;
            value?: string;
        };
        DimensionMetric: {
            dimension?: components["schemas"]["Dimension"];
            metrics?: (components["schemas"]["Metric"])[];
        };
        Distribution: {
            name?: string;
            value?: string;
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
        EvaluationCycle: {
            endDate?: string;
            evaluationDate?: string;
            evaluationType?: string;
            startDate?: string;
        };
        FindSellerStandardsProfilesResponse: {
            standardsProfiles?: (components["schemas"]["StandardsProfile"])[];
        };
        GetCustomerServiceMetricResponse: {
            dimensionMetrics?: (components["schemas"]["DimensionMetric"])[];
            evaluationCycle?: components["schemas"]["EvaluationCycle"];
            marketplaceId?: string;
        };
        Header: {
            dimensionKeys?: (components["schemas"]["Definition"])[];
            metrics?: (components["schemas"]["Definition"])[];
        };
        Metadata: {
            metadataHeader?: components["schemas"]["MetadataHeader"];
            metadataRecords?: (components["schemas"]["MetadataRecord"])[];
        };
        MetadataHeader: {
            key?: string;
            metadataKeys?: (components["schemas"]["Definition"])[];
        };
        MetadataRecord: {
            metadataValues?: (components["schemas"]["Value"])[];
            value?: components["schemas"]["Value"];
        };
        Metric: {
            benchmark?: components["schemas"]["MetricBenchmark"];
            distributions?: (components["schemas"]["MetricDistribution"])[];
            metricKey?: string;
            value?: string;
        };
        MetricBenchmark: {
            adjustment?: string;
            basis?: string;
            metadata?: components["schemas"]["BenchmarkMetadata"];
            rating?: string;
        };
        MetricDistribution: {
            basis?: string;
            data?: (components["schemas"]["Distribution"])[];
        };
        Record: {
            dimensionValues?: (components["schemas"]["Value"])[];
            metricValues?: (components["schemas"]["Value"])[];
        };
        Report: {
            dimensionMetadata?: (components["schemas"]["Metadata"])[];
            endDate?: string;
            header?: components["schemas"]["Header"];
            lastUpdatedDate?: string;
            records?: (components["schemas"]["Record"])[];
            startDate?: string;
            warnings?: (components["schemas"]["Error"])[];
        };
        StandardsProfile: {
            cycle?: components["schemas"]["Cycle"];
            defaultProgram?: boolean;
            evaluationReason?: string;
            metrics?: (components["schemas"]["Metric"])[];
            program?: string;
            standardsLevel?: string;
        };
        Value: {
            applicable?: boolean;
            value?: Record<string, never>;
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
    getCustomerServiceMetric: {
        parameters: {
            query: {
                evaluation_marketplace_id: string;
            };
            path: {
                customer_service_metric_type: string;
                evaluation_type: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetCustomerServiceMetricResponse"];
                };
            };
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    findSellerStandardsProfiles: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["FindSellerStandardsProfilesResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getSellerStandardsProfile: {
        parameters: {
            path: {
                cycle: string;
                program: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["StandardsProfile"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getTrafficReport: {
        parameters: {
            query?: {
                dimension?: string;
                filter?: string;
                metric?: string;
                sort?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Report"];
                };
            };
            400: never;
            500: never;
        };
    };
}
