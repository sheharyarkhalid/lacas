$(document).ready(function () {
  $(".header_search_btn").click(function(){
    $(".search_input").toggleClass("active");
    $(".search_input[type='text']").focus();
  });

  $(".home7_slider").on(
    "init afterChange",
    function (event, slick, currentSlide) {
      // Get the current slide index (if init is fired, use 0 as default)
      var slideIndex = currentSlide !== undefined ? currentSlide : 0;
     // console.log("slide", slideIndex);
      // Get the current slide element
      var currentSlideElement = $(".home7_slider .home7_single_list").eq(
        slideIndex
      );

      // Get data attributes from the current slide
      var title = currentSlideElement.data("heading");
      var detail1 = currentSlideElement.data("detail1");
      var detail2 = currentSlideElement.data("detail2");
      var imgSrc = currentSlideElement.find("img").attr("src");

      // Update the content of the separate box
      $(".home7_current_data .home7_current_title").text(title);
      $(".home7_current_data .home7_current_detail1").text(detail1);
      $(".home7_current_data .home7_current_detail2").text(detail2);
      // $('.home7_current_data .slide-description').text(description);
      $(".home7_current_data .home7_current_img").attr("src", imgSrc);

      // Hide the current slide in the Slick slider
      //  $('.home7_slider .slick-slide').eq(slideIndex).addClass('slick-hide');

      // Optionally, if you want to show all slides except the current one:
      // $('.home7_slider .slick-slide').not(':eq(' + slideIndex + ')').removeClass('slick-hide');
    }
  );

  // Initialize the slick slider
  $(".home7_slider").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //home banner slider script
  $(".home_Banner_slider").slick({
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: "home_banner_dots",
  });

  // Wrap the dots in the specified containers
  $(".home_banner_dots").wrap("<div class='home_banner_dots_wrapper'></div>");
  $(".home_banner_dots").wrap("<div class='custom_container'></div>");

  //slider for home second banner

  // Array of custom text for each dot
  var dotLabels = [
    "Excellence In Education",
    "Top University Admissions",
    "Highly Qualified Faculty",
    "Campus life at LACAS",
  ];

  // Initialize Slick slider
  $(".home_sec3_slider").slick({
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: "home_sec3_dots",
    // Custom paging function to add text with each dot
    customPaging: function (slider, i) {
      return (
        '<span class="dot-label">' +
        dotLabels[i] +
        '</span><button type="button" role="tab">' +
        (i + 1) +
        "</button>"
      );
    },
  });

  $(".home_sec3_dots").wrap("<div class='home_sec3_dots_wrapper'></div>");
  $(".home_sec3_dots").wrap("<div class='home_sec3_dots_container'></div>");

  $(".insta_listing_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  });
});

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,TextPlugin,SlowMo);
  // gsap code here!
  gsap.to(".scroll-image", {
    y: -100, // Moves image up by 100px
    duration: 1, // Slower duration for smooth effect
    repeat: -1, // Infinite loop
    yoyo: true, // Moves back down after going up
    ease: "none", // Linear movement for smoothness
    scrollTrigger: {
      trigger: ".scroll-image",
      start: "top bottom", // Starts when image enters viewport
      end: "bottom top",   // Ends when image exits viewport
      scrub: 1, // Sync animation with scroll, making it smooth
    }
  });

 });
