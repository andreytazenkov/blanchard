$('.swiper-events-hide__button').click(function () {
  $(this).toggleClass('is-active');
  if ($(this).hasClass('is-active')) {
    $(this).text('Скрыть события');
  } else {
    $(this).text('Все события');
  };
  if (screen.width >= 576 && screen.width < 1024) {
    $('.events-slide:nth-child(n + 3)').animate({
      height: 'toggle',
      opacity: 'toggle',
    }, 1000);
  } else if (screen.width >= 1024) {
    $('.events-slide:nth-child(n + 4)').animate({
      height: 'toggle',
      opacity: 'toggle',
    }, 1000);
  };
});
