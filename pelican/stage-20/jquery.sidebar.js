$("#nav").live("click", function () {
    $("#sidebar").animate({
        marginLeft: "0em"
    });
});

$(".close-button").live("click", function () {
    $("#sidebar").animate({
        marginLeft: "-14em"
    });
});

$("#nav").live("click", function () {
    $("#main").animate({
        marginLeft: "14em"
    });
});

$(".close-button").live("click", function () {
    $("#main").animate({
        marginLeft: "0em"
    });
});

$("#main").live("click", function () {
    $("#sidebar").animate({
        marginLeft: "-14em"
    });
});

$("#main").live("click", function () {
    $("#main").animate({
        marginLeft: "0em"
    });
});