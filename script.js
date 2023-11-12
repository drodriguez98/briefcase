// Script para resaltar el enlace activo en la barra de navegación

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#navigation a");

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

        event.preventDefault();

        // Oculta todas las secciones

        document.querySelectorAll("#main section").forEach(section => { section.style.display = "none"; });

        // Muestra la sección correspondiente

        const targetSectionId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) { targetSection.style.display = "block"; }

        // Resalta el enlace activo

        navLinks.forEach(navLink => { navLink.classList.remove("active"); });
        link.classList.add("active");

        });
    });
});