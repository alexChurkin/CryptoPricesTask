import { configureStore } from '@reduxjs/toolkit'
import { cryptosReducer } from './reducers/cryptosReducer';
import { coinReducer } from './reducers/coinReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        cryptos: cryptosReducer,
        coin: coinReducer
    },
    middleware: [thunk]
})

export default store;