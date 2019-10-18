function init(){
    ymaps.borders.load('RU', {
      lang: "ru",
      quality: 1       
    },{
      balloonPanelMaxMapArea: 0,
    }).then(function (geojson) {              
      var regions = [
        {
          code: geojson.features[43],
          coord: [54.271500, 56.525537],
          balloonContent: '<h2 style="font-family: Raleway,  Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; color: #000">Республика Башкортостан</h2> <p style="color: 4F4F4F; font-size: 12px; font-family: Raleway,  Arial, Helvetica, sans-serif;">Работаем с 2019 года</p>',
          //Башкартостан
        },
        {
          code: geojson.features[38],
          coord: [59.117698, 56.225679],
          balloonContent: '<h2 style="font-family: Raleway,  Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; color: #000">Пермский край</h2> <p style="color: 4F4F4F; font-size: 12px; font-family: Raleway,  Arial, Helvetica, sans-serif;">Работаем с 2019 года</p>',
          //Пермский край
        },
        {
          code: geojson.features[70],
          coord: [57.166784, 52.796972],
          balloonContent: '<h2 style="font-family: Raleway,  Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; color: #000">Удмуртская республика</h2> <p style="color: 4F4F4F; font-size: 12px; font-family: Raleway,  Arial, Helvetica, sans-serif;">Работаем с 2019 года</p>',
          //Удмуртская республика
        }
      ];  
      let highlightedDistrict;  
      let iconImageSize =  [32, 47];
      if($(window).width() > 1919){
        iconImageSize =  [48,56];
      }       
      for(let i = 0; i < regions.length; i++){
        var geoObject = new ymaps.GeoObject(regions[i].code, {fillColor: '#FCCA00',
          strokeColor: '#FCCA00',
          fillColor: '#FCCA00',
          strokeOpacity: 0.5,
          fillOpacity: 0.5,
          hintCloseTimeout: 0,
          hintOpenTimeout: 0 });          
        var myPlacemark = new ymaps.Placemark(regions[i].coord, {          
          balloonContent: regions[i].balloonContent
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../images/svg/mapoil.svg',
          iconImageSize: iconImageSize,
        })
        myMap.geoObjects.add(geoObject)
        myMap.geoObjects.add(myPlacemark);        
        geoObject.events.add('mouseenter', function (event) {
          let district = event.get('target');
          district.options.set({fillOpacity: 1});           
          myMap.balloon.open(regions[i].coord, regions[i].balloonContent);       
      });       
      // При выводе курсора за пределы объекта вернем опции по умолчанию.
      geoObject.events.add('mouseleave', function (event) {
        let district = event.get('target')
        if (district !== highlightedDistrict) {
            district.options.set({fillOpacity: 0.5});
        }
        myMap.balloon.close();  
    });
    // Подпишемся на событие клика.
    geoObject.events.add('click', function (event) {             
        let district = event.get('target');
        // Если на карте выделен федеральный округ, то мы снимаем с него выделение.
        if (highlightedDistrict) {
            highlightedDistrict.options.set({fillOpacity: 0.5})
        }    
        myMap.balloon.open(regions[i].coord, regions[i].balloonContent);           
        district.options.set({fillOpacity: 1});
        highlightedDistrict = district;
    });      
   }   
  }); 
  let zoomer = 5;
  if($(window).width() > 1919){
    zoomer = 6;
  }  
  
  let myMap = new ymaps.Map("map", {        
    center: [58.01, 56.22],        
    zoom: zoomer,     
    controls: ['zoomControl'],   
  });   
  myMap.behaviors.disable('scrollZoom');
  myMap.behaviors.disable('drag');
}
const geographyMap = document.getElementById('map');
if(geographyMap){  
  ymaps.ready(init);
}
