
let articlesSlick = document.querySelector('.articles-items');
if(articlesSlick){
    let lenta = function(){
        if($(window).width() > 767){
            $('.articles-items').slick({
                vertical: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                appendDots: $('.articles-dots'),
                mobileFirst: true,
                responsive: [{
                    breakpoint: 320,
                        settings: "unslick"
                    },
                    {
                    breakpoint: 767,
                        settings: "slick"
                    },
                    {
                    breakpoint: 1279,
                    settings: {
                          vertical: false,
                          margin: 10
                    }
                }]
            });
        }        
    }
    lenta();
    
    (function() {

        window.addEventListener("resize", resizeThrottler, false);
      
        var resizeTimeout;
        function resizeThrottler() {
          // ignore resize events as long as an actualResizeHandler execution is in the queue
          if ( !resizeTimeout ) {
            resizeTimeout = setTimeout(function() {
              resizeTimeout = null;
              actualResizeHandler();
           
             // The actualResizeHandler will execute at a rate of 15fps
             }, 100);
          }
        }
      
        function actualResizeHandler(){      
            lenta();
        }
      
      }());
}

