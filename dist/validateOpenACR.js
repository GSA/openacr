"use strict";
// src/validateOpenACR.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOpenACR = void 0;
const ajv_1 = __importDefault(require("ajv"));
const spdx_license_list_1 = __importDefault(require("spdx-license-list"));
function validateOpenACR(data, schema) {
    const ajv = new ajv_1.default({
        allErrors: true,
        schemas: [require("../schema/openacr-0.1.0.json")],
    });
    const validate = ajv.getSchema(schema);
    if (validate) {
        const valid = validate(data);
        if (valid) {
            // Validate license.
            if (data.license) {
                if (!spdx_license_list_1.default[data.license]) {
                    return {
                        result: false,
                        message: `Invalid: license '${data.license}' is not a recognized SPDX license (https://spdx.org/licenses/)`,
                    };
                }
            }
            return { result: true, message: "Valid!" };
        }
        else {
            return {
                result: false,
                message: "Invalid: " + ajv.errorsText(validate.errors),
            };
        }
    }
    return { result: false, message: "Invalid: schema is not valid" };
}
exports.validateOpenACR = validateOpenACR;
