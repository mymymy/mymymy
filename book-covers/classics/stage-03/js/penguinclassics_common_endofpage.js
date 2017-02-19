


$("#newsletter").click(function () {
   $('.newsletter-content').slideToggle();

});

$("#newsletter-contentUp").click(function () {
   $('.newsletter-content').slideUp(500);
});


/* SHARRRRE FOOTER */
$('#twitter').sharrre({
share: {
twitter: true
},
enableHover: false,
enableTracking: true,
buttons: { twitter: {via: 'Penguin Classics'}},
click: function(api, options){
api.simulateClick();
api.openPopup('twitter');
}
});

$('#facebook').sharrre({
share: {
facebook: true
},
enableHover: false,
enableTracking: true,
click: function(api, options){
api.simulateClick();
api.openPopup('facebook');
}
});

$('#googleplus').sharrre({
share: {
googlePlus: true
},
enableHover: false,
enableTracking: true,
click: function(api, options){
api.simulateClick();
api.openPopup('googlePlus');
}
});


