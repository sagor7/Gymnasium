$(function(){

  "use strict";
    
  var $nav = $('#header');
  var $dis = $nav.offset().top;
  var $htmlbody = $('html,body');

   $(window).scroll(function () {
      var $scrolling = $(this).scrollTop();
     if ($scrolling >= $dis) {
          $nav.addClass('position-fixed');
      } else {
          $nav.removeClass('position-fixed');
      }
  })

  //smooth scroll 
  $('.navbar-nav .nav-item .nav-link').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $htmlbody.animate({
              scrollTop: target.offset().top - 65
          }, 1000);
          return false;
      }
    }
  });


  //banner slide
  $('.banner-slick').slick({
    dots: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
    responsive: [
      { 
        breakpoint: 770,
        settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1, 
        }
      }, 
      
    ]
  });

  //youtube video
  $("a.bla-2").YouTubePopUp( { autoplay: 0 } );

  //gallery images zoom with venobox
  $('.venobox').venobox({
    border: '10px',
    spinner: 'cube-grid',
    spinColor: '#e23e38'
  }); 
  
  //team slide
  $('.team-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { 
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //testimonial slide
  $('.client-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  //counter up 
  $('.counter').counterUp({
    delay: 20,
    time: 3000,
  });

  //classes tab with colorfull tab
  $('#colorful').colorfulTab({
    overlayColor: "#000",
    overlayOpacity: ".6"
  });

  //sister logo slide
  $('.sis-logo-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 322,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });
  
  //back to top button
   $(".top-btn").click(function(){
      $($htmlbody).animate({
          "scrollTop" : "0"
      }, 500)
  });
  //top button fade in fade out
  $(window).scroll(function(){
      var scrollValue = $(this).scrollTop();

      if(scrollValue >= 500){
          $(".top-btn").fadeIn();
      }else{
       $(".top-btn").fadeOut();
      }
  });
    
 
}); 

