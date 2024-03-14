import { useState } from 'react';
import Arrow from '../../assets/arrow.png'
import './component.css'
export default function Robot({ props }){
    const title = [
        'First Iteration',
        'Final Iteration'
    ]
    const [iteration, setIteration] = useState(0)

    function updateIter() {
        setIteration(prevIter => (prevIter + 1) % props.length);
    }

    return(
        <div>
            <h2>{title[iteration]}<button className='button-92' onClick={updateIter}> <img src={Arrow} className='arrow' alt='arrow' ></img></button ></h2>
            <img src={props[iteration]} alt='diagram of robot car'className='final--car'></img>
        </div>
    )
}