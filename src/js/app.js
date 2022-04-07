const texts = ['Estudio Ingeniería', 'Desarollador Web'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if(count === texts.length) count = 0;

    currentText = texts[count]
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentText.length){
        count++;
        index = 0;
    }  

    setTimeout(type, 400);
    
}());



/*
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
*/
