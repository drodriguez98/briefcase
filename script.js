document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navigation a");
    const firstSectionId = "section1";
    const nextProjectBtn = document.getElementById("next-item-btn");
    const prevProjectBtn = document.getElementById("prev-item-btn");
    const gmailLink = document.getElementById("gmail-link");
    const contactForm = document.getElementById("contact-form");

    let currentItemProjectsSubsection = 0;
    let previousScrollPosition = 0;

    // Muestra la primera sección al cargar la página
    const firstSection = document.getElementById(firstSectionId);
    if (firstSection) { firstSection.style.display = "block"; }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {
                // Ocultar todas las secciones
                document.querySelectorAll("#main section").forEach(section => {
                    section.style.display = "none";
                });

                // Muestra la sección correspondiente
                targetSection.style.display = "block";

                // Resalta el enlace activo
                navLinks.forEach(navLink => { 
                    navLink.classList.remove("active");
                });
                link.classList.add("active");

                // Muestra la primera subsección de proyectos al cambiar a la sección de proyectos
                if (targetSectionId === "section2") { 
                    showCurrentProject();
                }

                // Desplaza suavemente hacia arriba al cambiar de sección
                const targetElement = document.getElementById("container");
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Función para mostrar el proyecto actual
    function showCurrentProject() {
        // ... (código para mostrar el proyecto actual)
    }

    // Botón para avanzar al siguiente proyecto
    if (nextProjectBtn) {
        nextProjectBtn.addEventListener("click", function () {
            // ... (código para avanzar al siguiente proyecto)
        });
    }

    // Botón para retroceder al proyecto anterior
    if (prevProjectBtn) {
        prevProjectBtn.addEventListener("click", function () {
            // ... (código para retroceder al proyecto anterior)
        });
    }

    // Mostrar formulario al hacer clic en el enlace de Gmail
    if (gmailLink && contactForm) {
        gmailLink.addEventListener("click", function (event) {
            event.preventDefault();

            // Ocultar todas las secciones
            document.querySelectorAll("#main section").forEach(section => {
                section.style.display = "none";
            });

            // Guardar la posición actual del documento
            previousScrollPosition = window.scrollY;

            // Mostrar el formulario
            contactForm.classList.remove("hidden-form");

            // Desplazarse a la posición anterior
            window.scrollTo(0, previousScrollPosition);
        });
    }
});
