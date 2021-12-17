function gallaryMove() {
  if (screen.width >= 896) {
    $('.gallery-swiper-wrapper').before($('.gallery-swiper-navigation'));
    $('.swiper-gallery').before($('.filter-gallery'));
    $('.gallery-authorization').appendTo('.filter-gallery');
    $('.catalog-tabs-content-wrapper').before($('.catalog-artists-wrapper'));
  } else {
    $('.gallery-swiper-navigation').appendTo('.swiper-container-box');
    $('.swiper-container-box').before($('.filter-gallery'));
    $('.gallery-authorization').appendTo('.gallery');
    $('.catalog-artists-wrapper').appendTo('.catalog-content')
  };
};

gallaryMove();

$(window).resize(function () {
  gallaryMove();
});
