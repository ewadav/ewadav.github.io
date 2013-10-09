var isFixed = false;
var initialDistance = 0;
var didScroll = false;

$(document).ready(function() {
    var navContent = $('.nav-content');
    initialDistance = navContent.offset().top - $(window).scrollTop();
    console.log(initialDistance);
});


$(window).scroll(function() {
    didScroll = true;
});
 

setInterval(function() {
    if (didScroll) {
        didScroll = false;
        var navContent = $('.nav-content');
        var scrolled = $(window).scrollTop();
        console.log(scrolled);
        if(scrolled >= initialDistance && !isFixed) {
            navContent.addClass('affix');
            isFixed = true;
        }else if (scrolled < initialDistance && isFixed) {
            navContent.removeClass('affix');
            isFixed = false;
        }
    }
}, 100);