$(document).ready(function() {
  $(".card").click(function() {
    $(this).find(".question").toggle();
    $(this).find(".answer").toggle();
  });
});
