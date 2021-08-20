const dataSet = [
  [
    "<a href='drupal-9.html'>Drupal Accessibility Conformance Report</a>",
    "Drupal 9.1",
    "Content Management System",
    "<a href='drupal-9.markdown'>Markdown</a>",
    "<a href='drupal-9.yaml'>OPAT</a>",
    "<a href='../catalog/2.4-edition-wcag-2.0-508-en.yaml'>VPAT® 2.4 Revised Section 508 Edition</a>",
  ],
];

$(document).ready(function () {
  $("#reports").DataTable({
    data: dataSet,
  });
});
