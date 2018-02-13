$(document).ready(function(){

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open-menu');
		$('.header-nav ul').slideToggle();
	});


});