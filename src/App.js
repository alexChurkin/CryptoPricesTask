import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomInput from './components/ui/CustomInput';
import List from './components/List'
import PageSwitch from './components/ui/PageSwitch';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from './api/CoinGeckoApi';

const App = () => {

  const dispatch = useDispatch();

  const cryptos = useSelector(state => state.cryptos);

  const loadItems = () => {
    dispatch(fetchCryptos('usd', 20, 1));
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
        <List items={cryptos} currency={'usd'}></List>
        <PageSwitch />
      </Container>
      <Footer />
    </div>)
};

export default App;