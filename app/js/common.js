$(function() {

  if(document.fullscreen){if (document.exitFullscreen) { document.exitFullscreen();}else if (doc.msExitFullscreen) { doc.msExitFullscreen();}else if (document.mozCancelFullScreen) { document.mozCancelFullScreen();} else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();}};

  // Parallax window

  $('.page_title_wr').parallax({imageSrc: '/img/about/about-top-bg.jpg'});
  // $('.present').parallax({imageSrc: '/img/main/present.jpg'});

  // window size

  if ($(window).width() < 1024) { 
    $('#drop_img').click(function() {
      $('.f_type').toggleClass('mob_list');
    })

    $('#drop_img2').click(function() {
      $('.s_type').toggleClass('sub_cl');
    })

    $('#drop_img3').click(function() {
      $('.t_type').toggleClass('sub_cl2');
    })

    $('#drop_img4').click(function() {
      $('.fo_type').toggleClass('sub_cl3');
    })

    $('.f_type').click(function(e) {
      e.preventDefault();
      $(this).removeClass('bl_mob');
      $('.hide_mnu').removeClass('hide_mnu');
      $('#drop_img').removeClass('main_arr');
      $('#wh_bt').addClass('wh_img');
      $('.serv_nav #drop_img').addClass('arr_add');
    })

    $('.close_mob img').click(function() {
      $('.f_type').addClass('bl_mob');
      $('.f_type').removeClass('mob_list');
      $(this).addClass('hide_mnu');
      $('#drop_img').addClass('main_arr');
      $('#wh_bt').removeClass('wh_img');
      $('.fo_type').removeClass('sub_cl3');      
      $('.T_type').removeClass('sub_cl2');
      $('.serv_nav').find('.f_type').removeClass('mob_list');      
                 
    })





  }

  if ($(window).width() < 1024) {
    $('.new_mob').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      // prevArrow: '.main_nav .l_arr',
      // nextArrow: '.main_nav .r_arr',
      infinite: true,
      rows: 0,
      dots: true,
      // fade: true,
      // cssEase: 'linear',
      speed: 500,
      // autoplay: true,
      autoplaySpeed: 5000,
      responsive: [{
    
        breakpoint: 570,
        settings: {
          slidesToShow: 1
          // infinite: true,
          
        }
  
      }]
    });
  }

  if ($(window).width() < 570) {
    $('.main_itms').slick({
      prevArrow: '.l_itm',
      nextArrow: '.r_itm',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      dots: false
    });
  }

  // hamburger behavior

  $('.hamburger').click(function() {
    if($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    } else {
      $(this).addClass('is-active');
    }
  })

  // mmenu init

  $('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-ru.svg" alt="logo smitler">'
		}
  });
  
	var api = $("#my-menu").data( "mmenu" );
	api.bind( "open:finish", function() { $('.hamburger').addClass('is-active');}).bind('close:finish', function() {$('.hamburger').removeClass('is-active');});

  // main slider

  $('.main_slider_wr').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.main_nav .l_arr',
    nextArrow: '.main_nav .r_arr',
    infinite: true,
    rows: 0,
    dots: false,
    fade: true,
    cssEase: 'linear',
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 5000
  });

  // license slider

  $('.license_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.nav_license .cl_l',
    nextArrow: '.nav_license .cl_r',
    infinite: false,
    rows: 0,
    dots: false,
    cssEase: 'linear',
    speed: 500,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
        slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
        slidesToShow: 1
        }
      }
    ]
  });


  $('.main_slider_wr').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    // var i = (currentSlide == 4 ? 2 : 1);
    
    var curSlide = (currentSlide == 0 ? 1 : currentSlide + 1);
    var allSlides = slick.slideCount;

    $('.curr_slide').text(curSlide);
    $('.all_slides').text(allSlides);

  });


  // search block

  $("#inpt_search").on('focus', function () {
    $(this).parent('label').addClass('active');
  });
  
  $("#inpt_search").on('blur', function () {
    if($(this).val().length == 0)
      $(this).parent('label').removeClass('active');
  });

  // Equal Height for catalogs items

  $('.catal_itm').equalHeights();

  // up arrow
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });

  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });

  // Hide SEO text

  var seoParagraph = $('.seo-txt p');

  var total = seoParagraph.length;

  var newBl = [];

  for (var i = 2; i < total; i++) {
    newBl.push(seoParagraph[i]);
  }

  $('.seo_wr').append(newBl);

  $('.news_seo').click(function(e) {
    // e.prevenrDefault();
    $(this).toggleClass('chg_label');
    $(this).hasClass('chg_label') ? $(this).text('Скрыть') : $(this).text('Подробнее'); 
    $('.seo_wr').slideToggle();
  })

  $('.under_line').click(function(e) {
    e.preventDefault();
    $('.hide_more').slideToggle();
  })


  // Form validation

  $('form :submit').on('click', function () {
    $('input:required').each(function () {
        if (!$(this).val()) $(this).addClass('incomplete');
    });
  });

  $('input:required').on('input', function () {
      $('input:required').each(function () {
        $(this).removeClass('incomplete');      
      });
  });

  $('input[name=phone]').mask("+38 (999) 999-9999", {
      completed: function () {
          $(this).removeClass('incomplete');
      }
  });

  $('input[name=name]').on('input', function () {
      $(this).val($(this).val().replace(/[0-9\\/^$.|?*+\-_()]/g, ""));
  });





  $('#drop_img5').click(function() {
    $('.depth5').toggleClass('show');
    $(this).toggleClass('arr_rev');
  })

  $('#drop_img6').click(function() {
    $('.depth6').toggleClass('show');
    $(this).toggleClass('arr_rev');
  })

  $('#drop_img7').click(function() {
    $('.depth7').toggleClass('show');
    $(this).toggleClass('arr_rev');
  })

  // hide contact items

  $('.img_tog').click(function() {
    $(this).toggleClass('up_img');
    $(this).parent().parent().find('.hide_bl').slideToggle();
  })

  // Adding Animation
  
  if ($(window).width() > 1024) {

      /* FOR MAIN PAGE */
    
    $('.head-all').attr('data-aos', 'fade-right').attr('data-aos-duration', '1000');
    $('.act_descr').attr('data-aos', 'fade-up').attr('data-aos-delay', '200').attr('data-aos-duration', '1000');
    $('.act_img').attr('data-aos', 'flip-right').attr('data-aos-delay', '200').attr('data-aos-duration', '1000');
    
    $('.main_itms .itm:nth-child(1)').attr('data-aos', 'zoom-in-down').attr('data-aos-duration', '700');
    $('.main_itms .itm:nth-child(2)').attr('data-aos', 'zoom-in-down').attr('data-aos-delay', '200').attr('data-aos-duration', '700');
    $('.main_itms .itm:nth-child(3)').attr('data-aos', 'zoom-in-down').attr('data-aos-delay', '400').attr('data-aos-duration', '700');
    $('.main_itms .itm:nth-child(4)').attr('data-aos', 'zoom-in-down').attr('data-aos-delay', '600').attr('data-aos-duration', '700');
    $('.main_itms .itm:nth-child(5)').attr('data-aos', 'zoom-in-down').attr('data-aos-delay', '800').attr('data-aos-duration', '700');
    
    $('.news_bl .new:nth-child(1)').attr('data-aos', 'flip-left').attr('data-aos-delay', '200').attr('data-aos-duration', '1300');
    
    $('.more_cnt h2').attr('data-aos', 'fade-down').attr('data-aos-duration', '1400');
    
    $('.more_cnt p').each(function(index) {
      $(this).attr('data-aos', 'fade-right').attr('data-aos-delay', index * 300).attr('data-aos-duration', '1400');
    })

      /* FOR ABOUT PAGE */

    $('.license_slider').attr('data-aos', 'fade-up').attr('data-aos-duration', '1600');
    $('.career_desc').attr('data-aos', 'zoom-in-up').attr('data-aos-duration', '1600');

    $('.career_itm').each(function(index) {
      $(this).attr('data-aos', 'flip-left').attr('data-aos-delay', index * 400).attr('data-aos-duration', '1500');
    })

    $('.about_article p').each(function(index) {
      $(this).attr('data-aos', 'fade-right').attr('data-aos-duration', '1000');
    })

    $('.catal_itm').each(function(index) {
      $(this).attr('data-aos', 'fade-down').attr('data-aos-duration', '1000');
    })

      /* PROJECT OPEN PAGE */

    $('.potr_itm').each(function(index) {
      $(this).attr('data-aos', 'fade-down').attr('data-aos-delay', index * 300).attr('data-aos-duration', '1000');
    })      

    $('.proj_cnt_desc p').each(function(index) {
      $(this).attr('data-aos', 'fade-right').attr('data-aos-duration', '1000');
    })

    $('.anim_itms').attr('data-aos', 'zoom-in-up').attr('data-aos-duration', '1300');
    
    $('#callback').attr('data-aos', 'fade-right').attr('data-aos-duration', '1300');
    
    $('.fact_img').attr('data-aos', 'fade-up').attr('data-aos-duration', '1300');

    $('.serv_cnt_desc *').each(function(index) {
      $(this).attr('data-aos', 'fade-right').attr('data-aos-duration', '1300'); // for all elements unside div
    })

    $('.cont_inf_wr').attr('data-aos', 'fade-left').attr('data-aos-delay', '1000').attr('data-aos-duration', '1300');
    
    $('.form_contact_wr').attr('data-aos', 'fade-right').attr('data-aos-delay', '1000').attr('data-aos-duration', '1300');
    
    $('.map').attr('data-aos', 'zoom-in-up').attr('data-aos-duration', '1300');

  }


  // $('.more_cnt p').attr('data-aos', 'fade-down').attr('data-aos-duration', '1400');
  // $('.more_cnt h2').attr('data-aos', 'fade-down').attr('data-aos-duration', '1400');

  
  
  var myObject = {
    prop1: 0,
    prop2: '0',
    prop3: 0
  }

  
  
    $(window).scroll(function() { 
      $('.count').each(function(index){ 
       var imagePos = $(this).offset().top; 
       var topOfWindow = $(window).scrollTop();
       if (imagePos < (topOfWindow + 400) ) { 
        anime({
          targets: myObject,
          prop1: 25,
          prop2: '200+',
          prop3: 3,
          easing: 'linear',
          round: 1,
          duration: 2000,
          update: function() {
            $('.count1').text(myObject.prop1);
            $('.count2').text(myObject.prop2);
            $('.count3').text(myObject.prop3);
          }
        });
       } 
      }); 
    }); 
  

  // Preloader 

        // Fetch all the objects groups


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






  // $('form :submit').on('click', function () {
  //     $('input:required').each(function () {
  //         if (!$(this).val()) $(this).addClass('incomplete');
  //     });
  // });

  // $('input:required').on('input', function () {
  //     $(this).removeClass('incomplete');
  // });

  // $('input[name=phone]').mask("+38 (999) 999-9999", {
  //     completed: function () {
  //         $(this).removeClass('incomplete');
  //     }
  // });

  // $('input[name=name]').on('input', function () {
  //     $(this).val($(this).val().replace(/[0-9\\/^$.|?*+\-_()]/g, ""));
  // });






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

  $(window).on('load', function() {
  
    $('.container_preload').delay(1000).fadeOut();
  
      AOS.init({
        once: true
      });
  
  });


});


