$( document ).ready(function() {

    $("#show-colophon").on("click", function(e) {
    	e.preventDefault()
    	$(this).hide()
    	$("#colophon").fadeIn()
    })
});