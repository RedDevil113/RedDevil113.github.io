$(document).ready(function(){

	//slider
	$('.slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 10000,
	  speed: 1000
	});

	//arrow toTop
	var topArrow = $('.arrow-top');
	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height())
			$(topArrow).addClass('arrow-active');
		else
			$(topArrow).removeClass('arrow-active');
	});
	$(topArrow).on('click', function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	//menu scroll
	$('.header-menu, .main-info').on('click', 'a', function(e){
		e.preventDefault();
		var itemId = $(this).attr('href'),
				blockTop = $(itemId).offset().top;
		$('html, body').animate({scrollTop : blockTop},900);

		$('.header').removeClass('header-active');
	});

	//menu mob
	$('.header-bar').on('click', function(){
		$('.header').toggleClass('header-active');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$('.tab-list li a').removeClass('active');
		$('.tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).addClass('active');
	});

	//accordeons
	$(".accordeon .accordeon-block").hide().prev().click(function() {

		if($(this).parents(".accordeon").hasClass('accordeon-active'))
			$(".accordeon").removeClass('accordeon-active');
		else {
			$(".accordeon").removeClass('accordeon-active');
			$(this).parents(".accordeon").addClass('accordeon-active');
		}

		$(this).parents().find(".accordeon-block").not(this).slideUp().prev();
		$(this).next().not(":visible").slideDown().prev().parents();

	});

	//modal
	var modalCont = $('.modal');
		
	$('.button-modal').on('click',function(e){
		e.preventDefault();

		var id = $(this).attr('href');
		$(id).addClass('open');
		$('.modal-overlay').addClass('open-overlay');
	});

	$('.modal-close, .modal-overlay').on('click',function(){
		$(modalCont).removeClass('open');
		$('.modal-overlay').removeClass('open-overlay');
	});

});