# Drupal Accessibility Conformance Report

Based on VPAT® 2.4 Revised Section 508 Edition

## Name of Product/Version
Drupal 9.1

## Report Date
8/9/2021

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

## Table 1: Success Criteria, Level A

Notes: Drupal doesn&#x27;t make a strong distinction between the front-end &amp; back-end accessibility. Many administration interfaces can be exposed to users in a more interactive site. Generally this report focuses the Conformance Level / Remarks and Explainations so that Web comments are about elements that are typically public, while Authoring Tool is typically for authors and administrators. The goal of the authoring interface is to support ATAG 2.0 AA (Part A and B). The Drupal community strives to beek up with the latest WCAG recommendation.

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 1.1.1 Non-text Content | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Drupal 8 requires alt text for images by default.</li><li>**Electronic Docs**: Some non-textual content in the documentation does not provide a textual alternative.</li><li>**Authoring Tool**: The back end of Drupal Core was built to be  WCAG 2.0 AA compliant and non-text content in the administration interface has a textual equivalent. Audio and video can be added to the media library, but Core does not provide tools to manage transcripts and captions/subtitles for local video and audio - Drupal issue 3002770.</li> </ul> |
| 1.2.1 Audio-only and Video-only (Prerecorded) | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Authors can satisfy 1.2.1 Audio-only and Video-only (Prerecorded) by using text on the same page.</li><li>**Electronic Docs**: This is not explicitly defined in the documentation.</li><li>**Authoring Tool**: There is no additional support for authors within the authoring interface to explain how this can be done.</li> </ul> |
| 1.2.2 Captions (Prerecorded) | <ul><li>**Web**: Does Not Support</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Does Not Support</li> </ul> | <ul><li>**Web**: The file module in Core lets authors upload audio and video content, and output &lt;audio&gt; and &lt;video&gt; elements and does not support captions.</li><li>**Authoring Tool**: Drupal does not support, let alone require users to include captions. Hard coding open captions is presently the only way to satisfy this in Core.</li> </ul> |
| 1.2.3 Audio Description or Media Alternative (Prerecorded) | <ul><li>**Web**: Does Not Support</li><li>**Electronic Docs**: Does Not Support</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Does Not Support</li> </ul> | <ul><li>**Web**: Audio files can be uploaded, but there is no way to associate captions in Core.</li><li>**Electronic Docs**: There is no documentation on how to properly convey pre-recorded audio descriptions.</li><li>**Authoring Tool**: There is no audio in the authoring interface of Drupal Core, but there is no support for authors to upload accessible audio files.</li> </ul> |
| 1.3.1 Info and Relationships | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Information is structured into logical relationships. Navigational lists are well used to group information. Forms have a visual and semantic representation for required fields.</li><li>**Electronic Docs**: Information is structured into logical relationships. Navigational lists are well used to group information.</li><li>**Authoring Tool**: The authoring environment was constructed to support ATAG 2.0 AA (Part A and B).</li> </ul> |
| 1.3.2 Meaningful Sequence | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Drupal Core has been extensively tested with keyboard only users. As a proudly multilingual CMS, Drupal provides support for bidirectional navigation.</li><li>**Authoring Tool**: The authoring environment was constructed to support ATAG 2.0 AA (Part A and B).</li> </ul> |
| 1.3.3 Sensory Characteristics | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Where possible Drupal Core uses combinations of text and symbols for the user interface.</li><li>**Authoring Tool**: The authoring interface has been developed to not rely on symbols alone to convey information to the user.</li> </ul> |
| 1.4.1 Use of Color | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Color is not used without text and often symbols to convey meaning.</li><li>**Authoring Tool**: In general, the admin theme is very accessible. The Claro Administration Theme shortcut start needs improvement - Drupal issue 3171726.</li> </ul> |
| 1.4.2 Audio Control | <ul><li>**Web**: Not Applicable</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul> | <ul> </ul> |
| 2.1.1 Keyboard | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Partially Supports</li> </ul> | <ul><li>**Web**: Users can interact with Drupal Core with the keyboard and without specific timings for individual keystrokes.</li><li>**Authoring Tool**: Authors are largely able to engage with Drupal Core with the keyboard and without specific timings for individual keystrokes.Tooltips not displayed for keyboard navigation - Drupal issue 2933984.There are reported issues with IE11 and JAWS - Drupal issue 2852702.It is worth noting that Drupal&#x27;s admin is powerful and complex, and there are other accessibility reports in the issue queue.</li> </ul> |
| 2.1.2 No Keyboard Trap | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Focus can be moved away from that component using only a keyboard interface.</li><li>**Authoring Tool**: Focus can be moved away from that component using only a keyboard interface.</li> </ul> |
| 2.2.1 Pause, Stop, Hide | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: The time limit is longer than 20 hours.</li><li>**Authoring Tool**: The time limit is longer than 20 hours.</li> </ul> |
| 2.2.2 Timing Adjustable | <ul><li>**Web**: Not Applicable</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Not Applicable</li> </ul> | <ul> </ul> |
| 2.3.1 Three Flashes or Below Threshold | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: There are no flashing elements in Drupal Core.</li><li>**Authoring Tool**: There are no flashing elements in Drupal Core.</li> </ul> |
| 2.4.1 Bypass Blocks | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Skip links are provided.</li><li>**Electronic Docs**: Skip links are provided.</li><li>**Authoring Tool**: Skip links are provided.</li> </ul> |
| 2.4.2 Page Titled | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Pages have titles, but in the case of multi-page events, the page number is not included - Drupal issue 2509716.</li><li>**Authoring Tool**: Pages have titles, but in the case of multi-page events, the page number is not included - Drupal issue 2509716.</li> </ul> |
| 2.4.3 Focus Order | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Focusable components receive focus in an order that preserves meaning and operability.</li><li>**Electronic Docs**: Focusable components receive focus in an order that preserves meaning and operability.</li><li>**Authoring Tool**: Focusable components receive focus in an order that preserves meaning and operability.</li> </ul> |
| 2.4.4 Link Purpose (In Context) | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Careful attention has been paid to ensure that automated &quot;Read More&quot; links are available in a way that is available with contextual information for screen readers.</li><li>**Authoring Tool**: Careful attention has been paid to ensure that automated &quot;Read More&quot; links are available in a way that is available with contextual information for screen readers.</li> </ul> |
| 3.1.1 Language of Page | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Page language is defined semantically on every page.</li><li>**Electronic Docs**: Page language is defined semantically on every page.</li><li>**Authoring Tool**: Page language is defined semantically on every page.</li> </ul> |
| 3.2.1 On Focus | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Change in the focus state does not initiate a change of context for the user.</li><li>**Electronic Docs**: Change in the focus state does not initiate a change of context for the user.</li><li>**Authoring Tool**: Change in the focus state does not initiate a change of context for the user.</li> </ul> |
| 3.2.2 On Input | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Engaging with the interactive sites does not unexpectedly take control from the users.</li><li>**Electronic Docs**: Engaging with the interactive sites does not unexpectedly take control from the users.</li><li>**Authoring Tool**: Engaging with the interactive sites does not unexpectedly take control from the users.</li> </ul> |
| 3.3.1 Error Identification | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: The Inline Form Error module was added in Drupal 8. This needs to be enabled site-wide on installation.</li><li>**Authoring Tool**: The Inline Form Error module was added in Drupal 8. This needs to be enabled site-wide on installation.</li> </ul> |
| 3.3.2 Labels or Instructions | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Partially Supports</li> </ul> | <ul><li>**Web**: Default forms all include labels.</li><li>**Authoring Tool**: There are a few places where there are problems with labels, but these are odd exceptions - Drupal issue 3015494.</li> </ul> |
| 4.1.1 Parsing | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: There are no HTML5 errors or warnings that are known to impact assistive technology users.</li><li>**Electronic Docs**: There are no HTML5 errors or warnings that are known to impact assistive technology users.</li><li>**Authoring Tool**: Generally parsing is very well supported, but there are a few places where this needs to be improved - Drupal issue 1852090 and 3144948.</li> </ul> |
| 4.1.2 Name, Role, Value | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Public pages support this criterion.</li><li>**Electronic Docs**: Public pages support this criterion.</li><li>**Authoring Tool**: This is generally well supported, but there are places where it has been overlooked. Drupal issue 3144948, 3019487, and 3085545.</li> </ul> |

