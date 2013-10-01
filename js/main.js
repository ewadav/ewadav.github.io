
$(window).on('scroll', function () {
    var sidebar = $('.left-nav');
    var scrollTop     = $(window).scrollTop(),
        elementOffset = sidebar.offset().top,
        distance      = (elementOffset - scrollTop);
    if(distance < 10) {
    	sidebar.addClass('sticky');
    }else{
    	sidebar.removeClass('sticky');
    }
});