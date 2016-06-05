$( document ).ready(function() {
$(".navToggle").on("click", function(){
  $(this).toggleClass("open");
$("#menu").toggleClass("active");
})
});