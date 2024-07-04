let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const lapButton = document.getElementById('lap');
const resetButton = document.getElementById('reset');
const laps = document.getElementById('laps');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Başlat';
    } else {
        timer = setInterval(updateTime, 10); 
        startStopButton.textContent = 'Durdur';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
    startStopButton.textContent = 'Başlat';
    laps.innerHTML = ''; 
});

lapButton.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = display.textContent;
        laps.appendChild(lapTime);
    }
});

function updateTime() {
    elapsedTime += 10;
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = elapsedTime % 1000;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(num, size = 2) {
    let s = "000" + num;
    return s.substr(s.length - size);
}
