$('.realization-partners-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,   
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1279,
            settings: {
                slidesToShow: 4,                
            }
        },
        {   
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        }              
    ]
})

