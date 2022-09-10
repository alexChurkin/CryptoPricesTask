import axios from 'axios';
import {
    cryptosLoadStartAction,
    cryptosLoadedAction,
    cryptosLoadFailedAction
} from '../store/reducers/cryptosReducer';

import {
    coinLoadStartAction,
    coinLoadedAction,
    coinLoadFailedAction
} from '../store/reducers/coinReducer';

import currencyFormatter from '../helpers/currencyFormatter';

export const loadCryptosAction = (currency, perPage, pageNumber) => {

    let formatter = currencyFormatter(currency);

    return function (dispatch) {
        dispatch(cryptosLoadStartAction());

        axios.get(
            `/coins/markets?per_page=${perPage}&order=market_cap_desc&page=${pageNumber}&vs_currency=${currency}`)
            .then(response => response.data)
            .then(data => {
                data.forEach(element => {
                    element.current_price_formatted = formatter.format(element.current_price);
                    element.total_volume_formatted = formatter.format(element.total_volume);
                    element.market_cap_formatted = formatter.format(element.market_cap);
                });
                return data;
            })
            .then(data => dispatch(cryptosLoadedAction(data)))
            .catch(error => {
                dispatch(cryptosLoadFailedAction(error));
            });
    }
}

export const loadCoinDetailsAction = (id) => {

    return function (dispatch) {
        dispatch(coinLoadStartAction());

        axios.get(
            `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
            .then(response => response.data)
            .then(data => dispatch(coinLoadedAction(data)))
            .catch(error => {
                dispatch(coinLoadFailedAction(error));
            });
    }
}