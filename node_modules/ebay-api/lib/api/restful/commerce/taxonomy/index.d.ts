/// <reference types="node" />
import { operations } from '../../../../types/restful/specs/commerce_taxonomy_v1_oas3.js';
import Restful, { OpenApi } from '../../index.js';
export default class Taxonomy extends Restful implements OpenApi<operations> {
    static id: string;
    get basePath(): string;
    getDefaultCategoryTreeId(marketplaceId: string): Promise<any>;
    getCategoryTree(categoryTreeId: string): Promise<any>;
    getCategorySubtree(categoryTreeId: string, categoryId: string): Promise<any>;
    getCategorySuggestions(categoryTreeId: string, q: string): Promise<any>;
    getItemAspectsForCategory(categoryTreeId: string, categoryId: string): Promise<any>;
    getCompatibilityProperties(categoryTreeId: string, categoryId: string): Promise<any>;
    getCompatibilityPropertyValues(categoryTreeId: string, categoryId: string, compatibilityProperty: string): Promise<any>;
    fetchItemAspects(categoryTreeId: string): Promise<Buffer>;
}
