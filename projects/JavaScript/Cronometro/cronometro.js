const time = document.querySelector('.contenedor .tiempo');

const btnStart = document.getElementById('startTimer');
const btnPause = document.getElementById("pauseTimer");
const btnReset = document.getElementById('resetTimer');

let seconds = 0;
let interval = null;


btnStart.addEventListener('click', start);
btnPause.addEventListener('click', stop);
btnReset.addEventListener('click', reset);


function timer () {

    seconds++;

    // fromatear tiempo
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hours < 10) hours = '0' + hours;
 

    time.innerHTML = `${hours}:${mins}:${secs}`;
}


function start() {
    
    if (interval) return

    interval = setInterval(timer, 1000)

}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds = 0;
    time.innerHTML = '00 : 00 : 00'
}
