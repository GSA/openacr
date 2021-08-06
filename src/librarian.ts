// src/librarian.ts

/*
 * Install dependencies command:
 *   npm install
 *
 * Help commands:
 *   npx ts-node src/librarian.ts --help
 *
 * Example commands:
 *   See docs/Librarian.md
 */

import yargs from "yargs";
import readline from "readline";
import yaml from "js-yaml";
import { validateCatalog } from "./validateCatalog";
import fs from "fs";

const argv = yargs
  .options({
    catalog: {
      type: "string",
      description:
        "Select which VPAT 2.4 catalog to rebuild: WCAG, 508, EU, INT",
      demandOption: true,
      alias: "c",
    },
  })
  .parseSync();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
if (argv.catalog) {
  try {
    const catalog = argv.catalog;

    // Load data files.
    const wcag20 = yaml.load(
      fs.readFileSync("./catalog/data/wcag-2.0.yaml").toString()
    );
    const section508 = yaml.load(
      fs.readFileSync("./catalog/data/508.yaml").toString()
    );
    const components = yaml.load(
      fs.readFileSync("./catalog/data/components.yaml").toString()
    );
    const terms = yaml.load(
      fs.readFileSync("./catalog/data/terms.yaml").toString()
    );

    switch (catalog) {
      case "WCAG":
      case "EU":
      case "INT":
        console.warn(catalog + " is currently not supported.");
        break;

      case "508":
        console.log(
          "Warning: This will rebuild the following catalog: " + catalog
        );
        rl.question(
          "Confirm rebuild of " + catalog + " catalog (y): ",
          (answer) => {
            answer = answer || "y";

            if (answer === "y") {
              console.log("Rebuilding...");

              let combined = getTitle(section508);

              console.log(combined);
            } else {
              console.log("Aborting...");
            }
            rl.close();
          }
        );
        break;

      default:
        console.error("Invalid: " + catalog + " is not an available option.");
        break;
    }
  } catch (e) {
    console.error("Invalid: data files cannot be read. Error: " + e.message);
    rl.close();
  }
}

function getTitle(data: any): string {
  return `VPAT® 2.4 edition ${data.title}`;
}

function validateCatalogDataFiles(catalog: any): boolean {
  const catalogSchema = "opat-catalog-0.1.0.json";
  const validCatalogResult = validateCatalog(catalog, catalogSchema);

  return validCatalogResult.result;
}
