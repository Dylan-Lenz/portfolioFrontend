import React from 'react';
import { Link } from "react-router-dom";

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";
import LI from "../../assets/LI.png";
import github from "../../assets/github.png"

const NavBar = () => {

    return ( 
        <div className="navBar__cont">
            <div className="navBar__headshot">
                <img src={BlackV} alt="headshot" />
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/dylan-lenz-92b27823b/"><img src={LI} alt="LI__icon" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Dylan-Lenz"><img src={github} alt="github__icon" /></a>
                    </li>
                </ul>
            </div>
            <div className="navBar__basics">
                <h2 className="navBar__header">Dylan Lenz</h2>
                <ul className="navBar__skills">
                    <li>
                        <p>FullStack</p>
                    </li>
                    <li>
                        <p>Python</p>
                    </li>
                    <li>
                        <p>React</p>
                    </li>
                    <li>
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <p>HTML/CSS</p>
                    </li>
                </ul>
            </div>
            <div className="navBar__location">
                <ul>
                    <li>
                        <p>Madison, Wi, US</p>
                        <p>Office Preference: Hybrid - 100% Remote - Office - Willing to Relocate</p>
                    </li>
                </ul>
            </div>
            <div className="navBar__buttons">
                <ul >
                    <li>
                        <Link to='/'>
                            <button>Welcome</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects'>
                            <button>Projects</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavBar;

