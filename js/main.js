$(function () {
    $('.header .gnb').on('mouseover', function () {
        $('.header').addClass('on');
    });
    $('.header .gnb').on('mouseleave', function () {
        $('.header').removeClass('on');
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
})