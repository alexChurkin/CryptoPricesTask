import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CryptoDetails = () => {

    const dispatch = useDispatch();
    const currency = useSelector(state => state.cryptos.currency);

    function loadDetails() {
        //dispatch();
    }

    useEffect(() => {
        loadDetails();
    }, [currency]);


    return (
        <Container className="bg-light px-3 py-3">
            CryptoDetails
        </Container>
    );
}

export default CryptoDetails;