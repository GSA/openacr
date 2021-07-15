// src/index.ts

/*
 * Install dependencies command:
 *   npm install
 *
 * Help commands:
 *   npx ts-node src/opat.ts --help
 *   npx ts-node src/opat.ts validate --help
 *
 * Example commands:
 *   npx ts-node src/opat.ts validate -f tests/examples/valid.yaml # Output: Valid!
 *   npx ts-node src/opat.ts validate -f tests/examples/invalid.yaml # Output: Invalid: data must have required property 'title'
 */

import { validateOPAT } from "./validateOPAT";
import yargs from "yargs";
import fs from "fs";
import yaml from "js-yaml";
import { ValidatorResult } from "./ValidatorResult";

const argv = yargs
  .command("validate", "Validate OPAT content", function (yargs) {
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
const schema =
  "https://github.com/GSA/open-product-accessibility-template/schema/opat.schema.json";

if (fs.existsSync(argv.file)) {
  try {
    const data = yaml.load(fs.readFileSync(argv.file).toString());
    result = validateOPAT(data, schema);
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
