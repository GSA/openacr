# Plone

Based on VPAT® 2.4 Revised Section 508 Edition

## Name of Product/Version

Plone 5.2

## Report Dates and Version

- Report Date:
- Last Modified Date:
- Version: plone-5.2

## Product Description

Open-source CMS based on Python.

## Contact Information

### Author Information

- Company: Plone Foundation
- Address: PO Box 431, Fishers IN 46038, USA
- Email: a11y@plone.org

- Website: https://plone.org

## Notes

Testing applies to Plone with standard theme. Website-specific themes and CSS will have to be tested foraccessibility compliance by the organization deploying that Plone site. Also, the content that is added to a Plone sitewill have to be evaluated, especially when audio-visual materials are added. Testing with assistive technologies onlydone with English, Spanish and Portuguese language versions.

## Evaluation Methods

Testing with assistive technologies, testing is based on general public knowledge.

## Applicable Standards/Guidelines

This report covers the degree of conformance for the following accessibility standard/guidelines:

| Standard/Guideline                                                                                                           | Included In Report                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/)                                                    | <ul><li>Table 1: Success Criteria, Level A</li><li>Table 2: Success Criteria, Level AA</li><li>Table 3: Success Criteria, Level AAA</li></ul>                                    |
| [Revised Section 508 standards published January 18, 2017 and corrected January 22, 2018](https://www.access-board.gov/ict/) | <ul><li>Chapter 3: Functional Performance Criteria (FPC)</li><li>Chapter 4: Hardware</li><li>Chapter 5: Software</li><li>Chapter 6: Support Documentation and Services</li></ul> |

## Terms

The terms used in the Conformance Level information are defined as follows:

- **Supports**: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
- **Partially Supports**: Some functionality of the product does not meet the criterion.
- **Does Not Support**: The majority of product functionality does not meet the criterion.
- **Not Applicable**: The criterion is not relevant to the product.
- **Not Evaluated**: The product has not been evaluated against the criterion. This can be used only in WCAG 2.x Level AAA.

## WCAG 2.0 Report

### Table 1: Success Criteria, Level A

Conformance to the 25 criteria listed below is distributed within each category as follows:

| Conformance Level  | Web | Electronic Documents | Software | Authoring Tool |
| ------------------ | --- | -------------------- | -------- | -------------- |
| Supports           | 25  | 20                   | 0        | 0              |
| Partially Supports | 0   | 1                    | 0        | 0              |
| Does Not Support   | 0   | 0                    | 0        | 0              |
| Not Applicable     | 0   | 4                    | 25       | 25             |

| Criteria                                                                                                           | Conformance Level                                                                                                                                                         | Remarks and Explanations                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [1.1.1 Non-text Content](https://www.w3.org/TR/WCAG20/#text-equiv-all)                                             | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Partially Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul> | <ul><li>**Electronic Documents**: Some images in the documentation donot yet have descriptive enough ALT text descriptions.This is being worked on.</li> </ul> |
| [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt)             | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [1.2.2 Captions (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-captions)                                 | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-audio-desc) | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic)            | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG20/#content-structure-separation-sequence)                   | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [1.3.3 Sensory Characteristics](https://www.w3.org/TR/WCAG20/#content-structure-separation-understanding)          | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [1.4.1 Use of Color](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color)                            | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [1.4.2 Audio Control](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio)                               | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>     | <ul> </ul>                                                                                                                                                     |
| [2.1.1 Keyboard](https://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable)                               | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [2.1.2 No Keyboard Trap](https://www.w3.org/TR/WCAG20/#keyboard-operation-trapping)                                | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [2.2.1 Timing Adjustable](https://www.w3.org/TR/WCAG20/#time-limits-required-behaviors)                            | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG20/#time-limits-pause)                                         | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [2.3.1 Three Flashes or Below Threshold](https://www.w3.org/TR/WCAG20/#seizure-does-not-violate)                   | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [2.4.1 Bypass Blocks](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip)                                    | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>     | <ul> </ul>                                                                                                                                                     |
| [2.4.2 Page Titled](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-title)                                     | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [2.4.3 Focus Order](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order)                               | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs)                        | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [3.1.1 Language of Page](https://www.w3.org/TR/WCAG20/#meaning-doc-lang-id)                                        | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [3.2.1 On Focus](https://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus)                                  | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [3.2.2 On Input](https://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change)                           | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>     | <ul> </ul>                                                                                                                                                     |
| [3.3.1 Error Identification](https://www.w3.org/TR/WCAG20/#minimize-error-identified)                              | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>     | <ul> </ul>                                                                                                                                                     |
| [3.3.2 Labels or Instructions](https://www.w3.org/TR/WCAG20/#minimize-error-cues)                                  | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [4.1.1 Parsing](https://www.w3.org/TR/WCAG20/#ensure-compat-parses)                                                | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |
| [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG20/#ensure-compat-rsv)                                         | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul>           | <ul> </ul>                                                                                                                                                     |

### Table 2: Success Criteria, Level AA

Conformance to the 13 criteria listed below is distributed within each category as follows:

| Conformance Level  | Web | Electronic Documents | Software | Authoring Tool |
| ------------------ | --- | -------------------- | -------- | -------------- |
| Supports           | 13  | 10                   | 0        | 8              |
| Partially Supports | 0   | 0                    | 0        | 0              |
| Does Not Support   | 0   | 0                    | 0        | 0              |
| Not Applicable     | 0   | 3                    | 12       | 3              |

| Criteria                                                                                                      | Conformance Level                                                                                                                                               | Remarks and Explanations |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [1.2.4 Captions (Live)](https://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions)                         | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li> </ul>                                            | <ul> </ul>               |
| [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only)            | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul> | <ul> </ul>               |
| [1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast)                      | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul> | <ul> </ul>               |
| [1.4.4 Resize text](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale)                                | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li> </ul>                                            | <ul> </ul>               |
| [1.4.5 Images of Text](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation)                 | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul> | <ul> </ul>               |
| [2.4.5 Multiple Ways](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc)                           | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul>       | <ul> </ul>               |
| [2.4.6 Headings and Labels](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive)                  | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul> </ul>               |
| [2.4.7 Focus Visible](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible)                      | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul>       | <ul> </ul>               |
| [3.1.2 Language of Parts](https://www.w3.org/TR/WCAG20/#meaning-other-lang-id)                                | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul>       | <ul> </ul>               |
| [3.2.3 Consistent Navigation](https://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations)         | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Authoring Tool**: Supports</li> </ul>                                            | <ul> </ul>               |
| [3.2.4 Consistent Identification](https://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality) | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul>       | <ul> </ul>               |
| [3.3.3 Error Suggestion](https://www.w3.org/TR/WCAG20/#minimize-error-suggestions)                            | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul> </ul>               |
| [3.3.4 Error Prevention (Legal, Financial, Data)](https://www.w3.org/TR/WCAG20/#minimize-error-reversible)    | <ul><li>**Web**: Supports</li><li>**Electronic Documents**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul> </ul>               |

### Table 3: Success Criteria, Level AAA

Conformance to the 23 criteria listed below is distributed within each category as follows:

| Conformance Level  | Web |
| ------------------ | --- |
| Supports           | 0   |
| Partially Supports | 0   |
| Does Not Support   | 0   |
| Not Applicable     | 0   |

| Criteria                                                                                                | Conformance Level                         | Remarks and Explanations |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------ |
| [1.2.6 Sign Language (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-sign)                     | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [1.2.7 Extended Audio Description (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-extended-ad) | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [1.2.8 Media Alternative (Prerecorded)](https://www.w3.org/TR/WCAG20/#media-equiv-text-doc)             | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [1.2.9 Audio-only (Live)](https://www.w3.org/TR/WCAG20/#media-equiv-live-audio-only)                    | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [1.4.6 Contrast (Enhanced)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast7)                       | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [1.4.7 Low or No Background Audio](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-noaudio)         | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [1.4.8 Visual Presentation](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation)    | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [1.4.9 Images of Text (No Exception)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-images)  | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.1.3 Keyboard (No Exception)](https://www.w3.org/TR/WCAG20/#keyboard-operation-all-funcs)             | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.2.3 No Timing](https://www.w3.org/TR/WCAG20/#time-limits-no-exceptions)                              | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.2.4 Interruptions](https://www.w3.org/TR/WCAG20/#time-limits-postponed)                              | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.2.5 Re-authenticating](https://www.w3.org/TR/WCAG20/#time-limits-server-timeout)                     | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.3.2 Three Flashes](https://www.w3.org/TR/WCAG20/#seizure-three-times)                                | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.4.8 Location](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-location)                          | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.4.9 Link Purpose (Link Only)](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-link)              | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [2.4.10 Section Headings](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-headings)                 | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [3.1.3 Unusual Words](https://www.w3.org/TR/WCAG20/#meaning-idioms)                                     | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [3.1.4 Abbreviations](https://www.w3.org/TR/WCAG20/#meaning-located)                                    | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [3.1.5 Reading Level](https://www.w3.org/TR/WCAG20/#meaning-supplements)                                | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [3.1.6 Pronunciation](https://www.w3.org/TR/WCAG20/#meaning-pronunciation)                              | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [3.2.5 Change on Request](https://www.w3.org/TR/WCAG20/#consistent-behavior-no-extreme-changes-context) | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [3.3.5 Help](https://www.w3.org/TR/WCAG20/#minimize-error-context-help)                                 | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |
| [3.3.6 Error Prevention (All)](https://www.w3.org/TR/WCAG20/#minimize-error-reversible-all)             | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul> </ul>               |

## Revised Section 508 Report

### Chapter 3: Functional Performance Criteria (FPC)

Conformance to the 9 criteria listed below is distributed within each category as follows:

| Conformance Level  | All |
| ------------------ | --- |
| Supports           | 8   |
| Partially Supports | 1   |
| Does Not Support   | 0   |
| Not Applicable     | 0   |

| Criteria                                                                                                  | Conformance Level                     | Remarks and Explanations                                                                                                  |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [302.1 Without Vision](https://www.access-board.gov/ict/#302.1)                                           | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.2 With Limited Vision](https://www.access-board.gov/ict/#302.2)                                      | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.3 Without Perception of Color](https://www.access-board.gov/ict/#302.3)                              | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.4 Without Hearing](https://www.access-board.gov/ict/#302.4)                                          | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.5 With Limited Hearing](https://www.access-board.gov/ict/#302.5)                                     | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.6 Without Speech](https://www.access-board.gov/ict/#302.6)                                           | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.7 With Limited Manipulation](https://www.access-board.gov/ict/#302.7)                                | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.8 With Limited Reach and Strength](https://www.access-board.gov/ict/#302.8)                          | <ul><li>Supports</li> </ul>           | <ul> </ul>                                                                                                                |
| [302.9 With Limited Language, Cognitive, and Learning Abilities](https://www.access-board.gov/ict/#302.9) | <ul><li>Partially Supports</li> </ul> | <ul><li>Administration section of the website Partially Supports relies on abstract concepts and ICT knowledge</li> </ul> |

### Chapter 4: Hardware

Notes: Hardware accessibility criteria is not applicable.

### Chapter 5: Software

Notes: Software accessibility criteria is not applicable.

### Chapter 6: Support Documentation and Services

Notes: Additional documentation and services are not available.

## Copyright

[OpenACR](https://github.com/GSA/openacr) is a format maintained by the [GSA](https://gsa.gov/). The content is the responsibility of the author.

This content is licensed under a [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/legalcode).
