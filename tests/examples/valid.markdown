# Drupal Accessibility Conformance Report

Based on VPAT® 2.4 Revised Section 508 Edition

## Name of Product/Version
Drupal 9.1

## Report Date
8/10/2021

## Product Description
Content Management System

## Contact Information
### Author Information
- Name: Mike Gifford
- Company: CivicActions
- Address: 3527 Mt Diablo Blvd, Unit 269, Lafayette, CA 94549
- Email: mike.gifford@civicactions.com
- Phone: (510) 408-7510
- Website: https://civicactions.com/
### Vendor Information

- Company: CivicActions

- Email: contact@civicactions.com



## Notes
Links to the issues identified are included where possible to ensure that this is a living document where outstanding issues are regularly reviewed for compliance. The Authoring tool is evaluated against ATAG 2.0, Part A and B. Incorporating feedback from the Drupal community.

## Evaluation Methods Used
Use of automated tools like WAVE and Accessibility Insights. Manual keyboard only testing. Some testing with JAWS, NVDA and VoiceOver. The evaluation process also includes a review of the Drupal Core accessibility issue queue.

## Applicable Standards/Guidelines
This report covers the degree of conformance for the following accessibility standard/guidelines:

| Standard/Guideline | Included In Report |
| --- | --- |
| [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/) | |
| [Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018](https://www.access-board.gov/ict/) | |

## Terms
The terms used in the Conformance Level information are defined as follows:
- **Supports**: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
- **Partially Supports**: Some functionality of the product does not meet the criterion.
- **Does Not Support**: The majority of product functionality does not meet the criterion.
- **Not Applicable**: The criterion is not relevant to the product.
- **Not Evaluated**: The product has not been evaluated against the criterion. This can be used only in WCAG 2.0 Level AAA.

## WCAG 2.0 Report
### Table 1: Success Criteria, Level A


| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| [1.1.1 Non-text Content](https://www.w3.org/TR/WCAG20/#text-equiv-all) | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Drupal 8 requires alt text for images by default.</li><li>**Electronic Docs**: Some non-textual content in the documentation does not provide a textual alternative.</li><li>**Authoring Tool**: The back end of Drupal Core was built to be WCAG 2.0 AA compliant and non-text content in the administration interface has a textual equivalent. Audio and video can be added to the media library, but Core does not provide tools to manage transcripts and captions/subtitles for local video and audio - Drupal issue 3002770.</li> </ul> |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-captions) | <ul><li>**Web**: Partially Supports</li><li>**Electronic Docs**: Partially Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Does Not Support</li> </ul> | <ul><li>**Web**: Authors can satisfy 1.2.1 Audio-only and Video-only (Prerecorded) by using text on the same page.</li><li>**Electronic Docs**: This is not explicitly defined in the documentation.</li><li>**Authoring Tool**: There is no additional support for authors within the authoring interface to explain how this can be done.</li> </ul> |

### Table 2: Success Criteria, Level AA

### Table 3: Success Criteria, Level AAA

## Revised Section 508 Report
### Chapter 3: Functional Performance Criteria (FPC)

### Chapter 4: Hardware

Notes: Drupal is a web application. Hardware accessibility criteria is not applicable.

### Chapter 5: Software

### Chapter 6: Support Documentation and Services


## Legal Disclaimer (CivicActions)
The information herein is provided in good faith based on the analysis of the web application at the time of the review and does not represent a legally-binding claim. Please contact us to report any accessibility errors or conformance claim errors for re-evaluation and correction, if necessary.
