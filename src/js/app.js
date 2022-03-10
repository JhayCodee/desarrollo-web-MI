const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navlinks = document.querySelectorAll('.nav-link');

Menu();

function Menu() {

    navToggle.addEventListener('click', () => {
        toggleMenu();
    });

    navlinks.forEach( (link) => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });
    
}

function toggleMenu() {
    navMenu.classList.toggle('nav-menu_visible');
}