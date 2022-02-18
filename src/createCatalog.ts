import { validateCatalog } from "./validateCatalog";

export function createCatalog(
  catalog1: any,
  catalog2: any,
  components: any,
  terms: any,
  merge = false
): any {
  return {
    title: getTitle(catalog2),
    lang: getLang(catalog2),
    standards: getStandards(catalog1, catalog2),
    chapters: getChapters(catalog1, catalog2, merge),
    components: getComponents(components),
    terms: getTerms(terms),
  };
}

function getTerms(terms: any): any {
  if (validateCatalogDataFiles(terms)) {
    return terms.terms;
  }
}

function getComponents(components: any): any {
  if (validateCatalogDataFiles(components)) {
    return components.components;
  }
}

function sortCriteria(firstCriteria: any, secondCriteria: any) {
  if (firstCriteria.id < secondCriteria.id) {
    return -1;
  }
  if (firstCriteria.id > secondCriteria.id) {
    return 1;
  }
  return 0;
}

function getChapters(first: any, second: any, merge: boolean): any {
  if (validateCatalogDataFiles(first) && validateCatalogDataFiles(second)) {
    if (merge) {
      first.chapters[0].criteria = first.chapters[0].criteria
        .concat(second.chapters[0].criteria)
        .sort(sortCriteria);
      first.chapters[1].criteria = first.chapters[1].criteria
        .concat(second.chapters[1].criteria)
        .sort(sortCriteria);
      first.chapters[2].criteria = first.chapters[2].criteria
        .concat(second.chapters[2].criteria)
        .sort(sortCriteria);
      return first.chapters;
    } else {
      return first.chapters.concat(second.chapters);
    }
  }
}

function getStandards(first: any, second: any): any {
  if (validateCatalogDataFiles(first) && validateCatalogDataFiles(second)) {
    return first.standard.concat(second.standard);
  }
}

function getTitle(data: any): any {
  if (validateCatalogDataFiles(data)) {
    return data.title;
  }
}

function getLang(data: any): any {
  if (validateCatalogDataFiles(data)) {
    return data.lang;
  }
}

function validateCatalogDataFiles(catalog: any): boolean {
  const catalogSchema = "openacr-catalog-0.1.0.json";
  const validCatalogResult = validateCatalog(catalog, catalogSchema);

  if (!validCatalogResult.result) {
    return false;
  }
  return true;
}
