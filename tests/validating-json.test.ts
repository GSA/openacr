import { expect } from "chai";
import { validateOPAT } from "../src/validateOPAT";

describe("validateOPAT", () => {
  const validSchema = "opat.schema.json";
  const invalidSchema = "opat-invalid.schema.json";
  const validJSON = {
    title: "Drupal Accessibility Conformance Report",
    "name-product-version": "Drupal 9.1",
    "product-description": "Content Management System",
    "contact-information": "mike.gifford@civicactions.com",
  };
  const invalidJSON = { foo: 2, bar: 4 };
  let result = null;

  it("valid JSON OPAT with valid schema should return valid message", () => {
    result = validateOPAT(validJSON, validSchema);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal("Valid!");
  });
  it("invalid JSON OPAT with valid schema should return invalid JSON message", () => {
    result = validateOPAT(invalidJSON, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data must have required property 'title', " +
        "data must have required property 'name-product-version', " +
        "data must have required property 'product-description', " +
        "data must have required property 'contact-information'"
    );
  });
  it("valid JSON OPAT with invalid schema should return invalid schema message", () => {
    result = validateOPAT(validJSON, invalidSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal("Invalid: schema is not valid");
  });
  it("invalid JSON OPAT with invalid schema should return invalid schema message", () => {
    result = validateOPAT(invalidJSON, invalidSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal("Invalid: schema is not valid");
  });
});
