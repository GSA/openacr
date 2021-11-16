import { expect } from "chai";
import { spawn } from "child_process";

describe("OpenACR CLI test output", () => {
  const cmd = "npx";
  const options = ["ts-node", "src/openacr.ts", "output", "-f"];

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
        "Valid and output generated at output/openacr.markdown!\n"
      );
    });
  });

  it("when passed a valid file and valid catalog file should return valid output message", () => {
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

      expect(output).to.equal(
        "Valid and output generated at output/openacr.markdown!\n"
      );
    });
  });

  it("when passed a every example of keywords file and valid catalog file should return valid output message", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/every-example-of-keywords.yaml",
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

      expect(output).to.equal(
        "Valid and output generated at output/openacr.markdown!\n"
      );
    });
  });

  it("when passed output markdown file option should return valid output message matching the output file", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml",
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

  it("when passed output HTML file option should return valid output message matching the output file", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "tests/examples/valid.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml",
        "-o",
        "output/valid.html"
      )
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Valid and output generated at output/valid.html!\n"
      );
    });
  });

  it("confirm drupal example output is valid", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "openacr/drupal-9.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml",
        "-o",
        "output/drupal-9.markdown"
      )
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Valid and output generated at output/drupal-9.markdown!\n"
      );
    });
  });

  it("confirm drupal HTML output is valid", () => {
    const valid = spawn(
      cmd,
      options.concat(
        "openacr/drupal-9.yaml",
        "-c",
        "catalog/2.4-edition-wcag-2.0-508-en.yaml",
        "-o",
        "output/drupal-9.html"
      )
    );
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Valid and output generated at output/drupal-9.html!\n"
      );
    });
  });
});
