export interface paths {
    "/public_key/{public_key_id}": {
        get: operations["getPublicKey"];
    };
    "/topic/{topic_id}": {
        get: operations["getTopic"];
    };
    "/topic": {
        get: operations["getTopics"];
    };
    "/subscription": {
        get: operations["getSubscriptions"];
        post: operations["createSubscription"];
    };
    "/subscription/{subscription_id}": {
        get: operations["getSubscription"];
        put: operations["updateSubscription"];
        delete: operations["deleteSubscription"];
    };
    "/subscription/{subscription_id}/enable": {
        post: operations["enableSubscription"];
    };
    "/subscription/{subscription_id}/disable": {
        post: operations["disableSubscription"];
    };
    "/subscription/{subscription_id}/test": {
        post: operations["test"];
    };
    "/destination": {
        get: operations["getDestinations"];
        post: operations["createDestination"];
    };
    "/destination/{destination_id}": {
        get: operations["getDestination"];
        put: operations["updateDestination"];
        delete: operations["deleteDestination"];
    };
    "/config": {
        get: operations["getConfig"];
        put: operations["updateConfig"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Config: {
            alertEmail?: string;
        };
        CreateSubscriptionRequest: {
            topicId?: string;
            status?: string;
            payload?: components["schemas"]["SubscriptionPayloadDetail"];
            destinationId?: string;
        };
        DeliveryConfig: {
            endpoint?: string;
            verificationToken?: string;
        };
        Destination: {
            destinationId?: string;
            name?: string;
            status?: string;
            deliveryConfig?: string;
        };
        DestinationRequest: {
            name?: string;
            status?: string;
            deliveryConfig?: components["schemas"]["DeliveryConfig"];
        };
        DestinationSearchResponse: {
            total?: number;
            href?: string;
            next?: string;
            limit?: number;
            destinations?: (components["schemas"]["Destination"])[];
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
        PayloadDetail: {
            schemaVersion?: string;
            format?: (string)[];
            deliveryProtocol?: string;
            deprecated?: boolean;
        };
        PublicKey: {
            algorithm?: string;
            digest?: string;
            key?: string;
        };
        Subscription: {
            subscriptionId?: string;
            topicId?: string;
            status?: string;
            creationDate?: string;
            payload?: components["schemas"]["SubscriptionPayloadDetail"];
            destinationId?: string;
        };
        SubscriptionPayloadDetail: {
            format?: string;
            schemaVersion?: string;
            deliveryProtocol?: string;
        };
        SubscriptionSearchResponse: {
            total?: number;
            href?: string;
            next?: string;
            limit?: number;
            subscriptions?: (components["schemas"]["Subscription"])[];
        };
        Topic: {
            topicId?: string;
            description?: string;
            authorizationScopes?: (string)[];
            status?: string;
            context?: string;
            scope?: string;
            supportedPayloads?: (components["schemas"]["PayloadDetail"])[];
        };
        TopicSearchResponse: {
            total?: number;
            href?: string;
            next?: string;
            limit?: number;
            topics?: (components["schemas"]["Topic"])[];
        };
        UpdateSubscriptionRequest: {
            status?: string;
            payload?: components["schemas"]["SubscriptionPayloadDetail"];
            destinationId?: string;
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
    getPublicKey: {
        parameters: {
            path: {
                public_key_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["PublicKey"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getTopic: {
        parameters: {
            path: {
                topic_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Topic"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getTopics: {
        parameters: {
            query?: {
                limit?: string;
                continuation_token?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["TopicSearchResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getSubscriptions: {
        parameters: {
            query?: {
                limit?: string;
                continuation_token?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SubscriptionSearchResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    createSubscription: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateSubscriptionRequest"];
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
    getSubscription: {
        parameters: {
            path: {
                subscription_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Subscription"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateSubscription: {
        parameters: {
            path: {
                subscription_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateSubscriptionRequest"];
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    deleteSubscription: {
        parameters: {
            path: {
                subscription_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    enableSubscription: {
        parameters: {
            path: {
                subscription_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    disableSubscription: {
        parameters: {
            path: {
                subscription_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    test: {
        parameters: {
            path: {
                subscription_id: string;
            };
        };
        responses: {
            202: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getDestinations: {
        parameters: {
            query?: {
                limit?: string;
                continuation_token?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["DestinationSearchResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    createDestination: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DestinationRequest"];
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
            409: never;
            500: never;
        };
    };
    getDestination: {
        parameters: {
            path: {
                destination_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Destination"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    updateDestination: {
        parameters: {
            path: {
                destination_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DestinationRequest"];
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    deleteDestination: {
        parameters: {
            path: {
                destination_id: string;
            };
        };
        responses: {
            204: never;
            400: never;
            404: never;
            409: never;
            500: never;
        };
    };
    getConfig: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Config"];
                };
            };
            404: never;
            500: never;
        };
    };
    updateConfig: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Config"];
            };
        };
        responses: {
            204: never;
            400: never;
            500: never;
        };
    };
}
