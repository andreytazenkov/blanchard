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
    loop: true,
    pagination: {
        el: galleryPagination,
        type: 'fraction'
    },
    navigation: {
        nextEl: '.swiper-gallery-button-next',
        prevEl: '.swiper-gallery-button-prev',
    },
    breakpoints: {
        768: {
            speed: 1500,
            slidesPerGroup: 2,
            slidesPerView: 2,
            slidesPerColumn: 2,
            autoHeight: false,
            spaceBetween: 34,
        }
    }
});

$('.swiper-gallery-button-prev').click(function(e) {
    gallarySwiper.slidePrev();
});

$('.swiper-gallery-button-next').click(function(e) {
    gallarySwiper.slideNext();
});

/*swiper-events*/
(function() {
    if (screen.width < 576) {
        const eventsSwiper = new Swiper('.swiper-events', {
            speed: 1800,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    };
}());

/*publication-book__swiper*/
(function() {
    let publicationBookSwiperButtonPrev = document.querySelector('.publication-book-swiper-button-prev');
    let publicationBookSwiperButtonNext = document.querySelector('.publication-book-swiper-button-next');
    let publicationBookSwiperPagination = document.querySelector('.publication-book-swiper-pagination');
    if (screen.width >= 576) {
        const bookSwiper = new Swiper('.publication-book-swiper', {
            autoplay: {
                delay: 3000
            },
            speed: 2200,
            loop: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: publicationBookSwiperButtonNext,
                prevEl: publicationBookSwiperButtonPrev,
            },
            pagination: {
                el: publicationBookSwiperPagination,
                type: 'fraction',
            },
        });
    };
}());


/* project-partners__swiper*/
const projectSwiper = new Swiper('.project-partners-swiper', {
    autoplay: {
        delay: 3000
    },
    speed: 2200,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
    },
});


$('#project-partners-swiper-prev').click(function(e) {
    projectSwiper.slidePrev();
});

$('#project-partners-swiper-next').click(function(e) {
    projectSwiper.slideNext();
});
