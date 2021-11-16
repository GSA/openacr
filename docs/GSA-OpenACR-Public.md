<img align="right" alt="GSA Logo" src="/docs/images/nav-logo.png"/>

# OpenACR

**Machine-readable technology product accessibility conformance**

## Overview

The OpenACR (previously known as Open Product Accessibility Template or OPAT) is machine-readable documentation of an information and communications technology (ICT) product's accessibility conformance.
Based on Section 508 requirements and Web Content Accessibility Guidelines (WCAG) 2.0 conformance, OpenACR is based on the Information Technology Industry Council's Voluntary Product Accessibility Template (VPATⓇ).

## Context

The U.S. General Services Administration (GSA) has observed that federal agencies face challenges in delivering accessible services to people with disabilities.
To ensure ICT products used by the government are accessible, vendors must submit accessibility conformance reports (ACR) to demonstrate their products meet Section 508 requirements. However, these ACR documents (in the form of the VPAT) are static reports rather than evidence of continuous, timely adherence.
The OpenACR project will solve this by developing a template that enables machine-readable documentation —which thereby enables ongoing, automated accessibility testing. This pilot project will deliver a minimum viable product (MVP) with the intention of expanding and refining it over time.

## Vision

To empower organizations to make better informed decisions about accessibility when buying ICT products. By converting ACR to machine-readable:

- Buyers can more easily compare solutions
- Managers can finally evaluate what interfaces may limit their staff
- Executives can better understand the risks of present digital interfaces
- Vendors can provide government better transparency into product accessibility conformance

## Approach

The team is building OpenACR to be an open standard. The ACR will be written in YAML because it is more human-readable and it allows us to include comments. A JSON Schema will be used to define core data structures and a catalog to list the elements needed.
Most users will interact with the ACR as accessible HyperText Markup Language (HTML) files. These will be generated from the YAML files by a JavaScript tool that extracts the content into structured HTML. The style elements will then be added by CSS, which vendors can customize for branding.
The repositories will be built on a Git repository like GitHub so that version control is included. Authors can write the compliance report as YAML files manually, or use a WYSIWYG editor.

## Challenge

- Most ACRs are not updated on pace with continuous ICT product releases
- A static format (example: MS Word) makes it difficult to perform automated comparisons between versions or similar products
- ACRs are usually private documents, difficult to find, and not visible to the public
- There is no opportunity for public input or bug reporting to a vendor ACR
- ACRs are not built to align with existing W3C Initiatives

## Solution

- A machine-readable semantic version that separates content from the presentation layer
- An intuitive user interface that empowers software vendors to generate an ACR that can be written in open standards, allowing the product to be extended
- An enterprise view where multiple ACRs to be organized and consistently presented
- A function that compares ACR versions and tracks changes over time
- A built-in validation layer to ensure data quality and integrity

## Technology

- Developed on Git infrastructure, initially GitHub
- Written in YAML so that text is human-readable and commentable
- [JSON Schema](https://json-schema.org/) to define core data structures and a catalog to list the elements needed
- YAML to HTML via a JavaScript tool to extract content and add style (with Cascading Style Sheets)
- JavaScript interfaces for generating the ACR (e.g. WYSIWYG editor)
- Simple directory view for YAML files, which allows for easy findability

## License

Released under [Creative Commons](https://creativecommons.org/publicdomain/zero/1.0/) license

## Learn more

- Website
- [Repository](http://github.com/GSA/openacr)
- [Project board](https://github.com/GSA/openacr/projects/1)
- [Milestones](https://github.com/GSA/openacr/milestones)

## Contact

- Industry and government inquiries: [opat@gsa.gov](mailto:opat@gsa.gov)
- Press inquiries: [press@gsa.gov](mailto:press@gsa.gov)
