export interface paths {
    "/charity_org/{charity_org_id}": {
        get: operations["getCharityOrg"];
    };
    "/charity_org": {
        get: operations["getCharityOrgs"];
    };
    "/charity_org/get_charity_org_by_legacy_id": {
        get: operations["getCharityOrgByLegacyId"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Address: {
            city?: string;
            stateOrProvince?: string;
            postalCode?: string;
            country?: string;
        };
        CharityOrg: {
            charityOrgId?: string;
            description?: string;
            location?: components["schemas"]["Location"];
            logoImage?: components["schemas"]["Image"];
            missionStatement?: string;
            name?: string;
            registrationId?: string;
            website?: string;
        };
        CharitySearchResponse: {
            charityOrgs?: (components["schemas"]["CharityOrg"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
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
        GeoCoordinates: {
            latitude?: number;
            longitude?: number;
        };
        Image: {
            height?: string;
            imageUrl?: string;
            width?: string;
        };
        Location: {
            address?: components["schemas"]["Address"];
            geoCoordinates?: components["schemas"]["GeoCoordinates"];
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
    getCharityOrg: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
            path: {
                charity_org_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CharityOrg"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getCharityOrgs: {
        parameters: {
            query?: {
                limit?: string;
                offset?: string;
                q?: string;
                registration_ids?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CharitySearchResponse"];
                };
            };
            400: never;
            500: never;
        };
    };
    getCharityOrgByLegacyId: {
        parameters: {
            query: {
                legacy_charity_org_id: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CharityOrg"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
}
