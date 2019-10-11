var owl = $('.realization-partners-carousel');
owl.owlCarousel({
    nav:false,
    dots:false,
    loop:true,
    margin:16,    
    autoplay:true,
    autoWidth:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:4
        },
        1279:{
            items:6
        }
    }
});

