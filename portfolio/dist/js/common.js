$(function() {

	$('.slide-banner').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:3000,
	  speed:1000
	});

	var head = $('.header');
	$(this).on('scroll', function(){
		if($(this).scrollTop() > 0)
			head.addClass('header-fixed');
		else
			head.removeClass('header-fixed');
	});

	$('.top-menu__item a').click(function(e){
			e.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('html,body').animate({scrollTop: top - head.height()},900);
			head.removeClass('open');
	});

	

});

