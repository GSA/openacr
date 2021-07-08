const Ajv = require("ajv")
const ajv = new Ajv({
    allErrors: true,
    schemas: [
        require("../schema/opat.schema.json")
    ]
})

const validate = ajv.getSchema('https://github.com/GSA/open-product-accessibility-template/schema/opat.schema.json')

test({title: "Drupal Accessibility Conformance Report"})
test({foo: 2, bar: 4})

function test(data: any) {
    const valid = validate(data)
    if (valid) console.log("Valid!")
    else console.log("Invalid: " + ajv.errorsText(validate.errors))
}
