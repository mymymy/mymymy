$( document ).ready(function() {

	$("#show-musique-what").on("click", function(e) {
		e.preventDefault()
		$("#musique-what").slideDown()
		$(this).fadeOut()
	})

	// Vimeo
	var optionsTheEccentricPress = {
		url: "https://vimeo.com/337316761",
		width: 800,
		portrait: "false",
		title: "false",
		byline: "false",
		transparent: "true",
		autoplay: "false",
		autopause: "true",
	};

	var optionsFactitiousAirs = {
		url: "https://vimeo.com/337317583",
		width: 800,
		portrait: "false",
		title: "false",
		byline: "false",
		transparent: "true",
		autoplay: "false",
		autopause: "true",
	};

	var optionsThames = {
		url: "https://vimeo.com/337321737",
		width: 800,
		portrait: "false",
		title: "false",
		byline: "false",
		transparent: "true",
		autoplay: "false",
		autopause: "true",
	};

	var playerTheEccentricPress = new Vimeo.Player('video-the-eccentric-press', optionsTheEccentricPress);
	var playerFactitiousAirs = new Vimeo.Player('video-factitious-airs', optionsFactitiousAirs);
	var playerThames = new Vimeo.Player('video-thames', optionsThames);

	var pyong = function() {
		if ( $(window).width() < 800 ) {
			playerTheEccentricPress.loadVideo(347171066)
			playerFactitiousAirs.loadVideo(347171621)
			playerThames.loadVideo(347172128)
		} else {
			playerTheEccentricPress.loadVideo(337316761)
			playerFactitiousAirs.loadVideo(337317583)
			playerThames.loadVideo(337321737)
		}
	}

	pyong()

	$(window).resize(function() {
		pyong()
	})

	// Video Carousel
	$("#video-carousel").swipe( { fingers:'all', swipeLeft:swipe1, swipeRight:swipe1, allowPageScroll:"auto"} );

	function swipe1(event, direction, distance) {

		if ( $("#video-carousel").hasClass("position-1") ) {

			console.log("position-1")

			if ( direction == "left" ) {
				console.log("swipe left")
				$("#video-carousel").removeClass("position-1").addClass("position-2")
				console.log("position-2")
				$("#video-dot-1").removeClass("current")
				$("#video-dot-2").addClass("current")
			}

		} else if ( $("#video-carousel").hasClass("position-2") ) {

			if ( direction == "left" ) {
				console.log("swipe left")
				$("#video-carousel").removeClass("position-2").addClass("position-3")
				console.log("position-3")
				$("#video-dot-2").removeClass("current")
				$("#video-dot-3").addClass("current")
			} else if ( direction == "right" ) {
				console.log("swipe right")
				$("#video-carousel").removeClass("position-2").addClass("position-1")
				console.log("position-1")
				$("#video-dot-2").removeClass("current")
				$("#video-dot-1").addClass("current")
			}

		} else if ( $("#video-carousel").hasClass("position-3") ) {

			if ( direction == "right" ) {
				console.log("swipe right")
				$("#video-carousel").removeClass("position-3").addClass("position-2")
				console.log("position-2")
				$("#video-dot-3").removeClass("current")
				$("#video-dot-2").addClass("current")
			}
		}
	}

	// Make video-dots clickable
	$("#video-dot-1").on("click", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-1").addClass("current")
		$("#video-carousel").removeClass().addClass("position-1")
	})

	$("#video-dot-2").on("click", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-2").addClass("current")
		$("#video-carousel").removeClass().addClass("position-2")
	})
	$("#video-dot-3").on("click", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-3").addClass("current")
		$("#video-carousel").removeClass().addClass("position-3")
	})

	// Make videos clickable
	playerTheEccentricPress.on("play", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-1").addClass("current")
		$("#video-carousel").removeClass().addClass("position-1")
		playerFactitiousAirs.pause()
		playerThames.pause()
	})

	playerFactitiousAirs.on("play", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-2").addClass("current")
		$("#video-carousel").removeClass().addClass("position-2")
		playerTheEccentricPress.pause()
		playerThames.pause()
	})
	playerThames.on("play", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-3").addClass("current")
		$("#video-carousel").removeClass().addClass("position-3")
		playerTheEccentricPress.pause()
		playerFactitiousAirs.pause()
	})

	// Play next video when current video ends
	playerTheEccentricPress.on("ended", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-2").addClass("current")
		$("#video-carousel").removeClass().addClass("position-2")
		playerFactitiousAirs.play()
	})

	playerFactitiousAirs.on("ended", function() {
		$(".video-dot").removeClass("current")
		$("#video-dot-3").addClass("current")
		$("#video-carousel").removeClass().addClass("position-3")
		playerThames.play()
	})




	// Website Carousel
	$("#the-carousel").swipe( { fingers:'all', swipeLeft:swipe2, swipeRight:swipe2, allowPageScroll:"auto"} );

		//Generic swipe handler for all directions
		function swipe2(event, direction, distance) {

			if ( $("#the-carousel").hasClass("position-1") ) {

				console.log("position-1")

				if ( direction == "left" ) {
					console.log("swipe left")
					$("#the-carousel").removeClass("position-1").addClass("position-2")
					console.log("position-2")
					$("#dot-1").removeClass("current")
					$("#dot-2").addClass("current")
				}

			} else if ( $("#the-carousel").hasClass("position-2") ) {

				if ( direction == "left" ) {
					console.log("swipe left")
					$("#the-carousel").removeClass("position-2").addClass("position-3")
					console.log("position-3")
					$("#dot-2").removeClass("current")
					$("#dot-3").addClass("current")
				} else if ( direction == "right" ) {
					console.log("swipe right")
					$("#the-carousel").removeClass("position-2").addClass("position-1")
					console.log("position-1")
					$("#dot-2").removeClass("current")
					$("#dot-1").addClass("current")
				}

			} else if ( $("#the-carousel").hasClass("position-3") ) {

				if ( direction == "right" ) {
					console.log("swipe right")
					$("#the-carousel").removeClass("position-3").addClass("position-2")
					console.log("position-2")
					$("#dot-3").removeClass("current")
					$("#dot-2").addClass("current")
				}
			}
		}

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

	// $("#video-the-eccentric-press").fitVids()
	// $("#video-factitious-airs").fitVids()
	// $("#video-thames").fitVids()

});
