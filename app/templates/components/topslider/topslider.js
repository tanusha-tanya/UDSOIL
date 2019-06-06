$(document).ready(function() {   
    const topSlider = document.querySelector('.topslider');
    if(topSlider){
        $('.topslider').owlCarousel({        
            //autoplay:true,
            //autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            items:1,
            smartSpeed:50,
            dots: false,
            nav: true,
            navElement: 'div',
            autoHeight: true,
            navContainer: '.topslider-arrows',
        });
    }
});
