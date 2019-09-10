let yearsToggler = document.querySelector('.years-toggler');
if(yearsToggler){
  if ($(window).width() < 768){
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
    });

    $('.years-toggler').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.years-items',
      dots: false,
      arrows: false, 
      infinite: false,
      centerMode: true,
      centerPadding: '1px',
      focusOnSelect: true,    
    });

    $('.years-items').on('afterChange', function(event, slick, currentSlide){
      $(toggleLast).removeClass('last')
      $('.years-toggle').removeClass('last')
      let lastItemNumber = currentSlide + 3;
      let firstItemNumber = currentSlide - 1;
      let lastItem = $('.years-toggle')[lastItemNumber];
      let firstItem = $('.years-toggle')[firstItemNumber];
      $(lastItem).addClass('last');
      $(firstItem).addClass('last')
    })
  }
}