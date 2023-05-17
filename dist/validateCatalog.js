"use strict";
// src/validateCatalog.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCatalog = void 0;
const ajv_1 = __importDefault(require("ajv"));
function validateCatalog(data, schema) {
    const ajv = new ajv_1.default({
        allErrors: true,
        schemas: [require("../schema/openacr-catalog-0.1.0.json")],
    });
    const validate = ajv.getSchema(schema);
    if (validate) {
        const valid = validate(data);
        if (valid)
            return { result: true, message: "Valid!" };
        else
            return {
                result: false,
                message: "Invalid: catalog " + ajv.errorsText(validate.errors),
            };
    }
    return { result: false, message: "Invalid: catalog schema is not valid" };
}
exports.validateCatalog = validateCatalog;
