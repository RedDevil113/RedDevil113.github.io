$(document).ready(function(){

	 var rellax = new Rellax('.rellax');
	 
	$('.main-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
 	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000,
	  draggable: false,
	  responsive: [
	    {
	      breakpoint: 1210,
	      settings: {
		      centerMode: false,
	  			variableWidth: false
			  }
	    },
	  ]
	});

	$('.service-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: true,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
 	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000,
	  draggable: false
	});

	$('.portfolio-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
 	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:3000,
	  speed:700,
	  draggable: false,
	  swipe: false
	});

	$('.reviews-slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
 	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000,
	  draggable: false,
	  responsive: [
	    {
	      breakpoint: 650,
	      settings: {
		      slidesToShow: 1,
			  }
	    },
	  ]
	});

	$('.doctors-wrap').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
 	  slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:10000,
	  speed:1000,
	  draggable: false,
	  responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
		      slidesToShow: 5,
			  }
	    },
	    {
	      breakpoint: 800,
	      settings: {
		      slidesToShow: 4,
			  }
	    },
	    {
	      breakpoint: 600,
	      settings: {
		      slidesToShow: 3,
			  }
	    },
	    {
	      breakpoint: 500,
	      settings: {
		      slidesToShow: 2,
			  }
	    },
	  ]
	});

	$('.reviews-insta').slick({
	  infinite: true,
	  arrows: false,
	  dots: false,
	  nextArrow: '<button class="slick-arrow slick-next"></button>',
 	  prevArrow: '<button class="slick-arrow slick-prev"></button>',
 	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:true,
	  autoplaySpeed:3000,
	  speed:500,
	  draggable: false,
	});

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open-menu');
		if($(window).width() > 800)
			$('.header-nav').slideToggle();
		else
			$('.header-wrap').slideToggle();
	});

	//drop
	$('.header-drop p').on('click', function(){
		if($(window).width() <= 800)
			$(this).parent().find('ul').slideToggle(10);
	});

	//open-p
	$('.service-descr .main-button__second').on('click', function(e){
		e.preventDefault();
		$('.service-descr').toggleClass('open-p');
	});

	//price tab
	$('.prices-main__col .main-button').on('click', function(e){
		e.preventDefault();
		var attr = $(this).attr('href');
		$('.prices').toggleClass('open-tab');
		$(attr).toggleClass('open-div');
	});

	$('.prices-close').on('click', function(){
		$('.prices').toggleClass('open-tab');
		$('.prices-wrap').removeClass('open-div');
	});

	$('.portfolio-toggle div').on('click', function(){
		$(this).toggleClass('toggle-open');
		$('.portfolio-wrapper').toggleClass('portfolio-wrapper__active');
	});

	$('.prices-menu p').on('click', function(){
		$('.prices-menu p').removeClass('prices-menu__active');
		$('.prices-wrap').removeClass('open-div');

		var attr = $(this).attr('data-tab');
		$(this).addClass('prices-menu__active');
		$('#' + attr).addClass('open-div');
	});

	if($(window).width() <= 700)
		$('#prices-wrap__1').addClass('open-div');

	//head scroll
	$('.header-nav ul li,.footer-nav ul li').on('click', 'a', function(e){

		e.preventDefault();
		var itemId = $(this).attr('href'),
			blockTop = $(itemId).offset().top;
		$('html, body').animate({scrollTop : blockTop - $('.header').height()},500);

	});

	//accordeons
	$(".answers-accordeons__column div").hide().prev().click(function() {

		if($(this).parents(".answers-accordeons__column").hasClass('accordeon-active'))
			$(".answers-accordeons__column").removeClass('accordeon-active');
		else {
			$(".answers-accordeons__column").removeClass('accordeon-active');
			$(this).parents(".answers-accordeons__column").addClass('accordeon-active');
		}

		$(this).parents().find(".answers-accordeons__column div").not(this).slideUp().prev();
		$(this).next().not(":visible").slideDown().prev().parents();

	});
	$(".answers-accordeons__column-first div").show();

	$('.answers .main-button__second').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('button-active');
		$('.answers-accordeons__wrap').toggleClass('answers-accordeons__wrap-open');
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

	var dragging = false,
      scrolling = false,
      resizing = false;
  //cache jQuery objects
  var imageComparisonContainers = $('.cd-image-container');
  //check if the .cd-image-container is in the viewport 
  //if yes, animate it
  checkPosition(imageComparisonContainers);
  $(window).on('scroll', function(){
      if( !scrolling) {
          scrolling =  true;
          ( !window.requestAnimationFrame )
              ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
              : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
      }
  });
  
  //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
  imageComparisonContainers.each(function(){
      var actual = $(this);
      drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
  });

  //upadate images label visibility
  $(window).on('resize', function(){
      if( !resizing) {
          resizing =  true;
          ( !window.requestAnimationFrame )
              ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
              : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
      }
  });

  function checkPosition(container) {
      container.each(function(){
          var actualContainer = $(this);
          if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
              actualContainer.addClass('is-visible');
          }
      });

      scrolling = false;
  }

  function checkLabel(container) {
      container.each(function(){
          var actual = $(this);
          updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
          updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
      });

      resizing = false;
  }

  //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
  function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
      dragElement.on("mousedown vmousedown", function(e) {
          dragElement.addClass('draggable');
          resizeElement.addClass('resizable');

          var dragWidth = dragElement.outerWidth(),
              xPosition = dragElement.offset().left + dragWidth - e.pageX,
              containerOffset = container.offset().left,
              containerWidth = container.outerWidth(),
              minLeft = containerOffset + 10,
              maxLeft = containerOffset + containerWidth - dragWidth - 10;
          
          dragElement.parents().on("mousemove vmousemove", function(e) {
              if( !dragging) {
                  dragging =  true;
                  ( !window.requestAnimationFrame )
                      ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                      : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
              }
          }).on("mouseup vmouseup", function(e){
              dragElement.removeClass('draggable');
              resizeElement.removeClass('resizable');
          });
          e.preventDefault();
      }).on("mouseup vmouseup", function(e) {
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');
      });
  }

  function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
      var leftValue = e.pageX + xPosition - dragWidth;   
      //constrain the draggable element to move inside his container
      if(leftValue < minLeft ) {
          leftValue = minLeft;
      } else if ( leftValue > maxLeft) {
          leftValue = maxLeft;
      }

      var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
      
      $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
          $(this).removeClass('draggable');
          resizeElement.removeClass('resizable');
      });

      $('.resizable').css('width', widthValue); 

      updateLabel(labelResizeElement, resizeElement, 'left');
      updateLabel(labelContainer, resizeElement, 'right');
      dragging =  false;
  }

  function updateLabel(label, resizeElement, position) {
      if(position == 'left') {
          ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
      } else {
          ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
      }
  }

});