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

/*Доработка для больших чисел
{...}
var
    i = 1,
    istep = 1,  // создаем переменную для шага увеличения цифр
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this), inter;
    if (num.toString().length > 3) // Если количество цифр больше 3
    istep = 8; // то шаг прокрутки будет равен, например, 8
    inter = setInterval(function () {
    if (i <= num) {
        that.html(i);
    } else {
        cc += 2;
        that.html(num); /*! Принудительно устанавливаем конечное значение, тем самым избавляясь от погрешности расчета */
       /* clearInterval(inter);
    /*}
    i+=istep; // увеличиваем на заданный шаг переменную
}, step * istep); // умножаем для ускорения увеличения больших цифр
{...}﻿
*/