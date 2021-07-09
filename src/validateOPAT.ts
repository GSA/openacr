// src/validateOPAT.ts

import Ajv from "ajv";

export function validateOPAT(data: unknown): string {
    const ajv = new Ajv({
        allErrors: true,
        schemas: [
            require('../schema/opat.schema.json')
        ]
    })

    const validate = ajv.getSchema('https://github.com/GSA/open-product-accessibility-template/schema/opat.schema.json')
    if (validate) {
        const valid = validate(data)
        if (valid) return "Valid!"
        else return "Invalid: " + ajv.errorsText(validate.errors)
    }
    return "Invalid: unknown error"
}
