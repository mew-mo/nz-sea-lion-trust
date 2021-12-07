
$('document').ready(function(){

  var open = false;

  // mobile menu function (incomplete)
  $('.mobile-menu').click(function(){
    checkIfOpen();
  }); // mobile menu click

  function checkIfOpen() {
    if (!open) {
      $('.nav-item, .dropdown, .drop-btn, .dropdown-content ').css({
        'display':'block',
      });
      $('.nav-item, .dropdown, .drop-btn, .dropdown-content ').removeClass('on-close');
      open = true;
    } else if (open) {
      $('.nav-item, .dropdown, .drop-btn, .dropdown-content ').addClass('on-close');
      $('.nav-item, .dropdown, .drop-btn, .dropdown-content ').css({
        'display':'none',
      });
      open = false;
    }
  }

  $(window).load(function() {
    if ($('.mobile-menu').is(':visible')) {
      $('.nav-item, .dropdown, .drop-btn, .dropdown-content ').css({
        'display':'none',
      });
    }
  });

  // slick card slider - about us page
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
