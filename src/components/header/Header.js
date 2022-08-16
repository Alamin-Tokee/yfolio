import React from 'react';
import './Header.css';
import Headroom from "react-headroom";
import { greeting,workExperiences } from '../../Data';


const Header  = () => {
    const exp = workExperiences.viewExperiences;

    return (
        <Headroom>
            <header className="header">
                <a href="" className="logo">
                    <span className='grey-color'>&lt;</span>
                    <span className="logo-name">{greeting.username}</span>
                    <span className="grey-color">/&gt;</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>

                <ul className="menu">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Project</a>
                    </li>
                    <li>
                        <a href="#certications">Certfications</a>
                    </li>
                    <li>
                        <a href="#blogs">Blogs</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

            </header>
        </Headroom>
    )
}


export default Header;
