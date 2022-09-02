import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import MasterView from './components/MasterView';
import DetailView from './components/DetailView';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MasterView />
      <Footer />
    </div>
  );
}

export default App;