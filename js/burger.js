$('.burger').click(function (e) {
  $('body').addClass('lock');
  $('.burger').addClass('is-active');
  $('.navbar').addClass('open');
});
$('.navbar-close').click(function (e) {
  $('body').removeClass('lock');
  $('.burger').removeClass('is-active');
  $('.navbar').removeClass('open');
});
