function addClassSearchActive() {
  $('.nav-search__button').click(function () {
    if (screen.width < 1200) {
      $('.header').addClass('search-active');
      $('.nav-search').addClass('search-active');
    }
  });

  $('.nav-search-close').click(function () {
    if (screen.width < 1200) {
      $('.header').removeClass('search-active');
      $('.nav-search').removeClass('search-active');
    }
  });
}

addClassSearchActive();

$(window).resize(function () {
  addClassSearchActive();
});


$('body').click(function (el) {
  if ($('.nav-search').hasClass('search-active')) {
    let formSearch = $(el.target).attr('data-search');
    if (!(formSearch === 'nav-search')) {
      $('.header').removeClass('search-active');
      $('.nav-search').removeClass('search-active');
    }
  }
});
