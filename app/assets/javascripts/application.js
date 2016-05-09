// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var page_view_count = {
  "home": 0,
  "goldenrod": 0,
  "lightcoral": 0,
  "lightseagreen": 0
}

$(document).on("page:change", function(){
  var current_path = location.pathname.split("/")[1] || "home";
  page_view_count[current_path] += 1;
  $("#" + current_path + " .view_count.badge").text(page_view_count[current_path]);
})

$(document).on("page:change", function(e){
  var color_in_path = location.pathname.split("/")[1];
  if (!color_in_path){ return; }
  $("body").css("background-color", color_in_path);
})
