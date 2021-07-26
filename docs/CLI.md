# OPAT CLI

## Introduction

The OPAT command-line interface (CLI) is built in typescript. It takes an OPAT and WCAG/508 (and other) criteria as YAML files as input and validates them using the OPAT defined schemas and OPAT catalog.

## Install

Install the dependencies with the following NPM command:

```bash
npm install
```

## Commands and examples

The OPAT CLI can be executed without compiling using [`ts-node`](https://typestrong.org/ts-node/). Currently, the CLI can only validate entered YAML.

### Help

Use `--help` to reveal the CLI instructions.

```bash
> npx ts-node src/opat.ts --help
opat.ts <command>

Commands:
  opat.ts validate  Validate OPAT content

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

> npx ts-node src/opat.ts validate --help
opat.ts validate

Validate OPAT content

Options:
      --help               Show help                                   [boolean]
      --version            Show version number                         [boolean]
  -f, --file               Content filename                  [string] [required]
      --catalogFile, --cf  Catalog filename                             [string]
```

### Examples

You can test the CLI with the following examples:

```bash
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/invalid-basic.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -cf catalog/2.4-edition-508-wcag-2.0.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/invalid-criteria.yaml -cf catalog/2.4-edition-508-wcag-2.0.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/invalid-components.yaml --cf catalog/2.4-edition-508-wcag-2.0.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/invalid-components-criteria.yaml --cf catalog/2.4-edition-508-wcag-2.0.yaml # Output: Invalid: ...
```

Where:

- tests/examples/valid.yaml: Current valid OPAT example (few chapters).
- tests/examples/invalid-basic.yaml: Very incorrect OPAT example. Used for sanity checks.
- catalog/wcag2-catalog.yaml: Current WCAG 2.0 catalog (few criteria).
- tests/examples/invalid-criteria.yaml: Has incorrect criteria (E.g., instead of '1.1.1' it has '100.100.100').
- tests/examples/invalid-components.yaml: Has incorrect components (E.g., instead of 'web' it has 'website').

## Schemas

Located in the 'schema' folder:

- `opat-0.1.0.json` the OPAT schema.
- `opat-catalog-0.1.0.json` the OPAT catalog schema. Used to create catalogs defining the criteria and components for WCAG 2.0/2.1, 508, EU, and so on.

## Notes

- If the catalog file is missing the `validate` command will only check that the YAML file meets the schema defined.
- The catalog file will be also validated that it meets the defined schema (`opat-catalog-0.1.0.json`).

## Tests

Tests can be run by executing the command:

```bash
npm test
```

_Note_: If there are CLI errors, the `opat-cli.test.ts` says tests have passed initially but after that you get the assertion error and error code 7.
