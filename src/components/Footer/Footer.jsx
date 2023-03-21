// General Imports
import React from 'react';

import LI from "../../assets/LI.png";
import github from "../../assets/github.png";

const Footer = () => {
    return ( 
        <footer className="footer">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/dylan-lenz-92b27823b/"><img src={LI} alt="LI__icon" /></a>
                </li>
                <li>
                <a href="https://github.com/Dylan-Lenz"><img src={github} alt="github__icon" /></a>
                </li>
            </ul>
        </footer>
     );
}
 
export default Footer;