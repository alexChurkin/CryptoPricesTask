const defaultState = {
    isLoading: false,
    isFailed: false,
    coin: {},
}

const COIN_LOADSTART = "COIN_LOADSTART";
const COIN_LOADED = "COIN_LOADED";
const COIN_LOADFAILED = "COIN_LOADFAILED";

export const coinReducer = (state = defaultState, action) => {
    switch (action.type) {
        case COIN_LOADSTART:
            console.log('coinReducer: COIN_LOADSTART');
            return { ...state, isLoading: true, isFailed: false };

        case COIN_LOADED:
            console.log('coinReducer: COIN_LOADED');
            console.log(action);
            return { ...state, isLoading: false, coin: action.payload };

        case COIN_LOADFAILED:
            console.log('coinReducer: COIN_LOADFAILED');
            console.log(action);
            if (action.payload.code === "ERR_NETWORK") {
                //console.log("ERR_NETWORK");
            }
            else if (action.payload.code === "ERR_BAD_REQUEST") {
                //console.log("404");
            }
            return { ...state, isLoading: false, isFailed: true };

        default:
            console.log('coinReducer: default');
            return state;
    }
}

export const coinLoadStartAction = () => ({ type: COIN_LOADSTART })
export const coinLoadedAction = (payload) => ({ type: COIN_LOADED, payload: payload })
export const coinLoadFailedAction = (error) => ({ type: COIN_LOADFAILED, payload: error })