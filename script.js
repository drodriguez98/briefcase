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