$(document).ready(function(){

  $('.top-bar .offer-drop p').on('click', function(){
    $(this).parent().parent().toggleClass('offer-drop__open');
  });

  $('.top-bar__mob').on('click', function(){
    $('.menu .container').slideToggle(400);
  });

});