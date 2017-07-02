/*Scroll to (navigation)*/
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


(function($) {
		$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
			if (dir === "down") {
				ths.addClass(inEffect).css("opacity", "1");
			};
		}, {
		offset: "90%"
		});
		});
		};
})(jQuery);


jQuery(document).ready(function() {
$('.sl').slick({
	  nextArrow: '<i class="fa fa-angle-right"></i>',
 	  prevArrow: '<i class="fa fa-angle-left"></i>',
 	  fade:true,
	  autoplay:true,                    /*авто воспроизв*/
	  autoplaySpeed:5000,              /*скорость перемотки слайдов*/
	  speed:1000,                     /*скорость анимации перехода*/
	  cssEase:"ease-in",             /*анимация перехода лайдов*/         
	  dots:false,                 	/*появл радиокнопки*/ 
	  arrows:true,                 /*убирает стрелки*/  
	  responsive: [
    {
      breakpoint: 767,
      settings: {
      arrows: false,
	  slidesToShow:1,            
	  slidesToScroll:1
       }
     }
   ]      
  });
$('.partner').slick({
	  nextArrow: '<i class="fa fa-angle-right"></i>',
 	  prevArrow: '<i class="fa fa-angle-left"></i>',
	  autoplay:true,                    /*авто воспроизв*/
	  autoplaySpeed:5000,              /*скорость перемотки слайдов*/
	  speed:1000,                     /*скорость анимации перехода*/
	  cssEase:"ease-in",             /*анимация перехода лайдов*/         
	  dots:false,                 	/*появл радиокнопки*/ 
	  arrows:true,                 /*убирает стрелки*/ 
	  slidesToShow:4,            
	  slidesToScroll:1,
	  responsive: [
    {
      breakpoint: 767,
      settings: {
      arrows: false,
	  slidesToShow:1,            
	  slidesToScroll:1
       }
     }
   ]        
  });

/*Fullscreen backgrounds*/
$('.sll_1').backstretch("images/backgrounds/top_sl_1.jpg");/*1)в каком диве находится картинка 2)путь к ней*/
$('.sll_2').backstretch("images/backgrounds/top_sl_2.jpg");/*1)в каком диве находится картинка 2)путь к ней*/
$('.sll_3').backstretch("images/backgrounds/top_sl_1.jpg");/*1)в каком диве находится картинка 2)путь к ней*/
$('.sll_4').backstretch("images/backgrounds/top_sl_2.jpg");/*1)в каком диве находится картинка 2)путь к ней*/

$(document).ready(function(){
	var touch = $('#touch_menu');/*ID под которым находится кнопка для разворачивания меню*/
	var menu = $('.main_menu');/*Class под которым находится всё меню*/

	$(touch).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 870 && menu.is(':hidden')){/*меняем значения в пикселях*/
			menu.removeAttr('style');
		}
	});
});

$(document).ready(function(){$(".fitnes_col").animated("fadeInDown ", "rotateOut");});

$(document).ready(function(){$(".team").animated("flipInY", "rotateOut");});
$(document).ready(function(){$(".photo").animated("zoomIn", "rotateOut");});

$(document).ready(function(){$(".price_1").animated("fadeInLeftBig", "rotateOut");});
$(document).ready(function(){$(".price_2").animated("zoomInDown", "rotateOut");});
$(document).ready(function(){$(".price_3").animated("fadeInRightBig", "rotateOut");});

$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').height());
	});

//Аякс отправка форм
//Документация: http://api.jquery.com/jquery.ajax/
$("form").submit(function() {/*изменить*/
	$.ajax({
		type: "GET",
		url: "mail.php",
		data: $("form").serialize()/*изменить*/
	}).done(function() {
		alert("Спасибо за заявку!");
		setTimeout(function() {
			$.fancybox.close();
		}, 1000);
	});
	return false;
});



});
