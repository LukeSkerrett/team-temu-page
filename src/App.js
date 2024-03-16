import {Route, Routes} from 'react-router'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Competition from './components/Competition'
import Robot from './components/Robot'
import PID from './components/PID'
import Poster from './components/Poster'
import Blocks from './assets/Blocks.png'
import First from './assets/Car.png'
import Second from './assets/FinalCar.png'
import './App.css';
import Improvement from './components/Improvement'
const images = [
  Blocks,
  First, 
  Second,
];
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Landing />} />
        <Route path='/robot' element={<Robot props={images}/>} />
        <Route path='/competition' element={<Competition/>}/>
        <Route path='/PID' element={<PID/>}/>
        <Route path='/improvement' element= {<Improvement/>} />
        <Route path='/poster' element={<Poster/>} />
      </Routes>
    </div>
  );
}
export default App;
