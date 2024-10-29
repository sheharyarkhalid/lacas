$(document).ready(function () {
 
  $(".header_search_btn").click(function(){
    $(".search_input").toggleClass("active");
    $(".header_search_btn").toggleClass("active");
    $(".search_input[type='text']").focus();
  });

  $(".home7_slider").on(
    "init afterChange",
    function (event, slick, currentSlide) {
        // Get the current slide index (default to 0 if currentSlide is undefined)
    var currentSlideIndex = currentSlide !== undefined ? currentSlide : 0;
    
    // Get the total number of slides
    var totalSlides = slick.slideCount;

    // Calculate the previous slide index
    // Wrap around to the last slide if the current slide is the first one
    var prevSlideIndex = (currentSlideIndex - 2 + totalSlides) % totalSlides;

    // Get the current slide element
    var currentSlideElement = $(".home7_slider .home7_single_list").eq(currentSlideIndex);

    // Get the previous slide element
    var previousSlideElement = $(".home7_slider .home7_single_list").eq(prevSlideIndex);

      // Get data attributes from the current slide
      var title = previousSlideElement.data("heading");
      var detail1 = previousSlideElement.data("detail1");
      var detail2 = previousSlideElement.data("detail2");
      var imgSrc = previousSlideElement.find("img").attr("src");
console.log('title',title);
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
    autoplay: false,
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

  // $(".about2_slider").slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   dots: false,
  //   arrows: false,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         centerPadding: "40px",
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         centerPadding: "40px",
  //       },
  //     },
  //     {
  //       breakpoint: 540,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         centerPadding: "40px",
  //       },
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         centerPadding: "40px",
  //       },
  //     },
  //   ],
  // });

   $(".about2_slider").slick({
     slidesToShow:3,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
     dots: false,
    arrows: true,
    appendArrows: $('.about_sec2_arrow'),
    nextArrow: '<a class="about1_arrow"><i class="fal fa-arrow-right"></i></a>',
    prevArrow: '<a class="about1_arrow"><i class="fal fa-arrow-left"></i></a>',
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow:2,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
           dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
                dots: false,
             arrows: true,
         },
       },
       {
         breakpoint: 540,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 1500,
               dots: false,
           arrows: true,
         },
       },
       {
         breakpoint: 400,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: false,
         autoplaySpeed: 1500,
                dots: false,
            arrows: true,
         },
       },
     ],
   });


  $(".about6_slider").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:1000,
   centerMode: true,
centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  });

  $(".about7_slider").slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

});

 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,TextPlugin,SlowMo);

	const home5_first_anim = document.querySelector('.home5_first_anim');
  const home5_first_anim_box = home5_first_anim.querySelectorAll('.home5_first_anim_box');
  const home5_first_anim_single = home5_first_anim.querySelectorAll('.home5_first_anim_img');

  let first = gsap.timeline({
  	paused: true,
    scrollTrigger: {
    	trigger: home5_first_anim,
      start: 'top 90%',
      end: 'bottom 10%',
    	scrub: 1
    }
  })
  .from(home5_first_anim_box, {
  	yPercent: "random(10, 30, 1)",
  })
  .from(home5_first_anim_single, {
  	yPercent: (i)=> i ? 15 : -15
  }, '<')
  

	const home5_sec_anim = document.querySelector('.home5_sec_anim');
  const home5_sec_anim_box = home5_sec_anim.querySelectorAll('.home5_sec_anim_box');
  const home5_sec_anim_single = home5_sec_anim.querySelectorAll('.home5_sec_anim_img');

  let sec = gsap.timeline({
  	paused: true,
    scrollTrigger: {
    	trigger: home5_sec_anim,
      start: 'top 90%',
      end: 'bottom 10%',
    	scrub: 1
    }
  })
  .from(home5_sec_anim_box, {
  	yPercent: "random(3, 10, 1)",
  })
  .from(home5_sec_anim_single, {
  	yPercent: (i)=> i ? 15 : -15
  }, '<')




	const home5_third_anim = document.querySelector('.home5_third_anim');
  const home5_third_anim_box = home5_third_anim.querySelectorAll('.home5_third_anim_box');
  const home5_third_anim_single = home5_third_anim.querySelectorAll('.home5_third_anim_img');

  let third = gsap.timeline({
  	paused: true,
    scrollTrigger: {
    	trigger: home5_third_anim,
      start: 'top 90%',
      end: 'bottom 10%',
    	scrub: 1
    }
  })
  .from(home5_third_anim_box, {
  	yPercent: "random(3, 10, 1)",
  })
  .from(home5_third_anim_single, {
  	yPercent: (i)=> i ? 15 : -15
  }, '<')


  const home5_fourth_anim = document.querySelector('.home5_fourth_anim');
  const home5_fourth_anim_box = home5_fourth_anim.querySelectorAll('.home5_fourth_anim_box');
  const home5_fourth_anim_single = home5_fourth_anim.querySelectorAll('.home5_fourth_anim_img');
 
  let fourth = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: home5_fourth_anim,
      start: 'top 90%',
      end: 'bottom 10%',
      scrub: 1
    }
  })
  .from(home5_fourth_anim_box, {
    yPercent: "random(3, 10, 1)",
  })
  .from(home5_fourth_anim_single, {
    yPercent: (i)=> i ? 15 : -15
  }, '<')
 

 });


