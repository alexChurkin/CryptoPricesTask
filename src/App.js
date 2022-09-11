import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomInput from './components/ui/CustomInput';
import CoinsPage from './components/CoinsPage';
import CoinDetailsPage from './components/CoinDetailsPage';
import Footer from './components/ui/Footer';
import { useDispatch } from 'react-redux';
import { cryptosChangeCurrencyAction } from './store/reducers/coinsReducer';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container className="mainContainer">

        <TopTitle text="CryptoPrices" />
        <CurrencySwitch onChange={(value) => { dispatch(cryptosChangeCurrencyAction(value)); }} />
        <CustomInput />

        <Routes>
          <Route path="/" element={<CoinsPage />} />
          <Route path="/:id" exact element={<CoinDetailsPage />} />
        </Routes>

      </Container>

      <Footer />
    </div >
  )
};

export default App;