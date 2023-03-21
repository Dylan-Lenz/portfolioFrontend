// General Imports
import React from 'react';

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";
import location from "../../assets/location.png";


const WelcomePage = () => {
    return ( 
        <div>
            <div className="navBar__info">
                <img src={BlackV} alt="headshot" />
                    <h2 className="navBar__header">Dylan Lenz</h2>
                        <ul className="navBar__skills">
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
        </div>
     );
}
 
export default WelcomePage;