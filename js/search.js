$(document).ready(function () {
  $('.nav__search').click(function (e) {
    $('body').addClass('lock');
    $('.header').addClass('search-active');
    $('.nav__search').addClass('search-active');
  });
  $('.nav__search_close').click(function (e) {
    $('body').removeClass('lock');
    $('.header').removeClass('search-active');
    $('.nav__search').removeClass('search-active');
  });
});
