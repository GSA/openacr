"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { expect } = require("chai");
const validateOPAT_1 = require("../src/validateOPAT");
describe("validateOPAT", () => {
    it("valid JSON OPAT should return valid message", () => {
        expect(validateOPAT_1.validateOPAT({ title: "Drupal Accessibility Conformance Report" }))
            .to.equal("Valid!");
    });
    it("invalid JSON OPAT should return invalid message", () => {
        expect(validateOPAT_1.validateOPAT({ foo: 2, bar: 4 }))
            .to.equal("Invalid: data must have required property 'title'");
    });
});
