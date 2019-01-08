$(window).on('load', function () {
    let portfolio_images = $('.portfolio_image'),
        hidden = $('.portfolio_image:hidden');

    function imagesLoader(image_arr) {
        $(image_arr).hide();
        console.log(hidden);
        for (let i = 0; i < 12; i++) {
            $(image_arr[i]).show();
        };
        // console.log($(image_arr));
        hidden = $('.portfolio_image:hidden');
        console.log(hidden);

    }
    imagesLoader($('.portfolio_image'));

    $('.portfolio_review__nav > .nav__btn').on('click', function () {
        let data_group = $(this).text(),
            buffer = [];

        $('.portfolio_review__nav > .filtered').toggleClass('filtered');
        $(this).toggleClass('filtered');
        $.each($('.portfolio_image'), function (index, elem) {
            if (data_group !== 'all') {
                if ($(elem).data('group') !== data_group) {
                    $(elem).hide();
                } else {
                    buffer.push($(elem));
                }
            } else {
                imagesLoader($('.portfolio_image'));
            };
        });

        imagesLoader(buffer);

        hidden = $(`.portfolio_image[data-group="${data_group}"]:hidden`);
        console.log(hidden.length);
        if (data_group !== 'all') {
            if (!hidden.length) {
                $('.portfolio_review > .load_more_btn').hide();
            } else {
                $('.portfolio_review > .load_more_btn').show();
            }
        } else if (!$('.portfolio_image:hidden')) {
            $('.portfolio_review > .load_more_btn').hide();
        } else {
            $('.portfolio_review > .load_more_btn').show();
        }
    });

    $('.load_more_btn').on('click', function () {
        $(this).hide().next().show();
        let loading = setTimeout(() => {
            imagesLoader(hidden);
            console.log(hidden.length);
            if (!$(hidden).length) {
                $('.preloader').hide();
            } else {
                $('.preloader').hide().prev().show();
            }
            clearTimeout('loading');
        }, 1000);
    });
});