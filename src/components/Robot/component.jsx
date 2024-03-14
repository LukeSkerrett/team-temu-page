import Car from '../../assets/FinalCar.png'
import './component.css'
export default function Robot(){
    return(
        <div>
            <img src={Car} className='final--car'></img>
        </div>
    )
}