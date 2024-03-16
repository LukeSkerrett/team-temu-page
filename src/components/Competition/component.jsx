import loop from '../../assets/Loop.mp4'
import './component.css'
export default function Competition (){
    return(
        <div className="competition">
            <div className="left">
                <video width='500' height='550'src={loop} controls></video>
            </div>
            <div className="right">
                <h4>Track Results</h4>
                <main>
                    <ul>Drag Race
                        <li>Time: 13 seconds</li>
                        <li>Rank: 7th</li>
                    </ul>
                    <ul>Frequency Sweep
                        <li>Distance: 3 to 6</li>
                        <li>Time: 15 seconds</li>
                        <li>Rank: 10th</li>
                    </ul>
                    <ul>Loop
                        <li>Loops: 3.6</li>
                        <li>Rank: 8th</li>
                    </ul> 
                </main>
            </div>
        </div>
    ) 
}