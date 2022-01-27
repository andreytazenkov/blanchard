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
    $('.nav-search-wrapper').appendTo('.submenu-wrapper');
  } else {
    $('.nav-search-close').before($('.nav-search-wrapper'));
  };
};

appendToNavSearchWrapper();

$(window).resize(function () {
  appendToNavSearchWrapper();
});

$('.submenu-list-items__button').click(function () {
  if ($(this).siblings('.submenu-list-wrapper').hasClass('active')) {
    $(this).siblings('.submenu-list-wrapper').removeClass('active').addClass('disactive');
  } else {
    $('.submenu-list-wrapper').each(function () {
      $(this).removeClass('active');
      $(this).removeClass('disactive');
    });
    $(this).siblings('.submenu-list-wrapper').addClass('active');
  }
});


function submenuHeight() {
  let heightEl;
  let headerHeight = new ResizeObserver(entries => {
    for (let entry of entries) {
      let elemHeader = entry.target;
      heightEl = getComputedStyle(elemHeader).height;
    }

  });

  let submenuBottom = new ResizeObserver(entries => {
    for (let entry of entries) {
      let coeficent = parseInt(getComputedStyle(entry.target).height) / 100;
      let valueBottom = (-parseInt(heightEl) * coeficent + 'px')
      entry.target.style.bottom = valueBottom;
    }
  });

  headerHeight.observe(document.querySelector("#header"));

  submenuBottom.observe(document.querySelector(".submenu"));
};

submenuHeight();


