$(document).ready(function(){

	function titlePadding(){
		var content = $('.article-col__wrap').each(function(i,elem){
			var hei = $(this).height(),
					titleH = $(this).find('h3').height();
			$(this).find('.article-col__descr').css({"top": hei - titleH - 68 + 'px'});
		});
	}
	titlePadding();

	$(window).resize(function(){
		titlePadding();
	});

});