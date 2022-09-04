import './App.css';
import { Container } from 'react-bootstrap';

import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import List from './components/List'
import Footer from './components/Footer';
import CustomInput from './components/ui/CustomInput';

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

const App = () => (
  <div className="App">
    <Container className="text mainContainer px-0 pb-3">
      <TopTitle text="CryptoPrices" />
      <CurrencySwitch />
      <CustomInput placeholder="Поиск криптовалют..." />
      <List items={array}></List>
    </Container>
    <Footer />
  </div>
);

export default App;