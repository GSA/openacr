// src/validateOpenACR.ts

import Ajv from "ajv";
import { ValidatorResult } from "./ValidatorResult";
import spdxLicenseList from "spdx-license-list";

export function validateOpenACR(data: any, schema: string): ValidatorResult {
  const ajv = new Ajv({
    allErrors: true,
    schemas: [require("../schema/openacr-0.1.0.json")],
  });

  const validate = ajv.getSchema(schema);
  if (validate) {
    const valid = validate(data);
    if (valid) {
      // Validate license.
      if (data.license) {
        if (!spdxLicenseList[data.license]) {
          return {
            result: false,
            message: `Invalid: license '${data.license}' is not a recognized SPDX license (https://spdx.org/licenses/)`,
          };
        }
      }

      return { result: true, message: "Valid!" };
    } else {
      return {
        result: false,
        message: "Invalid: " + ajv.errorsText(validate.errors),
      };
    }
  }
  return { result: false, message: "Invalid: schema is not valid" };
}
