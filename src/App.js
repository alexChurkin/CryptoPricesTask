import logo from './logo.svg';
import './App.css';

import Navibar from './Components/Navibar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App container-fluid">
      <Navibar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;