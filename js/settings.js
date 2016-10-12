(function($) {
  "use strict";

  $(document).ready(function() {

    // ====================================================================

    // Navbar position

    $(window).scroll(function(){
      // if ($(this).scrollTop() > $('#slides').height()) {
      if ($(this).scrollTop() > $(window).height()) {
        $('.navbar').addClass('fixed');
        $('body').css('padding-top', '97px');
      } else {
        $('.navbar').removeClass('fixed');
        $('body').css('padding-top', '0');
      }
    });

    // ====================================================================

    // Smooth Scroll on Menu Click

    $('.navbar a[href^=#]').on("click",function(){
      var t= $(this.hash);
      var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
      if(t.length){
        var tOffset=(t.offset().top - 90);
        $('html,body').animate({scrollTop:tOffset},'slow');
        return false;
      }
    });

    // ====================================================================

    // Superslides

    $('#title-slides').superslides({
      play: 5000,
      animation_speed: 2000,
      animation: 'fade',
      pagination: false
    });


    // ====================================================================

    // Countdown

    //var weddingDate = new Date();
    //var weddingDate = new Date(weddingDate.getFullYear() + 1, 1 - 1, 1);
    var weddingDate = new Date("June 17, 2017 16:00:00")
    console.log(weddingDate);
    $(".countdown").countdown({
      until: weddingDate,
      format: 'ODHMS'
    });

    // ====================================================================

    // Owl Carousel
    $('#details .venue-slides').owlCarousel({
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      autoPlay: 5000,
      stopOnHover: true,
    });


    $("#registry .owl-carousel").owlCarousel({
      items: 6,
      itemsDesktop: [1199,5],
      itemsDesktopSmall: [991,4],
      itemsTablet: [767,3],
      slideSpeed: 800
    });

    // ====================================================================

    // Parallax

    $('.parallax').scrolly({bgParallax: true});

    // ====================================================================

    // Fun Facts Counter

    var flag = 0;

      $(window).scroll(function() {
          if (flag == 1){
             return false;
          }
          else{
             var bh = $(window).height();
             var st = $(window).scrollTop();
             var el = $('.timer');
             var eh = el.height();
             if ( st >= (100 + eh) - bh ) {
                 el.countTo({
                     speed: 2000,
                     refreshInterval: 20
                 });
             }
             flag = 1;
          }
      });

    // ====================================================================

    // Fancybox

    $('.fancybox').fancybox({
      openEffect: 'none'
    });

    // ====================================================================

    // Scroll Reveal

    if ($(window).width() > 767) {

      // The starting defaults.
      var config = {
        after: '0s',
        enter: 'top',
        move: '50px',
        over: '0.66s',
        easing: 'ease-in-out',
        viewportFactor: 0.33,
        reset: false,
        init: true
      };

      window.scrollReveal = new scrollReveal({reset: true});
    }

  })

})(jQuery);
