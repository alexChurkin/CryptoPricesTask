import styles from './ListItem.module.css';

const ListItem = ({ rank, name, iconUrl , price /*, change24h, volume24h, mktCap*/ }) => {
    return (
        <a href="#" className={`${styles.listItem} list-group-item list-group-item-action align-items-start`} data-toggle="list">
            <h5 className={styles.textRank}>{rank}.</h5>
            <img className={styles.icon} src={iconUrl} alt={name} />
            <h5 className={styles.nameText}>{name}</h5>
            <h5 className={`${styles.text}`}>{price}</h5>
        </a>
    );
}

export default ListItem;