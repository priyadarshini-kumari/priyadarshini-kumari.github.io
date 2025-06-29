// add bootstrap classes to tables
$(document).ready(function () {
  $("table").each(function () {
<<<<<<< HEAD
    if (document.documentElement.getAttribute("data-theme") == "dark") {
=======
    if (determineComputedTheme() == "dark") {
>>>>>>> main
      $(this).addClass("table-dark");
    } else {
      $(this).removeClass("table-dark");
    }

    // only select tables that are not inside an element with "news" (about page) or "card" (cv page) class
<<<<<<< HEAD
    if ($(this).parents('[class*="news"]').length == 0 && $(this).parents('[class*="card"]').length == 0 && $(this).parents("code").length == 0) {
=======
    if (
      $(this).parents('[class*="news"]').length == 0 &&
      $(this).parents('[class*="card"]').length == 0 &&
      $(this).parents('[class*="archive"]').length == 0 &&
      $(this).parents("code").length == 0
    ) {
>>>>>>> main
      // make table use bootstrap-table
      $(this).attr("data-toggle", "table");
      // add some classes to make the table look better
      // $(this).addClass('table-sm');
      $(this).addClass("table-hover");
    }
  });
});
