// General Imports
import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {

    return ( 
        <div className="navBar__cont">
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

