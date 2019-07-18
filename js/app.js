;(function($) {
    "use strict";
  
    $('.ba-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinity: true,
      autoplay: true,
      speed: 2000
    });

    $('.ba-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        console.log(currentSlide);
    });

    $('#btn-play').on('click', function(){
        $('.ba-slider').slick('slickPlay');
    });

    $('#btn-pause').on('click', function(){
        $('.ba-slider').slick('slickPause');
    });

    $('#btn-next').on('click', function(){
        $('.ba-slider').slick('slickNext');
    });

    $('#btn-prev').on('click', function(){
        $('.ba-slider').slick('slickPrev');
    });

    $('#btn-CurrentSlide').on('click', function(){
        alert($('.ba-slider').slick('slickCurrentSlide'));
    });

    $('#goToSlide').on('change', function(){
        var numberOfSlide = $(this).val();
        $('.ba-slider').slick('slickGoTo', numberOfSlide)
    });
  })(jQuery);