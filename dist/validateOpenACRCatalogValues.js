"use strict";
// src/validateOpenACRCatalogValues.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOpenACRCatalogValues = void 0;
const validateCatalog_1 = require("./validateCatalog");
function validateOpenACRCatalogValues(data, catalog) {
    const catalogSchema = "openacr-catalog-0.1.0.json";
    const validCatalogResult = validateCatalog_1.validateCatalog(catalog, catalogSchema);
    let validationPassed = true;
    const validationMessages = [];
    if (validCatalogResult.result) {
        if (catalog.chapters) {
            const catalogChapters = catalog.chapters;
            for (const catalogChapter of catalogChapters) {
                if (data.chapters[catalogChapter.id] &&
                    data.chapters[catalogChapter.id].criteria) {
                    const dataCriteriaList = data.chapters[catalogChapter.id].criteria;
                    for (const dataCriteria of dataCriteriaList) {
                        if (!checkForNumInCatalogChapters(dataCriteria.num, catalogChapter.id, catalogChapters)) {
                            validationPassed = false;
                            validationMessages.push(`criteria '${dataCriteria.num}' is not included in '${catalogChapter.label}'`);
                        }
                        else {
                            // Criteria is valid.
                            if (dataCriteria.components) {
                                const dataComponents = dataCriteria.components;
                                if (catalog.components) {
                                    for (const dataComponent of dataComponents) {
                                        if (!checkForCatalogComponentDefinition(dataComponent.name, catalog.components)) {
                                            validationPassed = false;
                                            validationMessages.push(`component '${dataComponent.name}' in criteria '${dataCriteria.num}' has no definition in catalog '${catalog.title}'`);
                                        }
                                        else {
                                            if (!checkForNameInCatalogComponents(dataComponent.name, dataCriteria.num, catalogChapter.id, catalogChapters)) {
                                                validationPassed = false;
                                                validationMessages.push(`component '${dataComponent.name}' is not supported by criteria '${dataCriteria.num}'`);
                                            }
                                            else {
                                                // Component is valid.
                                                if (catalog.terms) {
                                                    if (dataComponent.adherence) {
                                                        if (dataComponent.adherence.level &&
                                                            !checkForCatalogTermDefinition(dataComponent.adherence.level, catalog.terms)) {
                                                            validationPassed = false;
                                                            validationMessages.push(`term '${dataComponent.adherence.level}' in criteria '${dataCriteria.num}' has no definition in catalog '${catalog.title}'`);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (validationPassed) {
        return validCatalogResult;
    }
    else {
        return {
            result: validationPassed,
            message: "Invalid: " + validationMessages.join(", "),
        };
    }
}
exports.validateOpenACRCatalogValues = validateOpenACRCatalogValues;
function checkForNumInCatalogChapters(num, id, chapters) {
    for (const chapter of chapters) {
        if (chapter.id === id) {
            for (const catalogChapterCriteria of chapter.criteria) {
                if (catalogChapterCriteria.id === num) {
                    return true;
                }
            }
        }
    }
    return false;
}
function checkForNameInCatalogComponents(name, num, id, chapters) {
    for (const chapter of chapters) {
        if (chapter.id === id) {
            for (const catalogChapterCriteria of chapter.criteria) {
                if (catalogChapterCriteria.id === num) {
                    if (catalogChapterCriteria.components.includes(name)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}
function checkForCatalogComponentDefinition(name, components) {
    for (const component of components) {
        if (component.id === name) {
            return true;
        }
    }
    return false;
}
function checkForCatalogTermDefinition(name, terms) {
    for (const term of terms) {
        if (term.id === name) {
            return true;
        }
    }
    return false;
}
