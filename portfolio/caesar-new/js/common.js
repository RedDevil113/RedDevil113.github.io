$(document).ready(function(){

	$('.menu-bar').on('click', function(){
		$('.header-menu').slideToggle();
	});

	$('.news-slider__s').slick({
	  infinite: false,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 2,
	  variableWidth: true,
	  slidesToScroll: 1,
	  speed:1000,
	  responsive: [
    {
      breakpoint: 450,
      settings: {
        variableWidth: false,
        slidesToShow: 1
      }
    },
    ]
	});

	//s;ider range
  if($( "#slider-range__1" ).length != 0){
  	$( "#slider-range__1" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 3000, 6000 ],
      slide: function( event, ui ) {
        $("#search-price__1").val( ui.values[ 0 ]);
        $("#search-price__2").val( ui.values[ 1 ]);
      }
    });
    $("#search-price__1").val( $( "#slider-range__1" ).slider( "values", 0 ));
    $("#search-price__2").val( $( "#slider-range__1" ).slider( "values", 1 ));
  }

  //accordeons
	$(".accordeon .accordeon-descr").hide().prev().click(function() {

		if($(this).parents(".accordeon").hasClass('accordeon-active'))
			$(".accordeon").removeClass('accordeon-active');
		else {
			$(".accordeon").removeClass('accordeon-active');
			$(this).parents(".accordeon").addClass('accordeon-active');
		}

		$(this).parents().find(".accordeon .accordeon-descr").not(this).slideUp().prev();
		$(this).next().not(":visible").slideDown().prev().parents();

	});
	$(".accordeon-open").addClass('accordeon-active').find(".accordeon-descr").show();

	$('.catalog-sidebar__list .catalog-sidebar__title').on('click', function(){
		if($(window).width() < 768){
			$('.catalog-sidebar__list').toggleClass('catalog-sidebar__list-open');
			$('.catalog-sidebar__list ul').slideToggle();
		}
	});

	$('.catalog-sidebar__button').on('click', function(){
		$('.catalog-sidebar__filter').toggleClass('catalog-sidebar__filter-open');
		$('.overlay-bg').toggleClass('overlay-bg__open');
		$(this).toggleClass('catalog-sidebar__button-open');
	});

	$('.catalog-sidebar__close').on('click', function(){
		$('.catalog-sidebar__filter').toggleClass('catalog-sidebar__filter-open');
		$('.overlay-bg').toggleClass('overlay-bg__open');
		$('.catalog-sidebar__button').toggleClass('catalog-sidebar__button-open');
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 168){
			$('.CCTV-header').addClass('CCTV-header__fixed');
			$('.CCTV-header__block').addClass('CCTV-header__block-open');
			//$('.CCTV-header__block-open').css('height',$('.CCTV-header').outerHeight() + 'px');
		}
		else{
			$('.CCTV-header').removeClass('CCTV-header__fixed');
			$('.CCTV-header__block').removeClass('CCTV-header__block-open');
			//$('.CCTV-header__block').css('height',0 + 'px');
		}
	});

});