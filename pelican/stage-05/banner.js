$(function () {
    $('#banner').css({
        'min-height': (($(window).height())*0.8) + 'px'
    });
    $(window).resize(function () {
        $('#banner').css({
            'min-height': (($(window).height()) *0.8) + 'px'
        });
    });
});