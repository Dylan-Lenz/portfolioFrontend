// General Imports
import React from 'react';

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";


const WelcomePage = () => {
    return ( 
        <div className="container">
            <div className="container_info">
                <div className="headshot">
                    <img src={BlackV} alt="headshot" />
                </div>
                <div className="info">
                    <h2 className="header">Dylan Lenz</h2>
                        <ul >
                            <li>
                                <a href="https://www.google.com/maps/place/Madison,+WI/@43.0846517,-89.6867705,10z/data=!3m1!4b1!4m6!3m5!1s0x8806536d3a2019ff:0x4e0cfcb5ba484198!8m2!3d43.0721661!4d-89.4007501!16zL20vMGZ3Mnk">
                                    <img src={location} alt="location__icon" />
                                </a>
                                <p>Madison, Wi, US</p>
                                <p>Willing to Relocate</p>
                                <p>Office Preference: Hybrid - 100% Remote - 100% Office</p>
                            </li>
                            <li>
                                <img src={phone} alt="phone__icon" />
                                <p>(602)402-3836</p>
                            </li>
                            <li>
                                <img src={email} alt="email__icon" />
                                <p>dylanjlenz@gmail.com</p>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
     );
}
 
export default WelcomePage;