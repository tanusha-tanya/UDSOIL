
$('.years-items').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  infinite: false,
  asNavFor: '.years-toggler'
});
$('.years-toggler').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.years-items',
  dots: false,
  arrows: false, 
  infinite: false,
  centerMode: true,
  centerPadding: '5px',
  focusOnSelect: true
});