/*hero__swiper*/
const swiper = new Swiper('.hero-swiper', {
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
let galleryPagination = document.querySelector('.swiper-gallery-pagination')
const gallarySwiper = new Swiper('.swiper-gallery', {
    autoplay: {
        delay: 3000
    },
    speed: 2200,
    pagination: {
        el: galleryPagination,
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-gallery-button-next',
        prevEl: '.swiper-gallery-button-prev',
    },
});

$('.swiper-gallery-button-prev').click(function(e) {
    gallarySwiper.slidePrev();
});

$('.swiper-gallery-button-next').click(function(e) {
    gallarySwiper.slideNext();
})

/*swiper-events*/
const eventsSwiper = new Swiper('.swiper-events', {
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
const bookSwiper = new Swiper('.publication-book-swiper', {
    autoplay: {
        delay: 3000
    },
    slidesPerView: 2,
    speed: 2200,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 'auto',
    slidesPerColumn: 2,
    navigation: {
        nextEl: '.publication-book-swiper-button-next',
        prevEl: '.publication-book-swiper-button-prev',
    },
});

/* project-partners__swiper*/
const projectSwiper = new Swiper('.project-partners-swiper', {
    autoplay: {
        delay: 3000
    },
    speed: 2200,
    loop: true,
    breakpoints: {
        578: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});


$('#project-partners-swiper-prev').click(function(e) {
    projectSwiper.slidePrev();
});

$('#project-partners-swiper-next').click(function(e) {
    projectSwiper.slideNext();
});