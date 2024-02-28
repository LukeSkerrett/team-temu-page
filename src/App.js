import logo from './Temu-Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Fastest Car Ever. <br></br>
          Team Temu
        </p>
        <footer className='App-footer'>
          Engineered by Kristopher Ngo, Luke Skerrett, Larisa Dummer, Gonzalo de Rojas
        </footer>
      </header>

    </div>
  );
}

export default App;
