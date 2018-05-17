var video = {

  init: function() {
    video.play();
  },

  play: function() {
    jQuery('body').on('click', '#play-video-btn', function(e) {
      video.setSrc(this);
    });
  },

  setSrc: function(el) {
    if (el) {
      var video_id = jQuery(el).data('id');
      var url = '//www.youtube.com/embed/' + video_id + '?enablejsapi=1&version=3&showinfo=0&playerapiid=ytplayer&autoplay=1';
      jQuery('img#embed-video-preview').hide();
      jQuery('#play-video-btn').hide();
      jQuery('iframe#embed-video-frame').attr('src', url).fadeIn();
    }
  }
}

$(document).ready(function(){

	function explode(){
		var content = $('.article-col__wrap').each(function(i,elem){
			var hei = $(this).height(),
					titleH = $(this).find('h3').height();
			$(this).find('.article-col__descr').css({"top": hei - titleH - 68 + 'px'});
		});
	}
	setTimeout(explode, 300);

	$(window).resize(function(){
		explode();
	});

	//search
	$('.search-menu li').on('click', function(){
		$('.search-menu li').removeClass('active');
		$(this).addClass('active');
		
		var attr = $(this).attr('data-tab');
		$('.search-row').removeClass('tab-1 tab-2 tab-3 tab-4');
		$('.search-row').addClass(attr);
	});

	$('.search-col').on('click', function(e){
		if(!$(this).hasClass("search-col__date")){
			var target = e.target;
			$(this).addClass('search-col__active');
			$(this).find('input').focus();

			if($(target).hasClass("search-col__top-wrap"))
				$(this).removeClass('search-col__active');
		}
	});

	$('.people-select').on('click', function(){
		$(this).toggleClass('people-select__active');
	});

	$('.search-col__people-scores').on('click', function(e){
		var target = e.target,
				value = +$(this).find('b').text();

		if($(target).hasClass('scores-minus')){
			if(value != 0)
				$(this).find('b').text(value - 1);
		}
		if($(target).hasClass('scores-pluse')){
			$(this).find('b').text(value + 1);
		}
	});

	$('.people-select__bottom p').on('click', function(){
		$('.people-select__top p').text($(this).text());
		$('.people-select__bottom p').removeClass('search-text__active');
		$(this).addClass('search-text__active');
	});

	$('.search-col__food .search-col__bottom p').on('click', function(){
		$('.search-col__food .search-col__top p').text($(this).text());
		$('.search-col__food .search-col__bottom p').removeClass('search-text__active');
		$(this).addClass('search-text__active');
	});

	//mob menu
	$('.menu-bar,.arrow-mob').on('click', function(){
		$('.header').toggleClass('open-menu');
	});

	$(window).scroll(function(){
		if($(this).width() <= 860){
			if($(this).scrollTop() > 30)
				$('.header').addClass('scroll-header');
			else
				$('.header').removeClass('scroll-header');
		}
	});

	video.init();

	//slider
	$('.tour-program__slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: true,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:15000,
	  speed:1000,
	  responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1
	      }
	    },
    ]
	});

	lightbox.option({
	  'resizeDuration': 100,
	  'wrapAround': true
	});

	//scroll menu
	var head = $('.page-nav ul');

	$(head).on('click', 'a', function(e){

		e.preventDefault();
		var itemId = $(this).attr('href'),
			blockTop = $(itemId).offset().top;
		$('html, body').animate({scrollTop : blockTop - $(head).height()},500);

	});

	$('.tour-program__button p').on('click', function(){
		$(this).toggleClass('button-active');
		if($(this).find('span').text() == 'Развернуть')
			$(this).find('span').text("Свернуть");
		else
			$(this).find('span').text("Развернуть");

		$('.tour-program__slider').toggleClass('tour-program__slider-close');
		$('.tour-program__row').toggleClass('tour-program__row-open');
	});

});