import { expect } from "chai";
import { spawn } from "child_process";

describe("Librarian test output", () => {
  const cmd = "npx";
  const options = ["ts-node", "src/librarian.ts", "-c"];

  it("when passed no catalog should return invalid message", () => {
    const invalid = spawn(cmd, options);
    const chunks = [];

    invalid.stderr.on("data", (chunk) => {
      chunks.push(chunk);
    });

    invalid.stderr.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal("Invalid: no catalog entered.\n");
    });
  });

  it("confirm 508 example output is valid", () => {
    const valid = spawn(cmd, options.concat("508"));
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Warning: This will rebuild the following catalog: 508.\n" +
          "Successfully created catalog ./catalog/2.4-edition-wcag-2.0-508-en.yaml.\n"
      );
    });
  });

  it("confirm WCAG example output is valid", () => {
    const valid = spawn(cmd, options.concat("WCAG"));
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Warning: This will rebuild the following catalog: WCAG.\n" +
          "Successfully created catalog ./catalog/2.4-edition-wcag-2.1-en.yaml.\n"
      );
    });
  });

  it("confirm WCAG21508 example output is valid", () => {
    const valid = spawn(cmd, options.concat("WCAG21508"));
    const chunks = [];

    valid.stdout.on("data", (chunk) => {
      chunks.push(chunk);
    });

    valid.stdout.on("end", () => {
      const output = Buffer.concat(chunks).toString();

      expect(output).to.equal(
        "Warning: This will rebuild the following catalog: WCAG21508.\n" +
          "Successfully created catalog ./catalog/2.4-edition-wcag-2.1-508-en.yaml.\n"
      );
    });
  });

  const other_catalogs = ["EU", "INT", "RANDOM"];

  for (const other_catalog of other_catalogs) {
    it(`confirm ${other_catalog} example output is valid`, () => {
      const valid = spawn(cmd, options.concat(other_catalog));
      const chunks = [];

      valid.stderr.on("data", (chunk) => {
        chunks.push(chunk);
      });

      valid.stderr.on("end", () => {
        const output = Buffer.concat(chunks).toString();

        expect(output).to.equal(
          `${other_catalog} is currently not supported.\n`
        );
      });
    });
  }
});
