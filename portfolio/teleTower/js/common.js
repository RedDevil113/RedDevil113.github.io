$(function() {

	/* слайдер */
	$('.slide-banner').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000
	});
	$('.slider-partners').slick({
	  infinite: true,
	  arrows: false,
	  dots: false,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:5000,
	  speed:1000
	});

	/* fix меню */
	var head = $('.header');
	$(this).on('scroll', function(){
		if($(this).scrollTop() > 0)
			head.addClass('header-fixed');
		else
			head.removeClass('header-fixed');
	});

	/* мобильное меню */
	$('.mob-menu').click(function(){
		head.toggleClass('open-menu');
	});

	/* Прокрутка страницы */
	$('.top-menu__item a').click(function(e){
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('html,body').animate({scrollTop: top - head.height()},900);
		head.removeClass('open-menu');
	});

	/* Модалки */
	var modalCont = $('.modal-content'),
		modalOver = $('.modal-overlay');
		
	$('.button-modal').on('click',function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).addClass('open-modal');
		$(modalOver).addClass('open-overlay');
	});

	$('.cancel').on('click',function(){
		$(modalCont).removeClass('open-modal');
		$(modalOver).removeClass('open-overlay');
	});
	$(modalOver).on('click',function(){
		$(modalCont).removeClass('open-modal');
		$(modalOver).removeClass('open-overlay');
	});

});

