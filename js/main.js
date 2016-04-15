$(document).ready(function(){ 

    // JQEURY.NAV.JS

    $('nav').onePageNav({
    });

    // MOBILE NAV ANIMATION

    var menu = $('.nav-wrapper nav');

    $('#menu-icon').click(function () {
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if(w > 768 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

});

