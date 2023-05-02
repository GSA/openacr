"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputOpenACR = void 0;
const fs = __importStar(require("fs"));
const fse = __importStar(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const createOutput_1 = require("./createOutput");
function outputOpenACR(data, catalogData, outputFile, withStyleFiles = false, handlebarTemplate = "templates/openacr-markdown-0.1.0.handlebars") {
    try {
        const templateString = fs.readFileSync(handlebarTemplate).toString();
        const fileExt = outputFile.split(".").pop();
        const dir = path_1.default.dirname(outputFile);
        if (!fs.existsSync(dir)) {
            return {
                result: false,
                message: `Invalid: output directory '${dir}' does not exist.`,
            };
        }
        const result = createOutput_1.createOutput(data, catalogData, fileExt, templateString);
        fs.writeFile(outputFile, result, function () {
            return {
                result: false,
                message: "Invalid: markdown file could not be generated.",
            };
        });
        if (withStyleFiles) {
            // Copy CSS stylesheets to the output directory.
            fs.copyFile("templates/openacr.css", `${dir}/openacr.css`, (err) => {
                return {
                    result: false,
                    message: "Invalid: openacr.css file could not be copied.",
                };
            });
            fs.copyFile("templates/custom.css", `${dir}/custom.css`, (err) => {
                return {
                    result: false,
                    message: "Invalid: custom.css file could not be copied.",
                };
            });
            // Copy USWDS design system files to the output directory.
            fse.copy("node_modules/uswds/dist", `${dir}/uswds`, (err) => {
                return {
                    result: false,
                    message: "Invalid: USWDS directory could not be copied.",
                };
            });
        }
        return {
            result: true,
            message: `Valid and output generated at ${outputFile}!`,
        };
    }
    catch (_a) {
        return {
            result: false,
            message: "Invalid: template file is invalid.",
        };
    }
}
exports.outputOpenACR = outputOpenACR;
