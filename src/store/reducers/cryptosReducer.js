const defaultState = {
    cryptos: [],
    isLoading: false
}

const CRYPTOS_LOADSTART = "CRYPTOS_LOADSTART";
const CRYPTOS_LOADED = "CRYPTOS_LOADED";

export const cryptosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CRYPTOS_LOADSTART:
            console.log('cryptosPageReducer: CRYPTOS_LOADSTART');
            console.log(action);
            return { ...state, isLoading: true };
        case CRYPTOS_LOADED:
            console.log('cryptosPageReducer: CRYPTOS_LOADED');
            console.log(action);
            return { ...state, isLoading: false, cryptos: action.payload };
        default:
            console.log('cryptosPageReducer: default');
            return state;
    }
}

export const cryptosLoadStartAction = () => ({type: CRYPTOS_LOADSTART})

export const cryptosLoadedAction = (payload) => ({type: CRYPTOS_LOADED, payload: payload})