## Table 2: Success Criteria, Level AA


| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 1.2.4 Captions (Live) | <ul><li>**Web**: Not Applicable</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li> </ul> | <ul> </ul> |
| 1.2.5 Audio Description (Prerecorded) | <ul><li>**Web**: Does Not Support</li><li>**Electronic Docs**: Does Not Support</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Does Not Support</li> </ul> | <ul><li>**Web**: Audio files can be uploaded, but there is no way to associate captions in Core.</li><li>**Electronic Docs**: There is no documentation on how to properly convey pre-recorded audio descriptions.</li><li>**Authoring Tool**: There is no audio in the authoring interface of Drupal Core, but there is no support for authors to upload accessible audio files.</li> </ul> |
| 1.4.3 Contrast (Minimum) | <ul><li>**Web**: Partially Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Generally meets. Some contrast failures around grey backgrounds - Drupal issue 3040673.</li><li>**Electronic Docs**: The docs have sufficient contrast.</li><li>**Authoring Tool**: Generally meets requirements. Some challenges with Core admin themes - Drupal issue 930508 and 3080100.</li> </ul> |
| 1.4.4 Resize text | <ul><li>**Web**: Partially Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Partially Supports</li> </ul> | <ul><li>**Web**: Generally support with some minor exceptions - Drupal issue 3129257.</li><li>**Electronic Docs**: The docs are accessible up to 200%.</li><li>**Authoring Tool**: Generally good with some exceptions - Drupal issue 3164587.</li> </ul> |
| 1.4.5 Images of Text | <ul><li>**Web**: Not Applicable</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Authoring Tool**: Text is generally styled with CSS in the authoring tool. Should images of text be uploaded by the user, they will be required to add alternative text.</li> </ul> |
| 2.4.5 Multiple Ways | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: There is more than one way to locate a Web page within the CMS.</li><li>**Electronic Docs**: There is more than one way to locate a Web page within the CMS.</li><li>**Authoring Tool**: There is more than one way to locate a Web page within the CMS.</li> </ul> |
| 2.4.6 Headings and Labels | <ul><li>**Web**: Partially Supports</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Partially Supports</li> </ul> | <ul><li>**Web**: Generally there is very good support. Some heading levels may be missed in some unique contexts - Drupal issue 1768732. Better support could be provided for threaded comments - Drupal issue 2290043.</li><li>**Authoring Tool**: Generally good, but for dynamic elements like the Layout Builder need a plan for a dynamic heading structure - Drupal issue 3007978.</li> </ul> |
| 2.4.7 Focus Visible | <ul><li>**Web**: Partially Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Partially Supports</li> </ul> | <ul><li>**Web**: Focus elements are well established for the front-end. Further enhancements are being developed to make it more obvious for keyboard only users.</li><li>**Authoring Tool**: An IE specific bug where there are focus issues for authors and administrators in the Claro theme - Drupal issue 3048785.</li> </ul> |
| 3.1.2 Language of Parts | <ul><li>**Web**: Partially Supports</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Multilingual sites have language switchers with proper semantics. Unfotunately support is lacking for multi-lingual search 2992894 as well as both the Filesystem 3163915 &amp; Views components 2496223.</li><li>**Authoring Tool**: Drupal has good support for multilingual content and accessibility. To support the Language of Parts for authors, a button can be added to simplify the process of adding language specific phrases.</li> </ul> |
| 3.2.3 Consistent Navigation | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Drupal&#x27;s menu structure allows for consistent navigation across the site.</li><li>**Electronic Docs**: Drupal&#x27;s menu structure allows for consistent navigation across the site.</li><li>**Authoring Tool**: Drupal&#x27;s menu structure allows for consistent navigation across the site.</li> </ul> |
| 3.2.4 Consistent Identification | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: Components in Drupal that have the same functionality are identified consistently.</li><li>**Electronic Docs**: Components in Drupal that have the same functionality are identified consistently.</li><li>**Authoring Tool**: Components in Drupal that have the same functionality are identified consistently.</li> </ul> |
| 3.3.3 Error Suggestion | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Not Applicable</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Supports</li> </ul> | <ul><li>**Web**: The Inline Form Error Module is provided in Core and needs to be enabled to allow for this functionality.</li><li>**Authoring Tool**: The Inline Form Error Module is provided in Core and needs to be enabled to allow for this functionality.</li> </ul> |
| 3.3.4 Error Prevention (Legal, Financial, Data) | <ul><li>**Web**: Supports</li><li>**Electronic Docs**: Supports</li><li>**Software**: Not Applicable</li><li>**Authoring Tool**: Partially Supports</li> </ul> | <ul><li>**Web**: By default users can editing content which they own.</li><li>**Electronic Docs**: Documentation could be improved.</li><li>**Authoring Tool**: There is nothing to differentiate editing financial or legal data from any other data managed by Drupal.</li> </ul> |

