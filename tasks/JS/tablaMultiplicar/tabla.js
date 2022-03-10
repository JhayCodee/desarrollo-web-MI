const tabla = document.querySelector('.content');
const title = document.querySelector('.titulo');

let multiplicador = parseInt( prompt('Ingrese un numero :)') );

title.innerHTML = `Tabla de multiplicar del ${multiplicador}`

let multiplicar = (numero) => {

    for (let i = 1; i <= 12; i++) {

        tabla.innerHTML += `<hr>  <p> ${numero} x ${i} = ${numero * i} </p>`
    }

}

multiplicar(multiplicador);