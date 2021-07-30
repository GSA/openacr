import { expect } from "chai";
import { outputOPAT } from "../src/outputOPAT";

describe("Output", () => {
  const validJSONData = {
    title: "Drupal Accessibility Conformance Report",
    product: {
      name: "Drupal",
    },
    contact: {
      email: "mike.gifford@civicactions.com",
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
                  notes: "Drupal 8 requires alt text for images by default.",
                },
              },
            ],
          },
        ],
      },
      hardware: {
        notes:
          "Drupal is a web application. Hardware accessibility criteria is not applicable.",
      },
    },
  };
  const validJSONCatalog = {
    title: "VPAT 2.4 edition 508/WCAG 2.0",
    chapters: [
      {
        id: "success_criteria_level_a",
        label: "Success Criteria, Level A",
        order: 1,
        criteria: [
          {
            id: "1.1.1",
            label: "Non-text Content (Level A)",
            key: "text-equiv",
            components: [
              "web",
              "electronic-docs",
              "software",
              "authoring-tool",
            ],
          },
          {
            id: "1.2.2",
            label: "1.2.2 Captions (Prerecorded) (Level A)",
            key: "media-equiv",
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
            label: "Closed Functionality",
            key: "402-closed-functionality",
            components: [],
          },
          {
            id: "402.1",
            label: "General",
            key: "402.1",
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
  let result = null;

  it("pass valid data and catalog should return valid message", () => {
    result = outputOPAT(
      validJSONData,
      validJSONCatalog,
      "output/opat.markdown"
    );
    expect(result.result).to.equal(true);
    expect(result.message).to.equal(
      "Valid and output generated at output/opat.markdown!"
    );
  });

  it("pass valid data, catalog, and output file should return valid message", () => {
    const filePath = "output/unittest.markdown";
    result = outputOPAT(validJSONData, validJSONCatalog, filePath);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal(
      `Valid and output generated at ${filePath}!`
    );
  });

  it("pass valid data, catalog, and invalid template should return invalid template message", () => {
    result = outputOPAT(
      validJSONData,
      validJSONCatalog,
      "output/opat.markdown",
      ""
    );
    expect(result.result).to.equal(false);
    expect(result.message).to.equal("Invalid: template file is invalid.");
  });
});
