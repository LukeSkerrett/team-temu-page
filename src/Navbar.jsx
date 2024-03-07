import logo from './Car.png';
import './Navbar.css'
export default function Navbar () {
    return (
        <div className="navbar">
            <nav>
                <a href='https://www.temu.com/'> <img src = {logo} alt='temu logo'></img> </a>
            </nav>
        </div>
    );
}