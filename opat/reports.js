const dataSet = [
  [
    "<a href='drupal-9.html'>Drupal Accessibility Conformance Report</a>",
    "Drupal 9.1",
    "Content Management System",
    "<a href='drupal-9.markdown'>Markdown</a>",
    "<a href='drupal-9.yaml'>OPAT</a>",
    "<a href='../catalog/2.4-edition-wcag-2.0-508-en.yaml'>VPAT® 2.4 Revised Section 508 Edition</a>",
  ],
  [
    "<a href='govready-0.9.html'>GovReady PBC Accessibility Conformance Report</a>",
    "GovReady 0.9.1.36",
    "GovReady is a user-friendly cybersecurity Governance, Risk, and Compliance (GRC) web application focused on guiding teams through the NIST Risk Management Framework using Compliance-As-Code and collaborative features.",
    "<a href='govready-0.9.markdown'>Markdown</a>",
    "<a href='govready-0.9.yaml'>OPAT</a>",
    "<a href='../catalog/2.4-edition-wcag-2.0-508-en.yaml'>VPAT® 2.4 Revised Section 508 Edition</a>",
  ],
  [
    "<a href='Moodle-3.html'>Moodle Accessibility Conformance Report</a>",
    "Moodle 3.1",
    "The world's most customisable and trusted open-source learning management system.",
    "<a href='Moodle-3.markdown'>Markdown</a>",
    "<a href='Moodle-3.yaml'>OPAT</a>",
    "<a href='../catalog/2.4-edition-wcag-2.0-508-en.yaml'>VPAT® 2.4 Revised Section 508 Edition</a>",
  ],
  [
    "<a href='NVDA-2018.html'>NV Access Accessibility Conformance Report</a>",
    "NVDA 2018.2.1",
    "NVDA (NonVisual Desktop Access) is a free 'screen reader' which enables blind and vision impaired people to use computers. It reads the text on the screen in a computerised voice. NVDA can also convert the text into braille if the computer user owns a device called a 'braille display'.",
    "<a href='NVDA-2018.markdown'>Markdown</a>",
    "<a href='NVDA-2018.yaml'>OPAT</a>",
    "<a href='../catalog/2.4-edition-wcag-2.0-508-en.yaml'>VPAT® 2.4 Revised Section 508 Edition</a>",
  ],
  [
    "<a href='Plone-5.html'>Plone Accessibility Conformance Report</a>",
    "Plone 0.9.1.36",
    "Open-source CMS based on Python.",
    "<a href='Plone-5.markdown'>Markdown</a>",
    "<a href='Plone-5.yaml'>OPAT</a>",
    "<a href='../catalog/2.4-edition-wcag-2.0-508-en.yaml'>VPAT® 2.4 Revised Section 508 Edition</a>",
  ],
];

$(document).ready(function () {
  $("#reports").DataTable({
    data: dataSet,
  });
});
