import { configureStore } from '@reduxjs/toolkit'
import { coinsReducer } from './reducers/coinsReducer';
import { coinReducer } from './reducers/coinReducer';
import { searchHintsReducer } from './reducers/searchHintsReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        cryptos: coinsReducer,
        coin: coinReducer,
        searchHints: searchHintsReducer
    },
    middleware: [thunk]
})

export default store;