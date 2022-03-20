const navlinks = document.querySelectorAll('.nav-link');

Menu();



function Menu() {

    navlinks.forEach( (link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: 'smooth'});
        });
    });
    
}
