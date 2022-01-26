import { expect } from "chai";
import { validateOpenACR } from "../src/validateOpenACR";

describe("Validate OpenACR chapters", () => {
  const validSchema = "openacr-0.1.0.json";
  const validJSON1 = {
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
  const validJSON2 = {
    title: "Lorem Ipsum Accessibility Conformance Report",
    product: {
      name: "Lorem Ipsum",
    },
    author: {
      email: "cicero@example.com",
    },
    chapters: {
      success_criteria_level_a: {
        disabled: false,
      },
      success_criteria_level_aa: {
        disabled: false,
      },
      success_criteria_level_aaa: {
        disabled: false,
      },
      functional_performance_criteria: {
        disable: false,
      },
      hardware: {
        disable: true,
      },
      software: {
        disable: true,
      },
      support_documentation_and_services: {
        disable: false,
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
  const invalidJSON3 = {
    title: "Lorem Ipsum Accessibility Conformance Report",
    product: {
      name: "Lorem Ipsum",
    },
    author: {
      email: "cicero@example.com",
    },
    chapters: {
      software: {
        disabled: "Yes",
        notes:
          "Lorem Ipsum is a web application. Hardware accessibility criteria is not applicable.",
      },
    },
  };
  let result = null;

  it("pass some valid chapters JSON should return valid message", () => {
    result = validateOpenACR(validJSON1, validSchema);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal("Valid!");
  });

  it("pass all valid chapters JSON should return valid message", () => {
    result = validateOpenACR(validJSON2, validSchema);
    expect(result.result).to.equal(true);
    expect(result.message).to.equal("Valid!");
  });

  it("pass invalid chapters JSON should return invalid JSON message", () => {
    result = validateOpenACR(invalidJSON1, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/success_criteria_level_a must be object, " +
        "data/chapters/hardware must be object"
    );
  });

  it("pass invalid criteria JSON should return invalid JSON message", () => {
    result = validateOpenACR(invalidJSON2, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/success_criteria_level_a/criteria/0 must be object, " +
        "data/chapters/success_criteria_level_a/criteria/1 must be object"
    );
  });

  it("pass invalid disabled JSON should return invalid JSON message", () => {
    result = validateOpenACR(invalidJSON3, validSchema);
    expect(result.result).to.equal(false);
    expect(result.message).to.equal(
      "Invalid: data/chapters/software/disabled must be boolean"
    );
  });
});
