import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchHintsAction } from '../../asyncActions/CoinGeckoActions';
import { useNavigate } from 'react-router-dom';

const CustomInput = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [emptyLabel, setEmptyLabel] = useState([]);

    const isHintsLoading = useSelector(state => state.search.isLoading);
    const hints = useSelector(state => state.search.hints);

    /*useEffect(() => {
        if (isHintsLoading)
            setEmptyLabel("Загрузка...");
        else
            setEmptyLabel("Ничего не найдено.");
    }, [isHintsLoading]);*/

    return (
        <AsyncTypeahead
            id="asyncSearchCoins"
            placeholder="Поиск криптовалют..."
            labelKey="name"
            emptyLabel="Загрузка..."
            className={`customInput mt-3 mb-3`}
            isLoading={false}
            onSearch={(query) => {
                console.log("search text: " + query);

                if (query.trim().length >= 2)
                    dispatch(loadSearchHintsAction(query));
            }}
            onChange={(selected) => {
                console.log("search: element selected:");
                console.log(selected);
                if(selected[0] != undefined)
                    navigate(`/${selected[0].id}`);
            }} onSelected
            options={hints}
            useCache
            {...props}
        />
    )
}

export default CustomInput;