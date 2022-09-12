import CoinChart from './CoinChart';
import styles from './CoinDetails.module.css';
import currencyFormatter from '../../helpers/currencyFormatter';
import Characteristic from './Characteristic';

const CoinDetails = ({ currency, coin }) => {

    let formatter = currencyFormatter(currency);

    return (
        <>
            <div className={`d-flex flex-row align-items-center ${styles.h50px} mb-2`}>
                <div className="me-3">
                    <span className={`display-6 ${styles.textCenterVertical}`}>{coin?.name}</span>
                </div>
                <img className={`my-auto ${styles.coinImage}`} src={coin?.image?.large} alt={coin?.name} />
            </div>

            <div className="d-flex flex-row justify-content-start mb-3">
                <div className={`display-5 ${styles.priceText}`}>
                    {formatter.format(coin?.market_data?.current_price[currency])}
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-start">

                <div className={`d-flex flex-column justify-content-start align-items-start pb-4 pe-4`}>
                    <span className="mb-2">Основные данные:</span>
                    <Characteristic
                        name="Объём (24 ч.)"
                        spacesCount="3"
                        value={formatter.format(coin?.market_data?.total_volume[currency])} />
                    <Characteristic
                        name="Рыночная кап."
                        spacesCount="1"
                        value={formatter.format(coin?.market_data?.market_cap[currency])} />
                    <Characteristic
                        name="Дн. диапазон"
                        spacesCount="3"
                        value={`${formatter.format(coin?.market_data?.low_24h[currency] ?? 0.0)} – ${formatter.format(coin?.market_data?.high_24h[currency] ?? 0.0)}`} />
                </div>

                <div className={`d-flex flex-column justify-content-start align-items-start pb-4 pe-4`}>
                    <span className="mb-2">Динамика:</span>
                    <Characteristic
                        name="Изм. (1 ч.)"
                        spacesCount="5"
                        value={`${coin?.market_data?.price_change_percentage_1h_in_currency[currency]?.toFixed(2) ?? "0.0"}%`}
                        isGood={coin?.market_data?.price_change_percentage_1h_in_currency[currency] > 0.0} />

                    <Characteristic
                        name="Изм. (24 ч.)"
                        spacesCount="3"
                        value={`${coin?.market_data?.price_change_percentage_24h_in_currency[currency]?.toFixed(2) ?? "0.0"}%`}
                        isGood={coin?.market_data?.price_change_percentage_24h_in_currency[currency] > 0.0} />

                    <Characteristic
                        name="Изм. (7 д.)"
                        spacesCount="5"
                        value={`${coin?.market_data?.price_change_percentage_7d_in_currency[currency]?.toFixed(2) ?? "0.0"}%`}
                        isGood={coin?.market_data?.price_change_percentage_7d_in_currency[currency] > 0.0} />
                </div>

                <div className={`d-flex flex-column justify-content-start align-items-start pe-2`}>
                    <span className="mb-2">Другое:</span>
                    <Characteristic
                        name="Ист. максимум"
                        spacesCount="3"
                        value={formatter.format(coin?.market_data?.ath[currency])} />
                    <Characteristic
                        name="Ист. минимум"
                        spacesCount="4"
                        value={formatter.format(coin?.market_data?.atl[currency])} />
                </div>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center mt-1">
                <div className={styles.chart}>
                    <div className="mb-1">Динамика за 7 дней ($):</div>
                    <CoinChart chartData={coin?.market_data?.sparkline_7d?.price} />
                </div>
            </div>
        </>
    );
}

export default CoinDetails;