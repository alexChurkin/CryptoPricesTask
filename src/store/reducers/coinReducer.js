export const CODE_OK = 0;
export const FAIL_NETWORK = 1;
export const FAIL_NO_COIN = 2;

const defaultState = {
    isLoading: false,
    status: CODE_OK,
    coin: {},
}

const COIN_LOADSTART = "COIN_LOADSTART";
const COIN_LOADED = "COIN_LOADED";
const COIN_LOADFAILED = "COIN_LOADFAILED";

export const coinReducer = (state = defaultState, action) => {
    switch (action.type) {
        case COIN_LOADSTART:
            console.log('coinReducer: COIN_LOADSTART');
            return { ...state, isLoading: true, status: CODE_OK };

        case COIN_LOADED:
            console.log('coinReducer: COIN_LOADED');
            console.log(action);
            return { ...state, isLoading: false, coin: action.payload };

        case COIN_LOADFAILED:
            console.log('coinReducer: COIN_LOADFAILED');
            console.log(action);

            if (action.payload.code === "ERR_NETWORK")
                return { ...state, isLoading: false, status: FAIL_NETWORK };
            else if (action.payload.code === "ERR_BAD_REQUEST")
                return { ...state, isLoading: false, status: FAIL_NO_COIN };

            return { ...state, isLoading: false, status: FAIL_NETWORK };

        default:
            console.log('coinReducer: default');
            return state;
    }
}

export const coinLoadStartAction = () => ({ type: COIN_LOADSTART })
export const coinLoadedAction = (payload) => ({ type: COIN_LOADED, payload: payload })
export const coinLoadFailedAction = (error) => ({ type: COIN_LOADFAILED, payload: error })