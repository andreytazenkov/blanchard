$("a").click(function () {
  if (!($(this).is('.catalog-accordion-list__item-href') || $(this).is('.project-partners-swiper__slide') || $(this).is('.contacts-social__href') || $(this).is('.footer-social-item__href'))) {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  }
});


window.addEventListener('resize', function () {
  console.log(window.innerWidth);
})
