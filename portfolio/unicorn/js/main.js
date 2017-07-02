
$('.sl1').slick({
	  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	  autoplay:true,
	  autoplaySpeed:3000,
	  speed:1000,
	  cssEase:"ease-in",      
	  dots:false,
	  slidesToShow:3,
	  slidesToScroll:1,
	  responsive: [
    {
      breakpoint: 890,
      settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2,           
	  slidesToScroll:1
       }
     },
     {
      breakpoint: 660,
      settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1,           
	  slidesToScroll:1
       }
     }
   ] 

});

$('.sl2').slick({
	  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	  autoplay:true,
	  autoplaySpeed:3000,
	  speed:1000,
	  cssEase:"ease-in",      
	  dots:false,
	  slidesToShow:6,
	  slidesToScroll:1,
	  responsive: [
    {
      breakpoint: 700,
      settings: {
      arrows: false,
      slidesToShow: 4,           
	  slidesToScroll:1
       }
     },
     {
      breakpoint: 500,
      settings: {
      arrows: false,
      slidesToShow: 2,           
	  slidesToScroll:1
       }
     }
   ]         
});

$('.sl3').slick({
	  autoplay: true,
	  autoplaySpeed: 3000,
	  speed: 1000,
	  arrows: false,
	  cssEase: "ease-in",      
	  dots: true,
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  responsive: [
    {
      breakpoint: 700,
      settings: {
      arrows: false,
      slidesToShow: 2,           
	  slidesToScroll:1
       }
     },
     {
      breakpoint: 500,
      settings: {
      arrows: false,
      slidesToShow: 1,           
	  slidesToScroll:1
       }
     }
   ]         
});

$('.sl4').slick({
	  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	  autoplay:true,
	  autoplaySpeed:3000,
	  speed:1000,
	  cssEase:"ease-in",      
	  dots:false,
	  slidesToShow:3,
	  slidesToScroll:1,
	  responsive: [
    {
      breakpoint: 700,
      settings: {
      arrows: false,
      slidesToShow: 2,
	  slidesToShow:1,            
	  slidesToScroll:1
       }
     }
   ]         
});

/*adaptive background*/
$('header').backstretch("img/header-bg.jpg");
$('.facts-numbers').backstretch("img/number-bg.jpg");


/*counter*/
var time = 2, cc = 1;
$(window).scroll(function(){
$('#counter').each(function(){
      var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
      if(cPos < topWindow + 200){
        if(cc < 2){
          $('.number').addClass('viz');
          $('div').each(function(){
          var 
          i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            }
            else {
              cc = cc + 2;
              clearInterval(int);
            }
            i++;
          },step);
        });
       }
      }
  });
});

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

$(document).ready(function(){$(".feature").animated("slideInDown", "rotateOut");});
$(document).ready(function(){$(".info-section").animated("zoomInUp", "rotateOut");});
$(document).ready(function(){$(".team").animated("flipInX", "rotateOut");});
$(document).ready(function(){$(".post-text").animated("slideInRight", "rotateOut");});
$(document).ready(function(){$(".post").animated("slideInLeft", "rotateOut");});
$(document).ready(function(){$(".reviews").animated("fadeInDown", "rotateOut");});
$(document).ready(function(){$(".banner-info").animated("slideInRight", "rotateOut");});
$(document).ready(function(){$(".links").animated("slideInRight", "rotateOut");});
$(document).ready(function(){$(".social").animated("slideInRight", "rotateOut");});
$(document).ready(function(){$(".friends").animated("slideInRight", "rotateOut");});
$(document).ready(function(){$(".contact").animated("slideInLeft", "rotateOut");});



$(document).ready(function(){
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
});