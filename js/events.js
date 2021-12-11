$('.swiper-events-hide__button').click(function() {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
        $(this).text('Скрыть события');
    } else {
        $(this).text('Все события');
    };
    if (screen.width >= 576) {
        $('.events-slide:nth-child(n + 3)').animate({
            height: 'toggle',
            opacity: 'toggle',
        }, 1000);
    };
});