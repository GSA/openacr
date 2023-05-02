"use strict";
// src/openacr.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
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
const validateOpenACR_1 = require("./validateOpenACR");
const yargs_1 = __importDefault(require("yargs"));
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const validateOpenACRCatalogValues_1 = require("./validateOpenACRCatalogValues");
const outputOpenACR_1 = require("./outputOpenACR");
const argv = yargs_1.default
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
let result;
const schema = "openacr-0.1.0.json";
if (fs_1.default.existsSync(argv.file)) {
    try {
        const data = js_yaml_1.default.load(fs_1.default.readFileSync(argv.file).toString());
        result = validateOpenACR_1.validateOpenACR(data, schema);
        let catalog;
        // Validate OpenACR against provided catalog.
        if (result.result && argv.catalogFile && fs_1.default.existsSync(argv.catalogFile)) {
            try {
                catalog = js_yaml_1.default.load(fs_1.default.readFileSync(argv.catalogFile).toString());
                result = validateOpenACRCatalogValues_1.validateOpenACRCatalogValues(data, catalog);
            }
            catch (_c) {
                result = {
                    result: false,
                    message: "Invalid: catalog file is not in YAML format",
                };
            }
        }
        // Output OpenACR as markdown if command is set to 'output' and is valid.
        if (argv._.includes("output") && result.result) {
            const outputFile = (_a = argv.outputFile) !== null && _a !== void 0 ? _a : "output/openacr.markdown";
            const fileExt = outputFile.split(".").pop();
            if (fileExt === "html") {
                let templateFile = "templates/openacr-html-0.1.0.handlebars";
                let withStyles = true;
                if (argv.templateFile) {
                    templateFile = argv.templateFile;
                    withStyles = false;
                }
                result = outputOpenACR_1.outputOpenACR(data, catalog, outputFile, withStyles, templateFile);
            }
            else {
                const templateFile = (_b = argv.templateFile) !== null && _b !== void 0 ? _b : "templates/openacr-markdown-0.1.0.handlebars";
                result = outputOpenACR_1.outputOpenACR(data, catalog, outputFile, false, templateFile);
            }
        }
    }
    catch (_d) {
        result = {
            result: false,
            message: "Invalid: file is not in YAML format",
        };
    }
}
else {
    result = { result: false, message: "Invalid: file does not exist" };
}
if (result.result) {
    console.log(result.message);
}
else {
    console.error(result.message);
}
