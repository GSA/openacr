# Open Product Accessibility Template (OPAT)

## Context

GSA has observed that federal agencies face challenges in delivering accessible services to people with disabilities. Software vendors submit accessibility conformance reports (ACR) for their offerings demonstrating that their products meet Section 508 requirements. However, these ACR documents are a static representation of a product's accessibility snapshot in time rather than evidence of continuous adherence to accessibility requirements which could be validated and tested.  Currently, the government tests these claims, generating validation test results, but the data is not easily findable and thus can often lead to redundant testing and re-work.

This project will develop a digital product accessibility template minimum viable product (MVP) based on Section 508 requirements to enable machine-readable documentation of accessibility conformance and support automated accessibility testing.

## Approach

The team is building OPAT to be an open standard initially based on the framework provided by the [ITI VPAT®](https://www.itic.org/policy/accessibility/vpat). The VPAT® is well recognized and [VPAT 2.4Rev 508 (March 07, 2020)](https://www.itic.org/dotAsset/b282ab06-0ab2-4540-adc2-78698058dfc3.doc) (Word) allows us to build on WCAG 2.0 specifications for the initial framework. 

The ACR will be written in YAML to allow the text to be more human readable and allow us to include comments. This will be part of the JSON Schema used to associate a catalog/schema and provide further expansion. 

Most users will interact with the ACR as accessible HTML files. These will be generated from the YAML files by JavaScript tool which extracts the content into structured HTML. The style elements will then be added by CSS, which vendors will be free to customize to include their branding. 

The repositories will be built on a git repository like GitHub so that version control is included. Authors can write the compliance report as JSON files manually, or use a tool similar to WCAG-EM.


## Contributing

We encourage contributions to this project. See our CONTRIBUTING.md file for more information.

## License

By default this falls under a public domain license. Some libraries included here may include other licenses. See our LICENSE.md file for more information.
