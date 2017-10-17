$(document).ready(function() {
  $("img#cat").click(function() {
    $("ul#cat-reply").append("<li>Pew-Pew-Pew-MEOW!</li>");
    $("ul#dog-reply").append("<li>Pew-Pew-Pew-BORK!</li>");
  });


  $("img#dog").click(function() {
    $("ul#cat-reply").append("<li>Pew-Pew-Pew-MEOW!</li>");
    $("ul#dog-reply").append("<li>Pew-Pew-Pew-BORK!</li>");
  });

});
