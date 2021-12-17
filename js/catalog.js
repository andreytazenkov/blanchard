$('.catalog-tabs__href').click(function () {
  $('.catalog-artists').each(function () {
    $(this).fadeOut(100);
  });
  let catalogTabsContentCountry = $(this).attr('href');
  $('.catalog-artists').each(function () {
    let catalogArtistsCountry = "#" + $(this).attr('data-country');
    if (catalogTabsContentCountry === catalogArtistsCountry) {
      $(this).fadeIn(600).children().first().css('display', 'flex');
      $('#noname').fadeOut(100);
    }
  });
});

$('.catalog-accordion-list__item').click(function () {
  let dataName = $(this).attr('data-name');
  $('.catalog-artists-box').each(function () {
    $(this).fadeOut(100);
  });
  $('.catalog-artists-box').each(function () {
    let idArts = $(this).attr('id');
    if (dataName === idArts) {
      $(this).fadeIn(600, function () {
        $(this).css('display', 'flex');
      });
    }
  });
  if (dataName === undefined) {
    $('#noname').fadeIn(600, function () {
      $('#noname').css('display', 'flex');
    });
  };
  let catalogAccordionListItemHref = $(this).children('.catalog-accordion-list__item-href');
  $("html, body").animate({
    scrollTop: $($(catalogAccordionListItemHref).attr("href")).offset().top + 'px'
  }, {
    duration: 800,
    easing: "swing"
  });
});

$('.catalog-accordion-list__item-href').click(function () {
  $('.catalog-accordion-list__item-href').each(function () {
    $(this).removeClass('active');
  });
  $(this).addClass('active');
});

$('.accordion-unknown').parents('.catalog-accordion-list').css('column-count', 1);

function movingCategoryTabs() {
  if (screen.width >= 768) {
    $('.catalog-tabs__list').before($('.catalog-header'));
  } else { $('.catalog-content').before($('.catalog-header')); };
};

$(window).resize(function () {
  movingCategoryTabs();
});

movingCategoryTabs()

$('.catalog-tabs-accordion__header').click(function () {
  $('.catalog-tabs-accordion__header-text').each(function () {
    $(this).removeClass('is-active');
  });
  $(this).children().addClass('is-active');
});
