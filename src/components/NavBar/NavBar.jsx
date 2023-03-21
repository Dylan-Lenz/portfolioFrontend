// General Imports
import React from 'react';
import { Link } from "react-router-dom";

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";
import LI from "../../assets/LI.png";
import github from "../../assets/github.png";
import location from "../../assets/location.png";

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
                        <a href="https://www.google.com/maps/place/Madison,+WI/@43.0846517,-89.6867705,10z/data=!3m1!4b1!4m6!3m5!1s0x8806536d3a2019ff:0x4e0cfcb5ba484198!8m2!3d43.0721661!4d-89.4007501!16zL20vMGZ3Mnk">
                            <img src={location} alt="location__icon" />
                        </a>
                        <p>Madison, Wi, US</p>
                        <p>Willing to Relocate</p>
                        <p>Office Preference: Hybrid - 100% Remote - 100% Office</p>
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

