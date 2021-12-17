$(document).ready(function () {
  $('.nav-search__button').click(function () {
    $('body').toggleClass('lock');
    $('.header').toggleClass('search-active');
    $('.nav-search').toggleClass('search-active');
  });
  $('.nav-search-close').click(function () {
    $('body').removeClass('lock');
    $('.header').removeClass('search-active');
    $('.nav-search').removeClass('search-active');
  });
});
