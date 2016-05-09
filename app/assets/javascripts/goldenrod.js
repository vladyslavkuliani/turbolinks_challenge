// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$(document).on("ready", function(e){
  var color_in_path = location.pathname.split("/")[1];
  if (!color_in_path){ return; }
  $("body").css("background-color", color_in_path);
})
