$(function() {




  // parallax on mian page 

  $('.desc_comp').parallax({imageSrc: '/img/main/bg-1920.jpg'});

  // Equal Height for flat img
  
  $('.fl_img').equalHeights();


  $('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rows: 0,
    dots: false,
    // arrows: false,
    // prevArrow: false,
    nextArrow: '.arr_next',
    prevArrow: false,
    fade: true,
    cssEase: 'linear', 
    speed: 500,
    autoplaySpeed: 5000
  });


  $('.fl_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    rows: 0,
    dots: false,
    prevArrow: '.flat_sort .l_arr',
    nextArrow: '.flat_sort .r_arr',
    speed: 500,
  });

  $('.input-container input').blur(function(event) {
    var inputVal = this.value;
    
    if (inputVal) {
      this.classList.add('value-exists');
    } else {
      this.classList.remove('value-exists');
    }
  });

 
  // // AOS animation 

  // if ($(window).width() > 768) {

  //   $('.prog_title .img_wrap_all .circle_alone').attr('data-aos', 'zoom-in').attr('data-aos-delay', '1000').attr('data-aos-duration', '1000');

  
  // }


  // var $windWidth = $(window).width();


  // if ($windWidth >= 1280) {
  //     $('.slide_medium').remove();
  // } 


	// var $main = $('.main-slider');

  // $main.slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     rows: 0,
  //     dots: true,
  //     customPaging: function(slider, i) {
  //         $(slider.$slides[i]).data();
  //         return '<button>' + '0' + (i + 1) + '</button>';
  //     },
  //     prevArrow: false,
  //     nextArrow: '<button type="button" class="slick-next"></button>',
  //     fade: true,
  //     cssEase: 'linear',
  //     speed: 500,
  //     // autoplay: true,
  //     autoplaySpeed: 5000
  // });

  // $('.slider_adv1_init').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //   var i = (currentSlide == 4 ? 2 : 1);
  //   var j = (currentSlide ? currentSlide : 0) + 1;
  //   var k = slick.slideCount - 3;
  // });




  // $('.slider_detals').slick({
  //   prevArrow: '.s_prog_about .slide_prev',
  //   nextArrow: '.s_prog_about .slide_next',
  //   infinite: false,
  //   responsive: [{

  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 1,
  //       // infinite: true,
  //       row: 2
  //     }

  //   },
  //   {

  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       // dots: true,
  //       row: 1
  //     }

  //   },
  //   {

  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       // dots: true,
  //       row: 1
  //     }

  //   },
  //   ]
  // });


  // $('.slider_accomp').slick({
  //   slidesToScroll: 4,
  //   slidesToShow: 4,
  //   prevArrow: '.s_accomplishment .slide_prev',
  //   nextArrow: '.s_accomplishment .slide_next',
  //   infinite: false,
  //   responsive: [{
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   },
  //   ]
  // });

  // $('.slider_flats').slick({
  //   slidesToShow: 3,
  //   centerPadding: '80px',
  //   prevArrow: '.slide_prev',
  //   nextArrow: '.slide_next',
  //   responsive: [{
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   },
  //   ]
  // });

  // $('.cond_slider').slick({
  //   slidesToShow: 3,
  //   // centerPadding: '80px',
  //   prevArrow: '.cond_pr',
  //   nextArrow: '.cond_next',
  //   responsive: [{
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //     }
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //     }
  //   },
  //   ]
  // });






  $('form :submit').on('click', function () {
      $('input:required').each(function () {
          if (!$(this).val()) $(this).addClass('incomplete');
      });
  });

  $('input:required').on('input', function () {
      $(this).removeClass('incomplete');
  });

  $('input[name=phone]').mask("+38 (999) 999-9999", {
      completed: function () {
          $(this).removeClass('incomplete');
      }
  });

  $('input[name=name]').on('input', function () {
      $(this).val($(this).val().replace(/[0-9\\/^$.|?*+\-_()]/g, ""));
  });






  // POPUP 

  // $('.popup-with-move-anim').magnificPopup({
  //   type: 'inline',

  //   fixedContentPos: false,
  //   fixedBgPos: true,

  //   overflowY: 'auto',

  //   closeBtnInside: true,
  //   preloader: false,
    
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: 'my-mfp-slide-bottom'
  // });

  // FORM CALL

  // $('.input-container input').blur(function(event) {
  //   var inputVal = this.value;
    
  //   if (inputVal) {
  //     this.classList.add('value-exists');
  //   } else {
  //     this.classList.remove('value-exists');
  //   }
  // });


 // SCROLL SMOOTH

  // try {
  //   $.browserSelector();
  //   if($("html").hasClass("chrome")) {
  //     $.smoothScroll();
  //   }
  // } catch(err) {

  // };

  // $("img, a").on("dragstart", function(event) { event.preventDefault(); });



});

$(window).on('load', function() {

  $('.container_preload').delay(1000).fadeOut();

//     AOS.init({
//       once: true
//     });
});
