import { saveState, loadState, ensureToday } from "./storage.js";   
import { start, pause, reset, tick } from "./timer.js";
import { btnControls, setTimerText, getDurationInputValue, setMessage, clearMessage } from "./ui.js";

const state = loadState();

function syncState(){
    saveState(state);
    setTimerText(state.remainingSec)
}

function startHandler(){
    try {
        start(state);
        syncState();
        clearMessage();
    } catch (err){
            setMessage(err.message);
    }
}

function pauseHandler(){
    try{
        pause(state);
        syncState();
        clearMessage();
    } catch (err){
            setMessage(err.message);
    }
}

function resetHandler(){
    reset(state);
    syncState();
    clearMessage();
}

function applyDurationHandler(){
    try{
        const minutes = getDurationInputValue();

        if(minutes <= 0 || Number.isNaN(minutes) || minutes >= 120){
            throw new Error('Minuto inválido')
        }

        const sec = minutes * 60;

        state.durationSec = sec;
        state.remainingSec = sec;
        state.running = false;
        state.endAt = null;

        syncState();
        clearMessage(); 
    } catch(err){
        setMessage(err.message);
    }
}

function finishHandler(){
    const todayKey = ensureToday(state);

    state.history[todayKey].sessions += 1;
    state.history[todayKey].minutes += Math.round(state.durationSec / 60);

    syncState();
}

function update(){
    tick(state, { onFinish: finishHandler });
    syncState();
}

btnControls({
    onStart: startHandler,
    onPause: pauseHandler,
    onReset: resetHandler,
    onApply: applyDurationHandler
})

syncState()

setInterval(update, 1000);