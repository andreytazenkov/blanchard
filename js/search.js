$(document).ready(function() {
    $('.nav-search').click(function(e) {
        $('body').addClass('lock');
        $('.header').addClass('search-active');
        $('.nav-search').addClass('search-active');
    });
    $('.nav-search-close').click(function(e) {
        $('body').removeClass('lock');
        $('.header').removeClass('search-active');
        $('.nav-search').removeClass('search-active');
    });
});
