$(document).ready(function(){

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header nav').slideToggle();
		$(this).toggleClass('menu-bar__open');
	});

	$('.products-sidebar__button').on('click', function(e){
		e.preventDefault();
		$('.products-sidebar').toggleClass('products-sidebar__open');
		$('.modal-overlay__sidebar').toggleClass('modal-overlay__sidebar-open');
		$(this).toggleClass('products-sidebar__button-open');
	});

	$('.products-sidebar__cancel').on('click', function(e){
		$('.products-sidebar').toggleClass('products-sidebar__open');
		$('.modal-overlay__sidebar').toggleClass('modal-overlay__sidebar-open');
		$('.products-sidebar__button').toggleClass('products-sidebar__button-open');
	});

	$('.header-categories__wrap').css('width', $('.header-middle .wrapper').width() + 30 + 'px');

	//top-arrow
	$('.top-arrow').on('click', function(e){
		$('html, body').animate({scrollTop : 0 + 'px'},500);
	});

	$('.top-arrow').css('right', ($(window).width() - $('.header-middle .wrapper').width()) / 2 + 'px');

	$(window).resize(function(){
		$('.top-arrow').css('right', ($(window).width() - $('.header-middle .wrapper').width()) / 2 + 'px');
		$('.header-categories__wrap').css('width', $('.header-middle .wrapper').width() + 30 + 'px');
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 500)
			$('.top-arrow').addClass('top-arrow__open');
		else
			$('.top-arrow').removeClass('top-arrow__open');
	});

	//drop
	$('.button-drop').on('click', function(e){
		e.preventDefault();
		$('.modal-overlay').toggleClass('open-overlay');
		$(this).toggleClass('menu-active');
		$(this).next().toggleClass('drop-open');
		$('.header').toggleClass('header-open');
		$('.details-header__bg').toggleClass('details-header__bg-open');
	});

	$('.details-menu__bar').on('click', function(){
		$('.modal-overlay').toggleClass('open-overlay');
		$('.header').toggleClass('header-open');
		$('.details-sidebar').toggleClass('details-sidebar__open');
	});

	$('.details-header__bg').on('click', function(e){
		$(this).toggleClass('details-header__bg-open');
	});

	//drop
	/*$('.header-categories__link').on('click', function(e){
		e.preventDefault();
		$('.modal-overlay').toggleClass('open-overlay');
		$(this).toggleClass('menu-active');
		$('.header-categories__wrap').toggleClass('drop-open');
	});*/

	$('.main-slider').slick({
	  arrows: false,
	  dots: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:6000,
	  speed: 600,
	  asNavFor: '.main-slider__nav',
	  fade: true,
	  pauseOnHover: false,
	  pauseOnDotsHover: false
	});

	$('.main-slider__nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.main-slider',
	  dots: true,
	  focusOnSelect: true
	});

	$('.main-slider .main-slider__nav-slide').on('click', function(){
		//$('.main-slider__nav-slide').removeClass('animation-line');
		//$('.main-slider__nav-slide').delay(2000).addClass('animation-line');
		$('.main-slider__nav-line').css('width', 0);
	});

	$('.main-product__slider').slick({
	  arrows: false,
	  dots: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000,
	  asNavFor: '.main-product__nav-slider',
	  fade: true
	});

	$('.main-product__nav-slider').slick({
		infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.main-product__slider',
	  dots: true,
	  focusOnSelect: true
	});

	$('.new-slider').slick({
	  infinite: false,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToScroll: 1,
	  autoplaySpeed:10000,
	  speed:1000,
	  autoplay:true,
	  slidesToShow: 3,
	  responsive: [
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
   ]
	});

	$('.leaders-sells__slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToScroll: 1,
	  autoplaySpeed:10000,
	  speed:1000,
	  autoplay:true,
	  slidesToShow: 3,
	  responsive: [
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
   ]
	});

	$('.featured-slider').slick({
	  infinite: false,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
	  slidesToScroll: 1,
	  autoplaySpeed:10000,
	  speed:1000,
	  autoplay:true,
	  slidesToShow: 4,
	  responsive: [
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      }
    },
   ]
	});

	$('.product-about__list-tabs li a').on('click', function(e){
		e.preventDefault();

		$('.product-about__list-tabs li a').removeClass('tabs-active');

		$(this).addClass('tabs-active');
		$('.product-about__content-tab').removeClass('tab-active');

		var attr = $(e.target).attr('href');
		$(attr).addClass('tab-active');
	});

	//s;ider range
  if($( "#slider-range__1" ).length != 0){
  	$( "#slider-range__1" ).slider({
      range: true,
      min: 0,
      max: 100000,
      values: [ 800, 63000 ],
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

	//modal
	var modalCont = $('.modal'),
		modalOver = $('.modal-overlay');
		
	$('.button-modal').on('click',function(e){
		$(modalCont).removeClass('open');
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).addClass('open');
		$(modalOver).addClass('open-overlay');
		$('.header').toggleClass('header-open');
		if($(this).hasClass('post-gallery__photo')){
			$('html,body').toggleClass('overflow-hidden')
		}
	});

	$('.cancel').on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
		$('.header').toggleClass('header-open');
	});

	$(modalOver).on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
		$('.menu-active').toggleClass('menu-active');
		$('.drop-open').toggleClass('drop-open');
		$('.header').toggleClass('header-open');
		$('.details-sidebar__open').removeClass('details-sidebar__open');
		$('.details-header__bg').removeClass('details-header__bg-open');
	});

	$("span.pie").peity("pie");

	$(".pie-colours-2").peity("pie", {
    fill: ["#80C458", "#F2F4F6", "#E31E24"],
    max: null,
    width: 160,
    height: 160
  })

  $('.details-tasks__title-acc').on('click', function(e){
		$(this).toggleClass('title-active');
		$('.details-tasks').slideToggle();
	});

	$('.details-tasks__slide').on('click', function(e){
		$(this).toggleClass('title-active');
		$('.details-information__acc').slideToggle();
	});

	$('.details-information__accordion-top').on('click', function(e){
		$(this).next().slideToggle();
		$(this).parents('.details-information__accordion-wrap').toggleClass('details-information__accordion-active');
		console.log($(this).prev());
	});

});