import {Link } from 'react-router-dom';
import Temu from '../../assets/Temu-Logo.png';
import './component.css'
export default function Navbar () {
    return (
        <div className="navbar">
            <nav>
                <a href='https://www.temu.com/'> <img src = {Temu} alt='temu logo' className='Logo'></img> </a>
                <ul>
                    <li>
                        <Link to ='/robot' className='link'>
                            Robot Progression
                        </Link>
                    </li>

                    <li>
                        <Link to ='/' className='link'>
                           Competition Day 
                        </Link>
                    </li>

                    <li>
                        <Link to ='/' className='link'>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}