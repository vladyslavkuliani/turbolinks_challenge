// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("ready", function(){

  var $goldenrod = $("body.goldenrod.index");
  if ( !$goldenrod.length ){ return; } // ensures we're on the right page!

  var has_been_here_before = localStorage.getItem("was_welcomed_to_teh_best_page");
  if ( !has_been_here_before ){
    alert("Welcome to teh best page!")
    localStorage.setItem("was_welcomed_to_teh_best_page", "1")
  }

})
