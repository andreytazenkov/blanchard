$(window).resize(function () {
  if (screen.width >= 576) {
    $('.contacts-form__header').before($('.contacts-map__content'));
    $('.contacts-social').appendTo('.contacts-form');
  } else {
    $('.contacts-map__navigation').before($('.contacts-map__content'));
    $('.contacts-social').appendTo('.contacts');
  };
});

(function () {
  if (screen.width >= 576) {
    $('.contacts-form__header').before($('.contacts-map__content'));
    $('.contacts-social').appendTo('.contacts-form');
  } else {
    $('.contacts-map__navigation').before($('.contacts-map__content'));
    $('.contacts-social').appendTo('.contacts');
  };
}());
