import { expect } from "chai";
import { spawn } from "child_process";

describe("Validate OPAT CLI", () => {
  const cmd = "npx";
  const options = ["ts-node", "src/opat.ts", "validate", "-f"];

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
      options.concat("tests/examples/valid.yaml", "--cf", "README.md")
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
        "--cf",
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
        "Invalid: data must have required property 'title'\n"
      );
    });
  });

  it("when passed a YAML catalog file with missing chapters should return valid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "--cf",
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
        "--cf",
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
        "--cf",
        "catalog/2.4-edition-508-wcag-2.0.yaml"
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
          "data must have required property 'contact'\n"
      );
    });
  });

  it("when passed an invalid criteria example should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-criteria.yaml",
        "--cf",
        "catalog/2.4-edition-508-wcag-2.0.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: criteria num '100.100.100' is not included in 'Success Criteria, Level A', " +
          "criteria num '400.400.400' is not included in 'Hardware'\n"
      );
    });
  });

  it("when passed an invalid components example should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-components.yaml",
        "--cf",
        "catalog/2.4-edition-508-wcag-2.0.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: component name 'documents' is not defined in catalog 'VPAT 2.4 edition 508/WCAG 2.0', " +
          "component name 'website' is not defined in catalog 'VPAT 2.4 edition 508/WCAG 2.0'\n"
      );
    });
  });

  it("when passed an invalid components & criteria example should return invalid message", () => {
    const invalid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-components-criteria.yaml",
        "--cf",
        "catalog/2.4-edition-508-wcag-2.0.yaml"
      )
    );
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Invalid: component name 'documents' is not defined in catalog 'VPAT 2.4 edition 508/WCAG 2.0', " +
          "criteria num '400.400.400' is not included in 'Success Criteria, Level A', " +
          "component name 'website' is not defined in catalog 'VPAT 2.4 edition 508/WCAG 2.0'\n"
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

  it("when passed a valid file and valid catalog file should return valid message", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "--cf",
        "catalog/2.4-edition-508-wcag-2.0.yaml"
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

  it("when passed an invalid criteria example and bad catalog file should return valid message", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/invalid-criteria.yaml",
        "--cf",
        "tests/examples/bad-wcag2-catalog.yaml"
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
