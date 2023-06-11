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

if (window) {
    window.addEventListener("DOMContentLoaded", () => {
        addListeners();
    });
}
