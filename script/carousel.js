  

document.addEventListener('DOMContentLoaded', () => {
    let carousel_content = document.getElementsByClassName('nav_indicator'),
        ctrl_left = document.getElementsByClassName('carousel__control_btn-left'),
        ctrl_right = document.getElementsByClassName('carousel__control_btn-right'),
        active_image = document.getElementsByClassName('nav_indicator-active');    

    active_image = active_image[0];

    function slideLeft() {
        if (active_image !== carousel_content[0]) {
            active_image.classList.remove('nav_indicator-active');
            active_image.classList.add('nav_indicator-inactive');
            active_image = active_image.previousSibling.previousSibling;
            active_image.classList.remove('nav_indicator-inactive');
            active_image.classList.add('nav_indicator-active');
        } else {
            active_image.classList.remove('nav_indicator-active');
            active_image.classList.add('nav_indicator-inactive');
            active_image = carousel_content[carousel_content.length - 1];
            active_image.classList.remove('nav_indicator-inactive');
            active_image.classList.add('nav_indicator-active');
        }
    }   

    function slideRight() {
        if (active_image !== carousel_content[carousel_content.length - 1]) {
            active_image.classList.remove('nav_indicator-active');
            active_image.classList.add('nav_indicator-inactive');
            active_image = active_image.nextSibling.nextSibling;
            active_image.classList.remove('nav_indicator-inactive');
            active_image.classList.add('nav_indicator-active');
        } else {
            active_image.classList.remove('nav_indicator-active');
            active_image.classList.add('nav_indicator-inactive');
            active_image = carousel_content[0];
            active_image.classList.remove('nav_indicator-inactive');
            active_image.classList.add('nav_indicator-active');
        }
    } 

    ctrl_left[0].addEventListener('click', slideLeft);
    ctrl_right[0].addEventListener('click', slideRight);
});