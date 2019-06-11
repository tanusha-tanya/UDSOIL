const dotes = document.querySelector('.screen-dotes');
if(dotes){
    let linkCollection = document.querySelectorAll('.screen-dotes-link');
    let sections = document.querySelectorAll('section');   
    let height = [];
    for(let i = 0; i< sections.length; i++){
        height.push(sections[i].offsetTop)
    }
    window.onscroll = function() {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled >= document.querySelector('html').clientHeight/3 && scrolled < document.querySelector('.footer').offsetTop - document.querySelector('.footer').clientHeight*2){
            dotes.classList.add('showed')
        }
        else{
            dotes.classList.remove('showed')
        }       
    }

    // cache the navigation links 
var $navigationLinks = $('.screen-dotes-link');
// cache (in reversed order) the sections
var $sections = $($("section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('.screen-dotes-link[href="#' + id + '"]');
});

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            // otherwise, we directly call the function 
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    // iterate the sections
    $sections.each(function() {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top;

        // if the user has scrolled over the top of the section  
        if (scrollPosition >= sectionTop) {
            // get the section id
            var id = currentSection.attr('id');
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!$navigationLink.hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('active');
                // add .active class to the current link
                $navigationLink.addClass('active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

    $(window).scroll( throttle(highlightNavigation,100) );

}
