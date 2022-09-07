const defaultState = {
    cryptos: []
}

const CRYPTOS_LOADED = "CRYPTOS_LOADED";

export const cryptosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CRYPTOS_LOADED:
            console.log('cryptosPageReducer: CRYPTOS_LOADED');
            console.log(action);
            return { ...state, cryptos: action.payload };
        default:
            console.log('cryptosPageReducer: default');
            return state;
    }
}

export const cryptosLoadedAction = (payload) => ({type: CRYPTOS_LOADED, payload: payload})