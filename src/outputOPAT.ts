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
