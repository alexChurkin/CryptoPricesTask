import axios from 'axios';
import {
    cryptosLoadStartAction,
    cryptosLoadedAction,
    cryptosLoadFailedAction
} from '../store/reducers/coinsReducer';

import {
    coinLoadStartAction,
    coinLoadedAction,
    coinLoadFailedAction
} from '../store/reducers/coinReducer';

import {
    hintsLoadedAction,
    hintsLoadFailedAction,
    hintsLoadStartAction
} from '../store/reducers/searchHintsReducer';

import currencyFormatter from '../helpers/currencyFormatter';

const noCache = {
    headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
    }
};

export const loadCryptosAction = (currency, perPage, pageNumber) => {

    let formatter = currencyFormatter(currency);

    return function (dispatch) {
        dispatch(cryptosLoadStartAction());

        axios.get(
            `/coins/markets?per_page=${perPage}&order=market_cap_desc&page=${pageNumber}&vs_currency=${currency}`,
            noCache)
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
            `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`,
            noCache)
            .then(response => response.data)
            .then(data => dispatch(coinLoadedAction(data)))
            .catch(error => {
                dispatch(coinLoadFailedAction(error));
            });
    }
}

export const loadSearchHintsAction = (query) => {

    return function (dispatch) {
        dispatch(hintsLoadStartAction());

        axios.get(
            `/search?query=${query}`)
            .then(response => response.data.coins)
            .then(coins => coins.map((coin => { return { id: coin.id, name: coin.name } })))
            .then(hints => dispatch(hintsLoadedAction(hints)))
            .catch(error => {
                dispatch(hintsLoadFailedAction(error));
            });
    }
}