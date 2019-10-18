$(document).ready(function() {   
    let topSlider = document.querySelector('.topslider');
    if(topSlider){
        $('.topslider').owlCarousel({        
            autoplay:true,
            autoplayTimeout:3400,
            autoplayHoverPause:true,
            loop: false,
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

let smallBanner = document.querySelectorAll(".topslider-background");

let changeImage = () =>{    
    smallBanner.forEach((banner)=> {        
        let smallImg = banner.dataset.imagesmall;
        let bigImg = banner.dataset.imagebig;  
        if(smallImg){
            if(window.innerWidth < 767){ 
                banner.style.backgroundImage = `url(${smallImg})`            
            }
            else{   
                banner.style.backgroundImage = `url(${bigImg})`
            } 
        }                                
    })    
} 

if(smallBanner.length > 0){         
    changeImage();    
    $(window).resize(function () {		
        clearTimeout(window.resizedFinishedSlider);
        window.resizedFinishedSlider = setTimeout(function(){       
            changeImage();
        }, 250);      
    });  
}
     

