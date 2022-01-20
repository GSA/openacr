import { expect } from "chai";
import { validateCatalog } from "../src/validateCatalog";

describe("Validate catalog", () => {
  const validSchema = "openacr-catalog-0.1.0.json";
  const invalidSchema = "openacr-catalog-invalid.json";
  const validJSON = {
    title: "VPAT 2.4 edition 508/WCAG 2.0",
    lang: "en",
    standards: [
      {
        id: "wcag-2.0",
        label: "Web Content Accessibility Guidelines 2.0",
        report_heading: "WCAG 2.0 Report",
        url: "https://www.w3.org/TR/WCAG20/",
        chapters: ["success_criteria_level_a"],
      },
      {
        id: "508",
        label:
          "Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018",
        report_heading: "Revised Section 508 Report",
        url: "https://www.access-board.gov/ict/",
        chapters: ["hardware"],
      },
    ],
    chapters: [
      {
        id: "success_criteria_level_a",
        label: "Success Criteria, Level A",
        order: 1,
        criteria: [
          {
            id: "1.1.1",
            handle: "Non-text Content (Level A)",
            alt_id: "text-equiv",
            components: [
              "web",
              "electronic-docs",
              "software",
              "authoring-tool",
            ],
          },
          {
            id: "1.2.2",
            handle: "1.2.2 Captions (Prerecorded) (Level A)",
            alt_id: "media-equiv",
            components: [
              "web",
              "electronic-docs",
              "software",
              "authoring-tool",
            ],
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
            handle: "Closed Functionality",
            alt_id: "402-closed-functionality",
            components: [],
          },
          {
            id: "402.1",
            handle: "General",
            alt_id: "402.1",
            components: [],
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
        label: "Electronic Documents",
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
    terms: [
      {
        id: "supports",
        label: "Supports",
        description:
          "The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.",
      },
      {
        id: "partially-supports",
        label: "Partially Supports",
        description:
          "Some functionality of the product does not meet the criterion.",
      },
      {
        id: "does-not-support",
        label: "Does Not Support",
        description:
          "The majority of product functionality does not meet the criterion.",
      },
      {
        id: "not-applicable",
        label: "Not Applicable",
        description: "The criterion is not relevant to the product.",
      },
      {
        id: "not-evaluated",
        label: "Not Evaluated",
        description:
          "The product has not been evaluated against the criterion. This can be used only in WCAG 2.0 Level AAA.",
      },
    ],
  };
  const invalidJSON = { foo: 2, bar: 4 };
  const invalidJSON1 = {
    title: "VPAT 2.4 edition 508/WCAG 2.0",
    lang: "en",
    chapters: {
      id: "success_criteria_level_a",
      label: "Success Criteria, Level A",
      order: 1,
    },
  };
  const invalidJSON2 = {
    title: "VPAT 2.4 edition 508/WCAG 2.0",
    lang: "en",
    chapters: [
      {
        id: "success_criteria_level_a",
        label: "Success Criteria, Level A",
        criteria: ["1.1.1", "1.2.2"],
      },
    ],
  };
  const invalidJSON3 = {
    title: "VPAT 2.4 edition 508/WCAG 2.0",
    lang: "en",
    components: [
      {
        web: "Web",
      },
      {
        "electronic-docs": "Electronic Documents",
      },
    ],
  };
  const invalidJSON4 = {
    title: "VPAT 2.4 edition 508/WCAG 2.0",
    lang: "en",
    terms: [
      {
        supports: "Supports",
      },
      {
        "does-not-support": "Does not support",
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
      "Invalid: catalog data must have required property 'title', " +
        "data must have required property 'lang'"
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
    expect(result.message).to.equal(
      "Invalid: catalog data/chapters must be array"
    );
  });

  it("pass invalid criteria JSON should return invalid JSON message", () => {
    result = validateCatalog(invalidJSON2, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: catalog data/chapters/0 must have required property 'order', " +
        "data/chapters/0/criteria/0 must be object, " +
        "data/chapters/0/criteria/1 must be object"
    );
  });

  it("pass invalid components JSON should return invalid JSON message", () => {
    result = validateCatalog(invalidJSON3, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: catalog data/components/0 must have required property 'id', " +
        "data/components/0 must have required property 'label', " +
        "data/components/1 must have required property 'id', " +
        "data/components/1 must have required property 'label'"
    );
  });

  it("pass invalid terms JSON should return invalid JSON message", () => {
    result = validateCatalog(invalidJSON4, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: catalog data/terms/0 must have required property 'id', " +
        "data/terms/0 must have required property 'label', " +
        "data/terms/1 must have required property 'id', " +
        "data/terms/1 must have required property 'label'"
    );
  });
});
