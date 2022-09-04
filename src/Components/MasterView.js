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
            <ListItem
                iconUrl={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"}
                name={"Bitcoin"}
                rank={1}
                price={20000000}
                currency={'usd'}
                change24h={-0.1}

                volume24h={23432439543544}
                mktCap={3549545845495458394530943}
            />

            <ListItem
                iconUrl={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"}
                name={"Bitcoin"}
                rank={1}
                price={5000}
                currency={'eur'}
                change24h={-0.12}

                volume24h={23432439543544}
                mktCap={354954394530943}
            />

            <ListItem
                iconUrl={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"}
                name={"Bitcoin"}
                rank={1}
                price={100}
                currency={'rub'}
                change24h={12.00}

                volume24h={2544}
                mktCap={354954394530943}
            />
        </div>
    </Container>
)

export default MasterView;