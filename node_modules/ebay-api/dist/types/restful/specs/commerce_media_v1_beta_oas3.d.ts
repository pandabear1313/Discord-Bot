export interface paths {
    "/video": {
        post: operations["createVideo"];
    };
    "/video/{video_id}": {
        get: operations["getVideo"];
    };
    "/video/{video_id}/upload": {
        post: operations["uploadVideo"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CreateVideoRequest: {
            classification?: (string)[];
            description?: string;
            size?: number;
            title?: string;
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
        Image: {
            imageUrl?: string;
        };
        InputStream: Record<string, never>;
        Moderation: {
            rejectReasons?: (string)[];
        };
        Play: {
            playUrl?: string;
            protocol?: string;
        };
        Video: {
            classification?: (string)[];
            description?: string;
            expirationDate?: string;
            moderation?: components["schemas"]["Moderation"];
            playLists?: (components["schemas"]["Play"])[];
            size?: number;
            status?: string;
            statusMessage?: string;
            thumbnail?: components["schemas"]["Image"];
            title?: string;
            videoId?: string;
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
    createVideo: {
        parameters: {
            header: {
                "Content-Type": string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateVideoRequest"];
            };
        };
        responses: {
            201: never;
            400: never;
            403: never;
            500: never;
        };
    };
    getVideo: {
        parameters: {
            path: {
                video_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Video"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    uploadVideo: {
        parameters: {
            header: {
                "Content-Length"?: string;
                "Content-Range"?: string;
                "Content-Type": string;
            };
            path: {
                video_id: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["InputStream"];
            };
        };
        responses: {
            200: never;
            400: never;
            404: never;
            409: never;
            411: never;
            416: never;
            500: never;
        };
    };
}
