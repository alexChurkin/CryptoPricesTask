import CryptosList from "./CryptosList";
import LoadSpinner from "./ui/LoadSpinner";
import PageSwitch from "./ui/simple/PageSwitch";
import MsgWithButton from "./ui/MsgWithButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptosChangePageAction } from "../store/reducers/cryptosReducer";
import { fetchCryptosAction } from '../api/CoinGeckoApi';

const CryptosBook = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cryptos.isLoading);
    const isFailed = useSelector(state => state.cryptos.isFailed);
    const cryptos = useSelector(state => state.cryptos.cryptos);
    const currency = useSelector(state => state.cryptos.currency);
    const page = useSelector(state => state.cryptos.page);

    function loadCryptos() {
        dispatch(fetchCryptosAction(currency, 20, page));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        loadCryptos();
    }, [currency, page]);


    let component;

    if (isLoading)
        component = <LoadSpinner />;
    else if (isFailed)
        component = <MsgWithButton
            text="Не удалось загрузить валюты. Проверьте Ваше подключение к интернету и попробуйте снова."
            buttonText="Попробовать снова"
            onButtonClick={() => { loadCryptos(); }}
        />;
    else if (cryptos == null)
        component = <></>;
    else
        component = <CryptosList items={cryptos} currency={currency} />

    return (
        <>
            {component}
            <PageSwitch
                count={100}
                currentPage={1}
                visible={!isLoading && !isFailed}
                onPageSelected={(page) => { dispatch(cryptosChangePageAction(page)); }} />
        </>
    );
}

export default CryptosBook;