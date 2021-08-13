import { validateCatalog } from "./validateCatalog";

export function createCatalog(
  wcag20: any,
  section508: any,
  components: any,
  terms: any
): any {
  return {
    title: getTitle(section508),
    lang: getLang(section508),
    standards: getStandards(wcag20, section508),
    chapters: getChapters(wcag20, section508),
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
  if (validateCatalogDataFiles(first) && validateCatalogDataFiles(second)) {
    return first.chapters.concat(second.chapters);
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
  const catalogSchema = "opat-catalog-0.1.0.json";
  const validCatalogResult = validateCatalog(catalog, catalogSchema);

  if (!validCatalogResult.result) {
    return false;
  }
  return true;
}
