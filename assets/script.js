const startTime = 80;
let time = startTime;

const timerEl = document.getElementById('timer');

setInterval(countdown, 1000);

function countdown() {
    if (time > -1) {
    timerEl.innerHTML = ("Score: " + time);
    time --;
    }
}