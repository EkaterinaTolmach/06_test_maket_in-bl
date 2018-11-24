$(document).ready(function() {


    if($('.main-slider__wrap')) {
        $('.main-slider__wrap').slick({
            infinite: true,
            arrows: true,
            appendArrows: $('.main-slider__controls'),
            prevArrow: '<a href="#" class="main-slider__prev inline-block"></a>',
            nextArrow: '<a href="#" class="main-slider__next inline-block"></a>'
        });
    }

    if($('.aside-slider__wrap')) {
        $('.aside-slider__wrap').slick({
            infinite: true,
            dots: true,
            arrows: false,
            // autoplay: true
        });
    }

    (function($) {
        $(function() {

            $('select').styler();

        });
    })(jQuery);

});