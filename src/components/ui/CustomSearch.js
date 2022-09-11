import { useEffect, useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadSearchHintsAction } from '../../asyncActions/CoinGeckoActions';

const CustomSearch = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hints = useSelector(state => state.search.hints);
    //const isLoading = useSelector(state => state.search.isLoading);

    return (
        <AsyncTypeahead
            id="asyncSearchCoins"
            className={`customInput mt-3 mb-3`}
            placeholder="Поиск криптовалют..."
            promptText=""
            emptyLabel="Ничего не найдено."
            searchText=""
            labelKey="name"
            isLoading={false}
            onSearch={(query) => {
                console.log("search text: " + query);

                if (query.trim().length >= 2)
                    dispatch(loadSearchHintsAction(query));
            }}
            onChange={(selected) => {
                console.log("search: element selected:");
                console.log(selected);
                if(selected != null && selected[0] != null) {
                    navigate(`/${selected[0].id}`);
                }
            }}
            options={hints}
            useCache
            {...props}
        />
    )
}

export default CustomSearch;