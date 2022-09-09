import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/simple/TopTitle';
import CurrencySwitch from './components/ui/simple/CurrencySwitch';
import CustomInput from './components/ui/simple/CustomInput';
import CryptosBook from './components/CryptosBook';
import CryptoDetails from './components/CoinDetails';
import Footer from './components/ui/composite/Footer';
import { useDispatch } from 'react-redux';
import { cryptosChangeCurrencyAction } from './store/reducers/cryptosReducer';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container className="mainContainer">
        <TopTitle text="CryptoPrices" />
        <CurrencySwitch onChange={(value) => { dispatch(cryptosChangeCurrencyAction(value)); }} />
        <CustomInput placeholder="Поиск криптовалют..." />

        <Routes>
          <Route path="/" element={<CryptosBook />} />
          <Route path="/:id" element={<CryptoDetails />} />
        </Routes>

      </Container>
      <Footer />
    </div >
  )
};

export default App;