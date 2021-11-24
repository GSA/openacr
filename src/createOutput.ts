import Handlebars from "handlebars";
import spdxLicenseList from "spdx-license-list";

export function createOutput(
  data: any,
  catalogData: any,
  templateType: any,
  templateString: string
): string {
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
            if (templateType === "html") {
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
      if (templateType === "html") {
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
      if (templateType === "html") {
        return new Handlebars.SafeString(
          `<a href="${spdxLicenseList["CC-BY-4.0"].url}">${spdxLicenseList["CC-BY-4.0"].name}</a>`
        );
      } else {
        return `[${spdxLicenseList["CC-BY-4.0"].name}](${spdxLicenseList["CC-BY-4.0"].url})`;
      }
    }
  });

  return template(data);
}
