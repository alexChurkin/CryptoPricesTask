import { Container } from 'react-bootstrap';

import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomInput from './components/ui/CustomInput';
import List from './components/List'
import PageSwitch from './components/ui/PageSwitch';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cryptosLoadedAction } from './store/reducers/cryptosReducer';
import { fetchCryptos } from './api/CoinGeckoApi';

const array = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 20000000,
    market_cap_rank: 1,
    price_change_percentage_24h: -0.1,
    total_volume: 23432439543544,
    market_cap: 3549545845495458394530943
  },
  {
    id: 'etherium',
    name: 'Etherium',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 20000000,
    market_cap_rank: 2,
    price_change_percentage_24h: 0.1,
    total_volume: 23432439543544,
    market_cap: 3549545845495458394530943
  },
  {
    id: 'tether',
    name: 'Tether',
    image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
    current_price: 20000000,
    market_cap_rank: 3,
    price_change_percentage_24h: 10.2,
    total_volume: 23432439543544,
    market_cap: 3549545845495458394530943
  }
]

const App = () => {

  const dispatch = useDispatch();

  const cryptos = useSelector(state => state.cryptos);

  const loadItems = () => {
    /*dispatch(cryptosLoadedAction(array));*/
    dispatch(fetchCryptos('rub', 20, 1));
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="App">
      <Container className="mainContainer text px-0">
        <TopTitle text="CryptoPrices" />
        <CurrencySwitch />
        <CustomInput placeholder="Поиск криптовалют..." />
        <List items={cryptos} currency={'eur'}></List>
        <PageSwitch />
      </Container>
      <Footer />
    </div>)
};

export default App;