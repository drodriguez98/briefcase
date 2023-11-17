document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#navigation a");
    const firstSectionId = "section1";
    const nextProjectBtn = document.getElementById("next-item-btn");

    let currentItemProjectsSubsection = 0;

    // Muestra la primera sección al cargar la página

    const firstSection = document.getElementById(firstSectionId);

    if (firstSection) { firstSection.style.display = "block"; }

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

            // Muestra la primera subsección de proyectos al cambiar a la sección de proyectos

            if (targetSectionId === "section2") { showCurrentProject(); }

            // Desplaza suavemente hacia arriba al cambiar de sección

            const targetElement = document.getElementById("container");
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
        });

    });

    // Función para mostrar el proyecto actual

    function showCurrentProject() {

        const projectsSubsection = document.querySelectorAll(".section2-subsection");

        // Oculta todos los proyectos

        projectsSubsection.forEach(itemProjectsSubsection => { itemProjectsSubsection.style.display = "none"; });

        // Muestra el proyecto actual

        projectsSubsection[currentItemProjectsSubsection].style.display = "block";

    }

    // Botón para avanzar al siguiente proyecto

    if (nextProjectBtn) {

        nextProjectBtn.addEventListener("click", function () {

            const projectsSubsection = document.querySelectorAll(".section2-subsection");

            // Oculta el proyecto actual

            projectsSubsection[currentItemProjectsSubsection].style.display = "none";

            // Avanza al siguiente proyecto

            currentItemProjectsSubsection = (currentItemProjectsSubsection + 1) % projectsSubsection.length;

            // Muestra el siguiente proyecto

            showCurrentProject();

            // Desplaza suavemente hacia arriba al cambiar de sección

            const targetElement = document.getElementById("container");
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        });

    }

});