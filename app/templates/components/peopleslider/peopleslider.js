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
}