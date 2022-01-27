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
    576: {
      speed: 1500,
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      autoHeight: false,
      spaceBetween: 10,
    },
    768: {
      speed: 1500,
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      autoHeight: false,
      spaceBetween: 34,
    },
    896: {
      speed: 1500,
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      autoHeight: false,
      spaceBetween: 10,
    },
    1024: {
      speed: 1500,
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      autoHeight: false,
      spaceBetween: 34,
    },
    1600: {
      speed: 1500,
      // slidesPerGroup: 2,
      slidesPerView: 3,
      slidesPerColumn: 3,
      autoHeight: false,
      spaceBetween: 50,
    }
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  // keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

$('.swiper-gallery-button-prev').click(function (e) {
  gallarySwiper.slidePrev();
});

$('.swiper-gallery-button-next').click(function (e) {
  gallarySwiper.slideNext();
});

/*swiper-events*/
let eventsSwiper = undefined;

function initEventsSwiper() {
  if ((screen.width < 576) && (eventsSwiper == undefined)) {
    eventsSwiper = new Swiper('.swiper-events', {
      autoplay: {
        delay: 3000
      },
      speed: 1800,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          pagination: false,
        }
      },
    });
  } else if ((screen.width >= 576) && (eventsSwiper != undefined)) {
    eventsSwiper.destroy();
    eventsSwiper = undefined;
    $('.swiper-wrapper-events').removeAttr('style');
    $('.events-slide').removeAttr('style');
  }
}

initEventsSwiper();

$(window).resize(function () {
  initEventsSwiper();
});


/*publication-book__swiper*/
let bookSwiper = undefined;

function initBookSwiper() {
  const publicationBookSwiperButtonPrev = document.querySelector('.publication-book-swiper-button-prev');
  const publicationBookSwiperButtonNext = document.querySelector('.publication-book-swiper-button-next');
  const publicationBookSwiperPagination = document.querySelector('.publication-book-swiper-pagination');
  if ((screen.width >= 576) && (bookSwiper == undefined)) {
    bookSwiper = new Swiper('.publication-book-swiper', {
      autoplay: {
        delay: 2000
      },
      speed: 1800,
      loop: false,
      slidesPerView: 'auto',
      navigation: {
        nextEl: publicationBookSwiperButtonNext,
        prevEl: publicationBookSwiperButtonPrev,
      },
      pagination: {
        el: publicationBookSwiperPagination,
        type: 'fraction',
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
      },
      // keyboard: true,
      // watchSlidesProgress: true,
      // watchSlidesVisibility: true,
      // slideVisibleClass: 'slide-visible',

      // on: {
      //   init: function () {
      //     this.slides.forEach(slide => {
      //       if (!slide.classList.contains('slide-visible')) {
      //         slide.tabIndex = '-1';
      //       } else {
      //         slide.tabIndex = '';
      //       }
      //     });
      //   },
      //   slideChange: function () {
      //     this.slides.forEach(slide => {
      //       if (!slide.classList.contains('slide-visible')) {
      //         slide.tabIndex = '-1';
      //       } else {
      //         slide.tabIndex = '';
      //       }
      //     });
      //   }
      // }
    });
  } else if ((screen.width < 576) && (bookSwiper != undefined)) {
    bookSwiper.destroy();
    bookSwiper = undefined;
    $('.publication-book-swiper-wrapper').removeAttr('style');
    $('.publication-book-slide').removeAttr('style');
  }
};
initBookSwiper();
$(window).resize(function () {
  initBookSwiper();
});

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
    1024: {
      slidesPerView: 2,
      spaceBetween: 49,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 49,
    },
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
});


$('#project-partners-swiper-prev').click(function (e) {
  projectSwiper.slidePrev();
});

$('#project-partners-swiper-next').click(function (e) {
  projectSwiper.slideNext();
});
