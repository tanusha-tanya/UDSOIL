
function checkPosition()
{
    if($(window).width() > 767)
    {
        $('.articles-items').slick({
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendDots: $('.articles-dots'),
            mobileFirst: true,
            responsive: [{
                breakpoint: 1279,
                settings: {
                      vertical: false,
                      margin: 10
                }
            }]
        });
    }
}
checkPosition()