$('.swiper-events-hide__button').click(function() {
    $('.events-slide:nth-child(n + 3)').animate({
        height: 'toggle',
        opacity: 'toggle',
    }, 1000);
});
