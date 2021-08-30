# OPAT CLI

## Introduction

The OPAT command-line interface (CLI) is built in typescript. It takes an OPAT and WCAG/508 (and other) criteria as YAML files as input and validates them using the OPAT defined schemas and OPAT catalog.

## Requirements

You need the latest version of NPM installed.  There are multiple ways to download NPM but recommendations are to [use NVM](https://github.com/nvm-sh/nvm#install--update-script). More instructions on [updating NPM](https://www.geeksforgeeks.org/how-to-update-npm/) are also available. 

## Install

Clone the GitHub repository and cd into that directory.

```
git clone https://github.com/GSA/open-product-accessibility-template.git
cd open-product-accessibility-template
```

Then install the dependencies with the following NPM command:

```
bash
npm install
```

## Source

Main application code is in the `src` directory.

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

You can test the CLI with the following example commands:

```bash
# Only validate
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/invalid-basic.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f opat/drupal-9.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/invalid-criteria.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/invalid-components.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/invalid-components-criteria.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Invalid: ...
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-missing-components.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-missing-chapters.yaml # Output: Valid!
npx ts-node src/opat.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-different-components.yaml # Output: Invalid: ...
# Validate and Output
npx ts-node src/opat.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o tests/examples/valid.markdown # Output: Valid ...
npx ts-node src/opat.ts output -f opat/drupal-9.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o opat/drupal-9.markdown # Output: Valid ...
```

## Schemas

Located in the 'schema' folder:

- `opat-0.1.0.json` the OPAT schema.
- `opat-catalog-0.1.0.json` the OPAT catalog schema. Used to create catalogs defining the criteria and components for WCAG 2.0/2.1, 508, EU, and so on.

## Catalogs

The catalogs are in `catalog`. They are generated using the librarian utility (see [Librarian docs](/docs/Librarian.md) for more details).

The catalogs will be validated against a defined schema (`opat-catalog-0.1.0.json`) when running the commands.

Catalogs:

- `2.4-edition-wcag-2.0-508-en.yaml` the 508 catalog.

In the validate command, if the catalog file is missing the `validate` command will only check that the YAML file meets the basic schema defined.

## Output

The `output` command can take an optional file path (default is `output/opat.markdown`) and converts the validated YAML file to markdown (default) or HTML.

The command uses [handlebars](https://handlebarsjs.com/) and the templates defined in `templates` to render the output:

- `opat-markdown-0.1.0.handlebars` is the markdown template.
- `opat-html-0.1.0.handlebars` is the HTML template.

### Examples

We checked in an example of the markdown and HTML output in `tests/examples` and `opat`. To regenerate the examples run the following commands and commit the changes:

```bash
npm run generate-example-output # Full command `npx ts-node src/opat.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o tests/examples/valid.markdown`
npm run generate-drupal-output # Full command `npx ts-node src/opat.ts output -f opat/drupal-9.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o opat/drupal-9.markdown`
npm run generate-example-html # Full command `npx ts-node src/opat.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o tests/examples/valid.html`
npm run generate-drupal-html # Full command `npx ts-node src/opat.ts output -f opat/drupal-9.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o opat/drupal-9.html`
```

We also have a GitHub action called 'Drupal 9 OPAT output' that will generate the markdown and HTML versions of the Drupal 9 OPAT. It is run on pull requests, and the output can be downloaded to double-check it is matching expectations.

The tests also generates output that is stored in the `output` directory but is not tracked by git.

### USWDS Design System and stylesheets

The HTML output comes with and uses styles from the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/).

The output also includes two stylesheets that provide additional styling for the OPAT:

- `opat.css` has customization on top of the USWDS design system.
- `custom.css` provided to add any additional customizations.

## OPATs

Current example OPATs that are tracked in this repository are in the `opat` directory. The directory includes a data table representation of all the OPATs with the ability to search them.

OPATs:

- drupal-9.yaml: Current Drupal 9 OPAT.

## Tests

Tests can be run by executing the command:

```bash
npm test
```

The following files located in `tests/examples` are different types of versions of an OPAT, catalog, markdown, and so on that are used for testing the application:

- catalog-different-components.yaml: Has different components to test how a previous valid OPAT is invalid and vice-versa.
- catalog-missing-chapters.yaml: No chapters.
- catalog-missing-components.yaml: No components.
- every-example-of-keywords.yaml: Every example of terms.
- invalid-basic.yaml: Very incorrect OPAT example. Used for sanity checks.
- invalid-components.yaml: Has incorrect components (E.g., includes 'none' in criteria '1.2.2').
- invalid-components-criteria.yaml: Has incorrect components and criteria.
- invalid-criteria.yaml: Has incorrect criteria (E.g., instead of '1.1.1' it has '100.100.100').
- invalid-terms.yaml: Has incorrect terms (E.g., includes level 'does not support' in criteria '1.2.2').
- valid.markdown: Is a custom output markdown file of the OPAT after it has been validated.
- valid.yaml: A valid OPAT example (few chapters).
- valid-missing-components.yaml: A valid OPAT example with no components in criteria '1.2.2'.

_Note_: If there are CLI errors, the `opat-validate-cli.test.ts` says tests have passed initially but after that you get the assertion error and error code 7.
