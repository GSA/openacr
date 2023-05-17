"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalog = void 0;
const validateCatalog_1 = require("./validateCatalog");
function createCatalog(catalog1, catalog2, components, terms, title, lang) {
    return {
        title: title,
        lang: lang,
        standards: getStandards(catalog1, catalog2),
        chapters: getChapters(catalog1, catalog2),
        components: getComponents(components),
        terms: getTerms(terms),
    };
}
exports.createCatalog = createCatalog;
function getTerms(terms) {
    if (validateCatalogDataFiles(terms)) {
        return terms.terms;
    }
}
function getComponents(components) {
    if (validateCatalogDataFiles(components)) {
        return components.components;
    }
}
function getChapters(first, second) {
    if (first) {
        if (validateCatalogDataFiles(first) && validateCatalogDataFiles(second)) {
            return first.chapters.concat(second.chapters);
        }
    }
    else {
        if (validateCatalogDataFiles(second)) {
            return second.chapters;
        }
    }
}
function getStandards(first, second) {
    if (first) {
        if (validateCatalogDataFiles(first) && validateCatalogDataFiles(second)) {
            return first.standard.concat(second.standard);
        }
    }
    else {
        if (validateCatalogDataFiles(second)) {
            return second.standard;
        }
    }
}
function validateCatalogDataFiles(catalog) {
    const catalogSchema = "openacr-catalog-0.1.0.json";
    const validCatalogResult = validateCatalog_1.validateCatalog(catalog, catalogSchema);
    if (!validCatalogResult.result) {
        return false;
    }
    return true;
}
