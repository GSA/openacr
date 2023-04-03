import { expect } from "chai";
import { outputOpenACR } from "../src/outputOpenACR";

describe("Output", () => {
  const validJSONData = {
    title: "Lorem Ipsum Accessibility Conformance Report",
    product: {
      name: "Lorem Ipsum",
    },
    author: {
      email: "cicero@example.com",
    },
    chapters: {
      success_criteria_level_a: {
        criteria: [
          {
            num: "1.1.1",
            components: [
              {
                name: "web",
                adherence: {
                  level: "supports",
                  notes:
                    "Cras ultrices, diam in laoreet condimentum, purus leo tempor erat, eu facilisis erat tortor at purus.",
                },
              },
            ],
          },
        ],
      },
      hardware: {
        notes:
          "Lorem Ipsum is a web application. Hardware accessibility criteria is not applicable.",
      },
    },
  };
  const validJSONCatalog1 = {
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
  const validJSONCatalog2 = {
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
  };
  const validJSONCatalog3 = {
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
  };
  const validJSONCatalog4 = {
    title: "VPAT 2.4 edition 508/WCAG 2.0",
    lang: "en",
    standards: [
      {
        id: "wcag-2.0",
        label: "Web Content Accessibility Guidelines 2.0",
        report_heading: "WCAG 2.0 Report",
        url: "https://www.w3.org/TR/WCAG20/",
        chapters: [],
      },
      {
        id: "508",
        label:
          "Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018",
        report_heading: "Revised Section 508 Report",
        url: "https://www.access-board.gov/ict/",
        chapters: [],
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
  let result = null;

  it("pass valid data and catalog should return valid message", () => {
    result = outputOpenACR(
      validJSONData,
      validJSONCatalog1,
      "output/openacr.markdown"
    );
    expect(result.result).to.equal(true);
    expect(result.message).to.equal(
      "Valid and output generated at output/openacr.markdown!"
    );
  });

  it("pass valid data, catalog, and output file should return valid message", () => {
    const filePath = "output/unittest1.markdown";
    result = outputOpenACR(validJSONData, validJSONCatalog1, filePath);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal(
      `Valid and output generated at ${filePath}!`
    );
  });

  it("pass valid data, catalog with missing components and terms, and output file should return valid message", () => {
    const filePath = "output/unittest2.markdown";
    result = outputOpenACR(validJSONData, validJSONCatalog2, filePath);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal(
      `Valid and output generated at ${filePath}!`
    );
  });

  it("pass valid data, catalog with missing terms, and output file should return valid message", () => {
    const filePath = "output/unittest3.markdown";
    result = outputOpenACR(validJSONData, validJSONCatalog3, filePath);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal(
      `Valid and output generated at ${filePath}!`
    );
  });

  it("pass valid data, catalog with missing chapters, and output file should return valid message", () => {
    const filePath = "output/unittest4.markdown";
    result = outputOpenACR(validJSONData, validJSONCatalog4, filePath);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal(
      `Valid and output generated at ${filePath}!`
    );
  });

  it("pass valid data, catalog, and invalid template should return invalid template message", () => {
    result = outputOpenACR(
      validJSONData,
      validJSONCatalog1,
      "output/openacr.markdown",
      false,
      ""
    );
    expect(result.result).to.equal(false);
    expect(result.message).to.equal("Invalid: template file is invalid.");
  });

  it("pass valid data, catalog, and invalid output path should return invalid output message", () => {
    result = outputOpenACR(
      validJSONData,
      validJSONCatalog1,
      "does-not-exist-folder/openacr.markdown"
    );
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: output directory 'does-not-exist-folder' does not exist."
    );
  });
});
