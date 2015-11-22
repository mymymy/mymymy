var header = '<div id="MYMYMY" class="johnston"><a class="black" href="/">MY MY MY</a></div><div id="new_nav" class="johnston"><a class="book-covers" href="{{book-covers-link}}"><span class="no-wrap">Book Covers</span></a> &nbsp;&nbsp; <a class="animations" href="{{animations-link}}">Animations</a> &nbsp;&nbsp; <a class="about-me" href="{{about-link}}">About</a></div><div id="line"></div>';

var header_data = {
	"book-covers-link": "/book-covers",
	"animations-link": "/animations",
	"about-link": "/about"
}

var header = Mustache.render(header, header_data);






var footer = '<p>Copyright &copy; {{year-started}}&ndash;{{current-year}}. All work property of Matthew Young.</p>';

var footer_data = {
	"year-started": "2009",
    "current-year": "2015"
};

var footer = Mustache.render(footer, footer_data);