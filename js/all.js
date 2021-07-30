$(document).ready(function () {

    $('.menuItem').hover(function () {
        event.preventDefault();
        $(this).find('ul').stop().slideToggle();
    });

    window.onscroll = function() {
        if ($(window).scrollTop() > 50) {
            $('.backtoTop').fadeIn();
        }
        else {
            $('.backtoTop').fadeOut();
        }
    }
 
    $('.backtoTop a').click(function () {
        event.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 100);
    });   

});

