import { validateCatalog } from "./validateCatalog";

export function createCatalog(
  catalog1: any,
  catalog2: any,
  components: any,
  terms: any,
  title: string,
  lang: string
): any {
  return {
    title: title,
    lang: lang,
    standards: getStandards(catalog1, catalog2),
    chapters: getChapters(catalog1, catalog2),
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

function getChapters(first: any, second: any): any {
  if (first) {
    if (validateCatalogDataFiles(first) && validateCatalogDataFiles(second)) {
      return first.chapters.concat(second.chapters);
    }
  } else {
    if (validateCatalogDataFiles(second)) {
      return second.chapters;
    }
  }
}

function getStandards(first: any, second: any): any {
  if (first) {
    if (validateCatalogDataFiles(first) && validateCatalogDataFiles(second)) {
      return first.standard.concat(second.standard);
    }
  } else {
    if (validateCatalogDataFiles(second)) {
      return second.standard;
    }
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
