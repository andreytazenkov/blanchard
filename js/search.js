function addClassSearchActive() {
  $('.nav-search__button').click(function () {
    if (screen.width < 1200) {
      $('body').toggleClass('lock');
      $('.header').toggleClass('search-active');
      $('.nav-search').toggleClass('search-active');
    }
  });
  $('.nav-search-close').click(function () {
    if (screen.width < 1200) {
      $('body').removeClass('lock');
      $('.header').removeClass('search-active');
      $('.nav-search').removeClass('search-active');
    }
  });
}

$(window).resize(addClassSearchActive());
