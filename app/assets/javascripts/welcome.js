// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var page_view_count = {
  "home": 0,
  "goldenrod": 0,
  "lightcoral": 0,
  "lightseagreen": 0
}


$(document).on("ready", function(){
  var current_path = location.pathname.split("/")[1] || "home";
  page_view_count[current_path] += 1;
  $("#" + current_path + " .view_count.badge").text(page_view_count[current_path]);
})
