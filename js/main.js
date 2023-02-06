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

})