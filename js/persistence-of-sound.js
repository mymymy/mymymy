$( document ).ready(function() {

	$("#show-musique-what").on("click", function(e) {
		e.preventDefault()
		$("#musique-what").slideDown()
		$(this).fadeOut()
	})

	// Carousel
	$("#the-carousel").swipe( {

		//Generic swipe handler for all directions
		swipe:function(event, direction, distance) {

			if ( $(this).hasClass("position-1") ) {

				console.log("position-1")

				if ( direction == "left" ) {
					console.log("swipe left")
					$(this).removeClass("position-1").addClass("position-2")
					console.log("position-2")
					$("#dot-1").removeClass("current")
					$("#dot-2").addClass("current")
				}

			} else if ( $(this).hasClass("position-2") ) {

				if ( direction == "left" ) {
					console.log("swipe left")
					$(this).removeClass("position-2").addClass("position-3")
					console.log("position-3")
					$("#dot-2").removeClass("current")
					$("#dot-3").addClass("current")
				} else if ( direction == "right" ) {
					console.log("swipe right")
					$(this).removeClass("position-2").addClass("position-1")
					console.log("position-1")
					$("#dot-2").removeClass("current")
					$("#dot-1").addClass("current")
				}

			} else if ( $(this).hasClass("position-3") ) {

				if ( direction == "right" ) {
					console.log("swipe right")
					$(this).removeClass("position-3").addClass("position-2")
					console.log("position-2")
					$("#dot-3").removeClass("current")
					$("#dot-2").addClass("current")
				}
			}
		},
		 threshold: 75 // how many px before event is triggered
		});

	// Make dots clickable
	$("#dot-1").on("click", function() {
		$(".dot").removeClass("current")
		$("#dot-1").addClass("current")
		$("#the-carousel").removeClass().addClass("position-1")
	})

	$("#dot-2").on("click", function() {
		$(".dot").removeClass("current")
		$("#dot-2").addClass("current")
		$("#the-carousel").removeClass().addClass("position-2")
	})
	$("#dot-3").on("click", function() {
		$(".dot").removeClass("current")
		$("#dot-3").addClass("current")
		$("#the-carousel").removeClass().addClass("position-3")
	})

});