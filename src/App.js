import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomInput from './components/ui/CustomInput';
import CryptosBooklet from './components/CryptosBooklet';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptos } from './api/CoinGeckoApi';
import PageSwitch from "./components/ui/PageSwitch";
import {
  cryptosChangeCurrencyAction,
  cryptosChangePageAction
} from './store/reducers/cryptosReducer';

const App = () => {
  
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.cryptos.isLoading);
  const isFailed = useSelector(state => state.cryptos.isFailed);
  const cryptos = useSelector(state => state.cryptos.cryptos);
  const currency = useSelector(state => state.cryptos.currency);
  const page = useSelector(state => state.cryptos.page);

  function loadCryptos() {
    dispatch(fetchCryptos(currency, 20, page));
  }

  useEffect(() => {
    loadCryptos();
    window.scrollTo(0, 0);
  }, [currency, page]);

  return (
    <div className="App">
      <Container className="mainContainer">
        <TopTitle text="CryptoPrices" />
        <CurrencySwitch onChange={(value) => { dispatch(cryptosChangeCurrencyAction(value)); }} />
        <CustomInput placeholder="Поиск криптовалют..." />
        <CryptosBooklet
          isLoading={isLoading}
          isFailed={isFailed}
          onClickRetry={() => { loadCryptos(); }}
          items={cryptos}
          currency={currency} />
        <PageSwitch onPageSelected={(page) => { dispatch(cryptosChangePageAction(page)); }} />
      </Container>
      <Footer />
    </div>
  )
};

export default App;