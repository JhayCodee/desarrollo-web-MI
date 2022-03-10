const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navlinks = document.querySelectorAll('.nav-link');

Menu();

function Menu() {

    navToggle.addEventListener('click', () => {
        toggleMenu();
    });

    navlinks.forEach( (link) => {
        link.addEventListener('click', (e) => {
            
            toggleMenu();
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: 'smooth'});
        });
    });
    
}


function toggleMenu() {
    navMenu.classList.toggle('nav-menu_visible');
}