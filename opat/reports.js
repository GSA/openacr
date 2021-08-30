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
];

$(document).ready(function () {
  $("#reports").DataTable({
    data: dataSet,
  });
});
