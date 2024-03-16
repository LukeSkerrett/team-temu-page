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
                        <Link to ='/poster' className='link'>
                            Poster
                        </Link>
                    </li> 
                    <li>
                        <Link to ='/improvement' className='link'>
                            Improvement
                        </Link>
                    </li>
                    <li>
                        <Link to ='/PID' className='link'>
                            PID
                        </Link>
                    </li>
                    <li>
                        <Link to ='/robot' className='link'>
                            Robot Progression
                        </Link>
                    </li>
                    <li>
                        <Link to ='/competition' className='link'>
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