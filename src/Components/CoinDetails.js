import { Container } from "react-bootstrap";
import LoadSpinner from "./ui/composite/LoadSpinner";
import MsgWithButton from "./ui/composite/MsgWithButton";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCoinDetailsAction } from "../asyncActions/CoinGeckoActions";

const CryptoDetails = () => {

    const params = useParams();
    console.log(params);

    const dispatch = useDispatch();

    const currency = useSelector(state => state.cryptos.currency);

    const isLoading = useSelector(state => state.coin.isLoading);
    const isFailed = useSelector(state => state.coin.isFailed);
    const coin = useSelector(state => state.coin.coin);

    function loadDetails() {
        dispatch(loadCoinDetailsAction(params.id));
    }

    useEffect(() => {
        loadDetails();
    }, []);

    let component;

    if (isLoading) {
        component = <LoadSpinner />;
    }
    else if (isFailed) {
        component = <MsgWithButton
            text="Не удалось загрузить страницу. Проверьте Ваше подключение к интернету и попробуйте снова."
            buttonText="Попробовать снова"
            onButtonClick={() => { loadDetails(); }}
        />;
    }
    else {
        component = <div>{coin.name}</div>
    }

    return (
        <Container className="px-3 py-3">
            {component}
        </Container>
    );
}

export default CryptoDetails;