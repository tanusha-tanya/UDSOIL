let yearsToggler = document.querySelector('.years-toggler');

if(yearsToggler){
  let toggleLast = $('.years-toggle')[3]
  $(toggleLast).addClass('last')
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