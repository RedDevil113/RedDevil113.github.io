$(document).ready(function(){

	var sidebar = $('.order-sidebar__wrap'),
			sidebarPos = $(sidebar).offset().top
			block = $('.checkout').innerHeight() - $(sidebar).height() - 70;

	console.log(block);

	$(window).on('scroll', function(){
		console.log($(window).scrollTop());
		if($(window).scrollTop() >= sidebarPos){
			if($(window).scrollTop() >= block){
				$(sidebar).removeClass('sidebar-fixed').addClass('sidebar-absolute').css('left', '0');
			}
			else
				$(sidebar).addClass('sidebar-fixed').removeClass('sidebar-absolute').css('left', ($(window).innerWidth() - $('.wrapper').innerWidth()) / 2 + 15 + 'px');
		}
		else
			$(sidebar).removeClass('sidebar-fixed').removeClass('sidebar-absolute').css('left', '0');
	});

});