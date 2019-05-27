ymaps.ready(init);
  function init(){  
    ymaps.borders.load('RU', {
      lang: "ru",
      quality: 1       
    }).then(function (geojson) { 
        
      var regions = [
        {
          code: geojson.features[43],
          coord: [54.271500, 56.525537],
          balloonContent: '<h2>Республика Башкортостан</h2> <p>Работаем с 2019 года</p>',
          //Башкартостан
        },
        {
          code: geojson.features[38],
          coord: [59.117698, 56.225679],
          balloonContent: '<h2>Пермский край</h2> <p>Работаем с 2019 года</p>',
          //Пермский край
        },
        {
          code: geojson.features[70],
          coord: [57.166784, 52.796972],
          balloonContent: '<h2>Удмуртская республика</h2> <p>Работаем с 2019 года</p>',
          //Удмуртская республика
        }
      ];  
      var highlightedDistrict;
      for(let i = 0; i < regions.length; i++){
        var geoObject = new ymaps.GeoObject(regions[i].code, {fillColor: '#FCCA00',
        strokeColor: '#FCCA00',
        strokeOpacity: 0.5,
        fillOpacity: 0.5,
        hintCloseTimeout: 0,
        hintOpenTimeout: 0 });
        var myPlacemark = new ymaps.Placemark(regions[i].coord, {
          balloonContent: regions[i]. balloonContent
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../images/svg/mapoil.svg',
          iconImageSize: [32, 47],
        })
        myMap.geoObjects.add(geoObject)
        myMap.geoObjects.add(myPlacemark);  
          
        /*regions[i].events.add('mouseenter', function (event) {
          var district = event.get('target').getParent();
          district.options.set({fillOpacity: 1});
        }); */ 
      }   
    }); 

  var myMap = new ymaps.Map("map", {        
    center: [58.01, 56.22],        
    zoom: 5,     
    controls: []  
  });        
}
