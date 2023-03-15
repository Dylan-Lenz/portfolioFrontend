import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    return ( 
        <header className="navBar">
            <ul>
                <li className="navBar__links">
                    <Link to='/'>
                        <button>Welcome</button>
                    </Link>
                    <Link to='/projects'>
                        <button>Projects</button>
                    </Link>
                </li>
                <li>
                    <h2 className="navBar__header">Dylan Lenz</h2>
                </li>
                <li>
                    <p className="navBar__motto">
                        “I have failed over and over again in my life,
                        and that is why I succeed.” —Michael Jordan
                    </p>
                </li>
            </ul>
        </header>
    );
}
 
export default NavBar;