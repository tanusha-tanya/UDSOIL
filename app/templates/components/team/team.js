const video = document.querySelector('.team-video');
if(video){
    let youTube = document.querySelector('.team-youtube'),
    button = document.querySelector('.team-video-button'),
    iframe = youTube.dataset.iframe;
    button.addEventListener('click', function(){
        video.innerHTML = iframe;
    })
}