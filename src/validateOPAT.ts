// src/validateOPAT.ts

export function validateOPAT(data: any) {
    const Ajv = require("ajv")
    const ajv = new Ajv({
        allErrors: true,
        schemas: [
            require('../schema/opat.schema.json')
        ]
    })

    const validate = ajv.getSchema('https://github.com/GSA/open-product-accessibility-template/schema/opat.schema.json')
    const valid = validate(data)
    if (valid) return "Valid!"
    else return "Invalid: " + ajv.errorsText(validate.errors)
}
