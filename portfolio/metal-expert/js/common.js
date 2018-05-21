$(document).ready(function() {

	if($('#pagepiling').length > 0){
		$('#pagepiling').pagepiling({
	    direction: 'horizontal',
			menu: '#menu',
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6']
		});
	}
	else {
		$('html,body').css({'overflow-x': 'hidden', 'overflow-y' : 'auto'});
	}
	
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

	lightbox.option({
	  'resizeDuration': 100,
	  'wrapAround': true
	})

	if($(window).width() < 1360){
		$('.contact-card__1').css('left', ($(window).width() - $('.managers-wrap').width()) / 2 + 'px');
		$('.contact-card__2').css('right', ($(window).width() - $('.managers-wrap').width()) / 2 + 'px');
	}
	
	$(window).resize(function(){
		if($(this).width() < 1360){
			var position = ($(this).width() - $('.managers-wrap').width()) / 2;
			$('.contact-card__1').css('left', position + 'px');
			$('.contact-card__2').css('right', position + 'px');
		}
	});

	$('.m-phone').mask( '+7' + '(999) 999-99-99');

	//modal
	var modalCont = $('.modal'),
		modalOver = $('.modal-overlay');
		
	$('.button-modal').on('click',function(e){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
		
	  e.preventDefault();
	  var id = $(this).attr('href');
	  $(id).addClass('open');
	  $(modalOver).addClass('open-overlay');
	});

	$('.cancel').on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
	});
	$(modalOver).on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
	});
	
});