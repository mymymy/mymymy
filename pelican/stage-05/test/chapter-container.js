$(function () {
    $('#chapter-container').css({
        'height': (($(window).height())*0.8) + 'px'
    });
    $(window).resize(function () {
        $('#chapter-container').css({
            'height': (($(window).height()) *0.8) + 'px'
        });
    });
});