$(window).on('load', () => {
    $('.carousel__control_btn-left').on('click', () => {
        let active_indicator = $('.carousel__nav_indicators > .nav_indicator-active');
        if ($('.nav_indicator.nav_indicator-active').index() != 0) {
            $(active_indicator).prev('.nav_indicator').addClass('nav_indicator-active');
        } else {
            $('.carousel__nav_indicators > .nav_indicator').last('.nav_indicator').addClass('nav_indicator-active');
        }
        $(active_indicator).toggleClass('nav_indicator-active');  
    });
    $('.carousel__control_btn-right').on('click', () => {
        let active_indicator = $('.carousel__nav_indicators > .nav_indicator-active'),
            active_photo = $('.quote_author__photo > .photo-active');
        let a = $('.nav_indicator.nav_indicator-active').index();
        if ($('.nav_indicator.nav_indicator-active').index() != $('.nav_indicator').length - 1) {
            $(active_indicator).next('.nav_indicator').addClass('nav_indicator-active');
            active_photo.slideUp().toggleClass('photo-active');
            active_photo.next('img').toggleClass('photo-active');
        } else {
            $('.carousel__nav_indicators > .nav_indicator').first('.nav_indicator').addClass('nav_indicator-active');
            $('.quote_author__photo img').last().toggleClass('photo-active');
            $('.quote_author__photo img').slideDown();
            $('.quote_author__photo img').first().toggleClass('photo-active');
        }
        $(active_indicator).toggleClass('nav_indicator-active');  
    });
});

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