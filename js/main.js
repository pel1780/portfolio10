$(function () {
    $('.header .gnb').on('mouseover', function () {
        $('.header').addClass('on');
    });
    $('.header .gnb').on('mouseleave', function () {
        $('.header').removeClass('on');
        if ($(window).width() < 769) {
            $('.header').addClass('on');
        }
    });

    $('.header button').on('click', function () {
        var sct = $(window).scrollTop();
        $('.header .gnb').toggleClass('on');
        $(this).toggleClass('on');
        if ($('.header button').hasClass('on')) {
            $('.header').addClass('bg')
        }
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            $(this).parent().siblings().find('a').next().removeClass('on');
            $(this).next().toggleClass('on');
        }
    });

    $('.header button').on('scroll wheel touchmove', function () {
        if ($(this).hasClass('on')) {
            return false;
        }
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct >= 100) {
            $('.header').addClass('bg')
        } else {
            $('.header').removeClass('bg')
        }
    });

    $('#visual_video').YTPlayer({
        videoURL: 'https://www.youtube.com/embed/xIBjDGPDPw0',
        containment: '.video_case',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,

        quality: 'highres',
    });

    $('.article_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.article_slide').on('afterChange', function (e, s, c) {
        $('.slide_dots>li').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.slide_dots>li').on('mouseover', function () {
        var slide_list_number = $(this).index();
        $('.article_slide').slick('slickGoTo', slide_list_number);
    });

    $('.news_slide').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ],
    });

    $('.news_prev').on('click', function () {
        $('.news_slide').slick('slickPrev');
    });
    $('.news_next').on('click', function () {
        $('.news_slide').slick('slickNext');
    });

    $('.sns_slide').slick({
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ],
    });

    $('.sns_prev').on('click', function () {
        $('.sns_slide').slick('slickPrev');
    });
    $('.sns_next').on('click', function () {
        $('.sns_slide').slick('slickNext');
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 1000 ? $('.toTop').addClass('on') : $('.toTop').removeClass('on');
    })


    $('.toTop').on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 1000);
    });
    // main script///////////////

    (function () {
        var num = 2;
        $('.aside_menu ul>li').eq(num - 1).addClass('on');
    })
})