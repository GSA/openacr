import { expect } from "chai";
import { validateOPAT } from "../src/validateOPAT";

describe("Validate OPAT chapters", () => {
  const validSchema = "opat-0.1.0.json";
  const validJSON = {
    title: "Drupal Accessibility Conformance Report",
    product: {
      name: "Drupal",
    },
    "contact-information": "mike.gifford@civicactions.com",
    chapters: [
      {
        num: "1",
        title: "Success Criteria, Level A",
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
      {
        num: "2",
        title: "Success Criteria, Level AA",
      },
    ],
  };
  const invalidJSON1 = {
    title: "Drupal Accessibility Conformance Report",
    product: {
      name: "Drupal",
    },
    "contact-information": "mike.gifford@civicactions.com",
    chapters: [
      {
        foo: 3,
        bar: 4,
      },
    ],
  };
  const invalidJSON2 = {
    title: "Drupal Accessibility Conformance Report",
    product: {
      name: "Drupal",
    },
    "contact-information": "mike.gifford@civicactions.com",
    chapters: [
      {
        num: "1",
        title: "Success Criteria, Level A",
        criteria: ["1.1.1", "1.4.1"],
      },
    ],
  };
  const invalidJSON3 = {
    title: "Drupal Accessibility Conformance Report",
    product: {
      name: "Drupal",
    },
    "contact-information": "mike.gifford@civicactions.com",
    chapters: [
      {
        num: "1",
        title: "Success Criteria, Level A",
        criteria: [
          {
            num: "1.1.1",
            components: [
              {
                name: "website",
                adherence: {
                  level: "does not support",
                },
              },
            ],
          },
        ],
      },
    ],
  };
  let result = null;

  it("pass valid chapters JSON should return valid message", () => {
    result = validateOPAT(validJSON, validSchema);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal("Valid!");
  });

  it("pass invalid chapters JSON should return invalid JSON message", () => {
    result = validateOPAT(invalidJSON1, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/0 must have required property 'num', " +
        "data/chapters/0 must have required property 'title'"
    );
  });

  it("pass invalid criteria JSON should return invalid JSON message", () => {
    result = validateOPAT(invalidJSON2, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/0/criteria/0 must be object, " +
        "data/chapters/0/criteria/1 must be object"
    );
  });

  it("pass invalid components JSON should return invalid JSON message", () => {
    result = validateOPAT(invalidJSON3, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/0/criteria/0/components/0/adherence/level must be equal to one of the allowed values"
    );
  });
});
