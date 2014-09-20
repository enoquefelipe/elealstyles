$("#clickme1").click(function(e) {
    var elm = $('#column1');
    $("html, body").animate({scrollTop: elm.offset().top}, 500);
	console.log(elm.offset().top);
	e.preventDefault();
});

$("#clickme2").click(function(e) {
    var elm = $('#column2');
    $("html, body").animate({scrollTop: elm.offset().top}, 500);
	console.log(elm.offset().top);
	e.preventDefault();
});

$("#clickme3").click(function(e) {
	
    var elm = $('#column3');
    $("html, body").animate({scrollTop: elm.offset().top}, 500);
	console.log(elm.offset().top);
	e.preventDefault();
});