$(document).ready(function(){

	//modal
	var modalCont = $('.modal');
		
	$('.button-modal').on('click',function(e){
	  e.preventDefault();
	  var id = $(this).attr('data-modal');
	  $('#' + id).addClass('open');
	});

	$('.cancel').on('click',function(e){
		e.preventDefault();
		$('.modal').removeClass('open');
	});

	$('.footer-menu').on('click',function(e){
	  e.preventDefault();
	  $('#modal-menu').toggleClass('open');
	});

  $( "#datepicker" ).datepicker();
  
});