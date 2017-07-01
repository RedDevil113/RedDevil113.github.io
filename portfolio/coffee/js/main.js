$(document).ready(function(){

	var head = $('header'),
		head_width = $('header').height();

	$(window).on('scroll',function(){
		if($(window).scrollTop() > 15)
			head.addClass('fixed');
		else
			head.removeClass('fixed');
	});

	$('.menu').on('click','a',function(e){
		e.preventDefault()
		var id = $(this).attr('href'),
			top = $(id).offset().top - head_width;
		$('html,body').animate({scrollTop: top},700);
		head.removeClass('open');
	});

	$('.mob_bar').on('click',function(){
		head.toggleClass('open');
	});

	$('.img_product span').on('click',function(){
		var size_1 = $('.size_2'),
			size_2 = $('.size_5');

		$(this).toggleClass('targ');
		if(size_1.hasClass('targ')){
			size_2.removeClass('targ');
		}
		if(size_2.hasClass('targ')){
			size_1.removeClass('targ');
		}
	});

});

$('.product_1').slick({
	  autoplay:true,
	  autoplaySpeed:7000,
	  speed:700,     
	  dots:true,
	  arrows: true,
	  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  	  prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	  slidesToShow:3,
	  slidesToScroll:1,
	  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,           
	  	slidesToScroll:1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,           
	  slidesToScroll:1
      }
    }
  ]
  });
$('.product_2').slick({
	  autoplay:true,
	  autoplaySpeed:7000,
	  speed:700,     
	  dots:true,
	  arrows: true,
	  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  	  prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	  slidesToShow:3,
	  slidesToScroll:1,
	  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,           
	  	slidesToScroll:1
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,           
	  slidesToScroll:1
      }
    }
  ]
  });