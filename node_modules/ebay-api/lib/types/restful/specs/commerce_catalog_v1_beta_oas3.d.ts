export interface paths {
    "/change_request/{change_request_id}": {
        get: operations["getChangeRequest"];
    };
    "/change_request": {
        get: operations["getChangeRequests"];
        post: operations["createChangeRequest"];
    };
    "/product/{epid}": {
        get: operations["getProduct"];
    };
    "/product_summary/search": {
        get: operations["search"];
    };
    "/get_product_metadata": {
        get: operations["getProductMetadata"];
    };
    "/get_product_metadata_for_categories": {
        get: operations["getProductMetadataForCategories"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Aspect: {
            localizedName?: string;
            localizedValues?: (string)[];
        };
        AspectDistribution: {
            aspectValueDistributions?: (components["schemas"]["AspectValueDistribution"])[];
            localizedAspectName?: string;
        };
        AspectValueDistribution: {
            localizedAspectValue?: string;
            matchCount?: number;
            refinementHref?: string;
        };
        CategoryAspect: {
            aspectHelpText?: string;
            constraint?: components["schemas"]["ProductAspectConstraint"];
            name?: string;
            values?: (components["schemas"]["CategoryAspectValue"])[];
        };
        CategoryAspectValue: {
            value?: string;
            valueConstraints?: (components["schemas"]["ValueConstraint"])[];
        };
        ChangeRequest: {
            changeRequestId?: string;
            changeRequestStatus?: string;
            changeRequestType?: string;
            creationDate?: string;
            expectedCompletionDate?: string;
            processResolution?: components["schemas"]["ProcessResolution"];
            processStatusMessage?: string;
            reasonForChangeRequest?: string;
            referenceId?: string;
            referenceType?: string;
            resolutionDate?: string;
            suggestedProduct?: components["schemas"]["SuggestedProduct"];
        };
        ConflictingProduct: {
            conflictCode?: string;
            differentiatingAspects?: (components["schemas"]["ProductAspect"])[];
            epid?: string;
            reason?: string;
        };
        Correction: {
            aspectValues?: components["schemas"]["CorrectionAspectValues"];
            correctionCode?: string;
            productAttribute?: components["schemas"]["CorrectionProductAttribute"];
            reason?: string;
        };
        CorrectionAspectValue: {
            newValue?: string;
            value?: string;
        };
        CorrectionAspectValues: {
            aspectName?: string;
            values?: (components["schemas"]["CorrectionAspectValue"])[];
        };
        CorrectionProductAttribute: {
            attributeName?: string;
            newValue?: string;
            value?: string;
        };
        CreateChangeRequestPayload: {
            changeRequestType?: string;
            reasonForChangeRequest?: string;
            referenceId?: string;
            referenceType?: string;
            suggestedProduct?: components["schemas"]["SuggestedProduct"];
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
        GetChangeRequestsResponse: {
            changeRequests?: (components["schemas"]["ChangeRequest"])[];
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            total?: number;
        };
        Image: {
            height?: number;
            imageUrl?: string;
            width?: number;
        };
        ProcessResolution: {
            conflictingProducts?: (components["schemas"]["ConflictingProduct"])[];
            corrections?: (components["schemas"]["Correction"])[];
            epid?: string;
            productHref?: string;
            violations?: (components["schemas"]["Violation"])[];
        };
        Product: {
            additionalImages?: (components["schemas"]["Image"])[];
            aspects?: (components["schemas"]["Aspect"])[];
            brand?: string;
            description?: string;
            ean?: (string)[];
            epid?: string;
            gtin?: (string)[];
            image?: components["schemas"]["Image"];
            isbn?: (string)[];
            mpn?: (string)[];
            otherApplicableCategoryIds?: (string)[];
            primaryCategoryId?: string;
            productWebUrl?: string;
            title?: string;
            upc?: (string)[];
            version?: string;
        };
        ProductAspect: {
            name?: string;
            values?: (string)[];
        };
        ProductAspectConstraint: {
            aspectDataType?: string;
            aspectFormat?: string;
            aspectMode?: string;
            aspectRequired?: boolean;
            importance?: string;
            productToAspectCardinality?: string;
        };
        ProductAspectValue: {
            value?: string;
            valueConstraints?: (components["schemas"]["ValueConstraint"])[];
        };
        ProductIdentifier: {
            constraint?: components["schemas"]["ProductIdentifierConstraint"];
            values?: (string)[];
        };
        ProductIdentifierConstraint: {
            importance?: string;
            mode?: string;
            required?: boolean;
        };
        ProductIdentifierForProductMetadata: {
            constraint?: components["schemas"]["ProductIdentifierConstraint"];
            valueAssociatedWithProduct?: string;
            values?: (string)[];
        };
        ProductMetadata: {
            aspects?: (components["schemas"]["ProductMetadataAspect"])[];
            brand?: components["schemas"]["ProductIdentifierForProductMetadata"];
            ean?: components["schemas"]["ProductIdentifierForProductMetadata"];
            isbn?: components["schemas"]["ProductIdentifierForProductMetadata"];
            mpn?: components["schemas"]["ProductIdentifierForProductMetadata"];
            upc?: components["schemas"]["ProductIdentifierForProductMetadata"];
        };
        ProductMetadataAspect: {
            aspectHelpText?: string;
            constraint?: components["schemas"]["ProductAspectConstraint"];
            droppable?: boolean;
            name?: string;
            values?: (components["schemas"]["ProductAspectValue"])[];
            valuesAssociatedWithProduct?: (string)[];
        };
        ProductMetadataForCategories: {
            aspects?: (components["schemas"]["CategoryAspect"])[];
            brand?: components["schemas"]["ProductIdentifier"];
            ean?: components["schemas"]["ProductIdentifier"];
            isbn?: components["schemas"]["ProductIdentifier"];
            mpn?: components["schemas"]["ProductIdentifier"];
            upc?: components["schemas"]["ProductIdentifier"];
        };
        ProductSearchResponse: {
            href?: string;
            limit?: number;
            next?: string;
            offset?: number;
            prev?: string;
            productSummaries?: (components["schemas"]["ProductSummary"])[];
            refinement?: components["schemas"]["Refinement"];
            total?: number;
        };
        ProductSummary: {
            additionalImages?: (components["schemas"]["Image"])[];
            aspects?: (components["schemas"]["Aspect"])[];
            brand?: string;
            ean?: (string)[];
            epid?: string;
            gtin?: (string)[];
            image?: components["schemas"]["Image"];
            isbn?: (string)[];
            mpn?: (string)[];
            productHref?: string;
            productWebUrl?: string;
            title?: string;
            upc?: (string)[];
        };
        Refinement: {
            aspectDistributions?: (components["schemas"]["AspectDistribution"])[];
            dominantCategoryId?: string;
        };
        SuggestedProduct: {
            additionalImageUrls?: (string)[];
            aspects?: (components["schemas"]["ProductAspect"])[];
            brand?: string;
            description?: string;
            ean?: (string)[];
            epid?: string;
            imageUrl?: string;
            isbn?: (string)[];
            mpn?: (string)[];
            otherApplicableCategoryIds?: (string)[];
            primaryCategoryId?: string;
            title?: string;
            upc?: (string)[];
            version?: string;
        };
        ValueConstraint: {
            applicableForAspectName?: string;
            applicableForAspectValues?: (string)[];
        };
        Violation: {
            aspectsValues?: components["schemas"]["ViolationAspectValues"];
            productAttribute?: components["schemas"]["ViolationProductAttribute"];
            reason?: string;
            violationCode?: string;
        };
        ViolationAspectValues: {
            aspectName?: string;
            values?: (string)[];
        };
        ViolationProductAttribute: {
            name?: string;
            values?: (string)[];
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
    getChangeRequest: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                "Accept-Language"?: string;
            };
            path: {
                change_request_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ChangeRequest"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    getChangeRequests: {
        parameters: {
            query?: {
                filter?: string;
                limit?: string;
                offset?: string;
            };
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                "Accept-Language"?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetChangeRequestsResponse"];
                };
            };
            204: never;
            400: never;
            403: never;
            500: never;
        };
    };
    createChangeRequest: {
        parameters: {
            header: {
                "X-EBAY-C-MARKETPLACE-ID": string;
                "Accept-Language"?: string;
            };
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateChangeRequestPayload"];
            };
        };
        responses: {
            202: never;
            400: never;
            403: never;
            500: never;
        };
    };
    getProduct: {
        parameters: {
            path: {
                epid: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["Product"];
                };
            };
            400: never;
            403: never;
            404: never;
            500: never;
        };
    };
    search: {
        parameters: {
            query?: {
                aspect_filter?: string;
                category_ids?: string;
                fieldgroups?: string;
                gtin?: string;
                limit?: string;
                mpn?: string;
                offset?: string;
                q?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ProductSearchResponse"];
                };
            };
            204: never;
            400: never;
            403: never;
            500: never;
        };
    };
    getProductMetadata: {
        parameters: {
            query: {
                epid: string;
                other_applicable_category_ids?: string;
                primary_category_id?: string;
            };
            header: {
                "Accept-Language"?: string;
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ProductMetadata"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    getProductMetadataForCategories: {
        parameters: {
            query: {
                other_applicable_category_ids?: string;
                primary_category_id: string;
            };
            header: {
                "Accept-Language"?: string;
                "X-EBAY-C-MARKETPLACE-ID": string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["ProductMetadataForCategories"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
}
