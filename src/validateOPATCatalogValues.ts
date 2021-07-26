// src/validateOPATCatalogValues.ts

import { ValidatorResult } from "./ValidatorResult";
import { validateCatalog } from "./validateCatalog";

export function validateOPATCatalogValues(
  data: any,
  catalog: any
): ValidatorResult {
  const catalogSchema = "opat-catalog-0.1.0.json";
  const validCatalogResult = validateCatalog(catalog, catalogSchema);
  let validationPassed = true;
  const validationMessages = [];

  if (validCatalogResult.result) {
    if (catalog.chapters) {
      const catalogChapters = catalog.chapters;

      for (const catalogChapter of catalogChapters) {
        if (data.chapters[catalogChapter.id].criteria) {
          const dataCriteriaList = data.chapters[catalogChapter.id].criteria;
          for (const dataCriteria of dataCriteriaList) {
            if (
              !checkForNumInCatalogChapters(
                dataCriteria.num,
                catalogChapter.id,
                catalogChapters
              )
            ) {
              validationPassed = false;
              validationMessages.push(
                `criteria num '${dataCriteria.num}' is not included in '${catalogChapter.label}'`
              );
            } else {
              if (dataCriteria.components) {
                const dataComponents = dataCriteria.components;
                if (catalog.components) {
                  for (const dataComponent of dataComponents) {
                    if (
                      !checkForCatalogComponentDefinition(
                        dataComponent.name,
                        catalog.components
                      )
                    ) {
                      validationPassed = false;
                      validationMessages.push(
                        `component name '${dataComponent.name}' in criteria '${dataCriteria.num}' has no definition in catalog '${catalog.title}'`
                      );
                    } else {
                      if (
                        !checkForNameInCatalogComponents(
                          dataComponent.name,
                          dataCriteria.num,
                          catalogChapter.id,
                          catalogChapters
                        )
                      ) {
                        validationPassed = false;
                        validationMessages.push(
                          `component name '${dataComponent.name}' is not supported by criteria '${dataCriteria.num}'`
                        );
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
  } else {
    return {
      result: validationPassed,
      message: "Invalid: " + validationMessages.join(", "),
    };
  }
}

function checkForNumInCatalogChapters(
  num: string,
  id: string,
  chapters: any
): boolean {
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

function checkForNameInCatalogComponents(
  name: string,
  num: string,
  id: string,
  chapters: any
): boolean {
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

function checkForCatalogComponentDefinition(
  name: string,
  components: any
): boolean {
  for (const component of components) {
    if (component.id === name) {
      return true;
    }
  }

  return false;
}
