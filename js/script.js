$(function () {
  var currentAttr = "#first-item";
  var navItem = $(".navbar .navbar-nav a");

  $(navItem).on("click", function (e) {
    e.stopPropagation();
    var target = $(this).attr("href");
    if (currentAttr == target) {
      toggleIcon(e);
      $(currentAttr).slideToggle(250, function () {});
    } else {
      $(currentAttr).css("display", "none");
      currentAttr = target;
      toggleIcon(e);
      $(target).slideToggle(250);
    }

    //close the second nav when the x btn is click
    $(".close-btn").on("click", function () {
      var btnTarget = "#" + $(this).attr("id");
      if (btnTarget == currentAttr) {
        $(target).slideUp(250);
      }
    });
  });
});

function toggleIcon(e) {
  var iconTarget = $(e.target);
  if (iconTarget.is("a")) {
    iconTarget.children().toggleClass("fas fa-angle-down fas fa-angle-up");
  }
}
