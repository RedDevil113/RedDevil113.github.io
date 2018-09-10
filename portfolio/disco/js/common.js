var Share = {
  go: function(_element, _options) {
      var
          self = Share,
          options = $.extend(
              {
                  type:       'vk',    // С‚РёРї СЃРѕС†СЃРµС‚Рё
                  url:        location.href,  // РєР°РєСѓСЋ СЃСЃС‹Р»РєСѓ С€Р°СЂРёРј
                  count_url:  location.href,  // РґР»СЏ РєР°РєРѕР№ СЃСЃС‹Р»РєРё РєСЂСѓС‚РёРј СЃС‡С‘С‚С‡РёРє
                  title:      "Диско, бохо, советский шик: 70-е в коллекции Reserved нового сезона", // Р·Р°РіРѕР»РѕРІРѕРє С€Р°СЂРёРЅРіР°
                  image:      "http://braschi.elle.ru/img/banner-person.jpg",             // РєР°СЂС‚РёРЅРєР° С€Р°СЂРёРЅРіР°
                  text:       "lorem",             // С‚РµРєСЃС‚ С€Р°СЂРёРЅРіР°
              },
              $(_element).data(), // Р•СЃР»Рё РїР°СЂР°РјРµС‚СЂС‹ Р·Р°РґР°РЅС‹ РІ data, С‚Рѕ С‡РёС‚Р°РµРј РёС…
              _options            // РџР°СЂР°РјРµС‚СЂС‹ РёР· РІС‹Р·РѕРІР° РјРµС‚РѕРґР° РёРјРµСЋС‚ РЅР°РёРІС‹СЃС€РёР№ РїСЂРёРѕСЂРёС‚РµС‚
          );

      if (self.popup(link = self[options.type](options)) === null) {
          // Р•СЃР»Рё РЅРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РєСЂС‹С‚СЊ РїРѕРїР°Рї
          if ( $(_element).is('a') ) {
              // Р•СЃР»Рё СЌС‚Рѕ <a>, С‚Рѕ РїРѕРґСЃС‚Р°РІР»СЏРµРј Р°РґСЂРµСЃ Рё РїСЂРѕСЃРёРј Р±СЂР°СѓР·РµСЂ РїСЂРѕРґРѕР»Р¶РёС‚СЊ РїРµСЂРµС…РѕРґ РїРѕ СЃСЃС‹Р»РєРµ
              $(_element).prop('href', link);
              return true;
          }
          else {
              // Р•СЃР»Рё СЌС‚Рѕ РЅРµ <a>, С‚Рѕ РїС‹С‚Р°РµРјСЃСЏ РїРµСЂРµР№С‚Рё РїРѕ Р°РґСЂРµСЃСѓ
              location.href = link;
              return false;
          }
      }
      else {
          // РџРѕРїР°Рї СѓСЃРїРµС€РЅРѕ РѕС‚РєСЂС‹С‚, РїСЂРѕСЃРёРј Р±СЂР°СѓР·РµСЂ РЅРµ РїСЂРѕРґРѕР»Р¶Р°С‚СЊ РѕР±СЂР°Р±РѕС‚РєСѓ
          return false;
      }
  },

    // Р’РљРѕРЅС‚Р°РєС‚Рµ
    vk: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  "Диско, бохо, советский шик: 70-е в коллекции Reserved нового сезона",
            image:  "http://braschi.elle.ru/img/banner-person.jpg",
            text:   "lorem",
        }, _options);

        return 'http://vkontakte.ru/share.php?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&image='       + encodeURIComponent(options.image)
            + '&noparse=true';
    },

    // РћРґРЅРѕРєР»Р°СЃСЃРЅРёРєРё
    ok: function(_options) {
        var options = $.extend({
            url:    location.href,
            text:   "Диско, бохо, советский шик: 70-е в коллекции Reserved нового сезона",
        }, _options);

        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
            + '&st.comments=' + encodeURIComponent(options.text)
            + '&st._surl='    + encodeURIComponent(options.url);
    },

    // Facebook
    fb: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  "Диско, бохо, советский шик: 70-е в коллекции Reserved нового сезона",
            image:  "http://braschi.elle.ru/img/banner-person.jpg",
            text:   "lorem",
        }, _options);

        return 'http://www.facebook.com/sharer.php?s=100'
            + '&p[title]='     + encodeURIComponent(options.title)
            + '&p[summary]='   + encodeURIComponent(options.text)
            + '&p[url]='       + encodeURIComponent(options.url)
            + '&p[images][0]=' + encodeURIComponent(options.image);
    },

    // Р–РёРІРѕР№ Р–СѓСЂРЅР°Р»
    lj: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            text:   '',
        }, _options);

        return 'http://livejournal.com/update.bml?'
            + 'subject='        + encodeURIComponent(options.title)
            + '&event='         + encodeURIComponent(options.text + '<br/><a href="' + options.url + '">' + options.title + '</a>')
            + '&transform=1';
    },

    // РўРІРёС‚С‚РµСЂ
    tw: function(_options) {
        var options = $.extend({
            url:        location.href,
            title:      "Диско, бохо, советский шик: 70-е в коллекции Reserved нового сезона",
        }, _options);

        return 'http://twitter.com/share?'
            + 'text='      + encodeURIComponent(options.title)
            + '&url='      + encodeURIComponent(options.url);
    },

    // Mail.Ru
    mr: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            image:  '',
            text:   '',
        }, _options);

        return 'http://connect.mail.ru/share?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&imageurl='    + encodeURIComponent(options.image);
    },

    // РћС‚РєСЂС‹С‚СЊ РѕРєРЅРѕ С€Р°СЂРёРЅРіР°
    popup: function(url) {
        return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
    }
};

$(document).on('click', '.social__link', function(e){
    e.preventDefault();
    Share.go(this);
});

$(document).ready(function(){

	$('.main-slider__1,.main-slider__2,.main-slider__3,.main-slider__4').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay:false,
	  speed:1000
	});

	//animation
	if ($(window).width() > 768) {
   (function($) {
			$.fn.animated = function(inEffect) {
				$(this).each(function() {
					var ths = $(this);
					ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
							ths.addClass(inEffect).css("opacity", "1");
						};
					}, {
						offset: "95%"
					});

				});
			};
		})(jQuery);
		$("h1, h2, h3, h4, h5, p, a,.main-slider").animated("fadeIn", "fadeOutDown");
    $(".main-square__anim").animated("fadeInUp", "fadeOutDown");
    $(".main-flower").animated("zoomIn", "fadeOutDown");
    $(".main-square__4").animated("fadeIn", "fadeOutDown");
	}


});