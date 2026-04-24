document.addEventListener("DOMContentLoaded", () => {
    initPortfolioSlider();
    initStudentsWorksSlider();
    initFaqAccordion();
});


/* ========================================
   PORTFOLIO SLIDER
======================================== */

function initPortfolioSlider() {
    const section = document.querySelector(".portfolio-section");
    if (!section) return;

    const track = section.querySelector(".portfolio-section__track");
    const slides = Array.from(section.querySelectorAll(".portfolio-section__slide"));
    const prevBtn = section.querySelector(".portfolio-section__arrow--prev");
    const nextBtn = section.querySelector(".portfolio-section__arrow--next");

    if (!track || !slides.length || !prevBtn || !nextBtn) return;

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
}


/* ========================================
   STUDENTS WORKS SLIDER
======================================== */

function initStudentsWorksSlider() {
    const section = document.querySelector(".students-works");
    if (!section) return;

    const prevBtn = section.querySelector(".student-slider__arrow--prev");
    const nextBtn = section.querySelector(".student-slider__arrow--next");
    const imageBox = section.querySelector(".student-slider__image-placeholder");
    const nameEl = section.querySelector(".student-slider__name");

    if (!prevBtn || !nextBtn || !imageBox || !nameEl) return;

    const studentWorks = [
        {
            name: "Mark Scholler",
            image: "../assets/student-work-1.jpg"
        },
        {
            name: "Anna Lee",
            image: "../assets/student-work-2.jpg"
        },
        {
            name: "David Stone",
            image: "../assets/student-work-3.jpg"
        }
    ];

    let currentIndex = 0;

    function renderStudentWork() {
        const currentWork = studentWorks[currentIndex];

        imageBox.innerHTML = "";
        nameEl.textContent = currentWork.name;

        const img = document.createElement("img");
        img.src = currentWork.image;
        img.alt = `${currentWork.name} student work`;
        img.className = "student-slider__image";
        imageBox.appendChild(img);
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = currentIndex === 0 ? studentWorks.length - 1 : currentIndex - 1;
        renderStudentWork();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = currentIndex === studentWorks.length - 1 ? 0 : currentIndex + 1;
        renderStudentWork();
    });

    renderStudentWork();
}


/* ========================================
   FAQ ACCORDION
======================================== */

function initFaqAccordion() {
    const faqItems = Array.from(document.querySelectorAll(".faq-item"));
    if (!faqItems.length) return;

    faqItems.forEach((item) => {
        const trigger = item.querySelector(".faq-item__trigger");
        const icon = item.querySelector(".faq-item__icon");

        if (!trigger || !icon) return;

        trigger.addEventListener("click", () => {
            const isActive = item.classList.contains("faq-item--active");

            faqItems.forEach((faqItem) => {
                faqItem.classList.remove("faq-item--active");

                const faqTrigger = faqItem.querySelector(".faq-item__trigger");
                const faqIcon = faqItem.querySelector(".faq-item__icon");

                if (faqTrigger) {
                    faqTrigger.setAttribute("aria-expanded", "false");
                }

                if (faqIcon) {
                    faqIcon.textContent = "+";
                }
            });

            if (!isActive) {
                item.classList.add("faq-item--active");
                trigger.setAttribute("aria-expanded", "true");
                icon.textContent = "–";
            }
        });
    });
}