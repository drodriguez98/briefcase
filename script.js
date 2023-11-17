document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#navigation a");
    const firstSectionId = "section1";
    const nextProjectBtn = document.getElementById("next-project-btn");

    let currentProjectIndex = 0;

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

        });

    });

    // Función para mostrar el proyecto actual

    function showCurrentProject() {

        const projects = document.querySelectorAll(".project-subsection");

        // Oculta todos los proyectos

        projects.forEach(project => { project.style.display = "none"; });

        // Muestra el proyecto actual

        projects[currentProjectIndex].style.display = "block";
    }

    // Botón para avanzar al siguiente proyecto

    if (nextProjectBtn) {

        nextProjectBtn.addEventListener("click", function () { const projects = document.querySelectorAll(".project-subsection");

            // Oculta el proyecto actual

            projects[currentProjectIndex].style.display = "none";

            // Avanza al siguiente proyecto

            currentProjectIndex = (currentProjectIndex + 1) % projects.length;

            // Muestra el siguiente proyecto

            showCurrentProject();

        });

    }
    
});