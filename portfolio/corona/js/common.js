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

	$('select').selectize({});

	//mob menu
	$('.menu-bar,.arrow-mob').on('click', function(){
		$('.header').toggleClass('open-menu');
	});

	function titlePadding(){
		var content = $('.article-col__wrap').each(function(i,elem){
			var hei = $(this).height(),
					titleH = $(this).find('h3').height();
			$(this).find('.article-col__descr').css({"top": hei - titleH - 68 + 'px'});
		});
	}
	titlePadding();

	$(window).resize(function(){
		titlePadding();
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

});