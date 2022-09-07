import { configureStore } from '@reduxjs/toolkit'
import { cryptosReducer } from './reducers/cryptosReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: cryptosReducer,
    middleware: [thunk]
})

export default store;