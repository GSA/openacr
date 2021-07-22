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
    const catalogChapters = catalog.chapters;

    for (const catalogChapter of catalogChapters) {
      if (data.chapters[catalogChapter.id].criteria) {
        const dataCriteriaList = data.chapters[catalogChapter.id].criteria;
        for (const dataCriteria of dataCriteriaList) {
          if (
            !checkForNumInCatalogChapters(
              dataCriteria.num,
              catalogChapter.id,
              catalog
            )
          ) {
            validationPassed = false;
            validationMessages.push(
              `criteria num '${dataCriteria.num}' is not included in '${catalogChapter.label}'`
            );
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
  catalog: any
): boolean {
  const chapters = catalog.chapters;

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
