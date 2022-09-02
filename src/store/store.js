import { configureStore } from '@reduxjs/toolkit'
import cryptoRatesReducer from './cryptoRatesSlice'

const store = configureStore({
    reducer: {
        red: cryptoRatesReducer
    }
})

export default store;