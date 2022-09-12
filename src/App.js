import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomSearch from './components/CustomSearch';
import CoinsPage from './components/CoinsPage';
import CoinDetailsPage from './components/CoinDetailsPage';
import Footer from './components/ui/Footer';
import { useDispatch } from 'react-redux';
import {
  cryptosChangeCurrencyAction,
  cryptosChangePageAction
} from './store/reducers/coinsReducer';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="App">

      <TopTitle
        text="CryptoPrices"
        onClick={() => {
          dispatch(cryptosChangePageAction(1));
          navigate("/");
        }}
      />

      <CurrencySwitch
        defaultValue={localStorage.getItem("currency") || "rub"}
        onChange={(value) => {
          localStorage.setItem("currency", value);
          dispatch(cryptosChangeCurrencyAction(value));
        }}
      />

      <Container className="mainContainer">
        <CustomSearch />
        <Routes>
          <Route path="/" element={<CoinsPage />} />
          <Route path="/:id" exact element={<CoinDetailsPage />} />
        </Routes>
      </Container>

      <Footer
        text="© Alex Churkin 2022"
        githubLink="https://github.com/alexChurkin"
        email="churkindev@gmail.com"
        mailSubject="Вопрос с CryptoPrices" />
    </div>
  )
};

export default App;