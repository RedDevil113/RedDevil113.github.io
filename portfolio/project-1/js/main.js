$(document).ready(function(){
	var modalCont = $('.modal'),
		modalOver = $('.modal-overlay');
		
	$('.button-modal').on('click',function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		$(id).addClass('open');
		$(modalOver).addClass('open-overlay');
		if(id == '#modal-requisites'){
			$('#modal-price-3').removeClass('open');
		}
	});

	$("input[type=submit]").on('click',function(e){
		e.preventDefault();
		$('#modal-submit').addClass('open');
		$(modalOver).addClass('open-overlay');
		$('#modal-price-1,#modal-price-2,#modal-price-3').removeClass('open');
		if ( $("input[type=submit]").is("#sub") ) {
			$('#modal-requisites').removeClass('open');
		}
	});

	$('.cancel').on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
	});

	$(modalOver).on('click',function(){
		$(modalCont).removeClass('open');
		$(modalOver).removeClass('open-overlay');
	});
});