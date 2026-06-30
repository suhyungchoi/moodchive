/* =========================================================
   CURSOR SPARKLE
========================================================= */
document.addEventListener("DOMContentLoaded", function () {
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (isTouchDevice) {
        return;
    }

    const sparkleColors = [
        "#9AB0ED",
        "#B4D6AA",
        "#C0A6FF",
        "#FF7BBD",
        "#FFAB6C"
    ];

    let sparkleTimer = 0;

    function createSparkle(x, y) {
        const sparkle = document.createElement("span");
        sparkle.className = "cursor_sparkle";
        sparkle.textContent = "✦";

        const randomX = (Math.random() - 0.5) * 28;
        const randomY = (Math.random() - 0.5) * 28;
        const randomSize = Math.random() * 6 + 12;
        const randomColor = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
        const randomRotate = Math.random() * 80 - 40;
        const randomRotateEnd = randomRotate + 35;

        sparkle.style.left = `${x + randomX}px`;
        sparkle.style.top = `${y + randomY}px`;
        sparkle.style.setProperty("--sparkle-size", `${randomSize}px`);
        sparkle.style.setProperty("--sparkle-color", randomColor);
        sparkle.style.setProperty("--sparkle-rotate", `${randomRotate}deg`);
        sparkle.style.setProperty("--sparkle-rotate-end", `${randomRotateEnd}deg`);

        document.body.appendChild(sparkle);

        window.setTimeout(function () {
            sparkle.remove();
        }, 750);
    }

    document.addEventListener("mousemove", function (event) {
        sparkleTimer += 1;

        if (sparkleTimer % 3 === 0) {
            createSparkle(event.clientX, event.clientY);
        }
    });
});