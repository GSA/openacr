# OpenACR CLI

## Introduction

The OpenACR command-line interface (CLI) is built in typescript. It takes an OpenACR and WCAG/508 (and other) criteria as YAML files as input and validates them using the OpenACR defined schemas and OpenACR catalog.

## Requirements

You need the latest version of [Node](https://nodejs.org/en/) and NPM installed. There are multiple ways to download NPM but recommendations are to [use NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Install

Clone the GitHub repository and cd into that directory.

```bash
git clone https://github.com/GSA/openacr.git
cd openacr
```

Then install the dependencies with the following NPM command:

```bash
npm install
```

## Source

Main application code is in the `src` directory.

## Commands and examples

The OpenACR CLI can be executed without compiling using [`ts-node`](https://typestrong.org/ts-node/). Currently, the CLI can validate entered YAML and output it in markdown.

### Help

Use `--help` to reveal the CLI instructions.

```bash
> npx ts-node src/openacr.ts --help
openacr.ts <command>

Commands:
  openacr.ts validate  Validate OpenACR content

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

> npx ts-node src/openacr.ts validate --help
openacr.ts validate

Validate OpenACR content

Options:
      --help         Show help                                         [boolean]
      --version      Show version number                               [boolean]
  -f, --file         Content filename                        [string] [required]
  -c, --catalogFile  Catalog filename                                   [string]
> npx ts-node src/openacr.ts output --help
openacr.ts output

Output OpenACR in markdown

Options:
      --help         Show help                                         [boolean]
      --version      Show version number                               [boolean]
  -f, --file         Content filename                        [string] [required]
  -c, --catalogFile  Catalog filename                                   [string]
  -o, --outputFile   Output filename                                    [string]
  -t, --templateFile  Handlebar template filename                       [string]
```

### Examples

You can test the CLI with the following example commands:

```bash
# Only validate
npx ts-node src/openacr.ts validate -f tests/examples/valid.yaml # Output: Valid!
npx ts-node src/openacr.ts validate -f tests/examples/invalid-basic.yaml # Output: Invalid: ...
npx ts-node src/openacr.ts validate -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Valid!
npx ts-node src/openacr.ts validate -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml # Output: Valid!
npx ts-node src/openacr.ts validate -f tests/examples/invalid-criteria.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Invalid: ...
npx ts-node src/openacr.ts validate -f tests/examples/invalid-components.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Invalid: ...
npx ts-node src/openacr.ts validate -f tests/examples/invalid-components-criteria.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml # Output: Invalid: ...
npx ts-node src/openacr.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-missing-components.yaml # Output: Valid!
npx ts-node src/openacr.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-missing-chapters.yaml # Output: Valid!
npx ts-node src/openacr.ts validate -f tests/examples/valid.yaml -c tests/examples/catalog-different-components.yaml # Output: Invalid: ...
# Validate and Output
npx ts-node src/openacr.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o tests/examples/valid.markdown # Output: Valid ...
npx ts-node src/openacr.ts output -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml -o openacr/drupal-9.markdown # Output: Valid ...
# Use a different handlerbar template
npx ts-node src/openacr.ts output -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml -o openacr/drupal-9-simple.html -t templates/openacr-simple-html-0.1.0.handlebars # Output: Valid ...
```

## Schemas

Located in the 'schema' folder:

- `openacr-0.1.0.json` the OpenACR schema.
- `openacr-catalog-0.1.0.json` the OpenACR catalog schema. Used to create catalogs defining the criteria and components for WCAG 2.0/2.1, 508, EU, and so on.

## Catalogs

The catalogs are in `catalog`. They are generated using the librarian utility (see [Librarian docs](/docs/Librarian.md) for more details).

The catalogs will be validated against a defined schema (`openacr-catalog-0.1.0.json`) when running the commands.

Catalogs:

- `2.4-edition-wcag-2.0-508-en.yaml` the 508 catalog.

In the validate command, if the catalog file is missing the `validate` command will only check that the YAML file meets the basic schema defined.

## Output

The `output` command can take an optional file path (default is `output/openacr.markdown`) and converts the validated YAML file to markdown (default) or HTML.

The command uses [handlebars](https://handlebarsjs.com/) and the default templates defined in `templates` to render the output:

- `openacr-markdown-0.1.0.handlebars` is the markdown template.
- `openacr-html-0.1.0.handlebars` is the HTML template.

### Examples

We checked in an example of the markdown and HTML output in `tests/examples` and `openacr`. To regenerate the examples run the following commands and commit the changes:

```bash
npm run generate-example-output # Full command `npx ts-node src/openacr.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o tests/examples/valid.markdown`
npm run generate-drupal-output # Full command `npx ts-node src/openacr.ts output -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml -o openacr/drupal-9.markdown`
npm run generate-example-html # Full command `npx ts-node src/openacr.ts output -f tests/examples/valid.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o tests/examples/valid.html`
npm run generate-drupal-html # Full command `npx ts-node src/openacr.ts output -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml -o openacr/drupal-9.html`
npm run generate-drupal-simple # Full command `npx ts-node src/openacr.ts output -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml -o openacr/drupal-9-simple.html -t templates/openacr-simple-html-0.1.0.handlebar`
```

We also have a GitHub action called 'Drupal 9 OpenACRs output' that will generate the markdown and HTML versions of the Drupal 9 OpenACRs. It is run on pull requests, and the output can be downloaded to double-check it is matching expectations.

The tests also generates output that is stored in the `output` directory but is not tracked by git.

### USWDS Design System and stylesheets

The HTML output comes with and uses styles from the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/).

The output also includes two stylesheets that provide additional styling for the OpenACRs:

- `openacr.css` has customization on top of the USWDS design system.
- `custom.css` provided to add any additional customizations.

### Use your own handlebar template

To use your own handlebar template the `output` command can take an optional template file path. We recommend copying the template `openacr-simple-html-0.1.0.handlebars` and modifying it with your CSS and HTML adjustments but keeping the majority of the structure and custom handlebar functions intact, so you get the ACR output that has all the details. The simple template includes CSS but no USWDS stylings but does rely on USWDS classes to keep the handlebar functions simple for now.

## OpenACRs

Current example OpenACRs that are tracked in this repository are in the `openacr` directory. The directory includes a data table representation of all the OpenACRs with the ability to search them.

OpenACRs:

- drupal-9.yaml: Current Drupal 9 OpenACR.
- govready-0.9.yaml
- Moodle-3.yaml
- NVDA-2018.yaml
- Plone-5.yaml

To regenerate the above OpenACR markdown and HTML reports run the following commands:

```bash
npx ts-node src/openacr.ts output -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml -o openacr/drupal-9.html
npx ts-node src/openacr.ts output -f openacr/drupal-9.yaml -c catalog/2.4-edition-wcag-2.1-508-en.yaml -o openacr/drupal-9.markdown
npx ts-node src/openacr.ts output -f openacr/govready-0.9.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/govready-0.9.html
npx ts-node src/openacr.ts output -f openacr/govready-0.9.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/govready-0.9.markdown
npx ts-node src/openacr.ts output -f openacr/Moodle-3.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/Moodle-3.html
npx ts-node src/openacr.ts output -f openacr/Moodle-3.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/Moodle-3.markdown
npx ts-node src/openacr.ts output -f openacr/NVDA-2018.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/NVDA-2018.html
npx ts-node src/openacr.ts output -f openacr/NVDA-2018.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/NVDA-2018.markdown
npx ts-node src/openacr.ts output -f openacr/Plone-5.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/Plone-5.html
npx ts-node src/openacr.ts output -f openacr/Plone-5.yaml -c catalog/2.4-edition-wcag-2.0-508-en.yaml -o openacr/Plone-5.markdown
```

## Tests

Tests can be run by executing the command:

```bash
npm test
```

The following files located in `tests/examples` are different types of versions of an OpenACR, catalog, markdown, and so on that are used for testing the application:

- catalog-different-components.yaml: Has different components to test how a previous valid OpenACR is invalid and vice-versa.
- catalog-missing-chapters.yaml: No chapters.
- catalog-missing-components.yaml: No components.
- every-example-of-keywords.yaml: Every example of terms.
- invalid-basic.yaml: Very incorrect OpenACR example. Used for sanity checks.
- invalid-components.yaml: Has incorrect components (E.g., includes 'none' in criteria '1.2.2').
- invalid-components-criteria.yaml: Has incorrect components and criteria.
- invalid-criteria.yaml: Has incorrect criteria (E.g., instead of '1.1.1' it has '100.100.100').
- invalid-terms.yaml: Has incorrect terms (E.g., includes level 'does not support' in criteria '1.2.2').
- valid.markdown: Is a custom output markdown file of the OpenACR after it has been validated.
- valid.yaml: A valid OpenACR example (few chapters).
- valid-missing-components.yaml: A valid OpenACR example with no components in criteria '1.2.2'.

_Note_: If there are CLI errors, the `openacr-validate-cli.test.ts` says tests have passed initially but after that you get the assertion error and error code 7.

## Source code management

### Linting

We use prettier and eslint to keep the code clean and matching common standards for typescript and javascript. The configurations are located in:

- .eslintignore
- .eslingrc
- .prettierignore
- .prettierrc.json

**Caveat**: since we are creating a new JSON scheme the typescript code does use 'any' for various function arguments.

### pre-commit

We use [pre-commit](https://pre-commit.com/) to run some checks and cleanup when you make a commit:

- Remove trailing whitespace.
- Fix end of file.
- Adjust mixed line endings.
- Remove byte order marker.
- Check and fix YAML/JSON files.
- Check for any large files.
- Replace smart quotes with regular ones.
- Run prettier.

Pre-commit is also run on pull requests and will add a commit with any changes automatically. To set it up locally install pre-commit and then run the following command in the repo folder:

```bash
pre-commit install
```

The configurations for pre-commit are located in the files:

- .pre-commit-config.yaml
- .pre-commit-search-and-replace.yaml
