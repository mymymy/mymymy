$( document ).ready(function() {

    $("#show-musique-what").on("click", function(e) {
    	e.preventDefault()
    	$(this).parent().parent().addClass("expanded")
    	$("#musique-what").slideDown()
    	$(this).fadeOut()
    })
});