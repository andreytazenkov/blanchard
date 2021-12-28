function removeAttrChecked() {
  $(document).ready(function () {
    $(':checked').removeAttr('checked');
  });
};

function publicationsSelectHeaderIsActive() {
  $('.publications-select__header').click(function () {
    $(this).toggleClass('is-active');
    $('.publications-select__list-collapsed input:checkbox:not(:checked)')
      .parent('.publications-select__item')
      .animate({
        height: 'toggle',
        opacity: 'toggle',
      }, function () {
        let displayFlex = $('.publications-select__item').css('display');
        if (displayFlex === 'list-item') {
          $('.publications-select__item').css('display', 'flex');
        };
      });
  });
};

function publicationsSelectinputIsActive() {
  $('.publications-select__input').click(function () {
    if ($(this).is(':checked')) {
      $(this)
        .siblings('.publications-select__span-close')
        .addClass('is-active');
    } else {
      $(this)
        .siblings('.publications-select__span-close')
        .removeClass('is-active');
      if (screen.width < 576) {
        if (!($('.publications-select__header')).hasClass('is-active')) {
          $('.publications-select__list-collapsed input:checkbox:not(:checked)')
            .parent('.publications-select__item')
            .animate({
              height: 'hide',
              opacity: 'hide',
            });
        };
      };
    };
  });
};

function publicationsSelectSpanCloseIsActive() {
  $('.publications-select__span-close').click(function () {
    $(this)
      .siblings(this)
      .removeAttr("checked");
    $(this).toggleClass('is-active');
    if (!($('.publications-select__header')).hasClass('is-active')) {
      $('.publications-select__list-collapsed input:checkbox:not(:checked)')
        .parent('.publications-select__item')
        .animate({
          height: 'hide',
          opacity: 'hide',
        });
    };
  });
};

$(window).on('orientationchange', function () {
  if (screen.orientation.type === 'landscape-primary') {
    $('.publications-select__item').css('display', 'block').css('display', 'flex');
  } else if (screen.orientation.type === 'portrait-primary') {
    $('.publications-select__input:not(:checked)').parents('.publications-select__item').css('display', 'none')
  }
});

removeAttrChecked()

publicationsSelectHeaderIsActive();

publicationsSelectinputIsActive();

publicationsSelectSpanCloseIsActive();
