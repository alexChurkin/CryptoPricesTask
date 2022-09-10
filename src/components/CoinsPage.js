import CryptosList from "./ui/CoinsList";
import LoadSpinner from "./ui/LoadSpinner";
import PageSwitch from "./ui/PageSwitch";
import MsgWithButton from "./ui/MsgWithButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptosChangePageAction } from "../store/reducers/cryptosReducer";
import { loadCryptosAction } from '../asyncActions/CoinGeckoActions';

const CoinsPage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cryptos.isLoading);
    const isFailed = useSelector(state => state.cryptos.isFailed);
    const cryptos = useSelector(state => state.cryptos.cryptos);
    const currency = useSelector(state => state.cryptos.currency);
    const page = useSelector(state => state.cryptos.page);

    function loadCryptos() {
        dispatch(loadCryptosAction(currency, 20, page));
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
            text={`Не удалось загрузить страницу.\nПроверьте подключение к интернету и попробуйте снова.`}
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
                currentPage={page}
                visible={!isLoading && !isFailed}
                onPageSelected={(page) => { dispatch(cryptosChangePageAction(page)); }} />
        </>
    );
}

export default CoinsPage;