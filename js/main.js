$(document).ready(function(){
	var head = $('header');

	scrollLink('.menu a');
	scrollLink('.banner-a');
	
	function scrollLink(link){
		$(link).click(function(e){
			e.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('html,body').animate({scrollTop: top - head.height()},900);
			head.removeClass('open');
		});
	}
});