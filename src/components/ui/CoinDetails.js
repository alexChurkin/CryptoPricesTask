import CoinChart from './CoinChart';
import styles from './CoinDetails.module.css';
import currencyFormatter from '../../helpers/currencyFormatter';

const CoinDetails = ({ currency, coin }) => {

    let formatter = currencyFormatter(currency);

    return (
        <>
            <div className={`d-flex flex-row align-items-center ${styles.h50px} mb-2`}>
                <div className={`me-3`}>
                    <span className={`display-6 ${styles.textCenterVertical}`}>{coin?.name}</span>
                </div>
                <img className={`my-auto ${styles.coinImage}`} src={coin?.image?.large} alt={coin?.name} />
            </div>

            <div className="d-flex flex-row justify-content-start mb-3">
                <div className={`display-5 ${styles.priceText}`}>
                    {formatter.format(coin?.market_data?.current_price[currency])}
                </div>
            </div>

            <div className="d-flex flex-column justify-content-start align-items-start">
                <span className="text-start mb-2"><span className={styles.textPrimary}>➤ </span>
                    Объём&nbsp;(24 ч.):&nbsp;&nbsp; <span className="text-nowrap">
                        {formatter.format(coin?.market_data?.total_volume[currency])}</span>
                </span>
                <span className="text-start mb-2">
                    <span className={styles.textPrimary}>➤ </span>
                    Рыночная&nbsp;кап.: <span className="text-nowrap">
                        {formatter.format(coin?.market_data?.market_cap[currency])}
                    </span>
                </span>
                <span className="text-start mb-2"><span className={styles.textPrimary}>➤ </span>
                    Дн. диапазон:&nbsp;&nbsp; <span className="text-nowrap">
                        {formatter.format(coin?.market_data?.low_24h[currency])} – {formatter.format(coin?.market_data?.high_24h[currency])}</span>
                </span>
                
                <span className="text-start mb-4"><span className={styles.textPrimary}>➤ </span>
                    Изм. (24 ч.):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className={`text-nowrap ${(coin?.market_data?.price_change_percentage_24h_in_currency[currency] > 0.0) ? `${styles.textGreen}` : `${styles.textRed}`}`}>
                        {coin?.market_data?.price_change_percentage_24h_in_currency[currency]?.toFixed(2)}%
                    </span>
                </span>
                Другие данные:
                <span className="text-start mt-2 mb-2"><span className={styles.textPrimary}>➤ </span>
                    Ист. максимум:&nbsp;<span className="text-nowrap">
                        {formatter.format(coin?.market_data?.ath[currency])}
                    </span>
                </span>
                <span className="text-start mb-2"><span className={styles.textPrimary}>➤ </span>
                    Ист. минимум:&nbsp; <span className="text-nowrap">
                        {formatter.format(coin?.market_data?.atl[currency])}
                    </span>
                </span>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center mt-3">
                <div className={styles.chart}>
                    <div className="mb-1">Динамика за 7 дней (в $):</div>
                    <CoinChart chartData={coin?.market_data?.sparkline_7d?.price} />
                </div >
            </div>
        </>
    );
}

export default CoinDetails;