ymaps.ready(init);
var myMap,myPlacemark;

function init(){     
	myMap = new ymaps.Map("map", {
	  center: [55.74388267, 37.66478768],
	  zoom: 18,
	  controls: ['smallMapDefaultSet']
	});
	myMap.behaviors.disable([
	  'scrollZoom'
	]);
	var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="square_layout"></div><p>ул. Александра Солженицына, д. 27</p></div>');

	var squarePlacemark = new ymaps.Placemark(
	    [55.74388267, 37.66478768], {
	        hintContent: 'ул. Александра Солженицына, д. 27'
	    }, {
	        iconLayout: squareLayout,
	        iconShape: {
	            type: 'Rectangle',
	            coordinates: [
	                [-25, -25], [25, 25]
	            ]
	        }
	    }
	);
	myMap.geoObjects.add(squarePlacemark);
}