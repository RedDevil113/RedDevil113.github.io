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

	/*$('select').selectize({});*/

	$('.search-select').selectize({
    valueField: 'name',
    labelField: 'name',
    placeholder: 'Все отели'
,    options: [{
        description: 'Nice Guy',
        name: 'Brian Reavis',
        imageUrl: 'http://www.fashionspictures.com/wp-content/uploads/2013/11/short-hairstyles-for-a-square-face-42-150x150.jpg'
    }, {
        description: 'Other nice guy',
        name: 'Nikola Tesla',
        imageUrl: 'http://www.fashionspictures.com/wp-content/uploads/2013/11/short-hairstyles-for-a-square-face-42-150x150.jpg'
    }],
    render: {
        option: function (item, escape) {
            return '<div class="option">' +
                    '<div class="image">' +
                           '<img class="avatar" src="' + item.imageUrl + '" />' +
                   '</div>' +
                    '<div class="text">' +
                        '<span class="name">' + escape(item.name) + '</span>' +
                        '<p class="description">' + escape(item.description) + '</p>' +
                   '</div>' +
                '</div>';
        }
    }
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
	})

	$('.tour-program__button p').on('click', function(){
		$('.tour-program__slider').toggleClass('tour-program__slider-close');
		$('.tour-program__row').toggleClass('tour-program__row-open');
	});

});