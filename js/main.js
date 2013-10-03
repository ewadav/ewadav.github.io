
$(window).on('scroll', function () {
    var sidebar = $('.main-title');
    var scrollTop     = $(window).scrollTop(),
        elementOffset = sidebar.offset().top,
        distance      = (elementOffset - scrollTop);
    if(distance < 300 && !$('#overview').is(":visible")) {
    	$('#overview').show("slide");
    }
}); 