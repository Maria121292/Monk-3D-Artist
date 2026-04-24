document.addEventListener("DOMContentLoaded", () => {
    const workItems = document.querySelectorAll(".works-section__item");

    workItems.forEach((item) => {
        const trigger = item.querySelector(".works-section__trigger");

        if (!trigger) return;

        trigger.addEventListener("click", () => {
            const isActive = item.classList.contains("works-section__item--active");

            workItems.forEach((currentItem) => {
                currentItem.classList.remove("works-section__item--active");

                const currentTrigger = currentItem.querySelector(".works-section__trigger");
                if (currentTrigger) {
                    currentTrigger.setAttribute("aria-expanded", "false");
                }
            });

            if (!isActive) {
                item.classList.add("works-section__item--active");
                trigger.setAttribute("aria-expanded", "true");
            }
        });
    });
});