function factory(){
  var GreenTallerBuilding = document.getElementsByClassName('GreenTallerBuilding');
  var sinGreen = document.getElementsByClassName('sinGreen');
  var BicycleGreen = document.getElementsByClassName('bicycleGreen');
  var watterTankRed = document.getElementsByClassName('watterTankRed');
  var furtherChimneyRed = document.getElementsByClassName('furtherChimneyRed');
  var GreenTallerBuilding = document.getElementsByClassName('GreenTallerBuilding');
  var RedBuildingsTri = document.getElementsByClassName('RedBuildingsTri');
  var widestRedBuilding = document.getElementsByClassName('widestRedBuilding');
  var windows = document.getElementsByClassName('windows');
  var solarPanel = document.getElementsByClassName('solarPanelGreen');
  var wings = document.getElementsByClassName('wings');
  var windmillGreen = document.getElementsByClassName('windmillGreen');
  var craneRed = document.getElementsByClassName('craneRed');
  var circularAntennaGreen = document.getElementsByClassName('circularAntennaGreen');
  var smallerChimneyRed = document.getElementsByClassName('smallerChimneyRed');
  var frontChimneyRed = document.getElementsByClassName('frontChimneyRed');
  var furtherChimneyRed = document.getElementsByClassName('furtherChimneyRed');
  var widestGreenBuilding = document.getElementsByClassName('widestGreenBuilding');
  var furtherRedBuilding = document.getElementsByClassName('furtherRedBuilding');
  var RedSmoke = document.getElementsByClassName('RedSmoke');

  new TimelineMax().staggerFromTo(
    circularAntennaGreen,1,
    {
      x:200
    },{
      x:0
    }
  );

  for (var i = 0; i < 3; i++) {
    new TimelineMax().staggerFromTo(
          document.getElementsByClassName('RedFloor'+ i), 0.7,
          {
            x:-200,
            scaleX:0
          },
          {
            x:0,
            scaleX:1,
            delay:0.75 + i*.1,
            ease: Power2.easeOut,
          }
    );
  }

  for (var i = 0; i < 3; i++) {
    new TimelineMax().staggerFromTo(
          document.getElementsByClassName('GreenFloor'+ i), 0.7,
          {
            x:200,
            scaleX:0
          },
          {
            x:0,
            scaleX:1,
            delay:0.75 + i*.1,
            ease: Power2.easeOut,
          }
    );
  }

  new TimelineMax().staggerFromTo(
        furtherRedBuilding, 1,
        {
          scaleY:0,
          transformOrigin:"bottom"
        },
        {
          scaleY:1,
          delay:1,
          ease: Back.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        RedSmoke, 0.5,
        {
          skewX:5,
          transformOrigin:"bottom"
        },
        {
          skewX:-5,
          repeat:-1,
          yoyo:true,
          delay:1,
          ease: "linear",
        }
  );
  new TimelineMax().staggerFromTo(
        RedSmoke, 0.3,
        {
          scaleY:0,
          transformOrigin:"bottom"
        },
        {
          scaleY:1,
          delay:0.7,
          ease: "linear",
        }
  );

  new TimelineMax().staggerFromTo(
        smallerChimneyRed, 1,
        {
          scaleY:0,
          transformOrigin:"bottom"
        },
        {
          scaleY:1,
          delay:1.3,
          ease: Back.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        widestGreenBuilding, 1,
        {
          scaleY:0,
          transformOrigin:"bottom"
        },
        {
          scaleY:1,
          delay:0.3,
          ease: Back.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        frontChimneyRed, 0.7,
        {
          scaleY:0,
          transformOrigin:"bottom"
        },
        {
          scaleY:1,
          delay:1.5,
          ease: Back.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        furtherChimneyRed, 0.7,
        {
          scaleY:0,
          transformOrigin:"bottom"
        },
        {
          scaleY:1,
          delay:1.7,
          ease: Back.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        craneRed, 1,
        {
          y:-300,
          transformOrigin:"center"
        },
        {
          y:0,
          scaleY:1,
          delay:1.2,
          ease: Bounce.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        RedBuildingsTri, 1,
        {
          scale:0,
          transformOrigin:"center bottom"
        },
        {
          scale:1,
          ease: Back.easeOut,
          delay:0.5
        }
      );

  new TimelineMax().staggerFromTo(
        watterTankRed, 1,
        {
          scale:0,
          transformOrigin:"center bottom"
        },
        {
          scale:1,
          ease: Back.easeOut,
          delay:0.25
        }
      );

  new TimelineMax().staggerFromTo(
        GreenTallerBuilding, 1,
        {
          scale:0,
          transformOrigin:"right bottom"
        },
        {
          scale:1,
          ease: Back.easeOut,
          delay:0.5
        }
      );

  new TimelineMax().staggerFromTo(
        sinGreen, 1,
        {
          scaleY:0
        },
        {
          scaleY:1,
          ease: Bounce.easeOut,
        }
      );


  new TimelineMax().staggerFromTo(
        BicycleGreen, 1,
        {
          scaleX:-1,
          x:500
        },
        {
          x:150,
          delay:0.75,
          ease: Power2.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        widestRedBuilding, 1,
        {
          x:-200,
        },
        {
          x:0,
          delay:1,
          ease: Power2.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        windows, 1,
        {
          x:-200,
        },
        {
          x:0,
          delay:1.25,
          ease: Power2.easeOut,
        }
  );


  for (var i = 0; i < 16; i++) {
    new TimelineMax().staggerFromTo(
          document.getElementsByClassName('AntennaGreen'+ i), 1,
          {
            y:-200,
          },
          {
            y:0,
            delay:0.5 + i*.1,
            ease: Power2.easeOut,
          }
    );
  }


  new TimelineMax().staggerFromTo(
        solarPanel, 1,
        {
          scaleY:0,
          transformOrigin:"center bottom"
        },
        {
          scaleY:1,
          delay:1.5,
          ease: Bounce.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        windmillGreen, 1,
        {
          scaleY:0,
          transformOrigin:"center bottom"
        },
        {
          scaleY:1,
          delay:1.5,
          ease: Back.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        wings, 1,
        {
          transformOrigin:"122px 162px",
          rotation:0
        },
        {
          rotation:360,
          repeat:-1,
          delay:1.5,
          ease: "linear",
        }
  );

  new TimelineMax().staggerFromTo(
        craneRed, 1,
        {
          y:-300,
          transformOrigin:"center"
        },
        {
          y:0,
          scaleY:1,
          delay:1.2,
          ease: Bounce.easeOut,
        }
  );

  new TimelineMax().staggerFromTo(
        craneRed, 1,
        {
          y:-300,
          transformOrigin:"center"
        },
        {
          y:0,
          scaleY:1,
          delay:1.2,
          ease: Bounce.easeOut,
        }
  );
}


document.addEventListener("DOMContentLoaded",
  function(event){
  factory();
  }
);
