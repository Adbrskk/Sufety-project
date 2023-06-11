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
        loop: false,
        slidesPerView: 1,
        spaceBetween: 40,
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
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

if (window) {
    window.addEventListener("DOMContentLoaded", () => {
        addListeners();
        initSlider();
    });
}
