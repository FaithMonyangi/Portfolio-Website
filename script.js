document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});
// Ensure the page starts at the top when loaded
window.addEventListener('load', function() {
    window.scrollTo(0, 0);  // Scroll to the top on load
});

