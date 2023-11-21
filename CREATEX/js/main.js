$(function () {

    var mixer = mixitup('.directions__list');

    $('.direcrions__filter-btn').on('click', function () {
        $('.direcrions__filter-btn').removeClass('direcrions__filter-btn--active')
        $(this).addClass('direcrions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        draggable: false,
        appendArrows: $('.team__slider-arrows')
    })
    
    $('.team__slider-prev').on('click', function (e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')({  
        })
    })
    $('.team__slider-next').on('click', function (e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')({  
        })
    })


})