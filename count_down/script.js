const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

// Specify the time you want timer to count down
// you can use this to calculated time left to your birthday, new year, or any other specific date 
const setTimmer = "1 jan 2022";

function countdown(){
    const timerDate = new Date(setTimmer);
    const currentDate = new Date();

    const total_seconds = (timerDate - currentDate) / 1000;
    const days = Math.floor(total_seconds / 3600 / 24);
    const hours = Math.floor(total_seconds / 3600) % 24;
    const mins = Math.floor(total_seconds / 60) % 60 ;
    const seconds = Math.floor(total_seconds ) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
// initial call of the countdown function
countdown();

// an interval to call countdown function every 1000 ms (1s)
setInterval(countdown, 1000);