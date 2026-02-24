// vou utilizar export e import para trabalhar com vários arquivos

const STORAGE_KEY = 'focus_timer_v1';

export function createDefaultState(){
    let state = {
        durationSec: 1500,
        remainingSec: 1500,
        running: false,
        endAt: null,
        history: {

        }
    }
    return state;
}

export function loadState(){
    try{
        const raw = localStorage.getItem(STORAGE_KEY);

        if(!raw){
            return createDefaultState();
        }

        const parsed = JSON.parse(raw); // caso existam dados, vou converter eles pra JSON

        const base = createDefaultState(); // criar a base padrão 

        // garantir todos os dados

        const state = {
            ... base,
            ... parsed,
            history: parsed.history ?? {}
        }

        return state;
    } catch(err){
        console.log('Erro ao carregar o state, resetando.', err)
        return createDefaultState();
    }
}

export function saveState(state){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function ensureToday(state){
    const now = Date.now();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    const todayKey = `${year}-${month}-${day}`;

    if(!state.history || typeof state.history !== "object"){
        state.history = {};
    }

    if(!state.history[todayKey]){
        state.history[todayKey] = {
            sessions: 0,
            minutes: 0
        }
    }

    return todayKey;
}

