const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const timerText = document.querySelector('.timer');

export function setTimerText(seconds){
    timerText.textContent = formatTimer(seconds);
}

function formatTimer(seconds){
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const formatMinutes = String(minutes).padStart(2, '0');
    const formatSecs = String(secs).padStart(2, '0');

    return `${formatMinutes}:${formatSecs}`;
}

export function btnControls({onStart, onPause, onReset}){
    startBtn.addEventListener('click', onStart);
    pauseBtn.addEventListener('click', onPause);
    resetBtn.addEventListener('click', onReset)
}