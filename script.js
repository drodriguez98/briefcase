document.addEventListener("DOMContentLoaded", function() {

    const button = document.querySelector(".button-53");
    const sections = document.querySelectorAll("section.hidden");
    const nav = document.querySelector("nav.hidden");
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    button.addEventListener("click", function() {

        sections.forEach(section => { section.classList.remove("hidden"); });
        button.style.display = "none";
        nav.classList.remove("hidden");

    });

    internalLinks.forEach(link => {

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