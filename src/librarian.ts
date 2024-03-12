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
import yaml from "js-yaml";
import fs from "fs";
import { createCatalog } from "./createCatalog";

const argv = yargs
  .options({
    catalog: {
      type: "string",
      description:
        "Select which VPAT 2.5 catalog to rebuild: WCAG, 508, WCAG21-508, WCAG22-508, EU, INT",
      demandOption: true,
      alias: "c",
    },
  })
  .parseSync();

if (argv.catalog) {
  const catalog = argv.catalog;

  // Load data files.
  const wcag20 = yaml.load(
    fs.readFileSync("./catalog/data/wcag-2.0.yaml").toString()
  );
  const wcag21 = yaml.load(
    fs.readFileSync("./catalog/data/wcag-2.1.yaml").toString()
  );
  const wcag22 = yaml.load(
    fs.readFileSync("./catalog/data/wcag-2.2.yaml").toString()
  );
  const section508 = yaml.load(
    fs.readFileSync("./catalog/data/508.yaml").toString()
  );
  const en301549 = yaml.load(
    fs.readFileSync("./catalog/data/en-301-549.yaml").toString()
  );
  const components = yaml.load(
    fs.readFileSync("./catalog/data/components.yaml").toString()
  );
  const terms = yaml.load(
    fs.readFileSync("./catalog/data/terms.yaml").toString()
  );

  let combined;
  let outputFile = "";
  switch (catalog) {
    case "WCAG":
      console.log(
        `Warning: This will rebuild the following catalog: ${catalog}.`
      );

      combined = createCatalog(
        [wcag22],
        components,
        terms,
        "VPAT® 2.5 WCAG Edition",
        "en"
      );

      outputFile = `./catalog/2.5-edition-${combined.standards[0].id}-${combined.lang}.yaml`;
      break;

    case "508":
      console.log(
        `Warning: This will rebuild the following catalog: ${catalog}.`
      );

      combined = createCatalog(
        [wcag20, section508],
        components,
        terms,
        "VPAT® 2.5 Revised Section 508 Edition",
        "en"
      );

      outputFile = `./catalog/2.5-edition-${combined.standards[0].id}-${combined.standards[1].id}-${combined.lang}.yaml`;
      break;

    case "WCAG21-508":
      console.log(
        `Warning: This will rebuild the following catalog: ${catalog}.`
      );

      combined = createCatalog(
        [wcag21, section508],
        components,
        terms,
        "VPAT® 2.5 WCAG 2.1 and Revised Section 508 Edition",
        "en"
      );

      outputFile = `./catalog/2.5-edition-${combined.standards[0].id}-${combined.standards[1].id}-${combined.lang}.yaml`;
      break;

    case "WCAG22-508":
      console.log(
        `Warning: This will rebuild the following catalog: ${catalog}.`
      );

      combined = createCatalog(
        [wcag22, section508],
        components,
        terms,
        "VPAT® 2.5 WCAG 2.2 and Revised Section 508 Edition",
        "en"
      );

      outputFile = `./catalog/2.5-edition-${combined.standards[0].id}-${combined.standards[1].id}-${combined.lang}.yaml`;
      break;

    case "INT":
      console.log(
        `Warning: This will rebuild the following catalog: ${catalog}.`
      );

      combined = createCatalog(
        [wcag22, section508, en301549],
        components,
        terms,
        "VPAT® 2.5 International Edition",
        "en"
      );

      outputFile = `./catalog/2.5-edition-${combined.standards[0].id}-${combined.standards[1].id}-${combined.standards[2].id}-${combined.lang}.yaml`;
      break;

    case "EU":
    default:
      console.warn(`${catalog} is currently not supported.`);
      break;
  }

  if (outputFile) {
    fs.writeFile(
      outputFile,
      yaml.dump(combined, { quotingType: '"' }),
      function () {
        console.log(`Successfully created catalog ${outputFile}.`);
      }
    );
  }
} else {
  console.error("Invalid: no catalog entered.");
}
