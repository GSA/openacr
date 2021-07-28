import { expect } from "chai";
import { spawn } from "child_process";

describe("OPAT CLI test output", () => {
  const cmd = "npx";
  const options = ["ts-node", "src/opat.ts", "output", "-f"];

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

  it("when passed a valid file and but no catalog file should return valid output message", () => {
    const valid = spawn(cmd, options.concat("tests/examples/valid.yaml"));
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Valid and output generated at output/opat.markdown!\n"
      );
    });
  });

  it("when passed a valid file and valid catalog file should return valid output message", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "catalog/2.4-edition-508-wcag-2.0.yaml"
      )
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Valid and output generated at output/opat.markdown!\n"
      );
    });
  });

  it("when output file option should return valid output message matching the output file", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "catalog/2.4-edition-508-wcag-2.0.yaml",
        "-o",
        "output/valid.markdown"
      )
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Valid and output generated at output/valid.markdown!\n"
      );
    });
  });
});
