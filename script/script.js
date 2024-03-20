$(function () {
  //slide
  var t = 0;
  function slide() {
    if (t < 2) {
      t++;
    } else {
      t = 0;
    }
    $(".slide ul").animate({ top: t * 300 * -1 }, 1000);
  }
  setInterval(slide, 3000);

  //con
  $(".tabmenu li").on("click", function () {
    $(".tabmenu li").removeClass("on");
    $(this).addClass("on");

    var i = $(this).index();
    console.log(i);
    $(".tabcon").hide();
    $(".tabcon").eq(i).show();

    return false;
  });
  // popup
  $(".pp").on("click", function () {
    $(".popup").show();
    return false;
  });
  $(".btn").on("click", function () {
    $(".popup").hide();
  });
  // menu
  $(".nav>ul>li").on("mouseenter", function () {
    $(".submenu").stop().slideDown();
  });
  $(".nav>ul>li").on("mouseleave", function () {
    $(".submenu").stop().slideUp();
  });
});
