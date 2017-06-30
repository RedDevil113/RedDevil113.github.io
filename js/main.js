$(document).ready(function(){
	var head = $('header');

	$('.menu').on('click','a',function(e){
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('html,body').animate({scrollTop: top - head.height()},900);
		head.removeClass('open');
	});
});