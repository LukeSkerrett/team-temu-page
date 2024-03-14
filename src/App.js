import {Route, Routes} from 'react-router'
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Robot from './components/Robot'
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Landing/>} />
        <Route path='/robot' element={<Robot/>} />
      </Routes>
    </div>
  );
}
export default App;
