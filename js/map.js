ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75995258692373, 37.60407949999994],
    zoom: 16,
    controls: [],
  }, {
    suppressMapOpenBlock: true,
  });
  var myPlacemark = new ymaps.Placemark([55.75995258692373, 37.60407949999994], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/320/contacts/mark_320.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
}
