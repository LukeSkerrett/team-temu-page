import Navbar from './Navbar';
import './App.css';
import Video from './video.mp4'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">


        <video src={Video} width='700px' height='400px'controls>
        </video>
        <footer className='App-footer'>
          Engineered by Team Temu - Luke Skerrett, Larisa Dummer, Gonzalo de Rojas, Kristopher Ngo
        </footer>
      </header>

    </div>
  );
}

export default App;
