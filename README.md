# Open Product Accessibility Template (OPAT)

## Context

GSA has observed that federal agencies face challenges in delivering accessible services to people with disabilities. Software vendors submit accessibility conformance reports (ACR) for their offerings demonstrating that their products meet Section 508 requirements. However, these ACR documents are a static representation of a product's accessibility snapshot in time rather than evidence of continuous adherence to accessibility requirements which could be validated and tested. Currently, the government tests these claims, generating validation test results, but the data is not easily findable and thus can often lead to redundant testing and re-work.

## Vision

To make it easier for organizations to make good decisions regarding accessibility when buying digital.

By making accessibility conformance reports machine-readable:

- buyers will be able to compare solutions more easily
- managers may finally be able to evaluate what interfaces may limit their staff
- executives can better understand the risks of present digital interfaces

## Approach

The team is building OPAT to be an open standard initially based on the framework provided by the [ITI VPAT®](https://www.itic.org/policy/accessibility/vpat). The VPAT® is well recognized and [VPAT 2.4Rev 508 (March 07, 2020)](https://www.itic.org/dotAsset/b282ab06-0ab2-4540-adc2-78698058dfc3.doc) (Word) allows us to build on WCAG 2.0 specifications for the initial framework.

The ACR will be written in YAML to allow the text to be more human readable and allow us to include comments. Most users will interact with the ACR as either markdwon files or accessible HTML. These are generated from YAML files by a JavaScript tool which validates the data before creating the [Markdown](https://guides.github.com/features/mastering-markdown/) and HTML files. We have set up an example based on Drupal 9. The Drupal [YAML file](https://github.com/GSA/open-product-accessibility-template/blob/main/opat/drupal-9.yaml) is used to generate both the [Markdown](https://github.com/GSA/open-product-accessibility-template/blob/main/opat/drupal-9.markdown) & [HTML](https://github.com/GSA/open-product-accessibility-template/blob/main/opat/drupal-9.html) files. On GitHub, it is actually easier to read the Markdown file, but the information will be equivalent.

Vendors can add style elements through CSS, if they choose to custimize the look/feel and include their branding. The main goal will be to provide a means to easily compare documents so that presentation doesn't get in the way.

The repositories will be built on a git repository like GitHub so that version control is included. Authors can write the compliance report as YAML files manually, or use a tool similar to [WCAG-EM](https://www.w3.org/WAI/eval/report-tool/#!/).

## Documentation

Our documentation currently includes a [short summary of the project and our goals](/docs/GSA-OPAT-Public.md), a [short project roadmap](/docs/ROADMAP.md) and the [Command Line Documentation](/docs/CLI.md) you would use to install this application locally.

## Contributing

We encourage contributions to this project. See our CONTRIBUTING.md file for more information.

## License

By default this falls under a public domain license. Some libraries included here may include other licenses. See our LICENSE.md file for more information.
