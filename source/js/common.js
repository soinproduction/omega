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
            dots: true
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
            arrows:false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows:false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true,
            arrows:false,
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
    dotsClass: "card-slider__dots",
    mobileFirst: true,
    responsive: [
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




});






























