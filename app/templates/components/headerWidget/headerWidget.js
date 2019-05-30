const headerWidget = document.querySelector('.header-widget');
if(headerWidget){
    let items = document.querySelector('.widget-items'),
       widgetWidth = items.scrollWidth,
       header = document.querySelector('.header-widget'),
       maxWidth = header.offsetWidth;
       console.log(widgetWidth + ' '+ maxWidth)
    if(widgetWidth > maxWidth){
        items.style.paddingLeft = '100%';    
        items.style.animation = 'marquee 15s linear infinite'; 
    }   
}