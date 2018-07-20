$(document).ready(function(){

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open-menu');
		$('.mob-menu').toggleClass('mob-menu__open');
	});

});