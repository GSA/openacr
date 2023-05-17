import { expect } from "chai";
import { spawn } from "child_process";

describe("OpenACR CLI test validation", () => {
  const cmd = "npx";
  const options = ["ts-node", "src/openacr.ts", "validate", "-f"];

  it("when passed no file should return invalid message", () => {
    const invalid = spawn(cmd, options);
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Invalid: file does not exist\n");
    });
  });

  it("when passed an invalid YAML file should return invalid message", () => {
    const invalid = spawn(cmd, options.concat("README.md"));
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Invalid: file is not in YAML format\n");
    });
  });

  it("when passed an invalid YAML catalog file (not in YAML format) should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat("tests/examples/valid.yaml", "-c", "README.md")
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Invalid: catalog file is not in YAML format\n");
    });
  });

  it("when passed an invalid YAML catalog file should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "tests/examples/invalid-basic.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: catalog data must have required property 'title', " +
          "data must have required property 'lang'\n"
      );
    });
  });

  it("when passed a YAML catalog file with missing chapters should return valid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "tests/examples/catalog-missing-chapters.yaml"
      )
    );
    const chunks = [];

    invalid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed a YAML catalog file with missing components should return valid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "tests/examples/catalog-missing-components.yaml"
      )
    );
    const chunks = [];

    invalid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed a file with missing components should return valid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid-missing-components.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    invalid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed a file that has components with missing adherence should return valid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid-components-missing-adherence.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    invalid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed a file that has components with adherence level set to none should return valid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid-components-adherence-level-none.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    invalid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed a YAML catalog file with components that have no definitions should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "tests/examples/catalog-different-components.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: component 'web' in criteria '1.1.1' has no definition in catalog 'VPAT 2.4 edition 508/WCAG 2.0', " +
          "component 'software' in criteria '1.1.1' has no definition in catalog 'VPAT 2.4 edition 508/WCAG 2.0', " +
          "component 'web' in criteria '1.2.2' has no definition in catalog 'VPAT 2.4 edition 508/WCAG 2.0', " +
          "component 'software' in criteria '1.2.2' has no definition in catalog 'VPAT 2.4 edition 508/WCAG 2.0'\n"
      );
    });
  });

  it("when passed an invalid file with missing metadata properties should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat("tests/examples/invalid-basic.yaml")
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: data must have required property 'title', " +
          "data must have required property 'product', " +
          "data must have required property 'author'\n"
      );
    });
  });

  it("when passed an invalid criteria example should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-criteria.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: criteria '100.100.100' is not included in 'Table 1: Success Criteria, Level A', " +
          "criteria '400.400.400' is not included in 'Chapter 4: Hardware'\n"
      );
    });
  });

  it("when passed an invalid components example should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-components.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: component 'none' is not supported by criteria '1.2.2'\n"
      );
    });
  });

  it("when passed an invalid terms example should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-terms.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: term 'does not support' in criteria '1.2.2' has no definition in catalog 'VPAT® 2.4 Revised Section 508 Edition'\n"
      );
    });
  });

  it("when passed an invalid components & criteria example should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-components-criteria.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: component 'none' is not supported by criteria '1.1.1', " +
          "criteria '400.400.400' is not included in 'Table 1: Success Criteria, Level A'\n"
      );
    });
  });

  it("when passed a valid example with no catalog file should return valid message", () => {
    const valid = spawn(cmd, options.concat("tests/examples/valid.yaml"));
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed an invalid criteria example with no catalog file should return valid message", () => {
    const valid = spawn(
      cmd,
      options.concat("tests/examples/invalid-criteria.yaml")
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed an invalid components example with no catalog file should return valid message", () => {
    const valid = spawn(
      cmd,
      options.concat("tests/examples/invalid-components.yaml")
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed an invalid terms example with no catalog file should return valid message", () => {
    const valid = spawn(
      cmd,
      options.concat("tests/examples/invalid-terms.yaml")
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("when passed a valid file and valid catalog file should return valid message", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml"
      )
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });

  it("confirm drupal example is valid", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "openacr/drupal-9.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.1-508-en.yaml"
      )
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Valid!\n");
    });
  });
});
