$(document).ready(function() {
  $("img#cat").click(function() {
    $("ul#cat-reply").append("<li>Pew-Pew-Pew-MEOW!</li>");
    $("ul#dog-reply").append("<li>Pew-Pew-Pew-BORK!</li>");
    $("ul#cat-reply").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#dog-reply").children("li").last().click(function() {
      $(this).remove();
    });
  });


  $("img#dog").click(function() {
    $("ul#cat-reply").append("<li>Pew-Pew-Pew-MEOW!</li>");
    $("ul#dog-reply").append("<li>Pew-Pew-Pew-BORK!</li>");
    $("ul#dog-reply").children("li").last().click(function() {
      $(this).remove();
    });
    $("ul#cat-reply").children("li").last().click(function() {
      $(this).remove();
    });
  });

  //cat factory
  $("img#factory").click(function() {
    $("img#factory").after("<img src='img/nyancat.png'>");
  })
});
