$(document).ready(function() {    
    $('.topslider').owlCarousel({        
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true,
        items:1,
        smartSpeed:450,
        dots: false,
        nav: true,
        navElement: 'div',
        navContainer: '.topslider-arrows',
    });
});