## Table 3: Success Criteria, Level AAA

Notes: Where possible the Drupal community strives to exceed AA compliance.

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 1.2.6 Sign Language (Prerecorded) | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 1.2.7 Extended Audio Description (Prerecorded) | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 1.2.8 Media Alternative (Prerecorded) | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 1.2.9 Audio-only (Live) | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 1.4.6 Contrast (Enhanced) | <ul><li>**Web**: Supports</li> </ul> | <ul><li>**Web**: A front-end and back-end theme could be configured to allow this to comply.</li> </ul> |
| 1.4.7 Low or No Background Audio | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 1.4.8 Visual Presentation | <ul><li>**Web**: Not Evaluated</li> </ul> | <ul><li>**Web**: Stable Core themes leave much of the presentation of text to user agents, so aside from line spacing this generally works.</li> </ul> |
| 1.4.9 Images of Text (No Exception) | <ul><li>**Web**: Supports</li> </ul> | <ul><li>**Web**: Text images are all supplied by the author.</li> </ul> |
| 2.1.3 Keyboard (No Exception) | <ul><li>**Web**: Supports</li> </ul> | <ul><li>**Web**: The web front-end is not a barrier to keyboard only users.</li> </ul> |
| 2.2.3 No Timing | <ul><li>**Web**: Supports</li> </ul> | <ul><li>**Web**: There are no timeouts in Drupal Core that would affect people with disabilities.</li> </ul> |
| 2.2.4 Interruptions | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 2.2.5 Re-authenticating | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 2.3.2 Three Flashes | <ul><li>**Web**: Supports</li> </ul> | <ul><li>**Web**: There is no flashing content.</li> </ul> |
| 2.4.8 Location | <ul><li>**Web**: Supports</li> </ul> | <ul><li>**Web**: Breadcrumbs are available and sitemap modules can be added to provide additional means for navigation.</li> </ul> |
| 2.4.9 Link Purpose (Link Only) | <ul><li>**Web**: Partially Supports</li> </ul> | <ul><li>**Web**: There is a mechanism to support automated links with semantic descriptive titles.</li> </ul> |
| 2.4.10 Section Headings | <ul><li>**Web**: Supports</li> </ul> | <ul><li>**Web**: Drupal provides heading elements at the beginning of each section of content.</li> </ul> |
| 3.1.3 Unusual Words | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 3.1.4 Abbreviations | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 3.1.5 Reading Level | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 3.1.6 Pronunciation | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 3.2.5 Change on Request | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 3.3.5 Help | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |
| 3.3.6 Error Prevention (All) | <ul><li>**Web**: Not Applicable</li> </ul> | <ul> </ul> |

