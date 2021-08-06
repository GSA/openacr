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

if (argv.catalog) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const catalog = argv.catalog;
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
}
