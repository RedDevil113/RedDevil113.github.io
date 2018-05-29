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
	if($('.search-col__date').length > 0){
		$('.search-col__date').daterangepicker({
	    autoUpdateInput: false,
	    autoApply: true,
	    opens: 'right',
	    minDate: moment(),
	    maxDate: moment().add(24, 'month'),
	    dateLimit: {
	      "days": 30
	    },
	    locale: {
	      cancelLabel: 'Отмена',
	      applyLabel: 'Сохранить',
	      monthNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
	      daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	      firstDay: 1,
	      format: 'DD.MM.YYYY'
	    } 
	  });

	  $('.search-col__date').on('cancel.daterangepicker', function(ev, picker) {
	    $(this).find('p').html('Выберите даты');
	  });

		$('.search-col__date').on('apply.daterangepicker', function(ev, picker) {
	    $(this).find('p').html(picker.startDate.format('c DD.MM') + ' по ' + picker.endDate.format('DD.MM'));
	    $(this).find('.hidden-start-date').val(picker.startDate.format('DD.MM.YYYY'));
	    $(this).find('.hidden-end-date').val(picker.endDate.format('DD.MM.YYYY'));
	  });

	  $('.search-col__date').on('click.daterangepicker', function(ev, picker){
	  	$(this).find('p').html(picker.startDate.format('c DD.MM') + ' по ' + picker.endDate.format('DD.MM'));
	  	$(this).find('.hidden-start-date').val(picker.startDate.format('DD.MM.YYYY'));
	    $(this).find('.hidden-end-date').val(picker.endDate.format('DD.MM.YYYY'));
	  });
	  
	}

	$('.search-col').on('click', function(e){
		$('.search-col').removeClass('search-col__active');
		var target = e.target;

		if(!$(this).hasClass("search-col__date") && !$(this).hasClass("search-col__5")){
			$(this).addClass('search-col__active');
			$(this).find('input').focus();

			if($(target).hasClass("search-col__top-wrap"))
				$(this).removeClass('search-col__active');
		}
		else if($(this).hasClass("search-col__5")){
			$(this).addClass('search-col__active');

			if($(target).hasClass("search-col__top-wrap")){
				$(this).removeClass('search-col__active');
			}
			if(target.tagName == 'P' && !$(target).hasClass("food-value")){
				$(this).removeClass('search-col__active');
				console.log('ds');
			}
		}
	});

	$('.search-col__date').on('click', function(){
		$(this).find('p').text($(this).find('input').val());
	});
	/*
	$('.search-col__5').on('click', function(){
		$(this).toggleClass('search-col__active');
	});
*/
	//tabs
	$('.search-menu li').on('click', function(){
		$('.search-menu li').removeClass('active');
		$(this).addClass('active');
		
		var attr = $(this).attr('data-tab');
		$('.search-row').removeClass('tab-1 tab-2 tab-3 tab-4 tab-5 tab-6');
		$('.search-row').addClass(attr);

		$('.search-col').removeClass('search-col__active');
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
			if(value != '4')
				$(this).find('b').text(value + 1);
		}

		$('.search-col__people-wrap__bg').removeClass('active-1 active-2 active-3 active-4');
		$('.search-col__people-wrap__bg').addClass('active-' + $('.search-col__people-children b').text());

		var valueAdults = +$('.search-col__people-adults b').text(),
				valueChildren = +$('.search-col__people-children b').text();

		if(valueChildren != '0' && valueChildren != '4')
			$('.search-col__people .search-col__top p').text(valueAdults + ' взрослых, ' + valueChildren + ' детей');
		else if(valueChildren == '4')
			$('.search-col__people .search-col__top p').text(valueAdults + ' взрослых, 4 детей');
		else
			$('.search-col__people .search-col__top p').text(valueAdults + ' взрослых');

	});

	$('.people-select__bottom p').on('click', function(){
		$('.people-select__top p').text($(this).text());
		$('.people-select__bottom p').removeClass('search-text__active');
		$(this).addClass('search-text__active');
	});

	$('.search-col__food .search-col__bottom p').on('click', function(e){
		if(!$(this).hasClass('search-text__label')){
			$(this).parent().parent().find('.search-col__top p').text($(this).text());
			$('.search-col__food .search-col__bottom p').removeClass('search-text__active');
			$(this).addClass('search-text__active');
		}
		/*
		$('.search-col__food .search-col__top p').text($(this).text());
		$('.search-col__food .search-col__bottom p').removeClass('search-text__active');
		$(this).addClass('search-text__active');*/
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

	$('.extradition-col__descr-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: true,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:15000,
	  speed:1000,
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

	$( "#slider-range__1" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 100, 300 ],
      slide: function( event, ui ) {
        $(".search-additionally__col-1 .search-additionally__span-1").html( ui.values[ 0 ] + " <b>000</b>" );
        $(".search-additionally__col-1 .search-additionally__span-2").html( ui.values[ 1 ] + " <b>000</b>" );
        $("#amount-1").val( ui.values[ 0 ] + "000" + " " + ui.values[ 1 ] + "000" );
      }
    });
    $("#amount-1").val( $( "#slider-range__1" ).slider( "values", 0 ) + "000" + " " + $( "#slider-range__1" ).slider( "values", 1 ) + "000" );
    $(".search-additionally__col-1 .search-additionally__span-1").html( $( "#slider-range__1" ).slider( "values", 0 ) + " <b>000</b>");
    $(".search-additionally__col-1 .search-additionally__span-2").html( $( "#slider-range__1" ).slider( "values", 1 ) + " <b>000</b>" );

    $( "#slider-range__2" ).slider({
      range: true,
      min: 0,
      max: 5,
      values: [ 3, 5 ],
      slide: function( event, ui ) {
        $(".search-additionally__col-2 .search-additionally__span-1").html( ui.values[ 0 ]);
        $(".search-additionally__col-2 .search-additionally__span-2").html( ui.values[ 1 ]);
        $("#amount-2").val( ui.values[ 0 ] + " " + ui.values[ 1 ] );
      }
    });
    $("#amount-2").val( $( "#slider-range__2" ).slider( "values", 0 )+ " " + $( "#slider-range__2" ).slider( "values", 1 ));
    $(".search-additionally__col-2 .search-additionally__span-1").html( $( "#slider-range__2" ).slider( "values", 0 ));
    $(".search-additionally__col-2 .search-additionally__span-2").html( $( "#slider-range__2" ).slider( "values", 1 ));

  $('.search-additionally__filter').on('click', function(){
  	$(this).toggleClass('open-arrow');
  	$('.search-additionally__bottom').slideToggle();
  });

  $('.input-phone').mask( '+7' + '(999) 999-99-99');

  $('.gallery-row div').on('click', function(){
  	var attr = $(this).attr('style');
  	
  	$('.gallery-main__img').attr('style', attr);
  });

  $('.extradition-col__descr-bottom').css('padding-top', $('.extradition-col__descr-slider').height() + 30 + 'px');

  $(window).resize(function(){
  	$('.extradition-col__descr-bottom').css('padding-top', $('.extradition-col__descr-slider').height() + 30 + 'px');
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