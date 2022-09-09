import { Container } from "react-bootstrap";
import { useEffect } from "react";

import styles from './CoinDetails.module.css';

const CoinDetails = ({ coin, currency }) => {

    console.log(coin);

    return (
        <div className={`d-flex flex-row justify-content-start align-items-center ${styles.h50px}`}>
            <div className="me-3">
                <span className={`display-6 ${styles.textCenterVertical}`}>{coin?.name}</span>
            </div>
            <img className={`my-auto`} src={coin?.image?.small} alt={coin?.name} />
        </div>
    );
}

export default CoinDetails;