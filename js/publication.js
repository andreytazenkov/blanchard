$(document).ready(function() {
    $(":checked").removeAttr("checked");

    $('.publications-select__header').click(function() {
        $(this).toggleClass('is-active');
        $('.publications-select__list-collapsed input:checkbox:not(:checked)')
            .parent('.publications-select__item')
            .animate({
                height: 'toggle',
                opacity: 'toggle',
            }, function() {
                let displayFlex = $('.publications-select__item').css('display');
                if (displayFlex === 'list-item') {
                    $('.publications-select__item').css('display', 'flex');
                }
            });
    });

    $('.publications-select__input').click(function() {
        if ($(this).is(':checked')) {
            $(this)
                .siblings('.publications-select__span-close')
                .addClass('is-active');
        } else {
            $(this)
                .siblings('.publications-select__span-close')
                .removeClass('is-active');
        }
    });

    $('.publications-select__span-close').click(function() {
        $(this)
            .siblings(this)
            .removeAttr("checked");
        $(this).toggleClass('is-active');
        if (!($('.publications-select__header')).hasClass('is-active')) {
            console.log('yes');
            $('.publications-select__list-collapsed input:checkbox:not(:checked)')
                .parent('.publications-select__item')
                .animate({
                    height: 'hide',
                    opacity: 'hide',
                });
        }
    });
});
