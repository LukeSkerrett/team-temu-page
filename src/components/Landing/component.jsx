import React from 'react'
import { FaGithub } from "react-icons/fa";
import Team from '../../assets/Team.jpg'
import './component.css'
export default function Landing() {
    return(
        <div className='Landing'>
            <div className='left'>
                <br></br>
                Team Temu
                <br></br>
                <br></br>
                Team 6
                <footer>Hosted on  <a href='https://github.com/LukeSkerrett/team-temu-page' target='_blank' rel='noreferrer'> Github <FaGithub/></a></footer>
            </div>
            <div className='right'> 
                Meet the Team
                <img src={Team} alt='Team' className='team--picture'></img>
                <br></br>
                <span>Gonzalo de Rojas, Kris Ngo, Luke Skerrett, Larisa Dummer</span>
            </div>
        </div>
    )

}

