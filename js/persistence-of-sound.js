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

	// playerTheEccentricPress.ready().then(function() {
	// 	$("#video-the-eccentric-press").fitVids()
	// });

	// playerFactitiousAirs.ready().then(function() {
	// 	$("#video-factitious-airs").fitVids()
	// });

	// playerThames.ready().then(function() {
	// 	$("#video-thames").fitVids()
	// });	

	// Video changer
	// $(".video").on("click", function(e) {
	// 	console.log("click")
	// 	if ( $(this).hasClass("front") ) {
	// 		console.log("clicked on front")
	// 	} else {
	// 		$(".video.middle").removeClass().addClass("video back")
	// 		$(".video.front").removeClass().addClass("video middle")
	// 		$(this).removeClass().addClass("video front")
	// 		console.log("clicked on not-front")
	// 	}
	// })
	
	playerFactitiousAirs.on('play', function() {
		if ( !$("#video-factitious-airs").hasClass("front") ) {
			playerTheEccentricPress.pause()
			playerThames.pause()
			$(".video.middle").removeClass().addClass("video back")
			$(".video.front").removeClass().addClass("video middle")
			$("#video-factitious-airs").removeClass().addClass("video front")
		}
	});

	playerTheEccentricPress.on('play', function() {
		if ( !$("#video-the-eccentric-press").hasClass("front") ) {
			$(".video.middle").removeClass().addClass("video back")
			$(".video.front").removeClass().addClass("video middle")
			$("#video-the-eccentric-press").removeClass().addClass("video front")
			playerFactitiousAirs.pause()
			playerThames.pause()
		}
	});

	playerThames.on('play', function() {
		if ( !$("#video-thames").hasClass("front") ) {
			playerFactitiousAirs.pause()
			playerTheEccentricPress.pause()
			$(".video.middle").removeClass().addClass("video back")
			$(".video.front").removeClass().addClass("video middle")
			$("#video-thames").removeClass().addClass("video front")
		}
	});

	$("#video-the-eccentric-press").fitVids()
	$("#video-factitious-airs").fitVids()
	$("#video-thames").fitVids()

});
