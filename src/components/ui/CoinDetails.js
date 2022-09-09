import CoinChart from './CoinChart';
import styles from './CoinDetails.module.css';

const CoinDetails = ({ coin, currency }) => {

    console.log(coin);

    return (
        <>
            <div className={`d-flex flex-row align-items-center ${styles.h50px}`}>
                <div className={`me-3`}>
                    <span className={`display-6 ${styles.textCenterVertical}`}>{coin?.name}</span>
                </div>
                <img className={`my-auto`} src={coin?.image?.small} alt={coin?.name} />
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center mt-3">

                <div className={styles.chart}>
                    <span>Динамика за 7 дней:</span>
                    <CoinChart chartData={coin?.market_data?.sparkline_7d?.price}/>
                </div >
            </div>
        </>
    );
}

export default CoinDetails;