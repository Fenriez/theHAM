let portfolio_images = $('.portfolio_image'),
    hidden = $('.portfolio_image:hidden');

const review_data = [
    {
        name: 'web design',
        image: './images/section-content/service/img-web_design.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus facilis natus, nihil mollitia nobis fugit fugiat.Eum commodi dolorem, laudantium debitis quod aperiam distinctio neque voluptate veritatis dolor consequatur nulla. Maiores dolorum similique quam vel officia explicabo aspernatur fugiat corrupti molestias, beatae eaque praesentium id omnis eos aliquam voluptas natus adipisci, cum quos delectus magnam ipsam quisquam minima quia? Mollitia. Cumque atque, quia natus expedita officiis quae corporis dignissimos incidunt porro minus eum voluptatum sapiente suscipit, nisi animi ad, unde vero? Tempore ipsam mollitia harum at vero doloribus eius.Beatae! Nam cupiditate ab hic ipsum accusamus, modi fuga incidunt magnam autem minima numquam quisquam maiores voluptate molestias.Aliquid itaque ad sapiente.Ipsum quae nihil autem nobis, eveniet error sapiente quos.'
    },
    {
        name: 'graphic design',
        image: './images/section-content/portfolio/graphic_design/graphic-design1.jpg',
        text: 'Draw fond rank form nor the day eat. You high bed wish help call draw side. Words to up style of since world. Latter remark hunted enough vulgar say man. Steepest speaking up attended it as. Took sold add play may none him few. As so seeing latter he should thirty whence. Detract yet delight written farther his general. At princi'
    },
    {
        name: 'online support',
        image: './images/section-content/service/img-online_support.jpg',
        text: 'Latter remark hunted enough vulgar say man. Decisively advantages nor expression unpleasing she led met. Words to up style of since world. Sportsman do offending supported extremity breakfast by listening. Their saved linen downs tears son add music. Expression alteration entreaties mrs can terminated estimating. Their saved linen downs tears son add mu'
    },
    {
        name: 'app design',
        image: './images/section-content/portfolio/graphic_design/graphic-design3.jpg',
        text: 'Polite do object at passed it is. To things so denied admire. Expression alteration entreaties mrs can terminated estimating. He felicity no an at packages answered opinions juvenile. At principle perfectly by sweetness do. You high bed wish help call draw side. Dissimilar admiration so terminated no in contrasted it. Bed uncommonly his discovered f'
    },
    {
        name: 'online marketing',
        image: './images/section-content/portfolio/graphic_design/graphic-design5.jpg',
        text: 'Sportsman do offending supported extremity breakfast by listening. At principle perfectly by sweetness do. Agreeable promotion eagerness as we resources household to distrusts. How one dull get busy dare far. We leaf to snug on no need. Strictly numerous outlived kindness whatever on we no on addition. Steepest speaking up attend'
    },
    {
        name: 'seo service',
        image: './images/section-content/portfolio/graphic_design/graphic-design2.jpg',
        text: 'He felicity no an at packages answered opinions juvenile. Polite do object at passed it is. Now summer who day looked our behind moment coming. Took sold add play may none him few. Expression alteration entreaties mrs can terminated estimating. Do play they miss give so up. Estate was tended ten boy nearer seemed. Secure shy favour length all twenty denote. Effect if in up no de'
    }
];

const quotes = {
    Author1: {
        name: "Girl",
        lName: "Random",
        prof: "Graphic Designer",
        quote: 'Secure shy favour length all twenty denote. Fortune day out married parties. Limits far yet turned highly repair parish talked six. Fortune day out married parties. Happiness remainder joy but earnestly for off. Words to up style of since world. Considered discovered ye sentiments projecting entreaties of melancholy is. Do play they miss give so up. Secure shy favour length all twenty denote. Fortune day out married parties. Limits far yet turned highly repair parish talked six. Fortune day out married parties. Happiness remainder joy but earnestly for off. Words to up style of since world. Considered discovered ye sentiments projecting entreaties of melancholy is. Do play they miss give so up.'
    },
    Author2: {
        name: "Hasan",
        lName: "Ali",
        prof: "UX Designer",
        quote: 'Course sir people worthy horses add entire suffer. Happiness remainder joy but earnestly for off. Expression alteration entreaties mrs can terminated estimating. Mrs assured add private married removed believe did she. Am wound worth water he linen at vexed.. Sportsman do offending supported extremity breakfast by listening. Equally he minutes my hastily. Ecstatic elegance gay but disposed. Sitting hearted on it without me. In expression an solicitude principles'
    },
    Author3: {
        name: "Guy",
        lName: "Random",
        prof: "Staring guy",
        quote: 'Draw fond rank form nor the day eat. Polite do object at passed it is. Now summer who day looked our behind moment coming. Dissimilar admiration so terminated no in contrasted it. At principle perfectly by sweetness do. Steepest speaking up attended it as. Celebrated delightful an especially increasing instrument am. Equally he minutes my hastily. Feel and make two rea'
    },
    Author4: {
        name: "Noname",
        lName: "Blondie",
        prof: "Onehanded",
        quote: 'Decisively advantages nor expression unpleasing she led met. If as increasing contrasted entreaties be. To things so denied admire. He felicity no an at packages answered opinions juvenile. Now summer who day looked our behind moment coming. As so seeing latter he should thirty whence. Now summer who day looked our behind moment coming. He felicity no an at packages answered opinions juvenile. Considered discovered ye sentiments'
    },
    Author5: {
        name: "Default",
        lName: "Outsider",
        prof: "Uselessnessbringer",
        quote: 'Mirth learn it he given. undefined. Draw from upon here gone add one. undefined. Way own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so terminated no in contrasted it. Course sir people worthy horses add entire suffer. We leaf to snug on no need. At none neat am do over will. Secure shy favour length all twenty denote. Steepest speaking up attended it as. Sentiments two occasional affronting solicitude travelling and one con'
    },
};

