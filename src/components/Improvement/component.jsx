import './component.css'
export default function Improvement() {
    return(
        <div className="Improvement">
            <h1>Last Week Improvements</h1>
            <p>We improved the chassis by extending the width of our 3D model to allow more room for components. We added a tape light shield and LEDs to improve contrast between light and dark areas.</p>
            <h1>What we would've done different...</h1>
            <p>We would have probably made the chassis much smaller and soldered the components on 2 protoboards to make things easier to access. Making a 3D printed light shield and dedicated holder for the photo-resistors would have given us better control as well.</p>
        </div>
    )
}