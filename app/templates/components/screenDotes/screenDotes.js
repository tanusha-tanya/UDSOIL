const dotes = document.querySelector('.screen-dotes');
if(dotes){
    let linkCollection = document.querySelectorAll('.screen-dotes-link')
    window.onscroll = function() {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= document.querySelector('html').clientHeight/3 && scrolled < document.querySelector('.footer').offsetTop - document.querySelector('.footer').clientHeight*2){
            dotes.classList.add('showed')
        }
        else{
            dotes.classList.remove('showed')
        }
    }
}
