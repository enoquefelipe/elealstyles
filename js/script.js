$("#botao-menu-novo").click(function() {
    $("#menu-novo").slideToggle(150);
});

$(".menu-close").click(function() {
	$(".menu").addClass('show-animation');
	$(".general-content").addClass('animation');
	$(".menu-close").css('display','none');
	$(".menu-open").css('display','block');
});

$(".menu-open").click(function() {
	$(".menu" ).removeClass('show-animation');
	$(".general-content").removeClass('animation');
	$(".menu-close").css('display','block');
	$(".menu-open").css('display','none');
});	

//$("#menu-close").click(function() {
//$(".content-2").toggle(1000);

//$(".content-3").toggle(1000);
//});
