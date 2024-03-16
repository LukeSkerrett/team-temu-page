import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Arrow from '../../assets/arrow.png'
import './component.css'
export default function Robot({ props }){
    const title = [
        'Building Blocks',
        'First Iteration',
        'Final Iteration'
    ]
    const location = useLocation(); 

    useEffect(() => {
        if (location.pathname === '/robot') {
            setTimeout(function() {
                alert('Click the arrow for next iterations!')}, 100);
        }
    }, [location.pathname]);


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