// src/openacr.ts

/*
 * Install dependencies command:
 *   npm install
 *
 * Help commands:
 *   npx ts-node src/openacr.ts --help
 *   npx ts-node src/openacr.ts validate --help
 *
 * Example commands:
 *   See docs/CLI.md
 */

import { validateOpenACR } from "./validateOpenACR";
import yargs from "yargs";
import fs from "fs";
import yaml from "js-yaml";
import { ValidatorResult } from "./ValidatorResult";
import { validateOpenACRCatalogValues } from "./validateOpenACRCatalogValues";
import { outputOpenACR } from "./outputOpenACR";

const argv = yargs
  .command("validate", "Validate OpenACR content", function (yargs) {
    return yargs.options({
      file: {
        type: "string",
        description: "Content filename",
        demandOption: true,
        alias: "f",
      },
      catalogFile: {
        type: "string",
        description: "Catalog filename",
        demandOption: false,
        alias: "c",
      },
    });
  })
  .command("output", "Output OpenACR in markdown", function (yargs) {
    return yargs.options({
      file: {
        type: "string",
        description: "Content filename",
        demandOption: true,
        alias: "f",
      },
      catalogFile: {
        type: "string",
        description: "Catalog filename",
        demandOption: false,
        alias: "c",
      },
      outputFile: {
        type: "string",
        description: "Output filename",
        demandOption: false,
        alias: "o",
      },
      templateFile: {
        type: "string",
        description: "Handlebar template filename",
        demandOption: false,
        alias: "t",
      },
    });
  })
  .demandCommand(1, "You must select command validate or output.")
  .parseSync();

let result: ValidatorResult;
const schema = "openacr-0.1.0.json";

if (fs.existsSync(argv.file)) {
  try {
    const data = yaml.load(fs.readFileSync(argv.file).toString());
    result = validateOpenACR(data, schema);
    let catalog: any;
    // Validate OpenACR against provided catalog.
    if (result.result && argv.catalogFile && fs.existsSync(argv.catalogFile)) {
      try {
        catalog = yaml.load(fs.readFileSync(argv.catalogFile).toString());
        result = validateOpenACRCatalogValues(data, catalog);
      } catch {
        result = {
          result: false,
          message: "Invalid: catalog file is not in YAML format",
        };
      }
    }

    // Output OpenACR as markdown if command is set to 'output' and is valid.
    if (argv._.includes("output") && result.result) {
      const outputFile = argv.outputFile ?? "output/openacr.markdown";
      const fileExt = outputFile.split(".").pop();
      if (fileExt === "html") {
        let templateFile = "templates/openacr-html-0.1.0.handlebars";
        let withStyles = true;
        if (argv.templateFile) {
          templateFile = argv.templateFile;
          withStyles = false;
        }
        result = outputOpenACR(
          data,
          catalog,
          outputFile,
          withStyles,
          templateFile
        );
      } else {
        const templateFile =
          argv.templateFile ?? "templates/openacr-markdown-0.1.0.handlebars";
        result = outputOpenACR(data, catalog, outputFile, false, templateFile);
      }
    }
  } catch {
    result = {
      result: false,
      message: "Invalid: file is not in YAML format",
    };
  }
} else {
  result = { result: false, message: "Invalid: file does not exist" };
}

if (result.result) {
  console.log(result.message);
} else {
  console.error(result.message);
}