## Chapter 3: Functional Performance Criteria (FPC)

Notes: Not applicable.

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 302.1 Without Vision | <ul><li>Supports</li> </ul> | <ul><li>Testing has been done with JAWS, NVDA and VoiceOver.</li> </ul> |
| 302.2 With Limited Vision | <ul><li>Supports</li> </ul> | <ul><li>Testing has been done with browser zoom and ZoomText.</li> </ul> |
| 302.3 Without Perception of Color | <ul><li>Supports</li> </ul> | <ul><li>The interface has been reviewed for use of color.</li> </ul> |
| 302.4 Without Hearing | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |
| 302.5 With Limited Hearing | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |
| 302.6 Without Speech | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |
| 302.7 With Limited Manipulation | <ul><li>Supports</li> </ul> | <ul><li>Drupal&#x27;s interface does not restrict users with limited manipulation.</li> </ul> |
| 302.8 With Limited Reach and Strength | <ul><li>Supports</li> </ul> | <ul><li>Drupal&#x27;s interface does not restrict users with limited reach or strength.</li> </ul> |
| 302.9 With Limited Language, Cognitive, and Learning Abilities | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |

## Chapter 4: Hardware

Notes: Drupal is a web application. Hardware accessibility criteria is not applicable.

## Chapter 5: Software

Notes: Drupal is a web application. Software accessibility criteria is not applicable.

## Chapter 6: Support Documentation and Services

Notes: Drupal is a web application and all support documentation is delivered through the web. Additional documentation and services are not available.

| Criteria | Conformance Level | Remarks and Explanations |
| --- | --- | --- |
| 602.2 Accessibility and Compatibility Features | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |
| 602.4 Alternate Formats for Non-Electronic Support Documentation | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |
| 603.2 Information on Accessibility and Compatibility Features | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |
| 603.3 Accommodation of Communication Needs | <ul><li>Not Applicable</li> </ul> | <ul> </ul> |


## Legal Disclaimer
The information herein is provided in good faith based on the analysis of the web application at the time of the review and does not represent a legally-binding claim. Please contact us to report any accessibility errors or conformance claim errors for re-evaluation and correction, if necessary.
