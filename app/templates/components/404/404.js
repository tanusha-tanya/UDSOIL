let oil = document.querySelector('.oil');
let notFounded = document.querySelector('.notfounded');
if(oil){
    bodymovin.loadAnimation({
        container: oil, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation/oil.json' // the path to the animation json
    }); 
}

if(notFounded){
    bodymovin.loadAnimation({
        container: notFounded, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation/404.json' // the path to the animation json
    }); 
}