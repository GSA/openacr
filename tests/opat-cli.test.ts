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

  it("when passed an invalid YAML catalog file should return invalid message", () => {
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

  it("when passed an invalid file should return invalid message", () => {
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

  // it("when passed an invalid criteria example should return invalid message", () => {
  //   const invalid = spawn(cmd, options.concat("tests/examples/invalid-criteria.yaml"));
  //   const chunks = [];
  //
  //   invalid.stderr.on("data", (chunk) => {
  //     chunks.push(chunk);
  //   });
  //
  //   invalid.stderr.on("end", () => {
  //     const output = Buffer.concat(chunks).toString();
  //
  //     expect(output).to.equal(
  //       "Invalid: criteria num '1.2.2' is not included in chapter 'Success Criteria, Level A'"
  //     );
  //   });
  // });

  it("when passed a valid file should return valid message", () => {
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

  it("when passed a valid file and valid catalog file should return valid message", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "--cf",
        "catalog/wcag2-catalog.yaml"
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
