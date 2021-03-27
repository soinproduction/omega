$(function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("accordion__active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    $(".header-slider").on("init", function(event, slick){
      $(".count").text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
    });

    $(".header-slider").on("afterChange", function(event, slick, currentSlide){
        $(".count").text(parseInt(slick.currentSlide + 1) + '/' + slick.slideCount);
    });

    $('.header-slider').slick({
      accessibility: true,
      dots: false,
      centerMode: true,
      centerPadding: "0",
      adaptiveHeight: true,
      arrows: true,
      prevArrow: '<button class="slick__slider-left slick__slider__btn"><img src="img/slider-left.svg" alt="left"></button>',
      nextArrow: '<button class="slick__slider-right slick__slider__btn"><img src="img/slider-right.svg" alt="right"></button>',
      responsive: [
        {
          breakpoint: 1480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
            dots: false,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows:false,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            centerPadding: "0"
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows:true,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0"
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            arrows:true,
            prevArrow: '<button class="card-slider-left card-slider__btn"><img src="img/slider-left.svg" alt="left"></button>',
            nextArrow: '<button class="card-slider-right card-slider__btn"><img src="img/slider-right.svg" alt="left"></button>',
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });


  $('.card-slider').slick({
    accessibility: true,
    prevArrow: '<button class="card-slider-left card-slider__btn"><img src="img/slider-left.svg" alt="left"></button>',
    nextArrow: '<button class="card-slider-right card-slider__btn"><img src="img/slider-right.svg" alt="left"></button>',
    dots: true,
    centerMode:true,
    infinite: true,
    adaptiveHeight: true,
    dotsClass: "card-slider__dots",
    responsive: [
      {
        breakpoint: 16000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: true
        }
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "0",
          dots: true,
          centerMode:true,
          arrows: true,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: false,
          dots: true,
          centerMode:true,
          arrows: false,
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.card-slider1').slick({
    accessibility: true,
    prevArrow: '<button class="card-slider-left card-slider__btn"><img src="img/slider-left.svg" alt="left"></button>',
    nextArrow: '<button class="card-slider-right card-slider__btn"><img src="img/slider-right.svg" alt="left"></button>',
    dots: true,
    centerMode:true,
    infinite: true,
    mobileFirst:true,
    dotsClass: "card-slider__dots",
    responsive: [
      {
        breakpoint: 16000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: true
        }
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: true
        }
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          centerMode:true,
          arrows: false,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          settings: "unslick",
          centerMode:true,
          arrows: false,
          centerPadding:"0"
        }
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.product-slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    infinite:false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

    ]
});
$('.product-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slider',
    dots:false,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    adaptiveHeight:true,
    arrows: false,
    draggable: false,
    infinite:false,
    swipe: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});




  $('.input__plus').click(function () {
    var max_qty = Number($(this).parent().find('.input__count').attr('max'));
    var qty = Number($(this).parent().find('.input__count').val());
    if(qty > max_qty){
      qty = max_qty;
    }else if(qty == max_qty){
      qty = max_qty;
    }else{
      qty += 1;
    }
    $(this).parent().find('.input__count').val(qty);
  });



  $('.input__minus').click(function () {
		if ($(this).parent().find('.input__count').val() > 1){
			var price = Number($(this).parent().parent().parent().find('.price').data('price'));
			var plus = Number($(this).parent().find('.input__count').val()) - 1;
			$(this).parent().find('.input__count').val(plus);
		}
  });



$('[data-modal=modal]').on('click', function(){
    $('.overlay, #get__start').fadeIn('slow');
});
$('.modal__close').on('click', function(){
    $('.overlay, #get__start').fadeOut('slow');
});


var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '700',
    width: '100%',
    videoId: '6izdEImRr1c',
    events: {
      //  'onReady': onPlayerReady,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}


$(".hamburger").click(function(event) {
  $(".hamburger").toggleClass('hamburger__active'),
  $(".mobile__menu ").toggleClass('mobile__menu__active');
});

$(".filter-mobile").click(function(event) {
  $(".filter-mobile").toggleClass('.filter-mobile__active'),
  $(".mobile-filter__block").toggleClass('mobile-filter__block__active');
});








});







































