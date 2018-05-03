$(document).ready(function(){

	 $('select').selectize({});


	$('.header-user__img').on('click', function(){
		$('.header-user ul').toggleClass('user-open');
	});

	$('.header-right__menu-drop').on('click', function(e){
		e.preventDefault();
		$('.header-right__menu-drop ul').toggleClass('drop-open');
	});

	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open');
		$('.header-left ul').slideToggle();
	});


});