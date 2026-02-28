export function start(state){

    if(typeof state.durationSec !== 'number' || state.durationSec <= 0){
        throw Error('durationSec inválido');
    }
    if(state.running) {
        throw Error('Já está rodando');
    }

    if (state.remainingSec <= 0){
        state.remainingSec = state.durationSec;
    }

    state.running = true;
    state.endAt = Date.now() + state.remainingSec * 1000;
}

export function pause(state){
    if(!state.running){
        throw Error('Timer já está pausado');
    }

    const now = Date.now();
    const diffMs = state.endAt - now;

    state.remainingSec = Math.max(0, Math.ceil(diffMs / 1000));
    state.running = false;
    state.endAt = null;
}

export function reset(state){
    state.running = false;
    state.endAt = null;
    state.remainingSec = state.durationSec;
}

export function tick(state, { onFinish } = {}){

    if (!state.running || !state.endAt) return;

    const diffMs = state.endAt - Date.now();

    if(diffMs <= 0) {
        state.remainingSec = 0;
        state.running = false;
        state.endAt = null;

        if (onFinish) onFinish();
    } else {
        state.remainingSec = Math.max(0, Math.ceil(diffMs / 1000));
    }

}