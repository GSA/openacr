$(document).ready(function () {
  $("#reports").DataTable({
    ajax: "opat-list.json",
  });
});
