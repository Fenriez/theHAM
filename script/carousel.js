  

document.addEventListener('DOMContentLoaded', () => {
    let carousel_content = document.getElementsByClassName('carousel__content_image'),
        ctrl_left = document.getElementsByClassName('carousel__control_btn-left'),
        ctrl_right = document.getElementsByClassName('carousel__control_btn-right'),
        active_image = document.getElementsByClassName('carousel__content_image-active');    

    active_image = active_image[0];

    function slideLeft() {
        if (active_image !== carousel_content[0]) {
            active_image.classList.remove('carousel__content_image-active');
            active_image.classList.add('carousel__content_image-inactive');
            active_image = active_image.previousSibling.previousSibling;
            active_image.classList.remove('carousel__content_image-inactive');
            active_image.classList.add('carousel__content_image-active');
        } else {
            active_image.classList.remove('carousel__content_image-active');
            active_image.classList.add('carousel__content_image-inactive');
            active_image = carousel_content[carousel_content.length - 1];
            active_image.classList.remove('carousel__content_image-inactive');
            active_image.classList.add('carousel__content_image-active');
        }
    }   

    function slideRight() {
        if (active_image !== carousel_content[carousel_content.length - 1]) {
            active_image.classList.remove('carousel__content_image-active');
            active_image.classList.add('carousel__content_image-inactive');
            active_image = active_image.nextSibling.nextSibling;
            active_image.classList.remove('carousel__content_image-inactive');
            active_image.classList.add('carousel__content_image-active');
        } else {
            active_image.classList.remove('carousel__content_image-active');
            active_image.classList.add('carousel__content_image-inactive');
            active_image = carousel_content[0];
            active_image.classList.remove('carousel__content_image-inactive');
            active_image.classList.add('carousel__content_image-active');
        }
    } 

    ctrl_left[0].addEventListener('click', slideLeft);
    ctrl_right[0].addEventListener('click', slideRight);
});