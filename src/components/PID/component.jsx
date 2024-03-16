import './component.css'
export default function PID() {
    return(
        <div className="PID">
            <h1>PID Analysis</h1>
            <p>Our PID values for the drag race were relatively low at [P:49 I:0 D:16] since there were low error rates for the relatively straight track. The PD values for the lemon track and frequency sweep were higher at [P:350 I:0 D:3000] as we needed to handle the sharper turns by turning up P (so the car could do a better job of finding the line if there was a sharp turn) and D (so the car would be better at predicting errors ahead of time). I was kept at 0 for all courses since we were not expecting any issues with obstacles or aberrations on the track.Speed was highest for the drag race since, again, there was a low expected error, and lowest for the frequency sweep since we wanted the car to stay close to the line.  </p>
        </div>
    )
}