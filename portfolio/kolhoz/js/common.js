$(document).ready(function(){

	$(".customers-slider").owlCarousel({
	  loop: true,
    margin: 0,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: ['<div class="nav previous"></div>', '<div class="nav next"></div>'],
    items: 4,
    autoplay: true,
    autoplayTimeout: 5000,
  	autoplayHoverPause: true,
  	responsiveClass:true,
    responsive:{
      992:{
          items:4
      },
      700:{
          items:3
      },
      300:{
          items:2
      },
    }
	});
	
	$(".offers-slider").owlCarousel({
	  loop: true,
    margin: 0,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: ['<div class="nav previous"></div>', '<div class="nav next"></div>'],
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  	autoplayHoverPause: true
	});

	$('.to-map').on('click', function(e){
		e.preventDefault();
		var itemId = $(this).attr('href'),
			blockTop = $(itemId).offset().top;
		$('html, body').animate({scrollTop : blockTop - $('.header').height()},1000);
	});

	$('.offers-btn__all').on('click', function(e){
		e.preventDefault();
		$(this).css('display', 'none');
		$('.offers-row .col-md-6').removeClass('offers-hidden');
	});

	// arrows position
	function poss(){
		var pos = ($(window).width() - $('.wrapper').outerWidth()) / 2 + 53;
		$('.offers-nav').css('right', pos + 'px');
	}
	setTimeout(poss, 10);

	$(window).resize(function() {
		poss();
	});

	//modal
	var modalCont = $('.modal'),
		modalOver = $('.modal-overlay');
		
	$('.button-modal').on('click',function(e){
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