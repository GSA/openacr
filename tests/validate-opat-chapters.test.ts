import { expect } from "chai";
import { validateOPAT } from "../src/validateOPAT";

describe("Validate OPAT chapters", () => {
  const validSchema = "opat-0.1.0.json";
  const validJSON = {
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
  const invalidJSON1 = {
    title: "Lorem Ipsum Accessibility Conformance Report",
    product: {
      name: "Lorem Ipsum",
    },
    author: {
      email: "cicero@example.com",
    },
    chapters: {
      success_criteria_level_a: 3,
      hardware: 4,
    },
  };
  const invalidJSON2 = {
    title: "Lorem Ipsum Accessibility Conformance Report",
    product: {
      name: "Lorem Ipsum",
    },
    author: {
      email: "cicero@example.com",
    },
    chapters: {
      success_criteria_level_a: {
        criteria: ["1.1.1", "1.4.1"],
      },
    },
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
      "Invalid: data/chapters/success_criteria_level_a must be object, " +
        "data/chapters/hardware must be object"
    );
  });

  it("pass invalid criteria JSON should return invalid JSON message", () => {
    result = validateOPAT(invalidJSON2, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/success_criteria_level_a/criteria/0 must be object, " +
        "data/chapters/success_criteria_level_a/criteria/1 must be object"
    );
  });
});
