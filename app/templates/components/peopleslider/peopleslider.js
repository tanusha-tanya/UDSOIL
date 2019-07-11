let peopleslider = document.querySelector('.peopleslider');
if(peopleslider){
    let toggleCollection = document.querySelectorAll('.controllers-toggler');
    toggleCollection.forEach((toggle)=>{
        toggle.addEventListener('click', ()=>{
            let item = toggle.closest('.peopleslider-slider-item'),
            controllers = item.querySelectorAll('.controllers-item'),
            contents = item.querySelectorAll('.peopleslider-content');
            controllers.forEach((controller)=>{
                controller.classList.toggle('controllers-item__active')
            });
            contents.forEach((content)=>{
                content.classList.toggle('peopleslider-content__active')
            });
            toggle.classList.toggle('controllers-toggler__right')
        })
    })
    let slider = $('.peopleslider-slider')
    if(slider){
        if($(".peopleslider-slider-item").length > 1){
            slider.owlCarousel({
                items:1,
                dots: false,
                nav:true,
                navContainer: '.peopleslider-arrows',
                navElement: 'div class="peopleslider-arrow"',
                navText: ['<svg role="img" width="11" height="14"><use xlink:href="#triangle"></use></svg>','<svg role="img" width="11" height="14"><use xlink:href="#triangle"></use></svg>']
            }) 
            let items = $('.peopleslider-slider .owl-item:not(.cloned)'),
            total = items.length,
            current = 1;
            $('.peopleslider-counter').text(current +'/' + total);

            slider.on('changed.owl.carousel', function(event) {
                current = event.item.index + 1;
                changeCurrent(current)
            });  
            function changeCurrent(current){
                if(current === 0 ){
                  current = total;
                }
                if (current > total){
                  current = 1;
                }                
                $('.peopleslider-counter').text(current +'/' + total);
              }
        }
        else{
            $(".peopleslider-nav").remove()
        }
    }        
}