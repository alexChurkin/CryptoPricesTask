import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomInput from './components/ui/CustomInput';
import List from './components/List';
import PageSwitch from './components/ui/PageSwitch';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from './api/CoinGeckoApi';
import LoadSpinner from './components/ui/LoadSpinner';

const App = () => {

  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.isLoading);
  const cryptos = useSelector(state => state.cryptos);

  useEffect(() => {
    dispatch(fetchCryptos('usd', 20, 1));
  }, []);

  return (
    <div className="App">
      <Container className="mainContainer">
        <TopTitle text="CryptoPrices" />
        <CurrencySwitch />
        <CustomInput placeholder="Поиск криптовалют..." />
        {isLoading ?
          <LoadSpinner /> :
          <List items={cryptos} currency={'usd'}></List>
        }
        <PageSwitch />
      </Container>
      <Footer />
    </div>
  )
};

export default App;