import axios from 'axios';
import { cryptosLoadedAction } from '../store/reducers/cryptosReducer';

export const fetchCryptos = (currency, perPage, pageNumber) => {
    return function (dispatch) {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?per_page=${perPage}&page=${pageNumber}&vs_currency=${currency}`)
            .then(response=>response.data)
            .then(data => dispatch(cryptosLoadedAction(data)));
    }
}