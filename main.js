let headerScrollBtn = document.querySelector(".safety_btn-scroll");
let awareSection = document.querySelector(".safety__sector-content-2");

function addListeners() {
    headerScrollBtn.addEventListener("click", () => {
        awareSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

function initSlider() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: false,

        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },
        // autoHeight: true,
        slidesPerView: 2,
        spaceBetween: 40,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            // 320: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },
            // // when window width is >= 480px
            // 480: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            // // when window width is >= 640px
            // 640: {
            //     slidesPerView: 4,
            //     spaceBetween: 40
            // }
        },
        autoplay: {
            delay: 2000,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
}

if (window) {
    window.addEventListener("DOMContentLoaded", () => {
        addListeners();
        initSlider();
    });
}
