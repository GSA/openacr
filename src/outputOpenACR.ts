import { ValidatorResult } from "./ValidatorResult";
import * as fs from "fs";
import * as fse from "fs-extra";
import path from "path";
import { createOutput } from "./createOutput";

export function outputOpenACR(
  data: any,
  catalogData: any,
  outputFile: string,
  withStyleFiles = false,
  handlebarTemplate = "templates/openacr-markdown-0.1.0.handlebars"
): ValidatorResult {
  try {
    const templateString = fs.readFileSync(handlebarTemplate).toString();
    const fileExt = outputFile.split(".").pop();
    const dir = path.dirname(outputFile);

    if (!fs.existsSync(dir)) {
      return {
        result: false,
        message: `Invalid: output directory '${dir}' does not exist.`,
      };
    }

    const result = createOutput(data, catalogData, fileExt, templateString);

    fs.writeFile(outputFile, result, function () {
      return {
        result: false,
        message: "Invalid: markdown file could not be generated.",
      };
    });

    if (withStyleFiles) {
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
    }

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
