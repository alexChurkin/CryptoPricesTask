import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomInput from './components/ui/CustomInput';
import CryptosBook from './components/CryptosBook';
//CryptoPage
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { cryptosChangeCurrencyAction } from './store/reducers/cryptosReducer';

const App = () => {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container className="mainContainer">
        <TopTitle text="CryptoPrices" />
        <CurrencySwitch onChange={(value) => { dispatch(cryptosChangeCurrencyAction(value)); }} />
        <CustomInput placeholder="Поиск криптовалют..." />
        <CryptosBook />
      </Container>
      <Footer />
    </div>
  )
};

export default App;