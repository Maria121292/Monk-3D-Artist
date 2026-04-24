document.addEventListener("DOMContentLoaded", () => {
    const pipelineItems = document.querySelectorAll(".course-pipeline__item");

    pipelineItems.forEach((item) => {
        const trigger = item.querySelector(".course-pipeline__trigger");

        if (!trigger) return;

        trigger.addEventListener("click", () => {
            const isActive = item.classList.contains("course-pipeline__item--active");

            pipelineItems.forEach((currentItem) => {
                currentItem.classList.remove("course-pipeline__item--active");

                const currentTrigger = currentItem.querySelector(".course-pipeline__trigger");
                const currentIcon = currentItem.querySelector(".course-pipeline__icon");

                if (currentTrigger) {
                    currentTrigger.setAttribute("aria-expanded", "false");
                }


            });

            if (!isActive) {
                item.classList.add("course-pipeline__item--active");
                trigger.setAttribute("aria-expanded", "true");


            }
        });
    });
});