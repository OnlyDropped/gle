$(function () {
  $('.slider-inner__box').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
  });
  $('.about__box').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000
  });
  $('.about-sapfir__wrapper').slick({
    arrows: false,
    dots: true,
    //autoplay: true,
    //autoplaySpeed: 6000
  });
});
