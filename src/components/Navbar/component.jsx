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
                    <Link to ='/' className='link'>
                            Building
                    </Link>
                    </li>

                    <li>
                        <Link to ='/robot' className='link'>
                            Final Robot
                        </Link>
                    </li>

                    <li>
                        <Link to ='/' className='link'>
                           Competetion Day 
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