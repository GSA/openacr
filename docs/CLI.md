# OPAT CLI

## Introduction

The OPAT command-line interface (CLI) is built in typescript. It takes an OPAT and WCAG/508 (and other) criteria as YAML files as input and validates them using the OPAT defined schemas and OPAT catalog.

## Install

Install the dependencies with the following NPM command:

```bash
npm install
```

## Commands and examples

The OPAT CLI can be executed without compiling using [`ts-node`](https://typestrong.org/ts-node/). Currently, the CLI can validate entered YAML and output it in markdown.

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
      --help         Show help                                         [boolean]
      --version      Show version number                               [boolean]
  -f, --file         Content filename                        [string] [required]
  -c, --catalogFile  Catalog filename                                   [string]
> npx ts-node src/opat.ts output --help
opat.ts output

Output OPAT in markdown

Options:
      --help         Show help                                         [boolean]
      --version      Show version number                               [boolean]
  -f, --file         Content filename                        [string] [required]
  -c, --catalogFile  Catalog filename                                   [string]
  -o, --outputFile   Output filename                                    [string]
```

### Examples

You can test the CLI with the following examples:

```bash
# Only validate
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/invalid-basic.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f opat/drupal-9.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/invalid-criteria.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/invalid-components.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/invalid-components-criteria.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-missing-components.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-missing-chapters.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-different-components.yaml # Output: Invalid: ...
# Validate and Output
npx ts-node src/opat.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml -o tests/examples/valid.markdown # Output: Valid ...
npx ts-node src/opat.ts output -f opat/drupal-9.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml -o output/drupal-9.markdown # Output: Valid ...
```

Where:

- tests/examples/valid.yaml: Current valid OPAT example (few chapters).
- tests/examples/invalid-basic.yaml: Very incorrect OPAT example. Used for sanity checks.
- opat/drupal-9.yaml: Current Drupal 9 OPAT.
- catalog/wcag2-catalog.yaml: Current WCAG 2.0 catalog.
- tests/examples/invalid-criteria.yaml: Has incorrect criteria (E.g., instead of '1.1.1' it has '100.100.100').
- tests/examples/invalid-components.yaml: Has incorrect components (E.g., includes 'none' in criteria '1.2.2').
- tests/examples/invalid-components-criteria.yaml: Has incorrect components and criteria.
- tests/examples/catalog-missing-components.yaml: No components.
- tests/examples/catalog-missing-chapters.yaml: No chapters.
- tests/examples/catalog-different-components.yaml: Has different components to test how a previous valid OPAT is invalid and vice-versa.
- tests/examples/valid.markdown: Is a custom output markdown file of the OPAT after it has been validated.
- output/drupal-9.markdown: Generates markdown output of the Drupal 9 OPAT.

## Schemas

Located in the 'schema' folder:

- `opat-0.1.0.json` the OPAT schema.
- `opat-catalog-0.1.0.json` the OPAT catalog schema. Used to create catalogs defining the criteria and components for WCAG 2.0/2.1, 508, EU, and so on.

## Notes

- If the catalog file is missing the `validate` command will only check that the YAML file meets the schema defined.
- The catalog file will be also validated that it meets the defined schema (`opat-catalog-0.1.0.json`).

## Output

The `output` command can take an optional file path (default is `output/opat.markdown`) and converts the validated YAML file to markdown.

The command uses [handlebars](https://handlebarsjs.com/) and the template `opat-0.1.0.handlebars` defined in `templates` to render the markdown.

We checked in an example of the markdown output in `tests/examples/valid.markdown`. To regenerate the example run the command below and commit the changes:

```bash
npx ts-node src/opat.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-508-wcag-2.0.yaml -o tests/examples/valid.markdown # Output: Valid ...
```

## Tests

Tests can be run by executing the command:

```bash
npm test
```

_Note_: If there are CLI errors, the `opat-validate-cli.test.ts` says tests have passed initially but after that you get the assertion error and error code 7.
