import {Route, Routes} from 'react-router'
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Robot from './components/Robot'
import First from './assets/Car.png'
import Second from './assets/FinalCar.png'
import './App.css';
const images = [
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
      </Routes>
    </div>
  );
}
export default App;
