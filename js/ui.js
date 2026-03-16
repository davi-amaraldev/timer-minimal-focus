const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const applyBtn = document.querySelector('.apply-btn');
const timeInput = document.querySelector('.time-input');
const timerText = document.querySelector('.timer');
const messageText = document.querySelector('.message');


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

export function btnControls({onStart, onPause, onReset, onApply}){
    startBtn.addEventListener('click', onStart);
    pauseBtn.addEventListener('click', onPause);
    resetBtn.addEventListener('click', onReset);
    applyBtn.addEventListener('click', onApply)
}

export function getDurationInputValue(){
    return Number(timeInput.value);
}

export function setMessage(text){
    messageText.textContent = text;
}

export function clearMessage(){
    messageText.textContent = '';
}