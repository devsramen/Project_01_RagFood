$(function () {
    "use strict";

    //====== Fix NAV Menu js======
    // if ($('.main_menu').offset() != undefined) {
    //     var navoff = $('.main_menu').offset().top;
    //     $(window).scroll(function () {
    //         var scrolling = $(this).scrollTop();

    //         if (scrolling > navoff) {
    //             $('.main_menu').addClass('menu_fix');
    //         } else {
    //             $('.main_menu').removeClass('menu_fix');
    //         }
    //     });
    // }

    //    ================================
    //            HOME PAGE START
    //    ================================

    //======menu Fix NAV Menu js======
    if ($('#navMenu').offset() != undefined) {
        var navoff = $('#navMenu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('#navMenu').addClass('menu_fix');
            } else {
                $('#navMenu').removeClass('menu_fix');
            }
        });
    }

    //=========NICE SELECT=========
    $('.select_js').niceSelect();


    //*=======SCROLL BUTTON=======
    $('.scrool_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 120) {
            $('.scrool_btn').fadeIn();
        } else {
            $('.scrool_btn').fadeOut();
        }
        console.log(scrolling)
    });

    //======wow js=======
    new WOW().init();


    //=======OFFER ITEM SLIDER======
    $('.dO_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        prevArrow: '#dOffer .commonArrowWrapper .arrows .prevArrow',
        nextArrow: '#dOffer .commonArrowWrapper .arrows .nextArrow',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Popular Delicious Foods
    //==========ISOTOPE==============
    var $grid = $('.grid').isotope({});

    $('.menuFilter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    //active class
    $('.menuFilter button').on("click", function (event) {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    //======= OUR TEAM SLIDER======
    $('.oTeam_Slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        prevArrow: '#ourTeam .commonArrowWrapper .arrows .prevArrow',
        nextArrow: '#ourTeam .commonArrowWrapper .arrows .nextArrow',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    //======= DOWNLOAD SLIDER======
    $('.hpDownSliderWrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    //======= TESTIMONIAL SLIDER======
    $('.hpTestimonialItemWrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: '#hpTestimonial .commonArrowWrapper .arrows .prevArrow',
        nextArrow: '#hpTestimonial .commonArrowWrapper .arrows .nextArrow',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    //=======COUNTER JS=======
    $('.counter').countUp();


    //======= BLOG SLIDER======
    $('.hpBlogItemsWrappers').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: '#hpBlog .commonArrowWrapper .arrows .prevArrow',
        nextArrow: '#hpBlog .commonArrowWrapper .arrows .nextArrow',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });


    //    ================================
    //            HOME PAGE END
    //    ================================
    
    //    ================================
    //            MENU_DETAILS PAGE START
    //    ================================
    
     //======= MENU SLIDER======
     $('#menu .allMenuItemImageWrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: '#menu .commonArrowWrapper .arrows .prevArrow',
        nextArrow: '#menu .commonArrowWrapper .arrows .nextArrow',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });











    //    ================================
    //            MENU_DETAILS PAGE END
    //    ================================









    




})
