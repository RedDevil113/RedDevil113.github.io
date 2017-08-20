$(document).ready(function(){

	var wind = $(window),
		head = $('header');

	$('.menu').on('click','a',function(e){
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
			head.removeClass('open');
		$('html,body').animate({scrollTop : top},600);
	});

	wind.on('scroll', function(){
		if(wind.scrollTop() > 10)
			head.addClass('fixed');
		else
			head.removeClass('fixed');
	});

	$(".to_down").click(function(){
	$("html,body").animate({scrollTop: $(".banner").height()-63},"slow")
		return false;
	});

	$('.mobile-menu').click(function(){
		head.toggleClass('open');
	});

	$('.scroll').click( function(){
		var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600);
        }
	    return false;
    });

    $(".accordeon div").hide().prev().click(function() {
		$(this).parents(".accordeon").find("div").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});

});

$('.slide_testimonials').slick({
	  autoplay:true,
	  autoplaySpeed:7000,
	  speed:700,     
	  dots:true,
	  arrows: false,
});