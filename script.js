let currentSection = 1;
const totalSections = 4;

function mostrarSiguienteSeccion() {
    const section = document.getElementById(`section${currentSection}`);
    if (section) {
        section.style.display = 'none';
        currentSection = (currentSection % totalSections) + 1;
        const newSection = document.getElementById(`section${currentSection}`);
        if (newSection) {
            newSection.style.display = 'block';
        }

        if (currentSection === 1) {
            document.querySelector('[onclick="retrocederSeccion()"]').style.display = 'none';
        } else {
            document.querySelector('[onclick="retrocederSeccion()"]').style.display = 'inline-block';
        }

        mostrarTitulosSecciones();
    }
}

function retrocederSeccion() {
    if (currentSection > 1) {
        const currentSectionElement = document.getElementById(`section${currentSection}`);
        currentSectionElement.style.display = 'none';
        currentSection--;

        const previousSection = document.getElementById(`section${currentSection}`);
        if (previousSection) {
            previousSection.style.display = 'block';
        }

        if (currentSection === totalSections) {
            document.querySelector('[onclick="mostrarSiguienteSeccion()"]').style.display = 'inline-block';
        }

        mostrarTitulosSecciones();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const firstSection = document.getElementById('section1');
    if (firstSection) {
        firstSection.style.display = 'block';
        document.querySelector('[onclick="retrocederSeccion()"]').style.display = 'none';
    }

    mostrarTitulosSecciones();
});

function mostrarTitulosSecciones() {
    const previewButton = document.querySelector('[onclick="retrocederSeccion()"]');
    const nextButton = document.querySelector('[onclick="mostrarSiguienteSeccion()"]');
    
    previewButton.innerText = getTituloSeccionAnterior();
    nextButton.innerText = getTituloSeccionSiguiente();
}

function getTituloSeccionAnterior() {
    const anteriorSection = currentSection === 1 ? totalSections : currentSection - 1;
    const anteriorSectionElement = document.getElementById(`section${anteriorSection}`);
    return anteriorSectionElement ? anteriorSectionElement.querySelector('h2').innerHTML : '';
}

function getTituloSeccionSiguiente() {
    const siguienteSection = currentSection === totalSections ? 1 : currentSection + 1;
    const siguienteSectionElement = document.getElementById(`section${siguienteSection}`);
    return siguienteSectionElement ? siguienteSectionElement.querySelector('h2').innerHTML : '';
}
/*
// Script para desplazamiento suave al hacer clic en enlaces de navegación
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const navLinks = document.querySelectorAll('a[href^="#"].nav-link');

    container.classList.add("show");

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

*/
