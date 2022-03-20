const time = document.querySelector('.tiempo');

const btnStart = document.getElementById('startTimer');
const btnPause = document.getElementById("pauseTimer");
const btnReset = document.getElementById('resetTimer');

let seconds = 0;
let interval = null;