import { validateCatalog } from "./validateCatalog";

export function createCatalog(
  catalogs: any,
  components: any,
  terms: any,
  title: string,
  lang: string
): any {
  return {
    title: title,
    lang: lang,
    standards: getStandards(catalogs),
    chapters: getChapters(catalogs),
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

function getChapters(catalogs: any): any {
  let chapters: string[] = [];
  for(var index in catalogs)  { 
    if (!validateCatalogDataFiles(catalogs[index])) return;
    chapters = chapters.concat(catalogs[index].chapters);
    // console.dir(catalogs[index].chapters);
  }
  return chapters;
}

function getStandards(catalogs: any): any {
  let standard: string[] = [];
  for(var index in catalogs)  { 
    if (!validateCatalogDataFiles(catalogs[index])) return;
    standard = standard.concat(catalogs[index].standard);
  }
  return standard;
}

function validateCatalogDataFiles(catalog: any): boolean {
  const catalogSchema = "openacr-catalog-0.1.0.json";
  const validCatalogResult = validateCatalog(catalog, catalogSchema);

  if (!validCatalogResult.result) {
    return false;
  }
  return true;
}
