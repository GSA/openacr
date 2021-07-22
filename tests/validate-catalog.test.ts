import { expect } from "chai";
import { validateCatalog } from "../src/validateCatalog";

describe("Validate catalog", () => {
  const validSchema = "opat-catalog-0.1.0.json";
  const invalidSchema = "opat-catalog-invalid.json";
  const validJSON = {
    title: "WCAG 2.0",
    chapters: [
      {
        id: "success_criteria_level_a",
        label: "Success Criteria, Level A",
        order: 1,
        criteria: [
          {
            id: "1.1.1",
            label: "Non-text Content (Level A)",
          },
          {
            id: "1.2.2",
            label: "1.2.2 Captions (Prerecorded) (Level A)",
          },
        ],
      },
      {
        id: "hardware",
        label: "Hardware",
        order: 4,
        criteria: [
          {
            id: "402",
            label: "Closed Functionality",
          },
          {
            id: "402.1",
            label: "General",
          },
        ],
      },
    ],
    components: [
      {
        id: "web",
        label: "Web",
      },
      {
        id: "electronic-docs",
        label: "Electronic Docs",
      },
      {
        id: "software",
        label: "Software",
      },
      {
        id: "authoring-tool",
        label: "Authoring Tool",
      },
      {
        id: "none",
        label: "",
      },
    ],
  };
  const invalidJSON = { foo: 2, bar: 4 };
  const invalidJSON1 = {
    title: "WCAG 2.0",
    chapters: {
      id: "success_criteria_level_a",
      label: "Success Criteria, Level A",
      order: 1,
    },
  };
  const invalidJSON2 = {
    title: "WCAG 2.0",
    chapters: [
      {
        id: "success_criteria_level_a",
        label: "Success Criteria, Level A",
        criteria: ["1.1.1", "1.2.2"],
      },
    ],
  };
  const invalidJSON3 = {
    title: "WCAG 2.0",
    components: [
      {
        web: "Web",
      },
      {
        "electronic-docs": "Electronic Docs",
      },
    ],
  };
  let result = null;

  it("pass valid JSON with valid schema should return valid message", () => {
    result = validateCatalog(validJSON, validSchema);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal("Valid!");
  });

  it("pass invalid JSON with valid schema should return invalid JSON message", () => {
    result = validateCatalog(invalidJSON, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data must have required property 'title'"
    );
  });

  it("pass valid JSON with invalid schema should return invalid schema message", () => {
    result = validateCatalog(validJSON, invalidSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal("Invalid: catalog schema is not valid");
  });

  it("pass invalid JSON with invalid schema should return invalid schema message", () => {
    result = validateCatalog(invalidJSON, invalidSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal("Invalid: catalog schema is not valid");
  });

  it("pass invalid chapters JSON should return invalid JSON message", () => {
    result = validateCatalog(invalidJSON1, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal("Invalid: data/chapters must be array");
  });

  it("pass invalid criteria JSON should return invalid JSON message", () => {
    result = validateCatalog(invalidJSON2, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/0 must have required property 'order', " +
        "data/chapters/0/criteria/0 must be object, " +
        "data/chapters/0/criteria/1 must be object"
    );
  });

  it("pass invalid components JSON should return invalid JSON message", () => {
    result = validateCatalog(invalidJSON3, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/components/0 must have required property 'id', data/components/0 must have required property 'label', " +
        "data/components/1 must have required property 'id', " +
        "data/components/1 must have required property 'label'"
    );
  });
});
