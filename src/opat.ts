// src/index.ts

/*
 * Install dependencies command:
 *   npm install
 *
 * Example commands:
 *   npx ts-node src/opat.ts -f tests/examples/valid.yaml # Output: Valid!
 *   npx ts-node src/opat.ts -f tests/examples/invalid.yaml # Output: Invalid: data must have required property 'title'
 *   npx ts-node src/opat.ts -f tests/examples/valid.json # Output: Valid!
 *   npx ts-node src/opat.ts -f tests/examples/invalid.json # Output: Invalid: data must have required property 'title'
 */

import { validateOPAT } from "./validateOPAT";
import yargs from "yargs";
import fs from "fs";
import yaml from "js-yaml";
import { ValidatorResult } from "./ValidatorResult";

const argv = yargs
  .options({
    file: { type: "string", demandOption: true, alias: "f" },
  })
  .parseSync();

let result: ValidatorResult;
const schema =
  "https://github.com/GSA/open-product-accessibility-template/schema/opat.schema.json";

if (fs.existsSync(argv.file)) {
  // Try JSON.
  try {
    const data = JSON.parse(fs.readFileSync(argv.file).toString());
    result = validateOPAT(data, schema);
  } catch {
    // Try YAML.
    try {
      const data = yaml.load(fs.readFileSync(argv.file).toString());
      result = validateOPAT(data, schema);
    } catch {
      result = {
        result: false,
        message: "Invalid: file is not in JSON or YAML format",
      };
    }
  }
} else {
  result = { result: false, message: "Invalid: file does not exist" };
}

if (result.result) {
  console.log(result.message);
} else {
  console.error(result.message);
}
