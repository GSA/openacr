// src/opat.ts

/*
 * Install dependencies command:
 *   npm install
 *
 * Help commands:
 *   npx ts-node src/opat.ts --help
 *   npx ts-node src/opat.ts validate --help
 *
 * Example commands:
 *   See docs/CLI.md
 */

import { validateOPAT } from "./validateOPAT";
import yargs from "yargs";
import fs from "fs";
import yaml from "js-yaml";
import { ValidatorResult } from "./ValidatorResult";
import { validateOPATCatalogValues } from "./validateOPATCatalogValues";
import { outputOPAT } from "./outputOPAT";

const argv = yargs
  .command("validate", "Validate OPAT content", function (yargs) {
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
  .command("output", "Output OPAT in markdown", function (yargs) {
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
    });
  })
  .demandCommand(1, "You must select command validate or output.")
  .parseSync();

let result: ValidatorResult;
const schema = "openacr-0.1.0.json";

if (fs.existsSync(argv.file)) {
  try {
    const data = yaml.load(fs.readFileSync(argv.file).toString());
    result = validateOPAT(data, schema);
    let catalog: any;
    // Validate OPAT against provided catalog.
    if (result.result && argv.catalogFile && fs.existsSync(argv.catalogFile)) {
      try {
        catalog = yaml.load(fs.readFileSync(argv.catalogFile).toString());
        result = validateOPATCatalogValues(data, catalog);
      } catch {
        result = {
          result: false,
          message: "Invalid: catalog file is not in YAML format",
        };
      }
    }

    // Output OPAT as markdown if command is set to 'output' and is valid.
    if (argv._.includes("output") && result.result) {
      const outputFile = argv.outputFile ?? "output/openacr.markdown";
      const fileExt = outputFile.split(".").pop();
      if (fileExt === "html") {
        result = outputOPAT(
          data,
          catalog,
          outputFile,
          "templates/opat-html-0.1.0.handlebars"
        );
      } else {
        result = outputOPAT(data, catalog, outputFile);
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
