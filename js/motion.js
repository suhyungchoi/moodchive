/* =========================================================
   SCROLL MOTION
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    const motionItems = document.querySelectorAll("[data-motion]");

    if (!motionItems.length) {
        return;
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -80px 0px"
        }
    );

    motionItems.forEach(function (item) {
        const delay = item.dataset.delay || 0;
        item.style.setProperty("--motion-delay", `${delay}ms`);
        observer.observe(item);
    });
});