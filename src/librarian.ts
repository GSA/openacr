// src/librarian.ts

/*
 * Install dependencies command:
 *   npm install
 *
 * Help commands:
 *   npx ts-node src/librarian.ts --help
 *   npx ts-node src/librarian.ts validate --help
 *
 * Example commands:
 *   npx ts-node src/librarian.ts validate -f catalog/wcag2-catalog.yaml # Output: Valid!
 */

import yargs from "yargs";
import fs from "fs";
import yaml from "js-yaml";
import { ValidatorResult } from "./ValidatorResult";
import { validateCatalog } from "./validateCatalog";

const argv = yargs
  .command("validate", "Validate catalogs", function (yargs) {
    return yargs.options({
      file: {
        type: "string",
        description: "Content filename",
        demandOption: true,
        alias: "f",
      },
    });
  })
  .demandCommand(1, "You must select command validate or output.")
  .parseSync();

let result: ValidatorResult;
const schema = "opat-catalog-0.1.0.json";

if (fs.existsSync(argv.file)) {
  try {
    const data = yaml.load(fs.readFileSync(argv.file).toString());
    result = validateCatalog(data, schema);
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
