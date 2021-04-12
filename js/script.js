
$('document').ready(function(){

  // mobile menu function (incomplete)
  $('.mobile-menu').click(function(){
    $('.nav-item, .dropdown, .drop-btn ').css({
      'display':'block',
      'background':'#FCF9F7',
    });
  });

  // slick card slider
  $('.card-area').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

});
