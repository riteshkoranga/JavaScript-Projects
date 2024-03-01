//variables for buttons

const StartStopbtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#reset');


//variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading i.e 00
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//variables for set interval and timer status

let timerInterval = 0;
let timerStatus = "";


function StopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    }
    else {
        leadingSeconds = seconds;
    }
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    }
    else {
        leadingHours = hours;
    }
    let displayTimer = document.getElementById('timer');
    displayTimer.innerHTML = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}
//window.setInterval(StopWatch, 1000);

StartStopbtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(StopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `
        <i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = "started";
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `
        <i class="fa-solid fa-play" id="play"></i>`
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener('click', function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";

})