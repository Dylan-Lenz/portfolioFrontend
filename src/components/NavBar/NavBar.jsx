import React from 'react';
import { Link } from "react-router-dom";
import BlackV from "../../assets/BlackV.jpg";

const NavBar = () => {

    return ( 
        <div className="navBar__cont">
            <img src={BlackV} alt="headshot" />
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
                <Link to='/'>
                    <button>Welcome</button>
                </Link>
                <Link to='/projects'>
                    <button>Projects</button>
                </Link>
        </div>
    );
}
 
export default NavBar;