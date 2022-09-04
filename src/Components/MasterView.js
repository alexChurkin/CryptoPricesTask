import {
    Container,
    Row, Col,
} from 'react-bootstrap';

import CustomInput from './ui/CustomInput';

import styles from './MasterView.module.css';
import List from './List';

const array = [
    {
        iconUrl: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        name: 'Bitcoin',
        rank: 1,
        price: 20000000,
        currency: 'rub',
        change24h: -0.1,
        volume24h: 23432439543544,
        mktCap: 3549545845495458394530943
    },
    {
        iconUrl: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
        name: 'Etherium',
        rank: 2,
        price: 20000000,
        currency: 'usd',
        change24h: 0.1,
        volume24h: 23432439543544,
        mktCap: 3549545845495458394530943
    },
    {
        iconUrl: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
        name: 'Tether',
        rank: 3,
        price: 20000000,
        currency: 'eur',
        change24h: 10.2,
        volume24h: 23432439543544,
        mktCap: 3549545845495458394530943
    }
]

const MasterView = () => (
    <Container className={`${styles.text} ${styles.masterViewContainer} px-0 pb-3`}>
        <CustomInput placeholder="Поиск криптовалют..." />

        <List items={array}></List>
    </Container >
)

export default MasterView;