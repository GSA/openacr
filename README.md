# OpenACR

[![npm version](https://img.shields.io/npm/v/@civicactions/openacr.svg)](https://www.npmjs.com/package/@civicactions/openacr) [![tests](https://github.com/CivicActions/openacr/actions/workflows/tests.yaml/badge.svg)](https://github.com/CivicActions/openacr/actions/workflows/tests.yaml)

## Context

Many agencies face challenges in delivering accessible services to people with disabilities. Software vendors are often asked to submit accessibility conformance reports (ACR) for their offerings. Many federal contracts require ACRs, but they are also used globally in government, education and in business to business contracts. These ACRs document conformance of these products and services to Section 508 requirements. These claims are generally provided in a MS Word or PDF format which is difficult to search.

These ACRs represent a static snapshot of accessibility when written. A modern ACR would show continuous adherence to accessibility requirements and be validated to see it matches a baseline format.

Responsible agencies test vendor conformance claims. Agency findings should be easily shared with vendors. Finding and sharing up-to-date data should be easy.

## Vision

Improve the use and effectiveness of ACRs when evaluating accessibility of digital tools.

By making accessibility conformance reports machine-readable:

- buyers will be able to make simple comparisons of solutions
- managers may finally be able to determine what interfaces may limit their staff
- executives can better understand the risks of present digital interfaces

## Approach

The OpenACR team is creating an open standard.

Starting with the [ITI VPAT®](https://www.itic.org/policy/accessibility/vpat) framework. VPATs® are well recognized. We will start with [VPAT 2.4Rev 508 (March 07, 2020)](https://www.itic.org/dotAsset/b282ab06-0ab2-4540-adc2-78698058dfc3.doc) (Word) which allows us to build on WCAG 2.0 specifications for the initial framework.

A digital ACR should be highly structured and machine-readable. Once it is machine-readable, we are able to extend its functionality. We looked at a few formats, but settled on YAML, or Yet Another Markup Language, because it allows the text to be human-readable. Earlier attempts at producing a machine-readable ACR used Extensible Markup Language (XML).

Although YAML is human-readable, most people will view an OpenACR as an accessible HTML document in a web browser, as they view a webpage.

Editors can write their results in YAML, but you can also use the [OpenACR editor](https://gsa.github.io/openacr-editor/). This editor is a work-in-progress, and we invite feedback. It is built on the [WAI's ATAG Report Tool](https://wai-atag-report-tool.netlify.app/). This allowed us to align with initiatives from the [W3C WAI](https://www.w3.org/WAI/), but also ensure that the tool would be easy to extend in the future.

This accessible JavaScript editor allows an author to either build an OpenACR file from scratch, or import one that has already been written. From this you can save OpenACR in both a YAML & HTML format. You can experiment with editing files by downloading the Drupal [YAML file](/openacr/drupal-9.yaml) and then loading it into the editor.

This is a stand-alone JavaScript application. Any changes are stored exclusively in your browser. You will need to save the YAML file to your computer in order to access this information in the future. We recommend saving it into a git repository so that changes can be effectively tracked over time.

ACRs should be built with version control in a repository like GitHub or Gitlab. As with all modern software development, version control is key. To see that barriers are addressed, it is important to be able to track changes over time.

We have built the HTML output so that vendors can later edit it to add style elements through CSS. We expect that vendors will want to customize the look/feel and include their branding. The main goal will be to provide a means to easily compare documents so that presentation doesn't get in the way.

## Documentation

Our documentation currently includes a [short summary of the project and our goals](/docs/GSA-OpenACR-Public.md), a [short project roadmap](/docs/ROADMAP.md) and the [Command Line Documentation](/docs/CLI.md). If you want to experiment with this you will need to install this application on your computer.

Initially this project was released under the name Open Product Accessibility Template (OPAT). In November 2021, this was renamed to OpenACR.

## Installation

See the [Command Line Documentation](/docs/CLI.md#install).

## Contributing

We encourage contributions to this project. See our [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

By default, this falls under a public domain license. Some libraries included here may include other licenses (see [licenses.txt](license/licenses.txt)). See our [LICENSE.md](LICENSE.md) file for more information.
