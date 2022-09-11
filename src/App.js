import './App.css';
import { Container } from 'react-bootstrap';
import TopTitle from './components/ui/TopTitle';
import CurrencySwitch from './components/ui/CurrencySwitch';
import CustomInput from './components/ui/CustomInput';
import CoinsPage from './components/CoinsPage';
import CoinDetailsPage from './components/CoinDetailsPage';
import Footer from './components/ui/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { cryptosChangeCurrencyAction } from './store/reducers/coinsReducer';
import { loadSearchHintsAction } from './asyncActions/CoinGeckoActions';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const dispatch = useDispatch();

  const isHintsLoading = useSelector(state => state.searchHints.isLoading);
  const hints = useSelector(state => state.searchHints.hints);

  return (
    <div className="App">
      <Container className="mainContainer">
        <TopTitle text="CryptoPrices" />
        <CurrencySwitch onChange={(value) => { dispatch(cryptosChangeCurrencyAction(value)); }} />


        <CustomInput
          isLoading={isHintsLoading}
          onSearch={(query) => {
            console.log("search text: " + query);

            if (query.trim().length >= 2)
              dispatch(loadSearchHintsAction(query));
          }}
          hints={hints}
          placeholder="Поиск криптовалют..."
          emptyLabel="Ничего не найдено."
          searchText="Загрузка..."
        />

        <Routes>
          <Route path="/" element={<CoinsPage />} />
          <Route path="/:id" element={<CoinDetailsPage />} />
        </Routes>

      </Container>
      <Footer />
    </div >
  )
};

export default App;