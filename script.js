document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#nav a");
    const firstSectionId = "section1";
    const nextProjectBtn = document.getElementById("next-item-btn");
    const prevProjectBtn = document.getElementById("prev-item-btn");
    const formLink = document.querySelector('a[href="#section3"]');
    const firstSection = document.getElementById(firstSectionId);

    let currentItemProjectsSubsection = 0;

    // Muestra la primera sección al cargar la página

    if (firstSection) { firstSection.style.display = "block"; }

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();
            const targetSectionId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {

                // Ocultar todas las secciones

                document.querySelectorAll("#main section").forEach(section => { section.style.display = "none"; });

                // Muestra la sección correspondiente

                targetSection.style.display = "block";

                // Resalta el enlace activo

                navLinks.forEach(navLink => { navLink.classList.remove("active"); });

                link.classList.add("active");

                // Muestra la primera subsección de proyectos al cambiar a la sección de proyectos

                if (targetSectionId === "section2") { showCurrentProject(); }

                // Desplaza suavemente hacia arriba al cambiar de sección

                const targetElement = document.getElementById("container");
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

            }

        });

    });

    // Función para mostrar el proyecto actual

    function showCurrentProject() {

        const projectsSubsection = document.querySelectorAll(".section2-subsection");

        // Oculta todos los proyectos

        projectsSubsection.forEach(itemProjectsSubsection => { itemProjectsSubsection.style.display = "none"; });

        // Muestra el proyecto actual

        projectsSubsection[currentItemProjectsSubsection].style.display = "block";

        // Mostrar solo el botón correspondiente al inicio o final de la sección de proyectos

        if (currentItemProjectsSubsection === 0) {

            prevProjectBtn.style.display = "none";
            nextProjectBtn.style.display = "block";

        } else if (currentItemProjectsSubsection === projectsSubsection.length - 1) {

            prevProjectBtn.style.display = "block";
            nextProjectBtn.style.display = "none";
            
        } else {

            prevProjectBtn.style.display = "block";
            nextProjectBtn.style.display = "block";

        }

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

    // Botón para retroceder al proyecto anterior

    if (prevProjectBtn) {

        prevProjectBtn.addEventListener("click", function () {

            const projectsSubsection = document.querySelectorAll(".section2-subsection");

            // Oculta el proyecto actual

            projectsSubsection[currentItemProjectsSubsection].style.display = "none";

            // Retrocede al proyecto anterior

            currentItemProjectsSubsection = (currentItemProjectsSubsection - 1 + projectsSubsection.length) % projectsSubsection.length;

            // Muestra el proyecto anterior

            showCurrentProject();

            // Desplaza suavemente hacia arriba al cambiar de sección

            const targetElement = document.getElementById("container");
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        });

    }

    // Agrega un evento click al enlace del formulario

    formLink.addEventListener("click", function (event) {

        event.preventDefault();
        
        const targetSectionId = formLink.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {

            // Ocultar todas las secciones excepto la sección del formulario

            document.querySelectorAll("#main section").forEach(section => {

                if (section !== targetSection) {

                    section.style.display = "none";

                } else { section.style.display = "block"; } // Mostrar la sección del formulario 

            });

            // Resaltar el enlace activo

            navLinks.forEach(navLink => { navLink.classList.remove("active"); });

            formLink.classList.add("active");

            // Desplazar suavemente hacia arriba al cambiar a la sección del formulario

            const targetElement = document.getElementById("container");
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

        }

    });

    i18next.init({
        lng: 'es',
        resources: {
            en: {
                translation: {}
            },
            es: {
                translation: {}
            }
        }
    }, function(err, t) {
        // Carga de traducciones desde archivos JSON
        loadLocales().then(() => {
            updateContent();

            document.getElementById('toggleButton').addEventListener('click', function() {
                const currentLanguage = i18next.language === 'es' ? 'en' : 'es';
                i18next.changeLanguage(currentLanguage, updateContent);
            });
        });
    });

    function loadLocales() {
        return Promise.all([
            fetchLocale('en'),
            fetchLocale('es')
        ]);
    }

    function fetchLocale(language) {
        return fetch(`locales/${language}.json`)
            .then(response => response.json())
            .then(json => {
                i18next.addResourceBundle(language, 'translation', json, true, true);
            });
    }

    function updateContent() {
        // Traducción de los enlaces utilizando data-i18n
        const elementsToTranslate = document.querySelectorAll('[data-i18n]');
        
        // Iterar sobre los elementos y actualizar su texto
        elementsToTranslate.forEach(element => {
            const translationKey = element.getAttribute('data-i18n');
            element.textContent = i18next.t(translationKey);
        });
    
        // Actualizar la imagen del botón de cambio de idioma
        const changeLanguageBtn = document.getElementById('toggleButton');
        if (changeLanguageBtn) {
            const currentLanguage = i18next.language;
            const languageImage = currentLanguage === 'es' ? 'assets/img/english.png' : 'assets/img/spanish.png';
            changeLanguageBtn.querySelector('img').setAttribute('src', languageImage);
        }
    }
    
    
});