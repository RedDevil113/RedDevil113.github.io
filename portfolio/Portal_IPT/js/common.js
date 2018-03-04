$(document).ready(function(){

	$('.wf-sidebar div').on('click', function(){
		$(this).toggleClass('div-open');
		$(this).find('p').next().slideToggle('200');
	});

	$('.wf-grid > div').on('click', function(){
		$(this).find('ul').slideToggle('200');
		$(this).toggleClass('widget-open');
	});

	$('.wf-grid').masonry({
	  itemSelector: 'article,.wf-grid > div',
	  columnWidth: 'article',
	  gutter: 30
	});

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.wf-sidebar').toggleClass('sidebar-open');
		$(this).toggleClass('bar-open');
	});

	$('.main-menu__wrap, .header-menu__wrap').on('click', function(e){
		var target = $(e.target);
		if(target.is('p')){
			$(this).find('div').toggleClass('open-drop');
		}
	});

});
