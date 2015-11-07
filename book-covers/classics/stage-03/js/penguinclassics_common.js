
/* REMOVE ADDRESS BAR ON IOS MOBILE BROWSERS */
/mobile/i.test(navigator.userAgent) && setTimeout(function () {
	window.scrollTo(0, 1);
}, 1000);





/* FORM VALUE CLEAR */
function myFocus(element) {
	if (element.value == element.defaultValue) {
		element.value = '';
	}
}

function myBlur(element) {
	if (element.value == '') {
		element.value = element.defaultValue;
	}
}



/* BROWSE DIV OVELAY !!ORIGINAL!! */
/*
$(function() {
    var t;
    $('#browse').mouseover(function() {
        $('#browse-navigation').fadeIn("fast", "linear");
    });
    $('#browse').mouseout(function() {
        t = setTimeout(function(){
            $('#browse-navigation').fadeOut("fast", "linear");
        }, 500);
    });
	
    $('#browse-navigation').mouseover(function() {
        clearTimeout(t);
    });
    $('#browse-navigation').mouseleave(function() {
        $('#browse-navigation').fadeOut("fast", "linear");
    });
});

*/

/* BROWSE DIV OVELAY RESOLVES ISSUES FOR TABLET AND IE BROWSERS */
$(function() {
    var t;
    $('#browse').mouseover(function() {
        $('#browse-navigation').fadeIn("fast", "linear");
			
    });
    $('#browse').mouseout(function() {
        t = setTimeout(function(){
            $('#browse-navigation').fadeOut("fast", "linear");
        }, 500);
    });
	
    $('#browse-navigation').mouseover(function() {
        clearTimeout(t);
		
    });
  $('#browse-navigation').mouseleave(function() {
        $('#browse-navigation').fadeOut("fast", "linear");
    });
	
	$('#browse').click('click', function() {
	
	$('#browse-navigation').toggle();
}, false);
	
});








/* SLIDING CAPTION PANELS */
$(document).ready(function(){
	//Caption Sliding (Partially Hidden to Visible)
	$('.panel-2.caption').hover(function(){
		$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:800});
	}, function() {
		$(".cover", this).stop().animate({top:'300px'},{queue:false,duration:400});
	});
});

$(document).ready(function(){
	//Caption Sliding (Partially Hidden to Visible)
	$('.panel-3.caption').hover(function(){
		$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:800});
	}, function() {
		$(".cover", this).stop().animate({top:'300px'},{queue:false,duration:400});
	});
});

$(document).ready(function(){
	//Caption Sliding (Partially Hidden to Visible)
	$('.panel-4.caption').hover(function(){
		$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:800});
	}, function() {
		$(".cover", this).stop().animate({top:'300px'},{queue:false,duration:400});
	});
});

$(document).ready(function(){
	//Caption Sliding (Partially Hidden to Visible)
	$('.panel-6.caption').hover(function(){
		$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:800});
	}, function() {
		$(".cover", this).stop().animate({top:'300px'},{queue:false,duration:400});
	});
});



/*
 * Footer Global Dropdown 
 */	
function land(ref, target)
{
lowtarget=target.toLowerCase();
if (lowtarget=="_self") {window.location=loc;}
else {if (lowtarget=="_top") {top.location=loc;}
else {if (lowtarget=="_new") {window.open(loc);}
else {if (lowtarget=="_parent") {parent.location=loc;}
else {parent.frames[target].location=loc;};

}}}

}

function jump(menu)
{
ref=menu.choice.options[menu.choice.selectedIndex].value;
splitc=ref.lastIndexOf("*");
target="";
if (splitc!=-1)
{loc=ref.substring(0,splitc);
target=ref.substring(splitc+1,1000);}
else {loc=ref; target="_self";};
if (ref != "") {land(loc,target);}
}










