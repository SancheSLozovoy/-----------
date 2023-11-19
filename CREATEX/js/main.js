$(function () {

    var mixer = mixitup('.directions__list');

    $('.direcrions__filter-btn').on('click', function () {
        $('.direcrions__filter-btn').removeClass('direcrions__filter-btn--active')
        $(this).addClass('direcrions__filter-btn--active')
    })

})