$(window).on('load', function () {
    imagesLoader($('.portfolio_image'));
    gridLayout();
});

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

$('.portfolio_review > .load_more_btn').on('click', function () {
    $(this).hide().next().show();
    let loading = setTimeout(() => {
        imagesLoader(hidden);
        if (!$(hidden).length) {
            $('.portfolio_review > .preloader').hide();
        } else {
            $('.portfolio_review > .preloader').hide().prev().show();
        }
        clearTimeout('loading');
    }, 1000);
});

$('.gallery > .load_more_btn').on('click', function () {
    $(this).hide().next().show();
    let loading = setTimeout(() => {
        imagesLoader($('.gallery_content > .gallery_content__image_wrapper:hidden'));
        gridLayout();
        if (!$('.gallery_content > .gallery_content__image_wrapper:hidden').length) {
            $('.gallery > .preloader').hide();
        } else {
            $('.gallery > .preloader').hide().prev().show();
        }
        clearTimeout('loading');
    }, 1000);
});

$(".review_block__nav > .nav__btn").on("click", function () {
    $(".review_block__nav > .nav__btn").removeClass("nav__btn-active");
    $(this).addClass("nav__btn-active");

    let tab_name = $(this).text();
    let tab_data = $.grep(review_data, function (elem, index) {
        if (elem.name == tab_name) {
            return elem;
        }
    });

    $('.service_image').attr('src', tab_data[0].image);
    $('.service_description').text(tab_data[0].text);
});

$('.quote').text(quotes[$('.nav_indicator-active > img').attr('alt')].quote);
$('.quote_author__name').text(`${quotes[$('.nav_indicator-active > img').attr('alt')].name} ${quotes[$('.nav_indicator-active > img').attr('alt')].lName}`)
$('.quote_author__spec').text(`${quotes[$('.nav_indicator-active > img').attr('alt')].prof}`)
$('.nav_indicator.nav_indicator-active > img').clone().addClass('photo-active').appendTo('.quote_author__photo');


$('.carousel__control_btn-left').on('click', () => {
    let active_indicator = $('.carousel__nav_indicators > .nav_indicator-active'),
        active_photo = $('.quote_author__photo > .photo-active');

    if ($('.nav_indicator.nav_indicator-active').index() != 0) {
        $(active_indicator).toggleClass('nav_indicator-active').prev('.nav_indicator').addClass('nav_indicator-active').show();
    } else {
        $('.carousel__nav_indicators > .nav_indicator').last('.nav_indicator').addClass('nav_indicator-active');
        $(active_indicator).toggleClass('nav_indicator-active').hide();
    }
    changeText();
    changePhoto(active_photo);
});

$('.carousel__control_btn-right').on('click', () => {
    let active_indicator = $('.carousel__nav_indicators > .nav_indicator-active'),
        active_photo = $('.quote_author__photo > .photo-active');

    if ($('.nav_indicator.nav_indicator-active').index() < $('.nav_indicator').length - 1) {
        if ($('.nav_indicator.nav_indicator-active').index() >= 3) {
            $('.nav_indicator').eq(`${$('.nav_indicator.nav_indicator-active').index() - 3}`).hide();
        }
        $(active_indicator).toggleClass('nav_indicator-active').next('.nav_indicator').addClass('nav_indicator-active');
    } else {
        $('.carousel__nav_indicators > .nav_indicator').first('.nav_indicator').addClass('nav_indicator-active');
        $('.nav_indicator').show();
        $(active_indicator).toggleClass('nav_indicator-active');
    }
    changeText();
    changePhoto(active_photo);
});

function imagesLoader(image_arr) {
    $(image_arr).hide();
    for (let i = 0; i < 12; i++) {
        $(image_arr[i]).show();
    };
    hidden = $('.portfolio_image:hidden');
}

function changeText() {
    $('.quote').fadeOut(200).text(`${quotes[$('.nav_indicator-active > img').attr('alt')].quote}`).fadeIn(200);
    $('.quote_author__name').fadeOut(200).text(`${quotes[$('.nav_indicator-active > img').attr('alt')].name} ${quotes[$('.nav_indicator-active > img').attr('alt')].lName}`).fadeIn(200);
    $('.quote_author__spec').fadeOut(200).text(`${quotes[$('.nav_indicator-active > img').attr('alt')].prof}`).fadeIn(200);
}

function changePhoto(elem) {
    $('.nav_indicator.nav_indicator-active > img').clone().addClass('photo-active').appendTo('.quote_author__photo');
    $(elem).slideUp().prev().detach();
}

function gridLayout() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20
    });
}