export interface paths {
    "/user/": {
        get: operations["getUser"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Address: {
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            country?: string;
            county?: string;
            postalCode?: string;
            stateOrProvince?: string;
        };
        BusinessAccount: {
            address?: components["schemas"]["Address"];
            doingBusinessAs?: string;
            email?: string;
            name?: string;
            primaryContact?: components["schemas"]["Contact"];
            primaryPhone?: components["schemas"]["Phone"];
            secondaryPhone?: components["schemas"]["Phone"];
            website?: string;
        };
        Contact: {
            firstName?: string;
            lastName?: string;
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
        IndividualAccount: {
            email?: string;
            firstName?: string;
            lastName?: string;
            primaryPhone?: components["schemas"]["Phone"];
            registrationAddress?: components["schemas"]["Address"];
            secondaryPhone?: components["schemas"]["Phone"];
        };
        Phone: {
            countryCode?: string;
            number?: string;
            phoneType?: string;
        };
        UserResponse: {
            accountType?: string;
            businessAccount?: components["schemas"]["BusinessAccount"];
            individualAccount?: components["schemas"]["IndividualAccount"];
            registrationMarketplaceId?: string;
            status?: string;
            userId?: string;
            username?: string;
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
    getUser: {
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["UserResponse"];
                };
            };
            404: never;
            500: never;
        };
    };
}
