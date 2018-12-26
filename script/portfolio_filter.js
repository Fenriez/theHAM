$(window).on('load', function() {
    portfolioImagesLoader();

    $('.portfolio_review__nav > .nav__btn').on('click', function () {
        let data_group = $(this).text();
        $('.portfolio_review__nav > .filtered').toggleClass('filtered');
        $(this).toggleClass('filtered');
        $.each($('.portfolio_image'), function (index, elem) {
            if (data_group !== 'all') {
                if ($(elem).data('group') !== data_group) {
                    $(elem).hide();
                } else {
                    $(elem).show();
                }
            } else {                
                portfolioImagesLoader();
            };
        });
        console.log($('.portfolio_image:hidden').data('group') == data_group);
        // if ($('.portfolio_image:hidden').length != 0 && $('.portfolio_image:hidden').data('group') == data_group || data_group == 'all') {
        //     console.log(true);
        // } 
    });

    $('.load_more_btn').on('click', function() {
        $(this).hide().next().show();
        let loading = setTimeout(() => {
            $('.preloader').hide().prev().show();
            clearTimeout('loading');
        }, 4000);
    });
});

let portfolio_images = $('.portfolio_image');

function portfolioImagesLoader() {
    $(portfolio_images).hide();
    for (let i = 0; i < 12; i++) {
        $(portfolio_images[i]).show();
    };
}