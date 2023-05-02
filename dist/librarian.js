"use strict";
// src/librarian.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const yargs_1 = __importDefault(require("yargs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const fs_1 = __importDefault(require("fs"));
const createCatalog_1 = require("./createCatalog");
const argv = yargs_1.default
    .options({
    catalog: {
        type: "string",
        description: "Select which VPAT 2.4 catalog to rebuild: WCAG, 508, WCAG21508, EU, INT",
        demandOption: true,
        alias: "c",
    },
})
    .parseSync();
if (argv.catalog) {
    const catalog = argv.catalog;
    // Load data files.
    const wcag20 = js_yaml_1.default.load(fs_1.default.readFileSync("./catalog/data/wcag-2.0.yaml").toString());
    const section508 = js_yaml_1.default.load(fs_1.default.readFileSync("./catalog/data/508.yaml").toString());
    const components = js_yaml_1.default.load(fs_1.default.readFileSync("./catalog/data/components.yaml").toString());
    const terms = js_yaml_1.default.load(fs_1.default.readFileSync("./catalog/data/terms.yaml").toString());
    const wcag21 = js_yaml_1.default.load(fs_1.default.readFileSync("./catalog/data/wcag-2.1.yaml").toString());
    let combined;
    let outputFile = "";
    switch (catalog) {
        case "EU":
        case "INT":
        default:
            console.warn(`${catalog} is currently not supported.`);
            break;
        case "WCAG":
            console.log(`Warning: This will rebuild the following catalog: ${catalog}.`);
            combined = createCatalog_1.createCatalog(null, wcag21, components, terms, "VPAT® 2.4", "en");
            outputFile = `./catalog/2.4-edition-${combined.standards[0].id}-${combined.lang}.yaml`;
            break;
        case "WCAG21508":
            console.log(`Warning: This will rebuild the following catalog: ${catalog}.`);
            combined = createCatalog_1.createCatalog(wcag21, section508, components, terms, "VPAT® 2.4 WCAG 2.1 and Revised Section 508 Edition", "en");
            outputFile = `./catalog/2.4-edition-${combined.standards[0].id}-${combined.standards[1].id}-${combined.lang}.yaml`;
            break;
        case "508":
            console.log(`Warning: This will rebuild the following catalog: ${catalog}.`);
            combined = createCatalog_1.createCatalog(wcag20, section508, components, terms, "VPAT® 2.4 Revised Section 508 Edition", "en");
            outputFile = `./catalog/2.4-edition-${combined.standards[0].id}-${combined.standards[1].id}-${combined.lang}.yaml`;
            break;
    }
    if (outputFile) {
        fs_1.default.writeFile(outputFile, js_yaml_1.default.dump(combined, { quotingType: '"' }), function () {
            console.log(`Successfully created catalog ${outputFile}.`);
        });
    }
}
else {
    console.error("Invalid: no catalog entered.");
}
