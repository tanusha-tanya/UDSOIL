let yearsToggler = document.querySelector('.years-toggler');

if(yearsToggler){   
  let  yearsSlick = function(){
    $('.years-items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      infinite: false,
      asNavFor: '.years-toggler',
      mobileFirst: true,
      responsive: [{
        breakpoint: 767,
        settings: "unslick"       
      }]
    });

    $('.years-toggler').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.years-items',
        dots: false,
        arrows: false, 
        infinite: false,
        centerMode: false,
        focusOnSelect: true,    
    });
  }
  yearsSlick();	
  $(window).resize(function () {		
		clearTimeout(window.resizedFinished);
		window.resizedFinished = setTimeout(function(){
			yearsSlick();	
		}, 250);      
	});
}