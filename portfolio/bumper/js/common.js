$(document).ready(function(){

	//drop
	$('.logos-col__wrap').on('click', function(){

		if($(window).width() < 901){
			if(!$(this).parents(".logos-col").hasClass('col-active'))
				$('.logos-col').removeClass('col-active');
			$(this).parents(".logos-col").toggleClass('col-active');
		}
	});

	//slider
	$('.products-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:1000000000,
	  speed:1000,
	  responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]
	});

	//menu scroll
	var menu = $('.header');
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			if($(this).innerWidth() < 1101){
				$(menu).addClass('header-fixed-2');
			}
			else{
				$(menu).addClass('header-fixed');
			}
			$('body').addClass('body-pad');
		}
		else{
			$('body').removeClass('body-pad');
			$(menu).removeClass('header-fixed');
			$(menu).removeClass('header-fixed-2');
		}
	});

	//search
	$('.header-search input').attr('autocomplete', 'off');
	$('.header-search input').keyup(function(){
	  var length = $('.header-search input').val().length;
	  if(length > 0)
	  	$('.header-search__result').addClass('header-search__result-open')
	  else
	  	$('.header-search__result').removeClass('header-search__result-open')
	});

	//menu mob
	$('.header-search__ico').on('click', function(){
		$('.header-search').toggleClass('header-search__active');
	});

	//basket
	$('.header-basket__main').on('click', function(){
		$('.basket-overlay').toggleClass('basket-overlay__open');
		$('.header-basket').toggleClass('header-basket__active');
	});
	$('.basket-overlay').on('click',function(){
		$('.header-basket').toggleClass('header-basket__active');
		$('.basket-overlay').removeClass('basket-overlay__open');
	});

	//menu mob
	$('.header-bar').on('click', function(){
		$('.mob-menu').toggleClass('mob-menu__active');
	});

	$('.mob-menu .close').on('click', function(){
		$('.mob-menu').removeClass('mob-menu__active');
	});

	//filter
	$('.catalog-filter').on('click', function(){
		$('.catalog-sidebar').addClass('catalog-sidebar__open');
	});

	$('.catalog-sidebar .close').on('click', function(){
		$('.catalog-sidebar').removeClass('catalog-sidebar__open');
	});

	//tab
	$('.tab-list li a').on('click', function(e){
		e.preventDefault();

		$('.tab-list li').removeClass('active');
		$('.tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
		$(this).parents("li").addClass('active');
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

	//s;ider range
  if($( "#slider-range__1" ).length != 0){
  	$( "#slider-range__1" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 800, 7000 ],
      slide: function( event, ui ) {
        $("#search-price__1").val( ui.values[ 0 ]);
        $("#search-price__2").val( ui.values[ 1 ]);
      }
    });
    $("#search-price__1").val( $( "#slider-range__1" ).slider( "values", 0 ) + ' р');
    $("#search-price__2").val( $( "#slider-range__1" ).slider( "values", 1 ) + ' р');

  }

	//modal
	var modalCont = $('.modal'),
		modalOver = $('.modal-overlay');
		
	$('.button-modal').on('click',function(e){
		e.preventDefault();
		$('.modal').removeClass('open');
		var id = $(this).attr('href');
		$(id).addClass('open');
		$('.modal-overlay').addClass('open-overlay');
	});

	$('.close, .modal-overlay').on('click',function(){
		$(modalCont).removeClass('open');
		$('.modal-overlay').removeClass('open-overlay');
	});

});