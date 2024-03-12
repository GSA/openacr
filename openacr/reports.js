const dataSet = [
  [
    "<a href='drupal-10-16-simple.html'>Drupal 10 Accessibility Conformance Report</a>",
    "Content Management System",
    "Drupal 10",
    "<a href='drupal-10-16.yaml'>drupal-10-16.yaml</a>",
  ],
  [
    "<a href='drupal-9.html'>Drupal 9 Accessibility Conformance Report</a>",
    "Content Management System",
    "Drupal 9",
    "<a href='drupal-9.yaml'>drupal-9.yaml</a>",
  ],
  [
    "<a href='govready-0.9.html'>GovReady PBC Accessibility Conformance Report</a>",
    "GovReady is a user-friendly cybersecurity Governance, Risk, and Compliance (GRC) web application focused on guiding teams through the NIST Risk Management Framework using Compliance-As-Code and collaborative features.",
    "GovReady 0.9.1.36",
    "<a href='govready-0.9.yaml'>govready-0.9.yaml</a>",
  ],
  [
    "<a href='Moodle-3.html'>Moodle Accessibility Conformance Report</a>",
    "The world's most customisable and trusted open-source learning management system.",
    "Moodle 3.1",
    "<a href='Moodle-3.yaml'>Moodle-3.yaml</a>",
  ],
  [
    "<a href='NVDA-2018.html'>NV Access Accessibility Conformance Report</a>",
    "NVDA (NonVisual Desktop Access) is a free 'screen reader' which enables blind and vision impaired people to use computers. It reads the text on the screen in a computerised voice. NVDA can also convert the text into braille if the computer user owns a device called a 'braille display'.",
    "NVDA 2018.2.1",
    "<a href='NVDA-2018.yaml'>NVDA-2018.yaml</a>",
  ],
  [
    "<a href='Plone-5.html'>Plone Accessibility Conformance Report</a>",
    "Open-source CMS based on Python.",
    "Plone 0.9.1.36",
    "<a href='Plone-5.yaml'>Plone-5.yaml</a>",
  ],
];

$(document).ready(function () {
  $("#reports").DataTable({
    data: dataSet,
  });
});
