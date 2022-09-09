import { configureStore } from '@reduxjs/toolkit'
import { cryptosReducer } from './reducers/cryptosReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        cryptos: cryptosReducer
    },
    middleware: [thunk]
})

export default store;