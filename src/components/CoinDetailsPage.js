import { Container } from "react-bootstrap";
import LoadSpinner from "./ui/LoadSpinner";
import MsgWithButton from "./ui/MsgWithButton";
import CoinDetails from "./ui/CoinDetails";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCoinDetailsAction } from "../asyncActions/CoinGeckoActions";
import { FAIL_NETWORK, FAIL_NO_COIN } from "../store/reducers/coinReducer";

const CoinDetailsPage = () => {

    const params = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currency = useSelector(state => state.cryptos.currency);

    const isLoading = useSelector(state => state.coin.isLoading);
    const status = useSelector(state => state.coin.status);
    const coin = useSelector(state => state.coin.coin);

    function loadDetails() {
        dispatch(loadCoinDetailsAction(params.id));
    }

    useEffect(() => {
        loadDetails();
    }, [params]);

    let component;

    if (isLoading) {
        component = <LoadSpinner />;
    }
    else if (status === FAIL_NETWORK) {
        component = <MsgWithButton
            text={`Не удалось загрузить данные.\nПроверьте подключение к интернету и попробуйте снова.`}
            buttonText="Попробовать снова"
            onButtonClick={() => { loadDetails(); }}
        />;
    }
    else if (status === FAIL_NO_COIN) {
        component = <MsgWithButton
            text={`Не удалось найти монету по данному адресу (URL).`}
            buttonText="На главную"
            onButtonClick={() => { navigate("/"); }}
        />;
    }
    else {
        component = <CoinDetails coin={coin} currency={currency} />
    }

    return (
        <Container className="px-0 pt-0 pb-3">
            {component}
        </Container>
    );
}

export default CoinDetailsPage;