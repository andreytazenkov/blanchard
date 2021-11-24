// function appendTo() {
//     if ($('.publications-select__label').attr('data-checked') === 'true') {
//         $(this).appendTo('.publications-select__warehouse');
//     }
// };

// $('.publications-select__header').click(function() {
//     $('.publications-select__list-collapsed').slideToggle();
//     sortElement();
// });



// function sortElement() {
//     $('.publications-select__label').each(function() {
//         let a = $(this).attr('data-checked');
//         // console.log(b);
//         if (a == 'true') {
//             // console.log(this);
//             $(this).appendTo('.publications-select__warehouse');
//         }
//     });

//     $(function() {
//         let b = $('.publications-select__list-collapsed').css('display');
//         if (b == 'block') {
//             $('.publications-select__warehouse > label').each(function() {
//                 $(this).appendTo('.publications-select__list-collapsed');
//             });
//         };
//     });
$(document).ready(function() {
    $(":checked").removeAttr("checked");
    // $('.publications-select__header').click(function() {
    //     $(this).toggleClass('is-active');
    //     $('.publications-select__item').slideToggle(function() {
    //         $('.publications-select__item').css('dispaly', 'flex');
    //     });
    // });
    // $('.publications-select__label').click(function() {
    //     if ($(this).attr('data-checked') === 'false') {
    //         $(this).attr('data-checked', 'true');
    //     } else {
    //         $(this).attr('data-checked', 'false');
    //     }
    // });
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
                .siblings('.publications-select__span_close')
                .addClass('is-active');
        } else {
            $(this)
                .siblings('.publications-select__span_close')
                .removeClass('is-active');
        }
    });

    $('.publications-select__span_close').click(function() {
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