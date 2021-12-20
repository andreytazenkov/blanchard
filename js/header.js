function appendToLoginWrapper() {
  if (screen.width >= 1200) {
    $('.login-wrapper').appendTo('.header');
  } else {
    $('.login-wrapper').appendTo('.navbar');
  };
};

appendToLoginWrapper();

$(window).resize(function () {
  appendToLoginWrapper();
});
