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

	// Video Carousel
	$("#video-carousel").swipe( {

		//Generic swipe handler for all directions
		swipe:function(event, direction, distance) {

			if ( $(this).hasClass("position-1") ) {

				console.log("position-1")

				if ( direction == "left" ) {
					console.log("swipe left")
					$(this).removeClass("position-1").addClass("position-2")
					console.log("position-2")
					$("#video-dot-1").removeClass("current")
					$("#video-dot-2").addClass("current")
				}

			} else if ( $(this).hasClass("position-2") ) {

				if ( direction == "left" ) {
					console.log("swipe left")
					$(this).removeClass("position-2").addClass("position-3")
					console.log("position-3")
					$("#video-dot-2").removeClass("current")
					$("#video-dot-3").addClass("current")
				} else if ( direction == "right" ) {
					console.log("swipe right")
					$(this).removeClass("position-2").addClass("position-1")
					console.log("position-1")
					$("#video-dot-2").removeClass("current")
					$("#video-dot-1").addClass("current")
				}

			} else if ( $(this).hasClass("position-3") ) {

				if ( direction == "right" ) {
					console.log("swipe right")
					$(this).removeClass("position-3").addClass("position-2")
					console.log("position-2")
					$("#video-dot-3").removeClass("current")
					$("#video-dot-2").addClass("current")
				}
			}
		},
		 threshold: 75 // how many px before event is triggered
		});

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

	// $("#video-the-eccentric-press").fitVids()
	// $("#video-factitious-airs").fitVids()
	// $("#video-thames").fitVids()

});
