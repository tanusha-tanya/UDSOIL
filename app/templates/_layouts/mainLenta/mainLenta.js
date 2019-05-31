
function checkPosition()
{
    if($(window).width() > 767)
    {
        $('.articles-items').slick({
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            appendDots: $('.articles-dots')
        });
    } else {
        
    }
}
checkPosition()