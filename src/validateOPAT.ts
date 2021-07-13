// src/validateOPAT.ts

import Ajv from "ajv";

export function validateOPAT(data: unknown, schema: string): string {
  const ajv = new Ajv({
    allErrors: true,
    schemas: [require("../schema/opat.schema.json")],
  });

  const validate = ajv.getSchema(schema);
  if (validate) {
    const valid = validate(data);
    if (valid) return "Valid!";
    else return "Invalid: " + ajv.errorsText(validate.errors);
  }
  return "Invalid: schema is not valid";
}
