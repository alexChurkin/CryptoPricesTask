import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import MasterView from './components/MasterView';
import DetailView from './components/DetailView';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <MasterView />
    <Footer />
  </div>
);

export default App;