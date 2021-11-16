# Open Product Accessibility Template (OPAT)

[![tests](https://github.com/GSA/open-product-accessibility-template/actions/workflows/tests.yaml/badge.svg)](https://github.com/GSA/open-product-accessibility-template/actions/workflows/tests.yaml)

## Context

Many agencies face challenges in delivering accessible services to people with disabilities. Software vendors submit accessibility conformance reports (ACR) for their offerings. These ACRs document conformance of these products and services to Section 508 requirements. These claims are generally provided in a PDF format which is difficult to search. At best these ACR represent a static snapshot of accessibility when written. A modern ACR should show evidence of continuous adherence to accessibility requirements. It should also be at least validated to see it matches a baseline format.

Responsible agencies often test these vendor conformance claims. The work of validating these claims should be easily shared back with the vendors. Finding and sharing up-to-date data should be easy.

## Vision

Improve the use and effectiveness of ACRs when evaluating accessibility of digital tools.

By making accessibility conformance reports machine-readable:

- buyers will be able to make simple comparisons of solutions
- managers may finally be able to determine what interfaces may limit their staff
- executives can better understand the risks of present digital interfaces

## Approach

The OPAT team is building this ACR to be an open standard.
Starting with the [ITI VPAT®](https://www.itic.org/policy/accessibility/vpat) framework. VPATs® are well recognized. We will start with [VPAT 2.4Rev 508 (March 07, 2020)](https://www.itic.org/dotAsset/b282ab06-0ab2-4540-adc2-78698058dfc3.doc) (Word) which allows us to build on WCAG 2.0 specifications for the initial framework.

A digital ACR needs to be highly structured, to be machine-readable. Once it is machine-readable, we will be able to extend its functionality. We looked at a few formats, but settled on YAML because it allowed the text to be more human-readable. YAML stands for Yet Another Markup Language. Earlier attempts at producing a machine-readable VPAT used Extensible Markup Language (XML).

Although YAML is the foundation of OPAT, the expectation isn't for people to read. Users will read the HTML or [Markdown](https://guides.github.com/features/mastering-markdown/) output of the YAML file in a document that looks much like a VPAT.

Editors could write their results in YAML, but we expect most will use an editor. We are looking at creating a tool based on [WCAG-EM](https://www.w3.org/WAI/eval/report-tool/#!/).

A JavaScript tool takes the YAML files and generates both the HTML and Markdown files. This tool first validates the data before creating the files. We have set up an example based on Drupal 9. The Drupal [YAML file](/opat/drupal-9.yaml) is used to generate both the [HTML](/opat/drupal-9.html) and [Markdown](/opat/drupal-9.markdown) files. On GitHub, it is actually easier to read the Markdown file, but the information will be the same.

We have built the HTML output so that vendors can add style elements through CSS. We expect that vendors will want to customize the look/feel and include their branding. The main goal will be to provide a means to easily compare documents so that presentation doesn't get in the way.

ACRs should be built with version control in a repository like GitHub. As with all modern software development, version control is key. To see that barriers are addressed, it is important to be able to track changes over time.

## Documentation

Our documentation currently includes a [short summary of the project and our goals](/docs/GSA-OPAT-Public.md), a [short project roadmap](/docs/ROADMAP.md) and the [Command Line Documentation](/docs/CLI.md). If you want to experiment with this you will need to install this application on your computer.

## Installation

See the [Command Line Documentation](/docs/CLI.md#install).

## Contributing

We encourage contributions to this project. See our [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

By default, this falls under a public domain license. Some libraries included here may include other licenses (see [licenses.txt](license/licenses.txt)). See our [LICENSE.md](LICENSE.md) file for more information.
