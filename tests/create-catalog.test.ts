import { expect } from "chai";
import { createCatalog } from "../src/createCatalog";

describe("Create catalog", () => {
  const validWCAG = {
    title: "WCAG 2.0",
    lang: "en",
    standard: [
      {
        id: "wcag-2.0",
        label: "Web Content Accessibility Guidelines 2.0",
        report_heading: "WCAG 2.0 Report",
        url: "https://www.w3.org/TR/WCAG20/",
        chapters: ["success_criteria_level_a"],
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
    ],
  };
  const validSection508 = {
    title: "WCAG 2.0",
    lang: "en",
    standard: [
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
  const validComponents = {
    title: "Components",
    lang: "en",
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
  const validTerms = {
    title: "Terms",
    lang: "en",
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
  let result;

  it("pass valid catalogs should have valid standards", () => {
    result = createCatalog(
      [validWCAG, validSection508],
      validComponents,
      validTerms,
      "VPAT",
      "en"
    );
    expect(result.standards[0].id).to.equal("wcag-2.0");
    expect(result.standards[1].id).to.equal("508");
  });

  it("pass invalid section508 should have undefined standards and chapters", () => {
    result = createCatalog(
      [validWCAG, {}],
      validComponents,
      validTerms,
      "VPAT",
      "en"
    );
    expect(result.standards).to.be.undefined;
    expect(result.chapters).to.be.undefined;
  });

  it("pass invalid WCAG should have undefined standards and chapters", () => {
    result = createCatalog(
      [{}, validSection508],
      validComponents,
      validTerms,
      "VPAT",
      "en"
    );
    expect(result.standards).to.be.undefined;
    expect(result.chapters).to.be.undefined;
  });

  it("pass invalid components should have undefined components", () => {
    result = createCatalog(
      [validWCAG, validSection508],
      {},
      validTerms,
      "VPAT",
      "en"
    );
    expect(result.components).to.be.undefined;
  });

  it("pass invalid terms should have undefined terms", () => {
    result = createCatalog(
      [validWCAG, validSection508],
      validComponents,
      {},
      "VPAT",
      "en"
    );
    expect(result.terms).to.be.undefined;
  });

  it("pass null WCAG and invalid section508 should have undefined standards and chapters", () => {
    result = createCatalog(
      [null, {}],
      validComponents,
      validTerms,
      "VPAT",
      "en"
    );
    expect(result.standards).to.be.undefined;
    expect(result.chapters).to.be.undefined;
  });
});
