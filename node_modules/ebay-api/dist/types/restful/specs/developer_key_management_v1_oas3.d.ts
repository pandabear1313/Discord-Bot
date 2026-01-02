export interface paths {
    "/signing_key": {
        get: operations["getSigningKeys"];
        post: operations["createSigningKey"];
    };
    "/signing_key/{signing_key_id}": {
        get: operations["getSigningKey"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CreateSigningKeyRequest: {
            signingKeyCipher?: string;
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
        QuerySigningKeysResponse: {
            signingKeys?: (components["schemas"]["SigningKey"])[];
        };
        SigningKey: {
            creationTime?: number;
            expirationTime?: number;
            jwe?: string;
            privateKey?: string;
            publicKey?: string;
            signingKeyCipher?: string;
            signingKeyId?: string;
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
    getSigningKeys: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["QuerySigningKeysResponse"];
                };
            };
            400: never;
            401: never;
            403: never;
            500: never;
        };
    };
    createSigningKey: {
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateSigningKeyRequest"];
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SigningKey"];
                };
            };
            400: never;
            401: never;
            403: never;
            500: never;
        };
    };
    getSigningKey: {
        parameters: {
            path: {
                signing_key_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["SigningKey"];
                };
            };
            400: never;
            401: never;
            403: never;
            404: never;
            500: never;
        };
    };
}
