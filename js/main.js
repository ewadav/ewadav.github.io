
$(window).on('scroll', function () {
    var sidebar = $('.main-title');
    var scrollTop     = $(window).scrollTop(),
        elementOffset = sidebar.offset().top,
        distance      = (elementOffset - scrollTop);
    if(distance > 200 && !$('.section-content').is(":visible")) {
    	//$('.section-content').show("slide")
    	//$('.right-container').show();
    	//$('.bs-docs-sidebar').scrollspy('refresh');
    }
}); 