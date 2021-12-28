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

function addTopGalleryModal() {
  if (screen.availHeight <= 480) {
    $('.gallery-modal-wrapper').css('top', 0);
  }
};

gallaryMove();

addTopGalleryModal();

$(window).resize(function () {
  gallaryMove();
  addTopGalleryModal();
});

$('.gallery-modal').each(function (index) {
  $(this).attr('data-number', index + 1);
});

$('.gallery-slide').click(function () {
  let indexSlideClick = $(this).children('.gallery-slide-picture').attr('data-number');
  $('.gallery-modal').each(function (index) {
    $(this).fadeOut(100);
    if (indexSlideClick == index + 1) {
      $(this).fadeIn(400);
      $('body').addClass('hidden');
    }
  });
});

$('.gallery-modal-close').click(function () {
  $(this).parents('.gallery-modal').fadeOut(200);
  $('body').removeClass('hidden');
});

