export interface paths {
    "/category_tree/{category_tree_id}/fetch_item_aspects": {
        get: operations["fetchItemAspects"];
    };
    "/get_default_category_tree_id": {
        get: operations["getDefaultCategoryTreeId"];
    };
    "/category_tree/{category_tree_id}": {
        get: operations["getCategoryTree"];
    };
    "/category_tree/{category_tree_id}/get_category_subtree": {
        get: operations["getCategorySubtree"];
    };
    "/category_tree/{category_tree_id}/get_category_suggestions": {
        get: operations["getCategorySuggestions"];
    };
    "/category_tree/{category_tree_id}/get_item_aspects_for_category": {
        get: operations["getItemAspectsForCategory"];
    };
    "/category_tree/{category_tree_id}/get_compatibility_properties": {
        get: operations["getCompatibilityProperties"];
    };
    "/category_tree/{category_tree_id}/get_compatibility_property_values": {
        get: operations["getCompatibilityPropertyValues"];
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AncestorReference: {
            categoryId?: string;
            categoryName?: string;
            categorySubtreeNodeHref?: string;
            categoryTreeNodeLevel?: number;
        };
        Aspect: {
            aspectConstraint?: components["schemas"]["AspectConstraint"];
            aspectValues?: (components["schemas"]["AspectValue"])[];
            localizedAspectName?: string;
            relevanceIndicator?: components["schemas"]["RelevanceIndicator"];
        };
        AspectConstraint: {
            aspectApplicableTo?: (string)[];
            aspectDataType?: string;
            aspectEnabledForVariations?: boolean;
            aspectFormat?: string;
            aspectMaxLength?: number;
            aspectMode?: string;
            aspectRequired?: boolean;
            aspectUsage?: string;
            expectedRequiredByDate?: string;
            itemToAspectCardinality?: string;
        };
        AspectMetadata: {
            aspects?: (components["schemas"]["Aspect"])[];
        };
        AspectValue: {
            localizedValue?: string;
            valueConstraints?: (components["schemas"]["ValueConstraint"])[];
        };
        BaseCategoryTree: {
            categoryTreeId?: string;
            categoryTreeVersion?: string;
        };
        Category: {
            categoryId?: string;
            categoryName?: string;
        };
        CategoryAspect: {
            category?: components["schemas"]["Category"];
            aspects?: (components["schemas"]["Aspect"])[];
        };
        CategorySubtree: {
            categorySubtreeNode?: components["schemas"]["CategoryTreeNode"];
            categoryTreeId?: string;
            categoryTreeVersion?: string;
        };
        CategorySuggestion: {
            category?: components["schemas"]["Category"];
            categoryTreeNodeAncestors?: (components["schemas"]["AncestorReference"])[];
            categoryTreeNodeLevel?: number;
            relevancy?: string;
        };
        CategorySuggestionResponse: {
            categorySuggestions?: (components["schemas"]["CategorySuggestion"])[];
            categoryTreeId?: string;
            categoryTreeVersion?: string;
        };
        CategoryTree: {
            applicableMarketplaceIds?: (string)[];
            categoryTreeId?: string;
            categoryTreeVersion?: string;
            rootCategoryNode?: components["schemas"]["CategoryTreeNode"];
        };
        CategoryTreeNode: {
            category?: components["schemas"]["Category"];
            categoryTreeNodeLevel?: number;
            childCategoryTreeNodes?: (components["schemas"]["CategoryTreeNode"])[];
            leafCategoryTreeNode?: boolean;
            parentCategoryTreeNodeHref?: string;
        };
        CompatibilityProperty: {
            name?: string;
            localizedName?: string;
        };
        CompatibilityPropertyValue: {
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
        GetCategoriesAspectResponse: {
            categoryTreeId?: string;
            categoryTreeVersion?: string;
            categoryAspects?: (components["schemas"]["CategoryAspect"])[];
        };
        GetCompatibilityMetadataResponse: {
            compatibilityProperties?: (components["schemas"]["CompatibilityProperty"])[];
        };
        GetCompatibilityPropertyValuesResponse: {
            compatibilityPropertyValues?: (components["schemas"]["CompatibilityPropertyValue"])[];
        };
        RelevanceIndicator: {
            searchCount?: number;
        };
        ValueConstraint: {
            applicableForLocalizedAspectName?: string;
            applicableForLocalizedAspectValues?: (string)[];
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
    fetchItemAspects: {
        parameters: {
            path: {
                category_tree_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetCategoriesAspectResponse"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getDefaultCategoryTreeId: {
        parameters: {
            query: {
                marketplace_id: string;
            };
            header?: {
                "Accept-Language"?: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["BaseCategoryTree"];
                };
            };
            204: never;
            400: never;
            500: never;
        };
    };
    getCategoryTree: {
        parameters: {
            path: {
                category_tree_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CategoryTree"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getCategorySubtree: {
        parameters: {
            query: {
                category_id: string;
            };
            path: {
                category_tree_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CategorySubtree"];
                };
            };
            400: never;
            404: never;
            500: never;
        };
    };
    getCategorySuggestions: {
        parameters: {
            query: {
                q: string;
            };
            path: {
                category_tree_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["CategorySuggestionResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getItemAspectsForCategory: {
        parameters: {
            query: {
                category_id: string;
            };
            path: {
                category_tree_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["AspectMetadata"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getCompatibilityProperties: {
        parameters: {
            query: {
                category_id: string;
            };
            path: {
                category_tree_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetCompatibilityMetadataResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
    getCompatibilityPropertyValues: {
        parameters: {
            query: {
                compatibility_property: string;
                category_id: string;
                filter?: string;
            };
            path: {
                category_tree_id: string;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": components["schemas"]["GetCompatibilityPropertyValuesResponse"];
                };
            };
            204: never;
            400: never;
            404: never;
            500: never;
        };
    };
}
