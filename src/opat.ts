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
  .demandCommand(1, "You must select command validate or output.")
  .parseSync();

let result: ValidatorResult;
const schema = "opat-0.1.0.json";

if (fs.existsSync(argv.file)) {
  try {
    const data = yaml.load(fs.readFileSync(argv.file).toString());
    result = validateOPAT(data, schema);
    // Validate OPAT against provided catalog.
    if (result.result && argv.catalogFile && fs.existsSync(argv.catalogFile)) {
      try {
        const catalog = yaml.load(fs.readFileSync(argv.catalogFile).toString());
        result = validateOPATCatalogValues(data, catalog);
      } catch {
        result = {
          result: false,
          message: "Invalid: catalog file is not in YAML format",
        };
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
