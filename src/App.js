import Navbar from './components/Navbar/component';
import './App.css';
import Video from './assets/video.mp4'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <video src={Video} width='700px' height='400px'controls>
        </video>
      </header>
    </div>
  );
}

export default App;
