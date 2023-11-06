document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button-53");
    const sections = document.querySelectorAll("section.hidden");

    button.addEventListener("click", function() {
        sections.forEach(section => {
            section.classList.remove("hidden");
        });

        button.style.display = "none";
    });
});