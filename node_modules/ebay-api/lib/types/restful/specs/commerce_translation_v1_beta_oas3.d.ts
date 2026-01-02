export interface paths {
    "/translate": {
        post: operations["translate"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
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
        TranslateRequest: {
            from?: string;
            text?: (string)[];
            to?: string;
            translationContext?: string;
        };
        TranslateResponse: {
            from?: string;
            to?: string;
            translations?: (components["schemas"]["Translation"])[];
        };
        Translation: {
            originalText?: string;
            translatedText?: string;
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
    translate: {
        requestBody: {
            content: {
                "application/json": components["schemas"]["TranslateRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["TranslateResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
}
