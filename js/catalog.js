    $('.catalog-accordion-list__item').click(function() {
        let dataName = $(this).attr('data-name');
        $('.catalog-artists__box').each(function() {
            $(this).css('display', 'none');
        });
        $('.catalog-artists__box').each(function() {
            let idArts = $(this).attr('id');
            if (dataName === idArts) {
                $(this).fadeIn(600, function() {
                    $(this).css('display', 'flex');
                });
            }
        });
        if (dataName === undefined) {
            $('#noname').fadeIn(600, function() {
                $('#noname').css('display', 'flex');
            });
        }
    });

    $('.catalog-accordion-list__item-href').click(function() {
        $('.catalog-accordion-list__item-href').each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
