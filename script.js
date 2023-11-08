document.addEventListener("DOMContentLoaded", function() {

    // Show hidden sections when user clicks on wellcome button

    const button = document.querySelector(".button-53");
    const sections = document.querySelectorAll("section.hidden");
    const navLinks = document.querySelectorAll("li.hidden");

    button.addEventListener("click", function() {

        sections.forEach(section => { section.classList.remove("hidden"); });

        navLinks.forEach(li => { li.classList.remove("hidden"); });

        button.style.display = "none";
    }
    
    );

    // Animate sections when user mouses over them

    const section = document.querySelector('section.hidden');

    let sectionWidth = 100;

    function animar() {

        sectionWidth += 1;

        section.style.sectionWidth = sectionWidth + 'px';
        
        if (sectionWidth < 150) { requestAnimationFrame(animar); }

    }

    section.addEventListener('click', () => { animar(); });

});