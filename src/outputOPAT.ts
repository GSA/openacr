import { ValidatorResult } from "./ValidatorResult";
import * as fs from "fs";
import Handlebars from "handlebars";
import path from "path";

export function outputOPAT(
  data: any,
  catalogData: any,
  outputFile: string,
  handlebarTemplate = "templates/opat-markdown-0.1.0.handlebars"
): ValidatorResult {
  try {
    const templateString = fs.readFileSync(handlebarTemplate).toString();
    const template = Handlebars.compile(templateString);

    if (catalogData) {
      data.catalog = catalogData;
    }
    const date = new Date();
    data.now = date.toLocaleDateString();

    const getCatalogChapter = (chapterId: string): any => {
      for (const chapter of catalogData.chapters) {
        if (chapter.id === chapterId) {
          return chapter;
        }
      }
    };

    Handlebars.registerHelper("catalogChapter", getCatalogChapter);

    Handlebars.registerHelper(
      "catalogCriteriaLabel",
      function (chapterId, criteriaNum) {
        for (const chapter of catalogData.chapters) {
          if (chapter.id === chapterId) {
            for (const catalogChapterCriteria of chapter.criteria) {
              if (catalogChapterCriteria.id === criteriaNum) {
                return catalogChapterCriteria.handle;
              }
            }
          }
        }
      }
    );

    Handlebars.registerHelper(
      "catalogCriteriaURL",
      function (chapterId, criteriaNum, url) {
        for (const chapter of catalogData.chapters) {
          if (chapter.id === chapterId) {
            for (const catalogChapterCriteria of chapter.criteria) {
              if (catalogChapterCriteria.id === criteriaNum) {
                return `${url}#${catalogChapterCriteria.alt_id}`;
              }
            }
          }
        }
      }
    );

    Handlebars.registerHelper("catalogComponentLabel", function (componentId) {
      if (catalogData.components) {
        for (const component of catalogData.components) {
          if (component.id === componentId) {
            if (component.label != "") {
              const fileExt = outputFile.split(".").pop();
              if (fileExt === "html") {
                return new Handlebars.SafeString(
                  `<strong>${component.label}</strong>: `
                );
              } else {
                return `**${component.label}**: `;
              }
            }
          }
        }
      }
    });

    Handlebars.registerHelper("levelLabel", function (level) {
      if (catalogData.terms) {
        for (const terms of catalogData.terms) {
          if (terms.id === level) {
            return terms.label;
          }
        }
      }
      // If a level is provided but has no matching terms, provide a default.
      return "Not Applicable";
    });

    Handlebars.registerHelper("standardsIncluded", function (standardChapters) {
      const result = [];
      for (const standardChapter of standardChapters) {
        const catalogChapters = getCatalogChapter(standardChapter);
        result.push(`<li>${catalogChapters.label}</li>`);
      }
      return new Handlebars.SafeString(`<ul>${result.join("")}</ul>`);
    });

    const result = template(data);
    const dir = path.dirname(outputFile);

    if (!fs.existsSync(dir)) {
      return {
        result: false,
        message: `Invalid: output directory '${dir}' does not exist.`,
      };
    }

    fs.writeFile(outputFile, result, function () {
      return {
        result: false,
        message: "Invalid: markdown file could not be generated.",
      };
    });

    return {
      result: true,
      message: `Valid and output generated at ${outputFile}!`,
    };
  } catch {
    return {
      result: false,
      message: "Invalid: template file is invalid.",
    };
  }
}
