import { expect } from "chai";
import { validateOPAT } from "../src/validateOPAT";

describe("validateOPAT", () => {
    const validSchema = 'https://github.com/GSA/open-product-accessibility-template/schema/opat.schema.json'
    const invalidSchema = 'https://github.com/GSA/open-product-accessibility-template/schema/opat-invalid.schema.json'
    const validJSON = { title: "Drupal Accessibility Conformance Report" }
    const invalidJSON = { foo: 2, bar: 4 }

    it("valid JSON OPAT with valid schema should return valid message", () => {
        expect(validateOPAT(validJSON, validSchema))
            .to.equal("Valid!")
    })
    it("invalid JSON OPAT with valid schema should return invalid JSON message", () => {
        expect(validateOPAT(invalidJSON, validSchema))
            .to.equal("Invalid: data must have required property 'title'")
    })
    it("valid JSON OPAT with invalid schema should return invalid schema message", () => {
        expect(validateOPAT(validJSON, invalidSchema))
            .to.equal("Invalid: schema is not valid")
    })
    it("invalid JSON OPAT with invalid schema should return invalid schema message", () => {
        expect(validateOPAT(invalidJSON, invalidSchema))
            .to.equal("Invalid: schema is not valid")
    })
});
