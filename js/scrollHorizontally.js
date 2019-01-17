if( $(window).width() <= $(window).height() ) {
  $("html").addClass("vertical")
} else {
  $("html").addClass("horizontal")
}

$(window).resize(function() {
  if( $(window).width() <= $(window).height() ) {
    // console.log("vertical")
    $("html").removeClass("horizontal").addClass("vertical")
  } else {
    // console.log("horizontal")
    $("html").removeClass("vertical").addClass("horizontal")
  }
});

$("html").on("mousewheel", function(e) {
  if( $("html").hasClass("horizontal") ) {
    e.preventDefault();
    var delta = -40*(parseInt(e.originalEvent.deltaY)/33);
    var scto = $(this).scrollLeft() - delta;
    $(this).scrollLeft(scto);
  }
});