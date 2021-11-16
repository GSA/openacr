import { ValidatorResult } from "./ValidatorResult";
import * as fs from "fs";
import * as fse from "fs-extra";
import Handlebars from "handlebars";
import path from "path";
import spdxLicenseList from "spdx-license-list";

export function outputOpenACR(
  data: any,
  catalogData: any,
  outputFile: string,
  handlebarTemplate = "templates/openacr-markdown-0.1.0.handlebars"
): ValidatorResult {
  try {
    const templateString = fs.readFileSync(handlebarTemplate).toString();
    const template = Handlebars.compile(templateString);
    const fileExt = outputFile.split(".").pop();

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

    Handlebars.registerHelper("license", function () {
      if (data.license) {
        if (fileExt === "html") {
          return new Handlebars.SafeString(
            `<a href="${spdxLicenseList[data.license].url}">${
              spdxLicenseList[data.license].name
            }</a>`
          );
        } else {
          return `[${spdxLicenseList[data.license].name}](${
            spdxLicenseList[data.license].url
          })`;
        }
      } else {
        if (fileExt === "html") {
          return new Handlebars.SafeString(
            `<a href="${spdxLicenseList["CC-BY-4.0"].url}">${spdxLicenseList["CC-BY-4.0"].name}</a>`
          );
        } else {
          return `[${spdxLicenseList["CC-BY-4.0"].name}](${spdxLicenseList["CC-BY-4.0"].url})`;
        }
      }
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

    // Copy CSS stylesheets to the output directory.
    fs.copyFile("templates/openacr.css", `${dir}/openacr.css`, (err) => {
      return {
        result: false,
        message: "Invalid: openacr.css file could not be copied.",
      };
    });
    fs.copyFile("templates/custom.css", `${dir}/custom.css`, (err) => {
      return {
        result: false,
        message: "Invalid: custom.css file could not be copied.",
      };
    });
    // Copy USWDS design system files to the output directory.
    fse.copy("node_modules/uswds/dist", `${dir}/uswds`, (err) => {
      return {
        result: false,
        message: "Invalid: USWDS directory could not be copied.",
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
