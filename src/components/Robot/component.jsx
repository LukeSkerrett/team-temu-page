import Car from '../../assets/FinalCar.png'
import './component.css'
export default function Robot(){
    return(
        <div>
            <img src={Car} alt='diagram of robot car'className='final--car'></img>
        </div>
    )
}