import { saveState, loadState } from "./storage.js";   
import { start, pause, reset, tick } from "./timer.js";

const state = loadState();

function syncState(){
    saveState(state);
}

function startHandler(){
    start(state);
    syncState();
}

function pauseHandler(){
    pause(state);
    syncState();
}

function resetHandler(){
    reset(state);
    syncState();
}

