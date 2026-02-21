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
        console.log('Erro ao carregar o state, resetando.', error)
        return createDefaultState();
    }
}

export function saveStatus(state){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function ensureToday(state){
    let today = Date.now();

    return today;
}


ensureToday(state);