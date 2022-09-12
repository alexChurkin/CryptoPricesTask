import { useNavigate } from 'react-router-dom';
import styles from './ListItem.module.css';

const ListItem = ({ id, iconUrl, name, rank, price, change24h, volume24h, mktCap }) => {

    const navigate = useNavigate();

    return (
        <div
            className={`${styles.wholeItem} list-group-item list-group-item-action align-items-start`}
            data-toggle="list"
            onClick={() => { navigate(id); }}>
            <div className='d-flex flex-row pb-2'>
                <img className={`${styles.icon} my-auto`} src={iconUrl} alt={name} />
                <div className={`d-flex flex-column flex-grow-1`}>
                    <h5 className="text-start my-auto">{name} {(rank != null) ? `(#${rank})` : ""} </h5>
                    <div className="d-flex flex-row justify-content-between">
                        <span>{price}</span>
                        {
                            (change24h !== null) ?
                                <span className={(change24h > 0.0) ? `${styles.textGreen}` : `${styles.textRed}`}>{change24h.toFixed(2)}%</span> :
                                <>0.0%</>
                        }

                    </div>
                </div>
            </div>

            <div className={styles.textLeft}>
                <span><span className={styles.textPrimary}>➤</span> Объём&nbsp;(24 ч.):&nbsp;&nbsp; <span className="text-nowrap">{volume24h}</span></span><br />
                <span><span className={styles.textPrimary}>➤</span> Рыночная&nbsp;кап.: <span className="text-nowrap">{mktCap}</span></span>
            </div>
        </div>
    )
}

export default ListItem;