import { saveState, loadState } from "./storage.js";   
import { start, pause, reset, tick } from "./timer.js";

const state = loadState() || saveState();