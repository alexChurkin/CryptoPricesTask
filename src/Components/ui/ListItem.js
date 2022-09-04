import styles from './ListItem.module.css';

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
    <a href="#" className={`${styles.commonItem} list-group-item list-group-item-action align-items-start`} data-toggle="list">
        <div className={`${styles.part1} pb-0`}>
            <img className={`${styles.icon} my-auto`} src={iconUrl} alt={name} />
            <h5 className={`my-auto`}>{name} {(rank != null) ? `(#${rank})` : ""} </h5>
        </div>

        <div className={`d-flex flex-row ${styles.part2} justify-content-between`}>
            <div className={` d-flex`}>
                {currency !== 'rub' ? getSignForCurrency(currency) : ''} {price} {currency === 'rub' ? getSignForCurrency(currency) + ' ' : ''}
            </div>
            <div>
                <span className={(change24h > 0.0) ? `${styles.textGreen}` : `${styles.textRed}`}>{change24h.toFixed(2)}%</span>
            </div>
        </div>
        <div className={`d-flex flex-row ${styles.part2} justify-content-between`}>
            Объём (24ч): {currency !== 'rub' ? getSignForCurrency(currency) : ''} {volume24h} {currency === 'rub' ? getSignForCurrency(currency) + ' ' : ''}<br />
            Р. кап.: {currency !== 'rub' ? getSignForCurrency(currency) : ''} {mktCap} {currency === 'rub' ? getSignForCurrency(currency) + ' ' : ''}
        </div>
    </a>
)

export default ListItem;