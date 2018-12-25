$(window).on('load', () => {
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
});

let quotes = {
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

function changeText() {
    $('.quote').fadeOut(200).text(`${quotes[$('.nav_indicator-active > img').attr('alt')].quote}`).fadeIn(200);
    $('.quote_author__name').fadeOut(200).text(`${quotes[$('.nav_indicator-active > img').attr('alt')].name} ${quotes[$('.nav_indicator-active > img').attr('alt')].lName}`).fadeIn(200);
    $('.quote_author__spec').fadeOut(200).text(`${quotes[$('.nav_indicator-active > img').attr('alt')].prof}`).fadeIn(200);
}

function changePhoto(elem) {
    $('.nav_indicator.nav_indicator-active > img').clone().addClass('photo-active').appendTo('.quote_author__photo');
    $(elem).slideUp().prev().detach();
}

// document.addEventListener('DOMContentLoaded', () => {
//     let carousel_content = document.getElementsByClassName('nav_indicator'),
//         ctrl_left = document.getElementsByClassName('carousel__control_btn-left'),
//         ctrl_right = document.getElementsByClassName('carousel__control_btn-right'),
//         active_image = document.getElementsByClassName('nav_indicator-active');    

//     active_image = active_image[0];

//     function slideLeft() {
//         if (active_image !== carousel_content[0]) {
//             active_image.classList.remove('nav_indicator-active');
//             active_image.classList.add('nav_indicator-inactive');
//             active_image = active_image.previousSibling.previousSibling;
//             active_image.classList.remove('nav_indicator-inactive');
//             active_image.classList.add('nav_indicator-active');
//         } else {
//             active_image.classList.remove('nav_indicator-active');
//             active_image.classList.add('nav_indicator-inactive');
//             active_image = carousel_content[carousel_content.length - 1];
//             active_image.classList.remove('nav_indicator-inactive');
//             active_image.classList.add('nav_indicator-active');
//         }
//     }   

//     function slideRight() {
//         if (active_image !== carousel_content[carousel_content.length - 1]) {
//             active_image.classList.remove('nav_indicator-active');
//             active_image.classList.add('nav_indicator-inactive');
//             active_image = active_image.nextSibling.nextSibling;
//             active_image.classList.remove('nav_indicator-inactive');
//             active_image.classList.add('nav_indicator-active');
//         } else {
//             active_image.classList.remove('nav_indicator-active');
//             active_image.classList.add('nav_indicator-inactive');
//             active_image = carousel_content[0];
//             active_image.classList.remove('nav_indicator-inactive');
//             active_image.classList.add('nav_indicator-active');
//         }
//     } 

//     ctrl_left[0].addEventListener('click', slideLeft);
//     ctrl_right[0].addEventListener('click', slideRight);
// });