$(function () {

    $('.menu__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.menu__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.menu__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('.header__btn').on('click',function() {
        $('.header__nav ul').slideToggle();
    })
})