import axios from 'axios';
import { cryptosLoadStartAction, cryptosLoadedAction } from '../store/reducers/cryptosReducer';

export const fetchCryptos = (currency, perPage, pageNumber) => {

    let formatter = new Intl.NumberFormat("ru", {
        style: 'currency',
        currency: currency.toUpperCase(),
        minimumFractionDigits: 0,
        maximumFractionDigits: 20,
        currencyDisplay: 'symbol'
    });

    return function (dispatch) {
        dispatch(cryptosLoadStartAction());

        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?per_page=${perPage}&order=market_cap_desc&page=${pageNumber}&vs_currency=${currency}`)
            .then(response => response.data)
            .then(data => {
                data.forEach(element => {
                    element.current_price_formatted = formatter.format(element.current_price);
                    element.total_volume_formatted = formatter.format(element.total_volume);
                    element.market_cap_formatted = formatter.format(element.market_cap);
                });
                return data;
            })
            .then(data => dispatch(cryptosLoadedAction(data)));
    }
}