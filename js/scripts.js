$(document).ready(function() {

    $('.slider').slick({
        prevArrow: `<a href="#" class="slider__arrow slider__arrow--left">
            <svg class="inline-svg-icon" width="25px" height="25px">
            <use xlink:href="#arrow"></use>
            </svg>   
            </a>`,
        nextArrow: `<a href="#" class="slider__arrow slider__arrow--right">
            <svg class="inline-svg-icon" width="25px" height="25px">
            <use xlink:href="#arrow"></use>
            </svg>            
            </a>`,
        dots: true,
        dotsClass: 'slider__dots'
        // arrows: false,
        // autoplay: true,
        // infinite: true,
        // speed: 2000,
        // fade: true
    });

});

