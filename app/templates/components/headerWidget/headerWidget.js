const headerWidget = document.querySelector('.header-widget');
if(headerWidget){
    let widget = function(){
        let items = document.querySelector('.widget-items'), 
            itemsWidth = 0,          
            maxWidth = items.offsetWidth;       
            for(let i=0; i <  items.children.length; i++){
                itemsWidth += items.children[i].offsetWidth
            }           
        if(itemsWidth + 100 >= maxWidth){
            items.style.paddingLeft = '100%';    
            items.style.animation = 'marquee 15s linear infinite'; 
        }  
        else{
            items.style.paddingLeft = '0';    
            items.style.animation = 'none';
        }   
    }

    widget();
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
            widget();
        }
      
    }());
}