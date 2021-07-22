// src/validateOPATCatalogValues.ts

import { ValidatorResult } from "./ValidatorResult";
import { validateCatalog } from "./validateCatalog";

export function validateOPATCatalogValues(
  data: any,
  catalog: any
): ValidatorResult {
  const catalogSchema = "opat-catalog-0.1.0.json";
  const validCatalogResult = validateCatalog(catalog, catalogSchema);

  if (validCatalogResult.result) {
    const successCriteriaLevelA = data.chapters.success_criteria_level_a;

    for (const dataCriteria of successCriteriaLevelA.criteria) {
      if (
        !checkForNumInCatalogChapters(
          dataCriteria.num,
          "success_criteria_level_a",
          catalog
        )
      ) {
        return {
          result: false,
          message: `Invalid: criteria num '${
            dataCriteria.num
          }' is not included in '${getCatalogChapterLabel(
            "success_criteria_level_a",
            catalog
          )}'`,
        };
      }
    }
  }

  return validCatalogResult;
}

function getCatalogChapterLabel(id: string, catalog: any): string {
  const chapters = catalog.chapters;

  for (const chapter of chapters) {
    if (chapter.id === id) {
      return chapter.label;
    }
  }

  return "";
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
