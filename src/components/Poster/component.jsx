import poster from '../../assets/poster.jpg'
import './component.css'
export default function Poster(){
    return (
        <div className='Poster'>
            <img src={poster} className='poster'alt ='poster'/>
        </div>
    )
}