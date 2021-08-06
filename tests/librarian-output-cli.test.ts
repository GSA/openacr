import { expect } from "chai";
import { spawn } from "child_process";

describe("Librarian test output", () => {
  const cmd = "npx";
  const options = ["ts-node", "src/librarian.ts", "-c"];

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
          "Successfully created catalog ./catalog/2.4-edition-wcag-2.0-508.yaml.\n"
      );
    });
  });
});
