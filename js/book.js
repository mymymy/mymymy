$( document ).ready(function() {

	// Click to show colophon
    $("#show-colophon").on("click", function(e) {
    	e.preventDefault()
    	$(this).hide()
    	$("#colophon").fadeIn()
    })

    // Carousel
    $(".front-and-back").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance) {
          if ( direction == "left" ) {
          	// console.log("swipe left")
          	$(this).removeClass("show-front")
          	$(this).addClass("show-back")
          	$("#dot-1").removeClass("current")
          	$("#dot-2").addClass("current")
          } else if (direction == "right") {
          	// console.log("swipe right")
          	$(this).removeClass("show-back")
          	$(this).addClass("show-front")
          	$("#dot-2").removeClass("current")
          	$("#dot-1").addClass("current")
          }
        },
         threshold: 75 // how many px before event is triggered
      });

    // Make dots clickable
    $("#dot-1").on("click", function() {
    	$(".dot").removeClass("current")
    	$("#dot-1").addClass("current")
    	$(".front-and-back").removeClass("show-back")
        $(".front-and-back").addClass("show-front")
    })

    $("#dot-2").on("click", function() {
    	$(".dot").removeClass("current")
    	$("#dot-2").addClass("current")
    	$(".front-and-back").removeClass("show-front")
        $(".front-and-back").addClass("show-back")
    })

});