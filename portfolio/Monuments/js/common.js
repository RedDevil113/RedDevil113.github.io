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

	video.init();

	$(".eTimer").eTimer({
		etType: 2, etDate: "08.06.2018.0.0", etTitleText: "", etTitleSize: 20, etShowSign: 1, etSep: " ", etFontFamily: "Lato", etTextColor: "#a3a3a3", etPaddingTB: 15, etPaddingLR: 15, etBackground: "#333333", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "white", etShadow: " 0px 0px 10px 0px #333333", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 46, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#e7a226", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
	});

	$('.main-slider').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000,
	  customPaging : function(slider, i) {
    	var thumb = $(slider.$slides[i]).data();
    	return '<a>'+ i +'</a>';
    },
	});

	var $status = $('.pagingInfo');
  var $slickElement = $('.slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 1) + 1;
    $status.text(i + '/' + slick.slideCount);
  });

  $('.jobs-slider').slick({
	  infinite: false,
	  arrows: true,
	  dots: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000,
	});

	//arrow toTop
	var topArrow = $('.scroll-to__top');
	$(window).scroll(function(){
		if($(this).scrollTop() > ($(this).height()) /2)
			$(topArrow).addClass('arrow__active');
		else
			$(topArrow).removeClass('arrow__active');
	});
	$(topArrow).on('click', function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

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