Array.prototype.forEach.call(
  document.querySelectorAll('.submenu-dropdown-list'),
  function (el) {
    new SimpleBar(el), {
      ariaLabel: 'Просмотреть список',
    }
  }
);

function appendToNavSearchWrapper() {
  if (screen.width >= 1200) {
    $('.nav-search-wrapper').appendTo('.submenu');
  } else {
    $('.nav-search-close').before($('.nav-search-wrapper'));
  };
};

appendToNavSearchWrapper();

$(window).resize(function () {
  appendToNavSearchWrapper();
});

$('.submenu-list-items__button').click(function () {
  $('.submenu-list-items__button').each(function () {
    $(this).removeClass('is-active');
  });
  let submenuDropdownListHeight = parseInt($(this).siblings('.submenu-dropdown-list').css('height'));
  $('.submenu-dropdown-list').each(function () {
    $(this).slideUp(200);
  });
  if (submenuDropdownListHeight <= 90) {
    $(this).toggleClass('is-active');
    $(this).siblings('.submenu-dropdown-list').slideDown({
      easing: 'linear',
    }, 200);
  };
});
