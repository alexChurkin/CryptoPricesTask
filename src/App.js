import './App.css';
import { Container } from 'react-bootstrap';

import Header from './Components/Header';
import MasterView from './Components/MasterView';
import DetailView from './Components/DetailView';
import Footer from './Components/Footer';

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