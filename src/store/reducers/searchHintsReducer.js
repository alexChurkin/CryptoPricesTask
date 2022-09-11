const defaultState = {
    isLoading: false,
    isFailed: false,
    hints: []
}

const SEARCH_LOADSTART = "SEARCH_LOADSTART";
const SEARCH_LOADED = "SEARCH_LOADED";
const SEARCH_FAILED = "SEARCH_FAILED";

export const searchHintsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_LOADSTART:
            console.log('searchReducer: SEARCH_LOADSTART');
            return { ...state, isLoading: true };

        case SEARCH_LOADED:
            console.log('searchReducer: SEARCH_LOADED');
            console.log(action);
            return { ...state, isLoading: false, hints: action.payload };

        case SEARCH_FAILED:
            console.log('searchReducer: SEARCH_FAILED');
            console.log(action);
            return { ...state, isLoading: false, isFailed: true };

        default:
            console.log('searchReducer: default');
            return state;
    }
}

export const hintsLoadStartAction = () => ({ type: SEARCH_LOADSTART })
export const hintsLoadedAction = (payload) => ({ type: SEARCH_LOADED, payload: payload })
export const hintsLoadFailedAction = (error) => ({ type: SEARCH_FAILED, payload: error })