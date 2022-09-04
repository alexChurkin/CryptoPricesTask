import styles from './ListItem.module.css';
import { Row, Col } from 'react-bootstrap';

function getSignForCurrency(currency) {
    switch (currency) {
        case 'rub':
            return '₽';
        case 'usd':
            return '$';
        case 'eur':
            return '€';
        case 'cny':
            return 'Ұ';
        case 'gbp':
            return '£';
        default:
            throw 'Unknown currency';
    }
}

const ListItem = ({ iconUrl, name, rank, price, currency, change24h, volume24h, mktCap }) => (
    <a href="#" className={`${styles.wholeItem} list-group-item list-group-item-action align-items-start`} data-toggle="list">

        <div className='d-flex flex-row pb-2'>
            <img className={`${styles.icon} my-auto`} src={iconUrl} alt={name} />
            <div className={`d-flex flex-column ${styles.priceAndChange24}`}>
                <h5 className="text-start my-auto">{name} {(rank != null) ? `(#${rank})` : ""} </h5>
                <div className="d-flex flex-row justify-content-between">
                    <span>{currency !== 'rub' ? getSignForCurrency(currency) : ''} {price}{currency === 'rub' ? ' ' + getSignForCurrency(currency) : ''}</span>
                    <span className={(change24h > 0.0) ? `${styles.textGreen}` : `${styles.textRed}`}>{change24h.toFixed(2)}%</span>
                </div>
            </div>
        </div>

        <div className={styles.textLeft}>
            <span><span className={styles.textGreen}>➤</span> Объём&nbsp;(24 ч.):&nbsp;&nbsp; <span className="text-nowrap">{currency !== 'rub' ? getSignForCurrency(currency) : ''} {volume24h} {currency === 'rub' ? getSignForCurrency(currency) + ' ' : ''}</span></span><br />
            <span><span className={styles.textGreen}>➤</span> Рыночная&nbsp;кап.: <span className="text-nowrap">{currency !== 'rub' ? getSignForCurrency(currency) : ''} {mktCap} {currency === 'rub' ? getSignForCurrency(currency) + ' ' : ''}</span></span>
        </div>

    </a >
)

export default ListItem;