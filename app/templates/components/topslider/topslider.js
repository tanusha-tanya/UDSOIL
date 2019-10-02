$(document).ready(function() {   
    let topSlider = document.querySelector('.topslider');
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

let smallBanner = document.querySelectorAll(".topslider-background");

let changeImage = () =>{
    smallBanner.forEach((banner)=> {
        let smallImg = banner.dataset.image;
        let currentPath = banner.style.backgroundImage;        
        if(window.innerWidth < 779 && smallImg){ 
            banner.style.backgroundImage = `url(${smallImg})`
        }
        else{          
            banner.style.backgroundImage = currentPath
        } 

        $(window).resize(function () {		
            clearTimeout(window.resizedFinishedSlider);
            window.resizedFinishedSlider = setTimeout(function(){       
                if(window.innerWidth < 779 && smallImg){ 
                    banner.style.backgroundImage = `url(${smallImg})`
                }
                else{          
                    banner.style.backgroundImage = currentPath
                } 
            }, 250);      
        });                        
    })    
} 

if(smallBanner.length > 0){         
    changeImage();
}
     


