"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = __importDefault(require("../../index.js"));
class Taxonomy extends index_js_1.default {
    get basePath() {
        return '/commerce/taxonomy/v1';
    }
    getDefaultCategoryTreeId(marketplaceId) {
        return this.get(`/get_default_category_tree_id`, {
            params: {
                marketplace_id: marketplaceId
            }
        });
    }
    getCategoryTree(categoryTreeId) {
        const cId = encodeURIComponent(categoryTreeId);
        return this.get(`/category_tree/${cId}`);
    }
    getCategorySubtree(categoryTreeId, categoryId) {
        categoryTreeId = encodeURIComponent(categoryTreeId);
        return this.get(`/category_tree/${categoryTreeId}/get_category_subtree`, {
            params: {
                category_id: categoryId
            }
        });
    }
    getCategorySuggestions(categoryTreeId, q) {
        return this.get(`/category_tree/${categoryTreeId}/get_category_suggestions`, {
            params: {
                q
            }
        });
    }
    getItemAspectsForCategory(categoryTreeId, categoryId) {
        categoryTreeId = encodeURIComponent(categoryTreeId);
        return this.get(`/category_tree/${categoryTreeId}/get_item_aspects_for_category`, {
            params: {
                category_id: categoryId
            }
        });
    }
    getCompatibilityProperties(categoryTreeId, categoryId) {
        categoryTreeId = encodeURIComponent(categoryTreeId);
        return this.get(`/category_tree/${categoryTreeId}/get_compatibility_properties`, {
            params: {
                category_id: categoryId
            }
        });
    }
    getCompatibilityPropertyValues(categoryTreeId, categoryId, compatibilityProperty) {
        categoryTreeId = encodeURIComponent(categoryTreeId);
        return this.get(`/category_tree/${categoryTreeId}/get_compatibility_property_values`, {
            params: {
                category_id: categoryId,
                compatibility_property: compatibilityProperty
            }
        });
    }
    fetchItemAspects(categoryTreeId) {
        categoryTreeId = encodeURIComponent(categoryTreeId);
        return this.get(`/category_tree/${categoryTreeId}/fetch_item_aspects`, {
            responseType: 'arraybuffer'
        });
    }
}
Taxonomy.id = 'Taxonomy';
exports.default = Taxonomy;
