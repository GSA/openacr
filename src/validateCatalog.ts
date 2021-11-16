// src/validateCatalog.ts

import Ajv from "ajv";
import { ValidatorResult } from "./ValidatorResult";

export function validateCatalog(
  data: unknown,
  schema: string
): ValidatorResult {
  const ajv = new Ajv({
    allErrors: true,
    schemas: [require("../schema/openacr-catalog-0.1.0.json")],
  });

  const validate = ajv.getSchema(schema);
  if (validate) {
    const valid = validate(data);
    if (valid) return { result: true, message: "Valid!" };
    else
      return {
        result: false,
        message: "Invalid: catalog " + ajv.errorsText(validate.errors),
      };
  }
  return { result: false, message: "Invalid: catalog schema is not valid" };
}
