document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".portfolio-section__slider");
    if (!slider) return;

    const track = slider.querySelector(".portfolio-section__track");
    const slides = Array.from(slider.querySelectorAll(".portfolio-section__slide"));
    const prevBtn = slider.querySelector(".portfolio-section__arrow--prev");
    const nextBtn = slider.querySelector(".portfolio-section__arrow--next");

    if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        updateSlider();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        updateSlider();
    });

    updateSlider();
});