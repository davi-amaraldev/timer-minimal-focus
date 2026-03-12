import { saveState, loadState, ensureToday } from "./storage.js";   
import { start, pause, reset, tick } from "./timer.js";

const state = loadState();

function syncState(){
    saveState(state);
}

function startHandler(){
    try {
        start(state);
        syncState();
    } catch (err){
            console.log(err.message);
    }
}

function pauseHandler(){
    try{
        pause(state);
        syncState();
    } catch (err){
            console.log(err.message);
    }
}

function resetHandler(){
    reset(state);
    syncState();
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

setInterval(update, 1000);