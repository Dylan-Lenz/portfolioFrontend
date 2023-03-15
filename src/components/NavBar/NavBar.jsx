import React from 'react';

const NavBar = () => {
    return ( 
        <div className="navBar">
            <ul>
                <li className="navBar__links">
                    <button>Welcome</button>
                    <button>Projects</button>
                    <button>Blogs</button>
                </li>
                <li>
                    <h2 className="navBar__header">Dylan Lenz</h2>
                </li>
                <li>
                    <p className="navBar__motto">
                        “I’ve failed over and over again in my life,
                        and that is why I succeed.” —Michael Jordan
                    </p>
                </li>
            </ul>
        </div>
    );
}
 
export default NavBar;