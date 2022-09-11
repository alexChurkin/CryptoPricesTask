const defaultState = {
    isLoading: false,
    isFailed: false,
    page: 1,
    cryptos: [],
    currency: "rub"
}

const CRYPTOS_LOADSTART = "CRYPTOS_LOADSTART";
const CRYPTOS_LOADED = "CRYPTOS_LOADED";
const CRYPTOS_LOADFAILED = "CRYPTOS_LOADFAILED";
const CRYPTOS_CHANGE_CURRENCY = "CRYPTOS_CHANGE_CURRENCY";
const CRYPTOS_CHANGE_PAGE = "CRYPTOS_CHANGE_PAGE";

export const coinsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CRYPTOS_LOADSTART:
            console.log('coinsReducer: CRYPTOS_LOADSTART');
            return { ...state, isLoading: true, isFailed: false };

        case CRYPTOS_LOADED:
            console.log('coinsReducer: CRYPTOS_LOADED');
            console.log(action);
            return { ...state, isLoading: false, cryptos: action.payload };

        case CRYPTOS_LOADFAILED:
            console.log('coinsReducer: CRYPTOS_LOADFAILED');
            console.log(action);
            return { ...state, isLoading: false, isFailed: true };

        case CRYPTOS_CHANGE_CURRENCY:
            console.log('coinsReducer: CRYPTOS_CHANGE_CURRENCY');
            console.log(action);
            return { ...state, currency: action.payload };

        case CRYPTOS_CHANGE_PAGE:
            console.log('coinsReducer: CRYPTOS_CHANGE_PAGE');
            console.log(action);
            return { ...state, page: action.payload };

        default:
            console.log('coinsReducer: default');
            return state;
    }
}

export const cryptosLoadStartAction = () => ({ type: CRYPTOS_LOADSTART })
export const cryptosLoadedAction = (payload) => ({ type: CRYPTOS_LOADED, payload: payload })
export const cryptosLoadFailedAction = (error) => ({ type: CRYPTOS_LOADFAILED, payload: error })
export const cryptosChangeCurrencyAction = (currency) => ({ type: CRYPTOS_CHANGE_CURRENCY, payload: currency })
export const cryptosChangePageAction = (page) => ({ type: CRYPTOS_CHANGE_PAGE, payload: page })