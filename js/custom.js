$(function () {

    console.log(1)
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();
        }
    });



    $(window).on('resize', function () {
        let w = $(window).width();


        console.log(w)

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style');
        }

    })
})

$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_chak_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            nextEl: '.main_chak .arrows .next',
            prevEl: '.main_chak .arrows .prev',
        },

    });

});


$(function () {
    const MNS2 = new Swiper('.main_news_slide2')
})

$(function () {
    $('.main_content .best_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_content .best_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_content .best_tab_content .con').removeClass('on');
        $('.main_content .best_tab_content .con').eq(idx).addClass('on')
    })
});




