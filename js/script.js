$(document).ready(function () {
  $('.home__burger').click(function (event) {
    $('.home__burger,.home__header_nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});