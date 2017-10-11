$(document).ready(function(){
	// menu
	var head = $('.header'),
		headList = $('.header-nav__list');

	$(headList).on('click', 'a', function(e){
		if(!$(this).hasClass('social')){
			e.preventDefault();
			console.log(this);
			var itemId = $(this).attr('href'),
					blockTop = $(itemId).offset().top;
			$('html, body').animate({scrollTop : blockTop - $(head).height()},900);

			$(head).removeClass('open');
			if($(window).width() <= '850')
				$('.header-nav').slideToggle(200);
		}

	});
	// mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open');
		$('.header-nav').slideToggle(200);
	});

	//animation
	if ($(window).width() > 768) {
   (function($) {
			$.fn.animated = function(inEffect) {
				$(this).each(function() {
					var ths = $(this);
					ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
							ths.addClass(inEffect).css("opacity", "1");
						};
					}, {
						offset: "90%"
					});

				});
			};
		})(jQuery);
		$(".banner-descr__title,.banner-descr__top-text,.banner-descr__action,.capabilities-column,.usWrite-column,.team-consultants__column,.capabilities-scaling__text-main").animated("fadeInDown", "fadeOutDown");
		$(".advantages-column,.educational-column,.documentation-column").animated("fadeInLeft", "fadeOutDown");
		$(".section-title").animated("fadeIn", "fadeOutDown");
		$(".capabilities-scaling__column-first,.capabilities-scaling__column-last,.howWorks-column").animated("zoomIn", "fadeOutDown");
		$(".team-column,.token-column").animated("fadeInUp", "fadeOutDown");
		$(".capabilities-mocup__row-descr__left,.capabilities-mocup__row-img__left").animated("fadeInLeft", "fadeInLeft");
		$(".capabilities-mocup__row-descr__right,.capabilities-mocup__row-img__right").animated("fadeInRight", "fadeInRight");
	}

});