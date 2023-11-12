let currentSection = 1;
const totalSections = 4;

function showNextSection() {

    const section = document.getElementById(`section${currentSection}`);

    if (section) {

        section.style.display = 'none';
        currentSection = (currentSection % totalSections) + 1;
        const newSection = document.getElementById(`section${currentSection}`);

        if (newSection) { newSection.style.display = 'block'; }

        if (currentSection === 1) {

            document.querySelector('[onclick="showPreviewSection()"]').style.display = 'none';
        
        } else { document.querySelector('[onclick="showPreviewSection()"]').style.display = 'inline-block'; }

        showSectionTitles();

    }

}

function showPreviewSection() {

    if (currentSection > 1) {

        const currentSectionElement = document.getElementById(`section${currentSection}`);
        currentSectionElement.style.display = 'none';
        currentSection--;

        const previousSection = document.getElementById(`section${currentSection}`);

        if (previousSection) { previousSection.style.display = 'block'; }

        if (currentSection === totalSections) { document.querySelector('[onclick="showNextSection()"]').style.display = 'inline-block'; }

        showSectionTitles();

    }

}

document.addEventListener("DOMContentLoaded", function () {

    const firstSection = document.getElementById('section1');

    if (firstSection) {

        firstSection.style.display = 'block';
        document.querySelector('[onclick="showPreviewSection()"]').style.display = 'none';

    }

    showSectionTitles();

});

function showSectionTitles() {

    const previewButton = document.querySelector('[onclick="showPreviewSection()"]');
    const nextButton = document.querySelector('[onclick="showNextSection()"]');
    
    previewButton.innerText = getPreviousSectionTitle();
    nextButton.innerText = getNextSectionTitle();

}

function getPreviousSectionTitle() {

    const previousSection = currentSection === 1 ? totalSections : currentSection - 1;
    const previousSectionElement = document.getElementById(`section${previousSection}`);
    return previousSectionElement ? previousSectionElement.querySelector('h2').innerHTML : '';

}

function getNextSectionTitle() {

    const nextSection = currentSection === totalSections ? 1 : currentSection + 1;
    const nextSectionElement = document.getElementById(`section${nextSection}`);
    return nextSectionElement ? nextSectionElement.querySelector('h2').innerHTML : '';

}