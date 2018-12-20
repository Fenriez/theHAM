$('.portfolio_review__nav > .nav__btn').on('click', function () {
    let data_group = $(this).text();
    $.each($('.portfolio_image'), function (index, elem) {
        if (data_group !== 'all') {
            if ($(elem).data('group') !== data_group) {
                $(elem).css('display', 'none');
            } else {
                $(elem).css('display', 'block');
            }
        } else {
            console.log(elem);
            $(elem).css('display', 'block');
        };
    });
});