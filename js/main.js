
/* $(window).on('scroll', function () {
    var sidebar = $('.main-title');
    var scrollTop     = $(window).scrollTop(),
        elementOffset = sidebar.offset().top,
        distance      = (elementOffset - scrollTop);
    if(distance > 200 && !$('.section-content').is(":visible")) {
    	//$('.section-content').show("slide")
    	//$('.right-container').show();
    	//$('.bs-docs-sidebar').scrollspy('refresh');
    }
}); */


 /* $(window).scroll(function(){
        alert('balls');
        var itemOffset = Math.abs($(this).offset().top);
        var height = $('.main-container').height();
        if (itemOffset > 0 && itemOffset < height) {
             alert($(this).attr('id'));
             $('.nav-content').addClass('affix');
        } else {
        	$('.nav-content').removeClass('affix');
        }
}); */


/*
v1ar navContent = $('.nav-content');
var distance = navContent.offset().top,
$window = $(window);

$window.scroll(function() {
    if ($window.scrollTop() >= distance && !navContent.hasClass('affix')) {
        navContent.addClass('affix');
    } else {
        navContent.removeClass('affix');
    }
}); */

var isFixed = false;
var initialDistance = 0;

$(document).ready(function() {
    var navContent = $('.nav-content');
    initialDistance = navContent.offset().top - $(window).scrollTop();
    console.log(initialDistance);
});



$(window).scroll(function() {
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
});