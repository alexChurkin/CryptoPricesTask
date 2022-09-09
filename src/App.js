import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/simple/TopTitle';
import CurrencySwitch from './components/ui/simple/CurrencySwitch';
import CustomInput from './components/ui/simple/CustomInput';
import CryptosBook from './components/CryptosBook';
import CryptoDetails from './components/CryptoDetails';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { cryptosChangeCurrencyAction } from './store/reducers/cryptosReducer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MsgWithButton from './components/ui/MsgWithButton';

const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="App">
      <Container className="mainContainer">
        <TopTitle text="CryptoPrices" />
        <CurrencySwitch onChange={(value) => { dispatch(cryptosChangeCurrencyAction(value)); }} />
        <CustomInput placeholder="Поиск криптовалют..." />

        <Routes>
          <Route path="/" element={<CryptosBook />} />
          <Route path="*" element={<MsgWithButton
            text="Страница не найдена."
            buttonText="На главную"
            onButtonClick={() => { navigate("/") }} />
          } />
        </Routes>

      </Container>
      <Footer />
    </div >
  )
};

export default App;