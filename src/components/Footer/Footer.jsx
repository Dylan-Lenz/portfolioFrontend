// General Imports
import React from 'react';
import "./Footer.css"

// Asset Imports
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import LI from "../../assets/LI.png";
import github from "../../assets/github.png";

const Footer = () => {
    return ( 
        <div className="wrapper__footer">
            <a href="https://www.linkedin.com/in/dylan-lenz-92b27823b/">
                <img className="icon__footer" src={LI} alt="LI__icon" />
            </a>
            <div className="phone__footer">
                <a href="tel:6024023836">
                    <img className='logo__footer' src={phone} alt="phone__icon" />
                </a>
                <p className="text__contact">(602) 402-3836</p>
            </div>
            <div className="location__footer">
                <div>
                    <a href="https://www.google.com/maps/place/Madison,+WI/@43.0846517,-89.6867705,10z/data=!3m1!4b1!4m6!3m5!1s0x8806536d3a2019ff:0x4e0cfcb5ba484198!8m2!3d43.0721661!4d-89.4007501!16zL20vMGZ3Mnk">
                        <img className='logo__footer' src={location} alt="location__icon" />
                    </a>
                </div>
                <div className="text__contact">
                    <p>
                        Madison, Wi, US
                    </p>
                </div>
            </div>
            <div className="email__footer">
                <div>
                    <a href="mailto:dylanjlenz@gmail.com">
                        <img className='logo__footer' src={email} alt="email__icon" />
                    </a>
                </div>
                <div>
                    <p className="text__contact">dylanjlenz@gmail.com</p>
                </div>
            </div> 
            <a href="https://github.com/Dylan-Lenz">
                <img className="icon__footer" src={github} alt="github__icon" />
            </a>
        </div>
     );
}
 
export default Footer;