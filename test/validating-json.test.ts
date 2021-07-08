const { expect } = require("chai")
import { validateOPAT } from "../src/validateOPAT";

describe("validateOPAT", () => {
    it("valid JSON OPAT should return valid message", () => {
        expect(validateOPAT({ title: "Drupal Accessibility Conformance Report" }))
            .to.equal("Valid!");
    });
    it("invalid JSON OPAT should return invalid message", () => {
        expect(validateOPAT({ foo: 2, bar: 4 }))
            .to.equal("Invalid: data must have required property 'title'");
    });
});
