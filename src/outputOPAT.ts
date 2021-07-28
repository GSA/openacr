import { ValidatorResult } from "./ValidatorResult";
import * as fs from "fs";
import Handlebars from "handlebars";

export function outputOPAT(
  data: any,
  catalogData: any,
  outputFile: string
): ValidatorResult {
  try {
    const templateString = fs
      .readFileSync("templates/opat-0.1.0.handlebars")
      .toString();
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
          /* istanbul ignore else */
          if (chapter.id === chapterId) {
            for (const catalogChapterCriteria of chapter.criteria) {
              if (catalogChapterCriteria.id === criteriaNum) {
                return catalogChapterCriteria.label;
              }
            }
          }
        }
      }
    );

    Handlebars.registerHelper("catalogComponentLabel", function (componentId) {
      for (const component of catalogData.components) {
        if (component.id === componentId) {
          return component.label;
        }
      }
    });

    Handlebars.registerHelper("levelLabel", function (level) {
      let label = "";
      switch (level) {
        case "supports":
          label = "Supports";
          break;
        case "partially-supports":
          label = "Partially Supports";
          break;
        case "does-not-support":
          label = "Does Not Support";
          break;
        case "not-applicable":
          label = "Not Applicable";
          break;
        case "not-evaluated":
          label = "Not Evaluated";
          break;
      }
      return label;
    });

    const result = template(data);

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
