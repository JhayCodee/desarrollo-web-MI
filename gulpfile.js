const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber')


// compila sass en css
function css (done) {
    
    src('src/scss/**/*.scss') // identifica el archivo .scss a compilar
        .pipe(plumber()) //ver errores
        .pipe(sass())   // compila el archivo
        .pipe( dest('dist/css') ) // dest() lo almacena en la ruta dada

    done();
}

// vigila cambios
function dev (done) {

    // cuando suceda un cambio en el archivo, llama a la funcion
    // css para compilarlo
    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.dev = dev;