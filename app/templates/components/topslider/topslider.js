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
const bottomScroll = document.querySelector('#js-bottomscroll');
if(bottomScroll){    
    bottomScroll.addEventListener('click', (e) =>{        
        e.preventDefault();
        window.scrollTo(0, document.querySelector(".header").scrollHeight);
    })   
}
AOS.init({
    disable: window.innerWidth < 767
});
$(window).resize(function() {     
    AOS.init({
        disable: window.innerWidth < 767
    }); 
  
});