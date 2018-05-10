$(document).ready(function() {

	$('#pagepiling').pagepiling({
    direction: 'horizontal',
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4']
	});
	
	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open-menu');
		if($(window).width() > 600)
			$('.header-menu').slideToggle();
		else
			$('.header-wrap').slideToggle();
	});

	$('.header-menu li a').on('click', function(){
		if($(window).width() <= 1260){
			$('.header').toggleClass('open-menu');
			if($(window).width() > 600)
				$('.header-menu').slideToggle();
			else
				$('.header-wrap').slideToggle();
		}
	});

	//$('.footer').css('top', $('.section.active').outerHeight() - $('.footer').outerHeight() + 'px');

	/*$(window).resize(function(){
		$('.footer').css('top', $('.section.active').outerHeight() - $('.footer').outerHeight() + 'px');
	});*/
	
});