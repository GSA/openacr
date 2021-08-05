import { ValidatorResult } from "./ValidatorResult";
import * as fs from "fs";
import Handlebars from "handlebars";
import path from "path";

export function outputOPAT(
  data: any,
  catalogData: any,
  outputFile: string,
  handlebarTemplate = "templates/opat-0.1.0.handlebars"
): ValidatorResult {
  try {
    const templateString = fs.readFileSync(handlebarTemplate).toString();
    const template = Handlebars.compile(templateString);

    if (catalogData) {
      data.catalog = catalogData;
    }
    const date = new Date();
    data.now = date.toLocaleDateString();

    Handlebars.registerHelper("chapterOrTableTitle", function (chapter) {
      if (chapter.order < 4) return "Table";
      else return "Chapter";
    });

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

    Handlebars.registerHelper("catalogComponentLabel", function (componentId) {
      if (catalogData.components) {
        for (const component of catalogData.components) {
          if (component.id === componentId) {
            if (component.label != "") {
              return "**" + component.label + "**: ";
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
      return "Not Applicable";
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
