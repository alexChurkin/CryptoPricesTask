import {
    Container,
    Row, Col,
} from 'react-bootstrap';

import CustomInput from './ui/CustomInput';

import styles from './MasterView.module.css';
import ListItem from './ui/ListItem';

const MasterView = () => (
    <Container className={`${styles.text} ${styles.masterViewContainer} px-0 pb-3`}>
        <CustomInput placeholder="Поиск криптовалют..." />
        <div className="list-group">
            <ListItem rank={1} name={"Bitcoin"} price={20000} iconUrl={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"} />
            <ListItem rank={2} name={"Bitcoin"} price={20000} iconUrl={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"} />
            <ListItem rank={3000} name={"Bitcoin"} price={20000} iconUrl={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"} />
        </div>
    </Container>
)

export default MasterView;