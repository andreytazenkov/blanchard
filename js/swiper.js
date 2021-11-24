/*hero__swiper*/
const swiper = new Swiper('.hero__swiper', {
    autoplay: {
        delay: 3000
    },
    speed: 1800,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        hide: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
    },
});

/*swiper-gallery*/
const gallarySwiper = new Swiper('.swiper-gallery', {
    // autoplay: {
    //     delay: 3000
    // },
    speed: 1800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-gallery__pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-gallery__button-next',
        prevEl: '.swiper-gallery__button-prev',
    },
});

/*swiper-events*/
const eventsSwiper = new Swiper('.swiper-events', {
    // autoplay: {
    //    delay: 3000
    // },
    speed: 1800,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

/*publication-book__swiper*/
const bookSwiper = new Swiper('.publication-book__swiper', {
    // autoplay: {
    //    delay: 3000
    // // },
    slidesPerView: 2,
    speed: 1800,
    //loop: true,
    //effect: 'fade',
    //fadeEffect: {
    //   crossFade: true
    //},
    // slidesPerView: 'auto',
    // slidesPerColumn: 2,
    navigation: {
        nextEl: '.publication-book__swiper-button-next',
        prevEl: '.publication-book__swiper-button-prev',
    },
});

/* project-partners__swiper*/
const projectSwiper = new Swiper('.project-partners__swiper', {
    autoplay: {
        delay: 3000
    },
    speed: 1800,
    loop: true,
    fadeEffect: {
        crossFade: true
    },
});


$('#project-partners__swiper-prev').click(function(e) {
    projectSwiper.slidePrev();
});

$('#project-partners__swiper-next').click(function(e) {
    projectSwiper.slideNext();
});