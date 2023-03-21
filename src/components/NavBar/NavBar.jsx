import React from 'react';
import { Link } from "react-router-dom";
import BlackV from "../../assets/BlackV.jpg";

const NavBar = () => {

    return ( 
        <header className="navBar">
            <img src={BlackV} alt="headshot" />
                <ul>
                    <li>
                        <h2 className="navBar__header">Dylan Lenz</h2>
                    </li>
                    <li className="navBar__links">
                        <Link to='/'>
                            <button>Welcome</button>
                        </Link>
                        <Link to='/projects'>
                            <button>Projects</button>
                        </Link>
                    </li>
                </ul>
        </header>
    );
}
 
export default NavBar;