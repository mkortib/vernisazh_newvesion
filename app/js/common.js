$(function() {




  // parallax on mian page 

  $('.desc_comp').parallax({imageSrc: '/img/main/bg-1920.jpg'});

  // Equal Height for different items
  
  $('.fl_img').equalHeights();

  $('.char_itm').equalHeights();



  


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
    autoplaySpeed: 5000,
    responsive: [{

      breakpoint: 768,
      settings: {
        dots: true,
      }

    }
]
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
    responsive: [{

          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
    
        },
        {

          breakpoint: 570,
          settings: {
            slidesToShow: 1,
          }
    
        }
    ]
  });


  $('.slider_about').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    rows: 0,
    dots: false,
    prevArrow: '.slide_arrows .prev_slide',
    nextArrow: '.slide_arrows .next_slide',
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  // slides counter

  $('.slider_about').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    // var i = (currentSlide == 4 ? 2 : 1);
    
    var curSlide = (currentSlide == 0 ? 1 : currentSlide + 1);
    var allSlides = slick.slideCount;

    $('.curr_slide').text('0' + curSlide);
    $('.all_slides').text('0' + allSlides);

  });


  // POPUP 

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


  $('.input-container input').blur(function(event) {
    var inputVal = this.value;
    
    if (inputVal) {
      this.classList.add('value-exists');
    } else {
      this.classList.remove('value-exists');
    }
  });


  if ($(window).width() < 1024) {

    $('.title_wr').clone().appendTo('.bg_bl');

    $('.bg_bl').find('.title_wr').addClass('show_title');

    $(window).scroll(function() {

      if ($(this).scrollTop() > $(this).height()) {
        $('.menu_itms').addClass('head_scroll');
      } else {
        $('.menu_itms').removeClass('head_scroll');
      }

    });

  }

  if($(window).width() < 768) {
    var radios = $('.room-amount .radio-wrap .radio');
    var section = $('.section-amount .radio-wrap .radio');
    var credit = $('.credit-amount .radio-wrap .radio');

    var frstCol = [];
    var secCol = [];
    var frstCol2 = [];
    var secCol2 = [];
    var frstCol3 = [];
    var secCol3 = [];



    for (var i = 0; i < radios.length; i++) {
      if (i < 2) {
        frstCol.push(radios[i]);
        frstCol2.push(section[i]);
        frstCol3.push(credit[i]);
      } else {
        secCol.push(radios[i])
        secCol2.push(section[i])
        secCol3.push(credit[i])
      }
    }

    $('.room-amount .radio-wrap')
      .text('')
        .append('<div class="frts_col">')
          .find('.frts_col')
            .append(frstCol)
        .parent()
        .append('<div class="scnd_col">')
          .find('.scnd_col')
            .append(secCol)

    $('.section-amount .radio-wrap')
    .text('')
      .append('<div class="frts_col">')
        .find('.frts_col')
          .append(frstCol2)
      .parent()
      .append('<div class="scnd_col">')
        .find('.scnd_col')
          .append(secCol2)

    $('.credit-amount .radio-wrap')
    .text('')
      .append('<div class="frts_col">')
        .find('.frts_col')
          .append(frstCol3)
      .parent()
      .append('<div class="scnd_col">')
        .find('.scnd_col')
          .append(secCol3)

              
    

  }

  if ($(window).width() < 570) {
    $('.about_numb').addClass('hide_num').clone().prependTo('.numb_sm');
    $('.numb_sm').find('.about_numb').removeClass('hide_num');
  }


  if ($(window).width() < 1440) {
    $('.bootstr_chng').removeClass('col-xl-6').addClass('col-xl-7');
  }

  if ($(window).width() < 1280) {
    $('.hit_flats .slide_flat .top_txt span').prepend('<br/>');
  }


  //
  
  $('.quest_wr .button').click(function() {
    var name = $(this).parent().find('input[name=name]').val();
    var phone = $(this).parent().find('input[name=phone]').val();
    $('#small-dialog2').find('input[name=name]').val(name);
    $('#small-dialog2').find('input[name=phone]').val(phone);
  })

  // CALCULATE

  var minVal,
      maxVal,
      room,
      roomNum,
      section,
      month3per,
      month5per,
      curmonth,
      section,
      squareVal,
      sectNum,
      instRange,
      rassroch,
      month;


  $(".room-amount input").click(function (){
      roomNum = $(this).data("room");
      room = $(this).val();
  });

  $(".section-amount input").click(function (){
    section = $(this).val();
    sectNum = $(this).data("sect");
  });

  $(".credit-amount input").click(function (){
    curmonth = $(this).val();
  });


  // Range UI

  $('#range-2').range({
    min: 22,
    max: 114,
    start: 22,
    // input: '#squareVal',
    onChange: function(numb) {
      squareVal = numb;
      minVal = (squareVal * section * 30) / 100;
      maxVal = (squareVal * section * 95) / 100; 
      $('#squareVal').val(numb + ' м²');
      $("#minval").text(minVal.toFixed(0) + ' грн');
      $("#maxval").text(maxVal.toFixed(0) + ' грн');
    }
  });

  $('#range-3').range({
    min: minVal,
    max: maxVal,
    // start: (minVal ? minVal : 23),
    onChange: function(numb) {
      // instRange = numb;
      console.log(minVal);
      console.log(maxVal);
      $("#instVal").val(numb);
      // var res = instRange / (squareVal * section) * 100;
      // rassroch = (squareVal * section) - instRange;
      // month = rassroch / curmonth;
      // month3per = (rassroch - (rassroch * 3 / 100)) / curmonth;
      // month5per = (rassroch - (rassroch * 5 / 100)) / curmonth;
      // $("#pers").val(res.toFixed(2));
      // if(meta.triggeredByUser) {
      //   'set value', 17
      // }
    }
  });

  // Calculate functions

  $('.throwdown').click(function() {
    location.reload(true);
  })









 
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



  $('#my-menu').click(function() {
    $('.mob_mnu').toggleClass('mob_visible');
    $('.hamburger').toggleClass('is-active');
  })



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
