import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchHintsAction } from '../../asyncActions/CoinGeckoActions';
import { useNavigate } from 'react-router-dom';

const CustomInput = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hints = useSelector(state => state.search.hints);

    return (
        <AsyncTypeahead
            id="asyncSearchCoins"
            className={`customInput mt-3 mb-3`}
            placeholder="Поиск криптовалют..."
            emptyLabel="Загрузка..."
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
                if(selected[0] !== undefined)
                    navigate(`/${selected[0].id}`);
            }}
            options={hints}
            useCache
            {...props}
        />
    )
}

export default CustomInput;